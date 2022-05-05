import PostsList from '../../components/post/list';
import Page from '../../components/structure/page';
import { getAllPostsSortedByDate } from '../api/posts';

export default function Newsroom({ posts }) {
  return (
    <Page isBannerVisible={false} description="META HERE" title="Projects">
      <PostsList posts={posts}/>
    </Page>
  )
}

export async function getStaticProps() {
  const posts = getAllPostsSortedByDate();

  return {
    props: { posts },
  }
}
