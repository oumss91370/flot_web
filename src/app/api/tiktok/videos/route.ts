import { tiktokLibrary } from "@/data/tiktokLibrary";
import { MEDIA_BASE, readSession } from "@/lib/tiktok";

export const dynamic = "force-dynamic";

// Bibliothèque des vidéos Flot Web disponibles pour la publication.
export async function GET() {
  if (!(await readSession())) return Response.json({ error: "not_connected" }, { status: 401 });
  return Response.json({
    videos: tiktokLibrary.map((v) => ({ ...v, url: MEDIA_BASE + v.file })),
  });
}
