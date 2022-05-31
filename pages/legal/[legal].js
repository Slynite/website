
import md2html from '../../lib/md2html'
import Page from '../../components/structure/page'
import Markdown from '../../components/utils/markdown'
import { getAllFiles, getFileBySlug } from '../api/legal'

export default function Legal({ page }) {
    return (
      <Page description={page.name} title={page.name} >
          <p className="bg-gray-200 text-primary rounded-sm p-1">Last updated: {page.updated}</p>
          <Markdown content={page.content} />
      </Page>
    )
  }

export async function getStaticProps({ params }) {
  const page = getFileBySlug(params.legal)
  const content = await md2html(page.content || '')

  return {
    props: {
      page: {
        ...page,
        content,
      },
    },
  }
}
export async function getStaticPaths() {
  const files = getAllFiles()
  return {
    paths: files.map((file) => {
      return {
        params: {
          legal: file.slug,
        },
      }
    }),
    fallback: false,
  }
}