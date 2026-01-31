import CardGrid from '../components/CardGrid';
import { works } from "../data/works";
import "./pages.css";

export default function Works() {
    return (
        <div>
            <h1>Works</h1>
            <CardGrid items = {works} />
        </div>
    )
}