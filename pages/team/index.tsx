import { GetStaticProps } from 'next';
import Page from '../../components/structure/page';
import TeamList from '../../components/team/list';
import { TeamMember } from '../../interfaces/interfaces';
import { getAllTeamMembers } from '../api/team';

type Props = {
  teammembers: TeamMember[]
}

export default function Team({ teammembers }: Props) {
  return (
    <Page description="Meet the team behind Slynite" title="Our Team">
      <TeamList teammembers={teammembers} />
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const teammembers: TeamMember[] = getAllTeamMembers();
  return {
    props: {
      teammembers
    },
  }
}