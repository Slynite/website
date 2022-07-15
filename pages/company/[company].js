
import Page from '../../components/structure/page'
import Markdown from '../../components/utils/markdown'
import { getAllFiles, getFileBySlug } from '../api/company'

export default function Legal({ page }) {
    return (
      <Page description={page.name} title={page.name} >
          <Markdown content={page.content} />
      </Page>
    )
  }

export async function getStaticProps({ params }) {
  const page = getFileBySlug(params.company)
  const content = page.content

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
          company: file.slug,
        },
      }
    }),
    fallback: false,
  }
}