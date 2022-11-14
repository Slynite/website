import ProjectsList from '../components/project/list';
import Page from '../components/structure/page'
import { Project } from '../interfaces/interfaces';
import { getAllProjectsSortedByDate } from './api/projects'

type Props = {
  projects: Project[]
}

export default function Projects({ projects }: Props) {
  return (
    <Page description={"Learn more about the projects we are working on"} title={"Projects"} overrideTitle={false}>
      <ProjectsList projects={projects}/>
    </Page>
  )
}

export async function getStaticProps() {
  const projects: Project[] = getAllProjectsSortedByDate();

  return {
    props: { projects },
  }
}
