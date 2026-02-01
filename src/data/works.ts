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
    body: "WP実習のグループでつくりました\nリアルタイム対戦やランキングなどの機能があります"
  },
  {
    id: "work3",
    title: "メタボール",
    description: "Three.jsでメタボールをつくりました",
    images: ["/images/metaball_image.png", "/images/metaball_gif.gif"],
    body: "CGの課題でつくりました\n・解像度\n・ボールの大きさ\n・速さ\n・粘度\n・密度\nなどが調節できます"
  },
  {
    id: "work4",
    title: "ぬいろぐ",
    description: "ぬい活用の記録アプリ!",
    images: ["/images/nuilog_image.png", "/images/nuilog_image_2.png", "/images/nuilog_image_3.png", "/images/nuilog_image_4.png", "/images/nuilog_image_5.png", "/images/nuilog_poster_image.png"],
    body: "ゼミのアプリ制作でつくりました\n\n・ぬい活を記録する\n・ぬぐるみとの記録を紐づける\n・ぬいぐるみとの記録をおすすめの記録、地図やカレンダーなど様々な視点からみる\n・ぬいぐるみ別に記録をフィルタリングする\nができます\n\nFullCalendar leafletなどのライブラリを使用\ncordova-file-pluginを使って画像保存を実現しています"
  }
];