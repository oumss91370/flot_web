// Bibliothèque des vidéos Flot Web prêtes à publier sur TikTok.
// Les fichiers sont servis sous https://flotweb.com/tiktok/media/<file> (réécriture vers le stockage Vercel Blob).
export type LibraryVideo = {
  id: string;
  title: string;
  series: "Einstein Labs" | "Le monde de Claude";
  file: string;
  durationSec: number;
};

export const tiktokLibrary: LibraryVideo[] = [
  {
    id: "el-ep01",
    title: "Episode 1 – The Stockholm syndrome",
    series: "Einstein Labs",
    file: "einstein-labs-ep01-stockholm.mp4",
    durationSec: 102,
  },
  {
    id: "el-ep02",
    title: "Episode 2 – Speed",
    series: "Einstein Labs",
    file: "einstein-labs-ep02-vitesse.mp4",
    durationSec: 0,
  },
  {
    id: "lmdc-ep01",
    title: "Episode 1 – Is Claude bad… or is it you?",
    series: "Le monde de Claude",
    file: "le-monde-de-claude-ep01.mp4",
    durationSec: 0,
  },
];

export const findVideo = (id: string) => tiktokLibrary.find((v) => v.id === id);
