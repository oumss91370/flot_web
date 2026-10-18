// Intégration TikTok (Login Kit + Content Posting API) pour la page /tiktok/publier.
// Les clés viennent des variables d'environnement Vercel : TIKTOK_CLIENT_KEY, TIKTOK_CLIENT_SECRET.
import { cookies } from "next/headers";

export const TIKTOK_API = "https://open.tiktokapis.com";
export const REDIRECT_URI = "https://flotweb.com/api/tiktok/callback";
export const SCOPES = ["user.info.basic", "video.upload", "video.publish"];
export const SESSION_COOKIE = "tt_session";
export const STATE_COOKIE = "tt_state";
export const MEDIA_BASE = "https://flotweb.com/tiktok/media/";

export type Session = { access_token: string; open_id: string; expires_at: number };

export function credentials() {
  const client_key = process.env.TIKTOK_CLIENT_KEY?.trim();
  const client_secret = process.env.TIKTOK_CLIENT_SECRET?.trim();
  if (!client_key || !client_secret) throw new Error("TikTok credentials are not configured.");
  return { client_key, client_secret };
}

export async function readSession(): Promise<Session | null> {
  const raw = (await cookies()).get(SESSION_COOKIE)?.value;
  if (!raw) return null;
  try {
    const s = JSON.parse(Buffer.from(raw, "base64url").toString("utf8")) as Session;
    if (!s.access_token || Date.now() > s.expires_at) return null;
    return s;
  } catch {
    return null;
  }
}

export function encodeSession(s: Session) {
  return Buffer.from(JSON.stringify(s), "utf8").toString("base64url");
}

export class TikTokError extends Error {
  constructor(message: string, public code: string, public status = 400) {
    super(message);
  }
}

export async function tiktok<T = Record<string, unknown>>(
  session: Session,
  method: "GET" | "POST",
  route: string,
  body?: unknown
): Promise<T> {
  const r = await fetch(`${TIKTOK_API}${route}`, {
    method,
    headers: {
      Authorization: `Bearer ${session.access_token}`,
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: body === undefined ? undefined : JSON.stringify(body),
    cache: "no-store",
  });
  const j = (await r.json().catch(() => ({}))) as { data?: T; error?: { code?: string; message?: string } };
  if (!r.ok || (j.error?.code && j.error.code !== "ok")) {
    throw new TikTokError(j.error?.message || `TikTok request failed (${r.status})`, j.error?.code || "http_error", r.status || 400);
  }
  return (j.data ?? {}) as T;
}

export type CreatorInfo = {
  creator_avatar_url: string;
  creator_username: string;
  creator_nickname: string;
  privacy_level_options: string[];
  comment_disabled: boolean;
  duet_disabled: boolean;
  stitch_disabled: boolean;
  max_video_post_duration_sec: number;
};

export function jsonError(e: unknown) {
  if (e instanceof TikTokError) {
    return Response.json({ error: e.code, message: e.message }, { status: e.status >= 400 ? e.status : 400 });
  }
  return Response.json({ error: "server_error", message: (e as Error)?.message || "Unexpected error" }, { status: 500 });
}
