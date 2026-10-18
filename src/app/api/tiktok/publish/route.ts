import { findVideo } from "@/data/tiktokLibrary";
import { jsonError, MEDIA_BASE, readSession, tiktok, type CreatorInfo } from "@/lib/tiktok";

export const dynamic = "force-dynamic";

type Body = {
  videoId: string;
  mode: "direct" | "draft";
  title?: string;
  privacy?: string;
  allowComment?: boolean;
  allowDuet?: boolean;
  allowStitch?: boolean;
  commercial?: { enabled: boolean; yourBrand: boolean; brandedContent: boolean };
  isAigc?: boolean;
};

// Publication : chaque réglage vient d'un choix explicite du créateur sur la page.
export async function POST(req: Request) {
  const s = await readSession();
  if (!s) return Response.json({ error: "not_connected" }, { status: 401 });
  try {
    const b = (await req.json()) as Body;
    const video = findVideo(b.videoId);
    if (!video) return Response.json({ error: "unknown_video", message: "Unknown video." }, { status: 400 });
    const source_info = { source: "PULL_FROM_URL", video_url: MEDIA_BASE + video.file };

    if (b.mode === "draft") {
      const d = await tiktok<{ publish_id: string }>(s, "POST", "/v2/post/publish/inbox/video/init/", { source_info });
      return Response.json({ publish_id: d.publish_id, mode: "draft" });
    }

    const creator = await tiktok<CreatorInfo>(s, "POST", "/v2/post/publish/creator_info/query/");
    if (!b.privacy || !creator.privacy_level_options.includes(b.privacy)) {
      return Response.json({ error: "privacy_required", message: "Choose who can view this video." }, { status: 400 });
    }
    const c = b.commercial ?? { enabled: false, yourBrand: false, brandedContent: false };
    if (c.enabled && !c.yourBrand && !c.brandedContent) {
      return Response.json(
        { error: "disclosure_incomplete", message: "Select whether the content promotes yourself, a third party, or both." },
        { status: 400 }
      );
    }
    if (c.enabled && c.brandedContent && b.privacy === "SELF_ONLY") {
      return Response.json(
        { error: "branded_private", message: "Branded content visibility cannot be set to private." },
        { status: 400 }
      );
    }
    if (video.durationSec && video.durationSec > creator.max_video_post_duration_sec) {
      return Response.json(
        { error: "too_long", message: `This account can post videos up to ${creator.max_video_post_duration_sec} seconds.` },
        { status: 400 }
      );
    }

    const d = await tiktok<{ publish_id: string }>(s, "POST", "/v2/post/publish/video/init/", {
      post_info: {
        title: (b.title ?? "").slice(0, 2200),
        privacy_level: b.privacy,
        disable_comment: creator.comment_disabled || !b.allowComment,
        disable_duet: creator.duet_disabled || !b.allowDuet,
        disable_stitch: creator.stitch_disabled || !b.allowStitch,
        brand_content_toggle: c.enabled && c.brandedContent,
        brand_organic_toggle: c.enabled && c.yourBrand,
        is_aigc: Boolean(b.isAigc),
      },
      source_info,
    });
    return Response.json({ publish_id: d.publish_id, mode: "direct" });
  } catch (e) {
    return jsonError(e);
  }
}
