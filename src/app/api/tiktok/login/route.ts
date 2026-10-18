import { NextResponse } from "next/server";
import crypto from "node:crypto";
import { credentials, REDIRECT_URI, SCOPES, STATE_COOKIE } from "@/lib/tiktok";

export const dynamic = "force-dynamic";

// Démarre la connexion TikTok (Login Kit) : redirige vers l'écran d'autorisation TikTok.
export async function GET() {
  const { client_key } = credentials();
  const state = crypto.randomBytes(16).toString("hex");
  const url =
    "https://www.tiktok.com/v2/auth/authorize/?" +
    new URLSearchParams({
      client_key,
      scope: SCOPES.join(","),
      response_type: "code",
      redirect_uri: REDIRECT_URI,
      state,
    });
  const res = NextResponse.redirect(url);
  res.cookies.set(STATE_COOKIE, state, { httpOnly: true, secure: true, sameSite: "lax", path: "/", maxAge: 600 });
  return res;
}
