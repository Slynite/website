import { getAllTeamMembers, getTeamMemberBySlug } from '../api/team'
import Page from '../../components/structure/page'
import SocialMediaButtons from '../../components/team/socialmedia'
import Markdown from '../../components/utils/markdown'
import Image from 'next/image'

export default function TeamMember({ member }) {
  let volunteerBadge;
  if (member.isVolunteerMember) {
    volunteerBadge = getVolunteerBadge()
  }
  return (
    <Page description={member.description} title={member.name} >
      <article className='md:grid md:grid-cols-2'>
        <div className='rounded-md bg-neutral-900'>
          <Image className='rounded-t-md' data-fallback-image="/content/not-found.png" src={member.image} alt={`${member.name}`} layout="responsive" width={1080} height={1080} placeholder="blur" blurDataURL={member.image} />
          <div className='p-2 text-gray-300'>
            <p className='text-transparent bg-clip-text bg-gradient-to-r from-gradient-primary to-gradient-secondary text-lg xl:text-2xl font-semibold inline-block'>{member.name}{volunteerBadge}</p>
            <p className='xl:text-lg'>{member.position}</p>
            <SocialMediaButtons socialMediaArray={member.socialmedia}/>
          </div>
        </div>
        <div className='md:ml-5'>
          <Markdown content={member.content} />
        </div>
      </article>
    </Page>
  )
}

function getVolunteerBadge() {
  return(
    <span className="align-middle ml-2 px-2 py-1 text-xs font-bold text-indigo-100 bg-green-700 rounded">Volunteer member</span>
  )
}

export async function getStaticProps({ params }) {
  const member = getTeamMemberBySlug(params.team)
  const content = member.content;

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