import MemberPreview from "./preview";

export default function TeamList({ teammember }) {
  return (
    <section>
      <div>
        {teammember.map((member) => (
            <MemberPreview 
                key={member.slug}
                member={member}
            />
        ))}
      </div>
    </section>
  )
}