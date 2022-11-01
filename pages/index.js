import About from '../components/home/about'
import News from '../components/home/news'
import Welcome from '../components/home/wecome'
import Page from '../components/structure/page'
import Carousel from '../components/utils/carousel'
import TextHeader from '../components/utils/text-header'
import { getAllPostsSortedByDate } from './api/posts'
import { getAllProjectsSortedByDate } from './api/projects'

export default function Home({projects, posts, moreThenFourPosts}) {
  //make banner only visible on Index page
  return (
    <Page description={"We are focused on privacy, transparency and security and developing mostly open source software."} title="Slynite | Company for Privacy, Security and Transparency on the Internet" overrideTitle={true}>
      <Welcome />
      <div className='space-y-10'>
        <div className='text-center'>
          <TextHeader text={"Our Projects"} size={"text-center text-3xl sm:text-4xl 2xl:text-5xl mb-1 sm:mb-2 md:mt-4 md:mb-4 2xl:mb-4"} />
        </div>
        <Carousel type={"projects"} items={projects} />
        <About />
        <News posts={posts} areThereMoreThenFourPosts={moreThenFourPosts}  />
      </div>
    </Page>
  )
}

export async function getStaticProps() {
  const projects = getAllProjectsSortedByDate();
  const postsData = getAllPostsSortedByDate();
  let posts = postsData.slice(0,4);

  return {
    props: { projects, posts, moreThenFourPosts: postsData.length > 4 },
  }
}

