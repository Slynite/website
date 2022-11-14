import { faGithub, faInstagram, faLinkedinIn, faTwitter, faXing} from "@fortawesome/free-brands-svg-icons";
import { GlobeIcon, ExternalLinkIcon } from '@heroicons/react/outline'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { SocialMedia } from "../../interfaces/interfaces";

type Props = {
    socialMediaArray: SocialMedia[]
}

type SocialMediaComponentProps = {
    socialMedia: SocialMedia,
    icon: JSX.Element
}

export default function SocialMediaButtons({ socialMediaArray }: Props): JSX.Element {
    if(socialMediaArray != undefined) {
        const links: SocialMediaComponentProps[] = [];

        socialMediaArray.forEach((socialMedia) => {
            const link: SocialMediaComponentProps = {
                socialMedia: socialMedia,
                icon: getIcon(socialMedia.name)
            }
            links.push(link)
        })
    
        return(
            <div className="flex">
                {links.map((link) => (
                    <Link key={link.socialMedia.name} href={link.socialMedia.url} passHref>
                        <a className="p-1 cursor-pointer">{link.icon}</a>
                    </Link>
                ))}
            </div>
        )
    } else {
        return(<></>);
    }
}

function getIcon(name: string): JSX.Element {
    switch(name) {
        case "website":
            return(<GlobeIcon className="h-5 w-5" />);
        case "linkedin":
            return(<FontAwesomeIcon icon={faLinkedinIn} width="16" />);
        case "xing":
            return(<FontAwesomeIcon icon={faXing} width="16" />);
        case "instagram":
            return(<FontAwesomeIcon icon={faInstagram} width="16" />);
        case "twitter":
            return(<FontAwesomeIcon icon={faTwitter} width="16" />);
        case "github":
            return(<FontAwesomeIcon icon={faGithub} width="16" />);
        default:
            return(<ExternalLinkIcon className="h-5 w-5" />);
    }
}