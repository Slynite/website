import Page from '../../components/structure/page';
import TeamList from '../../components/team/list';
import { getAllTeamMembers } from '../api/team';

export default function Team({ teammember }) {
  return (
    <Page isBannerVisible={false} description="Meet the team behind Slynite" title="Team">
      <TeamList teammember={teammember} />
    </Page>
  )
}

export async function getStaticProps() {
  const teammember = await getAllTeamMembers();
  return {
    props: { teammember },
  }
}
