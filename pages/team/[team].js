import { getAllTeamMembers, getTeamMemberBySlug } from '../api/team'
import md2html from '../../lib/md2html'
import Page from '../../components/structure/page'
import SocialMediaButtons from '../../components/team/socialmedia'
import Markdown from '../../components/utils/markdown'

export default function TeamMember({ member }) {
  return (
    <Page description={member.description} title={member.name} >
        <article>
          <p>{member.name}</p>
          <p>{member.position}</p>
          <SocialMediaButtons socialMediaArray={member.socialmedia}/>
          <Markdown content={member.content} />
        </article>
    </Page>
  )
}

export async function getStaticProps({ params }) {
  const member = getTeamMemberBySlug(params.team)
  const content = await md2html(member.content || '')

  return {
    props: {
      member: {
        ...member,
        content,
      },
    },
  }
}
export async function getStaticPaths() {
  const members = getAllTeamMembers()
  return {
    paths: members.map((member) => {
      return {
        params: {
          team: member.slug,
        },
      }
    }),
    fallback: false,
  }
}