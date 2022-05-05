import PostsList from '../components/post/list'
import ProjectsList from '../components/project/list'
import Banner from '../components/structure/banner'
import Page from '../components/structure/page'

export default function Home() {
  //make banner only visible on Index page
  return (
    <Page description={"Index Page"} title="Index">
      <Banner />
      <div>
        <h1>Welcome</h1>
        <p>Some other text</p>
      </div>
      <PostsList />
      <ProjectsList />
    </Page>
  )
}
