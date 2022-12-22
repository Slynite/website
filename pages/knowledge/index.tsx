import KnowledgeBaseEntryList from '../../components/knowledge-base/list';
import Page from '../../components/structure/page';
import { ContentTypes, KnowledgeBaseEntry } from '../../interfaces/interfaces';
import { getAllKnowledgeBaseEntriesSortedByDate } from '../api/knowledge';

type Props = {
  entries: KnowledgeBaseEntry[]
}

export default function Knowledge({ entries }: Props) {
  return (
    <Page contentType={ContentTypes.Other} title={"Slynite Knowledge Base"}  description={"The offical newsroom from us"} >
      <h1 className='text-2xl sm:text-4xl font-semibold ml-4'>Knowledge Base</h1>
      <p className="ml-4 mt-2">In this knowledge base you can find useful articles about data protection, privacy and the internet. Slynite provides this knowledge base in order to explain to users of the Internet certain dangers and/or different technologies of today in such a way that the topics can be understood even without prior knowledge.</p>
      <KnowledgeBaseEntryList entries={entries} />
    </Page>
  )
}

export async function getStaticProps() {
  const entries: KnowledgeBaseEntry[] = getAllKnowledgeBaseEntriesSortedByDate();
  return {
    props: { entries },
  }
}
