import ProjectPreview from "./preview";

export default function ProjectsList({ projects }) {
  return (
    <section>
      <div>
        {projects.map((project) => (
            <ProjectPreview 
                key={project.slug}
                project={project}
            />
        ))}
      </div>
    </section>
  )
}