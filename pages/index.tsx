import About from '../components/home/about'
import News from '../components/home/news'
import Welcome from '../components/home/wecome'
import Page from '../components/structure/page'
import Carousel, { CarouselItemType } from '../components/utils/carousel'
import TextHeader from '../components/utils/text-header'
import { ContentTypes, Post, Project } from '../interfaces/interfaces'
import { getAllPostsSortedByDate } from './api/posts'
import { getAllProjectsSortedByDate } from './api/projects'

type Props = {
  posts: Post[]
  projects: Project[]
  moreThenFourPosts: boolean
}

export default function Home({projects, posts, moreThenFourPosts}: Props) {
  return (
    <Page contentType={ContentTypes.Other} title="Slynite | Company for Privacy, Security and Transparency on the Internet" overrideTitle={true} description={"We are focused on privacy, transparency and security and developing mostly open source software."}>
      <Welcome />
      <div className='space-y-10'>
        <div className='text-center'>
          <TextHeader text={"Our Projects"} size={"text-center text-3xl sm:text-4xl 2xl:text-5xl mb-1 sm:mb-2 md:mt-4 md:mb-4 2xl:mb-4"} />
        </div>
        <Carousel type={CarouselItemType.Project} items={projects} />
        <About />
        <News posts={posts} areThereMoreThenFourPosts={moreThenFourPosts}  />
      </div>
    </Page>
  )
}

export async function getStaticProps() {
  const projects: Project[] = getAllProjectsSortedByDate();
  const postsData: Post[] = getAllPostsSortedByDate();
  let posts: Post[] = postsData.slice(0,4);

  return {
    props: { projects, posts, moreThenFourPosts: postsData.length > 4 },
  }
}

