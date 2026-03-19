import projects from "../data/projects";

export default function Projects() {

    return (
        <div>
            {projects.map((project) => {
                return <div key={project.id}>
                    <p>{project.title}</p>
                    <p>{project.description}</p>
                </div>
            })}
        </div>
    )
}