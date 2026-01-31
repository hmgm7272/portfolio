import CardGrid from "../components/CardGrid";
import { projects } from "../data/projects";

export default function Project() {
    return (
        <div>
            <h1>Project</h1>
            <CardGrid items={projects} />
        </div>
    )
}