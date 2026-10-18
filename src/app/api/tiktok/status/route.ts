import { jsonError, readSession, tiktok } from "@/lib/tiktok";

export const dynamic = "force-dynamic";

// État d'une publication (traitement, publiée, envoyée en brouillon, échec).
export async function POST(req: Request) {
  const s = await readSession();
  if (!s) return Response.json({ error: "not_connected" }, { status: 401 });
  try {
    const { publish_id } = (await req.json()) as { publish_id: string };
    const d = await tiktok<{ status?: string; fail_reason?: string; publicaly_available_post_id?: string[] }>(
      s,
      "POST",
      "/v2/post/publish/status/fetch/",
      { publish_id }
    );
    return Response.json({ status: d.status, fail_reason: d.fail_reason ?? null, post_ids: d.publicaly_available_post_id ?? [] });
  } catch (e) {
    return jsonError(e);
  }
}
