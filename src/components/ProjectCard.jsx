export default function ProjectCard({ project }) {

    return (
        <>
            <p>{project.title}</p>
            <p>{project.description}</p>
            <p><a href={project.github} target="_blank" rel="noreferrer">Github Repo</a></p>
            <p><a href={project.app} target="_blank" rel="noreferrer">App</a></p>
        </>
    )
}