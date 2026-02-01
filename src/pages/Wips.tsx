import CardGrid from "../components/CardGrid";
import { wips } from "../data/wips";

export default function Wips() {
    return (
        <div>
            <h1>Wips</h1>
            <CardGrid items={wips} />
        </div>
    )
}