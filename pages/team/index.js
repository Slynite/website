import Page from '../../components/structure/page';
import TeamList from '../../components/team/list';
import { getAllTeamMembers } from '../api/team';

export default function Team({ teammember }) {
  return (
    <Page isBannerVisible={false} description="META HERE" title="Projects">
      <TeamList teammember={teammember} />
    </Page>
  )
}

export async function getStaticProps() {
  const teammember = getAllTeamMembers();

  return {
    props: { teammember },
  }
}
