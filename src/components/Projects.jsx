import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {

    return (
        <div>
            {projects.map((project) => {
                return <div key={project.id}>
                    <ProjectCard project={project} />
                </div>
            })}
        </div>
    )
}