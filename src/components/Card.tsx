import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Card.css';

type CardProps = {
    img: string;
    title: string;
    to: string;
};

export default function Card({ img, title, to }: CardProps) {
    const [failed, setFailed] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setFailed(false);
    }, [img]);

    return (
        <button
            type = "button"
            className="card"
            onClick = {() => navigate(to)}       
        >
            <div className="media">
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
            </div>

            <h2>{title}</h2>
        </button>
    );
}
