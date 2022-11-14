
import { GetStaticPaths, GetStaticProps } from 'next'
import Page from '../../components/structure/page'
import Markdown from '../../components/utils/markdown'
import { PageData } from '../../interfaces/interfaces'
import { getAllFiles, getFileBySlug } from '../api/company'

type Props = {
  page: PageData
}

export default function Company({ page }: Props) {
  return (
    <Page description={page.name} title={page.name} >
        <Markdown content={page.content} />
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const page = getFileBySlug(context.params!.company as string)
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
          company: file.slug,
        },
      }
    }),
    fallback: false,
  }
}