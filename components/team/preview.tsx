import { ArrowSmRightIcon } from '@heroicons/react/outline'
import Image from "next/image";
import Link from "next/link";
import { TeamMember } from '../../interfaces/interfaces';

type Props = {
  member: TeamMember
}

export default function MemberPreview({ member }: Props) {
    return (
        <Link href={`/team/${member.slug}`} passHref key={member.slug}>
            <div className='cursor-pointer rounded-md bg-neutral-850 hover:scale-102 duration-300 motion-reduce:transform-none'>
            <Image className='rounded-t-md' data-fallback-image="/content/not-found.png" src={member.image} alt={`${member.name}`} layout="responsive" width={40} height={40} placeholder="blur" blurDataURL={member.image}/>
            <div className='p-2 text-gray-300'>
              <p className='text-transparent bg-clip-text bg-gradient-to-r from-gradient-primary to-gradient-secondary text-lg font-semibold inline-block'>{member.name}</p>
              <p>{member.position}</p>
              <p className="mt-2 text-xs text-neutral-400 flex">Learn more <ArrowSmRightIcon className='h-4 w-4 mr-1' /></p>
            </div>
          </div>
        </Link>
    )
}