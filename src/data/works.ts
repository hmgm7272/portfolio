import type { Entry } from "./types";

export const works: Entry[] = [
  {
    id: "work1",
    title: "詳細度数訓練",
    description: "詳細度数を短時間で判断できるように練習するツール",
    images: ["/images/degree_image_1.png", "/images/degree_gif_1.gif"],
    body: "demo: https://hmgm7272.github.io/detail-degree-training/  \nsoundquestの理論と同様、4度 -> 5度への変換をしています"
  },
  {
    id: "work2",
    title: "阝力一刂才",
    description: "漢字で戦うAgar.io",
    images: ["/images/agario_game_image.png", "/images/agario_gif.gif", "/images/agario_title_image.png"],
    body: "説明"
  },
  {
    id: "work3",
    title: "メタボール",
    description: "Three.jsでメタボールをつくりました",
    images: ["/images/metaball_image.png", "/images/metaball_gif.gif"],
    body: "CGの課題でつくりました\n・解像度\n・ボールの大きさ\n・速さ\n・粘度\n・密度\nなどが調節できます"
  }
];