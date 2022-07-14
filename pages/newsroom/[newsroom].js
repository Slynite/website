import PostHeader from '../../components/post/header'
import { getPostBySlug, getAllPostsSortedByDate, getAuthorFromPost } from '../api/posts'
import Page from '../../components/structure/page'
import Markdown from '../../components/utils/markdown'
import Share from '../../components/post/share'

export default function Post({ post }) {
  return (
    <Page isBannerVisible={false} description={post.excerpt} title={post.title} >
        <article>
            <PostHeader post={post} />
            <Markdown content={post.content} />
            <Share posts={post} />
        </article>
    </Page>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.newsroom)
  const author = getAuthorFromPost(post.author)
  const content = page.content
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