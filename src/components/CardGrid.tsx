import Card from "./Card";
import './CardGrid.css'

import type { Entry } from "../data/types";

export default function CardGrid({ items }: { items: Entry[] }) {
    return (
        <div className="card-grid">
            {items.map((e) => (
                <Card  title={e.title} img={e.images[0]} to = {`./${e.id}`}/>
            ))}
        </div>
    );
}

