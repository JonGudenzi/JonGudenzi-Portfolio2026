import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {

    return (
        <div id="projects">
            <h1>Projects</h1>
            {projects.map((project) => {
                return (
                    <ProjectCard
                        key={project.id}
                        project={project} />)
            })}
        </div>
    )
}