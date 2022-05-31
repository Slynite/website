import PostsList from '../../components/post/list';
import Page from '../../components/structure/page';
import { getAllPostsSortedByDate } from '../api/posts';

export default function Newsroom({ posts }) {
  return (
    <Page isBannerVisible={false} description="The offical newsroom from us" title="Newsroom">
      <h1 className='text-2xl sm:text-4xl font-semibold ml-4'>Newsroom</h1>
      <PostsList posts={posts} />
    </Page>
  )
}

export async function getStaticProps() {
  const posts = getAllPostsSortedByDate();
  return {
    props: { posts },
  }
}
