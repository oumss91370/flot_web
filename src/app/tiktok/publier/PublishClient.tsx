"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type Creator = {
  creator_avatar_url: string;
  creator_username: string;
  creator_nickname: string;
  privacy_level_options: string[];
  comment_disabled: boolean;
  duet_disabled: boolean;
  stitch_disabled: boolean;
  max_video_post_duration_sec: number;
};
type Video = { id: string; title: string; series: string; file: string; durationSec: number; url: string };

const PRIVACY_LABELS: Record<string, string> = {
  PUBLIC_TO_EVERYONE: "Everyone",
  MUTUAL_FOLLOW_FRIENDS: "Friends",
  FOLLOWER_OF_CREATOR: "Followers",
  SELF_ONLY: "Only me",
};
const MUSIC_URL = "https://www.tiktok.com/legal/page/global/music-usage-confirmation/en";
const BC_URL = "https://www.tiktok.com/legal/page/global/bc-policy/en";
const DONE = ["PUBLISH_COMPLETE", "SEND_TO_USER_INBOX", "FAILED"];

const card = "rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6";
const label = "block text-sm font-semibold text-white-clean mb-2";
const hint = "text-sm text-text-pale/60";

function fmt(sec: number) {
  if (!sec) return "";
  return `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, "0")}`;
}

