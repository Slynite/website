import PostsList from '../../components/post/list';
import Page from '../../components/structure/page';
import { ContentTypes, Post } from '../../interfaces/interfaces';
import { getAllPostsSortedByDate } from '../api/posts';

type Props = {
  posts: Post[]
}

export default function Newsroom({ posts }: Props) {
  return (
    <Page contentType={ContentTypes.Other} title={"Newsroom"}  description={"The offical newsroom from us"} >
      <h1 className='text-2xl sm:text-4xl font-semibold ml-4'>Newsroom</h1>
      <PostsList posts={posts} />
    </Page>
  )
}

export async function getStaticProps() {
  const posts: Post[] = getAllPostsSortedByDate();
  return {
    props: { posts },
  }
}
