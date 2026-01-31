import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Entry } from "../data/types";
import Carousel from "../components/Carousel";

export default function DetailPage({
    items,
    backTo,
}: {
    items: Entry[];
    backTo: string;
}) {
    const { id } = useParams();
    const navigate = useNavigate();

    const item = useMemo(() => items.find((x) => x.id === id), [items, id]);

    if (!item) {
        return (
            <div>
                <p>Not found: {id}</p>
                <button type="button" onClick={() => navigate(backTo)}>
                    戻る
                </button>
            </div>
        );
    }

    return (
        <div>
            <h1>{item.title}</h1>
            <Carousel images={item.images}
                width={600}
                height={320}
            />
            {item.description && <p className = "detail-card">{item.description}</p>}
            {item.body && <div className="body detail-card">{item.body}</div>}
            <div className="contentRow">
                <button
                    type="button"
                    className="back-button"
                    onClick={() => navigate(backTo)}
                >
                    <span className="material-symbols-outlined">
                        subdirectory_arrow_left
                    </span>
                </button>
            </div>
        </div>
    );
}