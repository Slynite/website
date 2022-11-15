import { getAllTeamMembers, getTeamMemberBySlug } from '../api/team'
import Page from '../../components/structure/page'
import SocialMediaButtons from '../../components/team/socialmedia'
import Markdown from '../../components/utils/markdown'
import Image from 'next/image'
import { TeamMember } from '../../interfaces/interfaces'
import { GetStaticPaths, GetStaticProps } from 'next'

type Props = {
  teammember: TeamMember
}

export default function SingleTeamMember({ teammember }: Props) {
  let volunteerBadge;
  if (teammember.isVolunteerMember) {
    volunteerBadge = getVolunteerBadge()
  }
  return (
    <Page description={teammember.content} title={teammember.name + " | " + process.env.NEXT_PUBLIC_SITE_NAME + " Team"} overrideTitle={true} >
      <article className='md:grid md:grid-cols-2'>
        <div className='rounded-md bg-neutral-850'>
          <Image className='rounded-t-md' data-fallback-image="/content/not-found.png" src={teammember.image} alt={`${teammember.name}`} layout="responsive" width={1080} height={1080} placeholder="blur" blurDataURL={teammember.image} />
          <div className='p-2 text-gray-300'>
            <p className='text-transparent bg-clip-text bg-gradient-to-r from-gradient-primary to-gradient-secondary text-lg xl:text-2xl font-semibold inline-block'>{teammember.name}{volunteerBadge}</p>
            <p className='xl:text-lg'>{teammember.position}</p>
            <SocialMediaButtons socialMediaArray={teammember.socialmedia}/>
          </div>
        </div>
        <div className='md:ml-5'>
          <Markdown content={teammember.content} />
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

export const getStaticProps: GetStaticProps = async (context) => {
  const teammember: TeamMember  = getTeamMemberBySlug(context.params!.team! as string)
  return {
    props: {
      teammember: {
        ...teammember,
      },
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const teammembers: TeamMember[] = getAllTeamMembers()
  return {
    paths: teammembers.map((teammember) => {
      return {
        params: {
          team: teammember.slug,
        },
      }
    }),
    fallback: false,
  }
}