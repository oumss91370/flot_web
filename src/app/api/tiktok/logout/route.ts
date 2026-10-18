import { NextResponse } from "next/server";
import { credentials, readSession, SESSION_COOKIE, TIKTOK_API } from "@/lib/tiktok";

export const dynamic = "force-dynamic";

// Déconnexion : révoque l'accès chez TikTok puis efface la session.
export async function POST() {
  const s = await readSession();
  if (s) {
    try {
      const { client_key, client_secret } = credentials();
      await fetch(`${TIKTOK_API}/v2/oauth/revoke/`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ client_key, client_secret, token: s.access_token }),
        cache: "no-store",
      });
    } catch {
      // la session locale est effacée quoi qu'il arrive
    }
  }
  const res = NextResponse.json({ ok: true });
  res.cookies.delete(SESSION_COOKIE);
  return res;
}