export default function PublishClient() {
  const [loading, setLoading] = useState(true);
  const [creator, setCreator] = useState<Creator | null>(null);
  const [displayName, setDisplayName] = useState("");
  const [videos, setVideos] = useState<Video[]>([]);
  const [error, setError] = useState<string | null>(null);

  const [videoId, setVideoId] = useState("");
  const [mode, setMode] = useState<"direct" | "draft">("direct");
  const [title, setTitle] = useState("");
  const [privacy, setPrivacy] = useState("");
  const [allowComment, setAllowComment] = useState(false);
  const [allowDuet, setAllowDuet] = useState(false);
  const [allowStitch, setAllowStitch] = useState(false);
  const [disclose, setDisclose] = useState(false);
  const [yourBrand, setYourBrand] = useState(false);
  const [brandedContent, setBrandedContent] = useState(false);
  const [isAigc, setIsAigc] = useState(true);

  const [posting, setPosting] = useState(false);
  const [publishId, setPublishId] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [failReason, setFailReason] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const r = await fetch("/api/tiktok/creator", { cache: "no-store" });
      if (r.status === 401) {
        setCreator(null);
        return;
      }
      const j = await r.json();
      if (!r.ok) throw new Error(j.message || "Could not load your TikTok account.");
      setCreator(j.creator);
      setDisplayName(j.user?.display_name || j.creator?.creator_nickname || "");
      const v = await fetch("/api/tiktok/videos", { cache: "no-store" }).then((x) => x.json());
      setVideos(v.videos || []);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("error");
    if (q) setError(`TikTok authorization did not complete (${q}).`);
    load();
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [load]);

  const video = videos.find((v) => v.id === videoId);
  const tooLong = Boolean(creator && video && video.durationSec > creator.max_video_post_duration_sec);

  // Le contenu de marque ne peut pas être privé : « Only me » devient indisponible.
  useEffect(() => {
    if (disclose && brandedContent && privacy === "SELF_ONLY") setPrivacy("");
  }, [disclose, brandedContent, privacy]);

  const disclosureIncomplete = disclose && !yourBrand && !brandedContent;
  const canPost =
    Boolean(creator && video) &&
    !tooLong &&
    !posting &&
    !publishId &&
    (mode === "draft" || (privacy !== "" && !disclosureIncomplete));

  const declaration = useMemo(() => {
    if (disclose && brandedContent) return "bc";
    return "music";
  }, [disclose, brandedContent]);

  const promoLabel = disclose
    ? brandedContent
      ? "Your video will be labeled “Paid partnership”."
      : yourBrand
        ? "Your video will be labeled “Promotional content”."
        : null
    : null;

  async function post() {
    if (!canPost || !video) return;
    setPosting(true);
    setError(null);
    try {
      const r = await fetch("/api/tiktok/publish", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          videoId: video.id,
          mode,
          title,
          privacy,
          allowComment,
          allowDuet,
          allowStitch,
          commercial: { enabled: disclose, yourBrand, brandedContent },
          isAigc,
        }),
      });
      const j = await r.json();
      if (!r.ok) throw new Error(j.message || "TikTok refused the post.");
      setPublishId(j.publish_id);
      setStatus("PROCESSING_DOWNLOAD");
      timer.current = setInterval(async () => {
        const s = await fetch("/api/tiktok/status", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ publish_id: j.publish_id }),
        }).then((x) => x.json());
        if (s.status) setStatus(s.status);
        if (s.fail_reason) setFailReason(s.fail_reason);
        if (DONE.includes(s.status) && timer.current) clearInterval(timer.current);
      }, 4000);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setPosting(false);
    }
  }

  async function logout() {
    await fetch("/api/tiktok/logout", { method: "POST" });
    setCreator(null);
    setVideos([]);
    resetForm();
  }

  function resetForm() {
    if (timer.current) clearInterval(timer.current);
    setVideoId("");
    setTitle("");
    setPrivacy("");
    setAllowComment(false);
    setAllowDuet(false);
    setAllowStitch(false);
    setDisclose(false);
    setYourBrand(false);
    setBrandedContent(false);
    setPublishId(null);
    setStatus(null);
    setFailReason(null);
  }

  if (loading) return <div className={card}><p className={hint}>Loading…</p></div>;

  if (!creator) {
    return (
      <div className={card}>
        {error && <p className="mb-4 rounded-lg bg-red-500/15 px-4 py-3 text-sm text-red-200">{error}</p>}
        <h2 className="text-xl font-bold text-white-clean mb-2">Connect your TikTok account</h2>
        <p className={`${hint} mb-5`}>
          You will be redirected to TikTok to log in and authorize Publication Flot Web to read your basic profile and
          post videos you choose to your account. You can revoke access at any time in the TikTok app.
        </p>
        <a
          href="/api/tiktok/login"
          className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black hover:bg-white/90"
        >
          Continue with TikTok
        </a>
      </div>
    );
  }

  const options = creator.privacy_level_options;

  return (
    <div className="space-y-6">
      {error && <p className="rounded-lg bg-red-500/15 px-4 py-3 text-sm text-red-200">{error}</p>}

      {/* Compte connecté */}
      <div className={`${card} flex items-center gap-4`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={creator.creator_avatar_url} alt="" className="h-12 w-12 rounded-full bg-white/10 object-cover" />
        <div className="min-w-0 flex-1">
          <p className="text-sm text-text-pale/60">Posting to</p>
          <p className="truncate font-bold text-white-clean">
            {displayName || creator.creator_nickname} <span className="font-normal text-text-pale/70">@{creator.creator_username}</span>
          </p>
        </div>
        <button onClick={logout} className="text-sm text-primary-glow hover:underline">
          Disconnect
        </button>
      </div>

      {/* 1. Vidéo */}
      <div className={card}>
        <span className={label}>1. Choose a video</span>
        <div className="grid gap-3 sm:grid-cols-3">
          {videos.map((v) => (
            <button
              key={v.id}
              disabled={Boolean(publishId)}
              onClick={() => setVideoId(v.id)}
              className={`rounded-xl border p-3 text-left transition ${
                videoId === v.id ? "border-primary-glow bg-primary-glow/15" : "border-white/10 hover:border-white/30"
              }`}
            >
              <p className="text-xs uppercase tracking-wide text-text-pale/60">{v.series}</p>
              <p className="mt-1 text-sm font-semibold text-white-clean">{v.title}</p>
              {v.durationSec > 0 && <p className="mt-1 text-xs text-text-pale/60">{fmt(v.durationSec)}</p>}
            </button>
          ))}
        </div>
        {video && (
          <div className="mt-5">
            <p className={`${hint} mb-2`}>Preview</p>
            <video key={video.url} src={video.url} controls playsInline className="mx-auto max-h-[480px] rounded-xl bg-black" />
            {tooLong && (
              <p className="mt-3 text-sm text-red-200">
                This video is longer than the {creator.max_video_post_duration_sec} seconds allowed for this account.
              </p>
            )}
          </div>
        )}
      </div>

      {/* 2. Mode */}
      <div className={card}>
        <span className={label}>2. How do you want to post?</span>
        <div className="space-y-2">
          <label className="flex items-start gap-3">
            <input type="radio" name="mode" checked={mode === "direct"} onChange={() => setMode("direct")} className="mt-1" />
            <span>
              <span className="font-medium text-white-clean">Post directly to TikTok</span>
              <span className={`block ${hint}`}>Published on your profile with the settings below.</span>
            </span>
          </label>
          <label className="flex items-start gap-3">
            <input type="radio" name="mode" checked={mode === "draft"} onChange={() => setMode("draft")} className="mt-1" />
            <span>
              <span className="font-medium text-white-clean">Send to TikTok as a draft</span>
              <span className={`block ${hint}`}>
                The video goes to your TikTok inbox; you finish editing and post it in the TikTok app.
              </span>
            </span>
          </label>
        </div>
      </div>

      {mode === "direct" && (
        <>
          {/* 3. Légende */}
          <div className={card}>
            <label htmlFor="title" className={label}>
              3. Caption
            </label>
            <textarea
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value.slice(0, 2200))}
              rows={4}
              placeholder="Add a caption, #hashtags and @mentions"
              className="w-full rounded-xl border border-white/10 bg-black/20 p-3 text-white-clean placeholder:text-text-pale/40 focus:border-primary-glow focus:outline-none"
            />
            <p className={`${hint} mt-1 text-right`}>{title.length}/2200</p>
          </div>

          {/* 4. Confidentialité */}
          <div className={card}>
            <label htmlFor="privacy" className={label}>
              4. Who can view this video
            </label>
            <select
              id="privacy"
              value={privacy}
              onChange={(e) => setPrivacy(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-black/20 p-3 text-white-clean focus:border-primary-glow focus:outline-none"
            >
              <option value="" disabled>
                Select privacy
              </option>
              {options.map((o) => {
                const blocked = o === "SELF_ONLY" && disclose && brandedContent;
                return (
                  <option key={o} value={o} disabled={blocked} className="text-black">
                    {PRIVACY_LABELS[o] || o}
                    {blocked ? " (not available for branded content)" : ""}
                  </option>
                );
              })}
            </select>
            {disclose && brandedContent && (
              <p className={`${hint} mt-2`}>Branded content visibility cannot be set to private.</p>
            )}
          </div>

          {/* 5. Interactions */}
          <div className={card}>
            <span className={label}>5. Allow users to</span>
            <div className="flex flex-wrap gap-6">
              {[
                { k: "Comment", v: allowComment, set: setAllowComment, off: creator.comment_disabled },
                { k: "Duet", v: allowDuet, set: setAllowDuet, off: creator.duet_disabled },
                { k: "Stitch", v: allowStitch, set: setAllowStitch, off: creator.stitch_disabled },
              ].map((o) => (
                <label key={o.k} className={`flex items-center gap-2 ${o.off ? "opacity-40" : ""}`}>
                  <input type="checkbox" checked={o.v && !o.off} disabled={o.off} onChange={(e) => o.set(e.target.checked)} />
                  <span className="text-white-clean">{o.k}</span>
                </label>
              ))}
            </div>
            {(creator.comment_disabled || creator.duet_disabled || creator.stitch_disabled) && (
              <p className={`${hint} mt-2`}>Greyed-out options are turned off in your TikTok privacy settings.</p>
            )}
          </div>

          {/* 6. Contenu commercial */}
          <div className={card}>
            <label className="flex items-center justify-between gap-4">
              <span>
                <span className={label}>6. Disclose video content</span>
                <span className={hint}>
                  Turn on to disclose that this video promotes goods or services in exchange for something of value. Your
                  video could promote yourself, a third party, or both.
                </span>
              </span>
              <input
                type="checkbox"
                role="switch"
                checked={disclose}
                onChange={(e) => {
                  setDisclose(e.target.checked);
                  if (!e.target.checked) {
                    setYourBrand(false);
                    setBrandedContent(false);
                  }
                }}
                className="h-5 w-5 shrink-0"
              />
            </label>
            {disclose && (
              <div className="mt-4 space-y-3 border-t border-white/10 pt-4">
                <label className="flex items-start gap-3">
                  <input type="checkbox" checked={yourBrand} onChange={(e) => setYourBrand(e.target.checked)} className="mt-1" />
                  <span>
                    <span className="font-medium text-white-clean">Your brand</span>
                    <span className={`block ${hint}`}>
                      You are promoting yourself or your own business. This video will be classified as Brand Organic.
                    </span>
                  </span>
                </label>
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={brandedContent}
                    onChange={(e) => setBrandedContent(e.target.checked)}
                    className="mt-1"
                  />
                  <span>
                    <span className="font-medium text-white-clean">Branded content</span>
                    <span className={`block ${hint}`}>
                      You are promoting another brand or a third party. This video will be classified as Branded Content.
                    </span>
                  </span>
                </label>
                {promoLabel && <p className="text-sm text-primary-glow">{promoLabel}</p>}
                {disclosureIncomplete && (
                  <p className="text-sm text-amber-200">
                    You need to indicate if your content promotes yourself, a third party, or both.
                  </p>
                )}
              </div>
            )}
          </div>

          {/* 7. IA */}
          <div className={card}>
            <label className="flex items-center justify-between gap-4">
              <span>
                <span className={label}>7. AI-generated content</span>
                <span className={hint}>Add the “AI-generated” label if the video contains realistic AI-generated images or voices.</span>
              </span>
              <input type="checkbox" role="switch" checked={isAigc} onChange={(e) => setIsAigc(e.target.checked)} className="h-5 w-5 shrink-0" />
            </label>
          </div>
        </>
      )}

      {/* Déclaration + publication */}
      <div className={card}>
        {mode === "direct" ? (
          <p className={`${hint} mb-4`}>
            By posting, you agree to TikTok&apos;s{" "}
            {declaration === "bc" && (
              <>
                <a href={BC_URL} target="_blank" rel="noopener noreferrer" className="text-primary-glow hover:underline">
                  Branded Content Policy
                </a>{" "}
                and{" "}
              </>
            )}
            <a href={MUSIC_URL} target="_blank" rel="noopener noreferrer" className="text-primary-glow hover:underline">
              Music Usage Confirmation
            </a>
            .
          </p>
        ) : (
          <p className={`${hint} mb-4`}>
            The video will be sent to your TikTok inbox. Open the TikTok app to edit it and post it.
          </p>
        )}
        <button
          onClick={post}
          disabled={!canPost}
          className="w-full rounded-full bg-[#fe2c55] px-6 py-3 font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-40"
        >
          {posting ? "Sending to TikTok…" : mode === "direct" ? "Post" : "Send to TikTok"}
        </button>

        {publishId && (
          <div className="mt-5 rounded-xl bg-black/20 p-4 text-sm">
            {status && !DONE.includes(status) && (
              <p className="text-text-pale/80">
                TikTok is processing your video. It may take a few minutes for it to appear on your profile. You can leave
                this page.
              </p>
            )}
            {status === "PUBLISH_COMPLETE" && (
              <p className="text-emerald-300">Posted. Your video is now on your TikTok profile (@{creator.creator_username}).</p>
            )}
            {status === "SEND_TO_USER_INBOX" && (
              <p className="text-emerald-300">Sent. Check your TikTok inbox notifications to finish and post the video.</p>
            )}
            {status === "FAILED" && <p className="text-red-200">TikTok could not post the video{failReason ? ` (${failReason})` : ""}.</p>}
            <p className="mt-2 text-text-pale/50">Status: {status}</p>
            {status && DONE.includes(status) && (
              <button onClick={resetForm} className="mt-3 text-primary-glow hover:underline">
                Post another video
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
