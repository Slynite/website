import ProjectsList from '../components/project/list';
import Page from '../components/structure/page'
import { getAllProjectsSortedByDate } from './api/projects'

export default function Projects({ projects }) {
  return (
    <Page isBannerVisible={false} description="META HERE" title="Projects">
      <ProjectsList projects={projects}/>
    </Page>
  )
}

export async function getStaticProps() {
  const projects = getAllProjectsSortedByDate();

  return {
    props: { projects },
  }
}
