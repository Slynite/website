import { TeamMember } from "../../interfaces/interfaces";
import MemberPreview from "./preview";

type Props = {
  teammembers: TeamMember[]
}

export default function TeamList({ teammembers }: Props) {
  return (
    <section>
      <h1 className='text-2xl sm:text-4xl font-semibold ml-4'>Our Team</h1>
      <div className="p-5 space-y-4 sm:space-y-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {teammembers.map((member) => (
            <MemberPreview 
                key={member.slug}
                member={member}
            />
        ))}
      </div>
    </section>
  )
}