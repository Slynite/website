import { GetStaticPaths, GetStaticProps } from "next";
import KnowledgeBaseEntryHeader from "../../components/knowledge-base/header";
import Share from "../../components/knowledge-base/share";
import Page from "../../components/structure/page";
import Markdown from "../../components/utils/markdown";
import { ContentTypes, KnowledgeBaseEntry } from "../../interfaces/interfaces";
import { getAllKnowledgeBaseEntriesSortedByDate, getKnowledgeBaseEntryBySlug } from "../api/knowledge";

type Props = {
        entry: KnowledgeBaseEntry
}

export default function KnowledgeBaseEntryPage({ entry }: Props) {
        return (
                <Page contentType={ContentTypes.KnowledgeBaseEntry} title={entry.title + " | " + process.env.NEXT_PUBLIC_SITE_NAME + " Knowledge Base"} overrideTitle={true} description={entry.excerpt} ogImage={entry.image} article={{publishedTime: entry.date, updatedTime: entry.updated,  author: "Slynite Team", category: entry.category, tags: entry.tags}}>
                    <article>
                        <KnowledgeBaseEntryHeader entry={entry} />
                        <Markdown content={entry.content} />
                        <Share entry={entry} />
                    </article>
                </Page>
        )
}

export const getStaticProps: GetStaticProps = async (context) => {
        const entry: KnowledgeBaseEntry  = getKnowledgeBaseEntryBySlug(context.params!.knowledge! as string)
        return {
          props: {
            entry: {
              ...entry,
            },
          },
        }
      }
      
      export const getStaticPaths: GetStaticPaths = async () => {
        const entries: KnowledgeBaseEntry[] = getAllKnowledgeBaseEntriesSortedByDate()
        return {
          paths: entries.map((entry) => {
            return {
              params: {
                knowledge: entry.slug,
              },
            }
          }),
          fallback: false,
        }
      }