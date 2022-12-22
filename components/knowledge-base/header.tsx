import { CalendarIcon, TagIcon } from '@heroicons/react/outline'
import { KnowledgeBaseEntry } from '../../interfaces/interfaces';

type Props = {
    entry: KnowledgeBaseEntry
}

export default function KnowledgeBaseEntryHeader({ entry }: Props) {
    return (
        <div className="space-y-2">
            <div className="space-y-1">
                <p className="text-xl font-semibold sm:text-2xl">{entry.title}</p>
                <p className="text-xs md:text-sm text-gray-300 flex"><CalendarIcon className='h-5 w-5 mr-1'/> {entry.date}</p>
                {entry.updated && <p className="text-xs md:text-sm text-gray-300 flex"><CalendarIcon className='h-5 w-5 mr-1'/> Updated at {entry.updated}</p> }
                <p className="text-xs md:text-sm text-gray-300 flex"><TagIcon className='h-5 w-5 mr-1'/> {entry.category}</p>
            </div>
        </div>
    );
}