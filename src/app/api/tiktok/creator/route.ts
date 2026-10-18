import { jsonError, readSession, tiktok, type CreatorInfo } from "@/lib/tiktok";

export const dynamic = "force-dynamic";

// Infos du créateur connecté, rechargées à chaque affichage de la page de publication (exigence TikTok).
export async function GET() {
  const s = await readSession();
  if (!s) return Response.json({ connected: false }, { status: 401 });
  try {
    const [user, creator] = await Promise.all([
      tiktok<{ user?: { display_name?: string; avatar_url?: string } }>(
        s,
        "GET",
        "/v2/user/info/?fields=open_id,display_name,avatar_url"
      ),
      tiktok<CreatorInfo>(s, "POST", "/v2/post/publish/creator_info/query/"),
    ]);
    return Response.json({ connected: true, user: user.user ?? {}, creator });
  } catch (e) {
    return jsonError(e);
  }
}
