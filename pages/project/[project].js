import { getProjectsBySlug, getAllProjectsSortedByDate } from '../api/projects'
import md2html from '../../lib/md2html'
import Page from '../../components/structure/page'
import Link from 'next/link'
import Markdown from '../../components/utils/markdown'

export default function TeamMember({ project }) {
  return (
    <Page description={project.excerpt} title={project.name} >
        <article>
          <p>{project.name}</p>
          <p>Since {project.date}</p>
          <Link href={project.url} passHref target="_blank"><a href={project.url} target="_blank" rel='noreferrer'>Visit {project.name}</a></Link>
          <p>{project.logo} (TODO: change from p to Image)</p>
          <p>{project.image} (TODO: change from p to Image)</p>
          <Markdown content={project.content} />
        </article>
    </Page>
  )
}

export async function getStaticProps({ params }) {
  const project = getProjectsBySlug(params.project)
  const content = await md2html(project.content || '')

  return {
    props: {
      project: {
        ...project,
        content,
      },
    },
  }
}
export async function getStaticPaths() {
  const projects = getAllProjectsSortedByDate()
  return {
    paths: projects.map((project) => {
      return {
        params: {
          project: project.slug,
        },
      }
    }),
    fallback: false,
  }
}