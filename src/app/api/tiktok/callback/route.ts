import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { credentials, encodeSession, REDIRECT_URI, SESSION_COOKIE, STATE_COOKIE, TIKTOK_API } from "@/lib/tiktok";

export const dynamic = "force-dynamic";

// Retour de TikTok après autorisation : échange le code contre un jeton et ouvre la session.
export async function GET(req: Request) {
  const url = new URL(req.url);
  const back = new URL("/tiktok/publier", "https://flotweb.com");
  const jar = await cookies();
  const expected = jar.get(STATE_COOKIE)?.value;
  const state = url.searchParams.get("state");
  const code = url.searchParams.get("code");
  const error = url.searchParams.get("error");

  if (error) {
    back.searchParams.set("error", error);
    return NextResponse.redirect(back);
  }
  if (!code || !state || state !== expected) {
    back.searchParams.set("error", "invalid_state");
    return NextResponse.redirect(back);
  }

  const { client_key, client_secret } = credentials();
  const r = await fetch(`${TIKTOK_API}/v2/oauth/token/`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ client_key, client_secret, code, grant_type: "authorization_code", redirect_uri: REDIRECT_URI }),
    cache: "no-store",
  });
  const t = (await r.json().catch(() => ({}))) as {
    access_token?: string;
    open_id?: string;
    expires_in?: number;
    error?: string;
  };
  if (!r.ok || !t.access_token || !t.open_id) {
    back.searchParams.set("error", t.error || "token_exchange_failed");
    return NextResponse.redirect(back);
  }

  const maxAge = Math.max(60, (t.expires_in || 3600) - 60);
  const res = NextResponse.redirect(back);
  res.cookies.set(
    SESSION_COOKIE,
    encodeSession({ access_token: t.access_token, open_id: t.open_id, expires_at: Date.now() + maxAge * 1000 }),
    { httpOnly: true, secure: true, sameSite: "lax", path: "/", maxAge }
  );
  res.cookies.delete(STATE_COOKIE);
  return res;
}
