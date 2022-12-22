import PostHeader from '../../components/post/header'
import { getPostBySlug, getAllPostsSortedByDate, getAuthorFromPost } from '../api/posts'
import Page from '../../components/structure/page'
import Markdown from '../../components/utils/markdown'
import Share from '../../components/utils/share'
import { ContentTypes, Post, TeamMember } from '../../interfaces/interfaces'
import { GetStaticProps, GetStaticPaths } from 'next'

type Props = {
  post: Post
  author: TeamMember
}

export default function NewsroomPost({ post, author }: Props) {
  return (
    <Page contentType={ContentTypes.Post} title={post.title + " | " + process.env.NEXT_PUBLIC_SITE_NAME + " Newsroom"} overrideTitle={true} description={post.excerpt} ogImage={post.image} article={{publishedTime: post.date, author: post.author, category: post.category, tags: post.tags}}>
        <article>
            <PostHeader post={post} author={author} />
            <Markdown content={post.content} />
            <Share entryToShare={post} />
        </article>
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const post: Post  = getPostBySlug(context.params!.newsroom! as string)
  const author: TeamMember = getAuthorFromPost(post.author);
  return {
    props: {
      post: {
        ...post,
      },
      author,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts: Post[] = getAllPostsSortedByDate()
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