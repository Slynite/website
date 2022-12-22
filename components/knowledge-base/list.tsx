import { KnowledgeBaseEntry } from "../../interfaces/interfaces";
import KnowledgeBaseEntryPreview from "./preview";

type Props = {
    entries: KnowledgeBaseEntry[]
}

export default function KnowledgeBaseEntryList({ entries }: Props) {
  return (
    <section>
      <div className="p-5 space-y-4 md:space-y-0 grid grid-cols-1 lg:grid-cols-2 gap-5">
        {entries.map((entry) => (
            <KnowledgeBaseEntryPreview
                key={entry.slug}
                entry={entry}
            />
        ))}
      </div>
    </section>
  )
}