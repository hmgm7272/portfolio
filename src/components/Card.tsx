import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";

type CardProps = {
  img: string;   // そのまま
  title: string;
  to: string;
};

function getExt(path: string) {
  const clean = path.split("?")[0].split("#")[0];
  return clean.slice(clean.lastIndexOf(".") + 1).toLowerCase();
}
function isVideo(src: string) {
  return ["mp4", "webm", "ogg", "mov"].includes(getExt(src)); // movは一応。ただし非推奨
}
function isAudio(src: string) {
  return ["mp3", "wav", "m4a", "ogg"].includes(getExt(src));
}

export default function Card({ img, title, to }: CardProps) {
  const [failed, setFailed] = useState(false);
  const navigate = useNavigate();

  const kind = useMemo(() => {
    if (isVideo(img)) return "video";
    if (isAudio(img)) return "audio";
    return "image";
  }, [img]);

  useEffect(() => setFailed(false), [img]);

  return (
    <button type="button" className="card" onClick={() => navigate(to)}>
      <div className="media">
        {/* 画像 */}
        {kind === "image" && (
          <>
            <img
              src={img}
              alt={title}
              onError={() => setFailed(true)}
              style={{ display: failed ? "none" : "block" }}
            />
            {failed && (
              <div className="no-image" aria-label="no image">
                <span className="material-symbols-outlined icon">hide_image</span>
              </div>
            )}
          </>
        )}

        {/* 動画 */}
        {kind === "video" && (
          <div className="no-image" aria-label="video">
            <span className="material-symbols-outlined icon">smart_display</span>
          </div>
        )}

        {/* 音声 */}
        {kind === "audio" && (
          <div className="no-image" aria-label="audio">
            <span className="material-symbols-outlined icon">graphic_eq</span>
          </div>
        )}
      </div>

      <h2>{title}</h2>
    </button>
  );
}
