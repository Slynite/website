
import { GetStaticPaths, GetStaticProps } from 'next'
import Page from '../../components/structure/page'
import Markdown from '../../components/utils/markdown'
import { PageData } from '../../interfaces/interfaces'
import { getAllFiles, getFileBySlug } from '../api/legal'

type Props = {
  page: PageData
}

export default function Legal({ page }: Props) {
  return (
    <Page description={page.name} title={page.name} >
        <p className="bg-gray-200 text-primary rounded-sm p-1">Last updated: {page.updated}</p>
        <Markdown content={page.content} />
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const page = getFileBySlug(context.params!.legal as string)
  const content = page.content
  return {
    props: {
      page: {
        ...page,
      },
      content,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files: PageData[] = getAllFiles()
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