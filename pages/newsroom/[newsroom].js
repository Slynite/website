import PostHeader from '../../components/post/header'
import { getPostBySlug, getAllPostsSortedByDate, getAuthorFromPost } from '../api/posts'
import Page from '../../components/structure/page'
import Markdown from '../../components/utils/markdown'
import md2html from '../../lib/md2html'

export default function Post({ post }) {
  return (
    <Page isBannerVisible={false} meta={post.excerpt} title={post.title} >
        <article>
            <PostHeader post={post} />
            <Markdown content={post.content} />
        </article>
    </Page>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.newsroom)
  const author = getAuthorFromPost(post.author)
  const content = await md2html(post.content || '')
  return {
    props: {
      post: {
        ...post,
        content,
        author,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPostsSortedByDate(['post'])
  return {
    paths: posts.map((post) => {
      return {
        params: {
          newsroom: post.slug,
        },
      }
    }),
    fallback: false,
  }
}