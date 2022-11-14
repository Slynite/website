import { Project } from "../../interfaces/interfaces";
import ProjectPreview from "./preview";

type Props = {
    projects: Project[]
}

export default function ProjectsList({ projects }: Props) {
  return (
    <section>
      <h1 className='text-2xl sm:text-4xl font-semibold ml-4'>Projects</h1>
      <div className="p-5 space-y-4 md:space-y-0 grid grid-cols-1 lg:grid-cols-2 gap-5">
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