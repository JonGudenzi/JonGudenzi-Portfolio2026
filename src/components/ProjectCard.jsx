export default function ProjectCard({ project }) {

    return (
        <div className="project-content">
            <h2>{project.title}</h2>
            <p className="project-text">{project.description}</p>
            <p><a href={project.github} target="_blank" rel="noreferrer">Github Repo</a>
            <a href={project.app} target="_blank" rel="noreferrer">App</a></p>
        </div>
    )
}