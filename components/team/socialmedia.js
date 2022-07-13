import { faGithub, faInstagram, faLinkedinIn, faTwitter, faXing} from "@fortawesome/free-brands-svg-icons";
import { GlobeIcon, ExternalLinkIcon } from '@heroicons/react/outline'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { socialMediaLink } from '../../lib/models/socialmedia';

export default function SocialMediaButtons({ socialMediaArray }) {
    if(socialMediaArray != undefined) {
        const links = [];
        socialMediaArray.forEach(link => {
            var socialMedia = new socialMediaLink();

            socialMedia.setPlatform(link.platform);
            socialMedia.setLink(link.link);
    
            switch(socialMedia.platform) {
                case "website":
                    socialMedia.setIcon(<GlobeIcon className="h-5 w-5" />);
                    break;
                case "linkedin":
                    socialMedia.setIcon(<FontAwesomeIcon icon={faLinkedinIn} width="16" />);
                    break;
                case "xing":
                    socialMedia.setIcon(<FontAwesomeIcon icon={faXing} width="16" />);
                    break;
                case "instagram":
                    socialMedia.setIcon(<FontAwesomeIcon icon={faInstagram} width="16" />);
                    break;
                case "twitter":
                    socialMedia.setIcon(<FontAwesomeIcon icon={faTwitter} width="16" />);
                    break;
                case "github":
                    socialMedia.setIcon(<FontAwesomeIcon icon={faGithub} width="16" />);
                    break;
                default:
                    socialMedia.setIcon(<ExternalLinkIcon className="h-5 w-5" />);
                    break;
            }
    
            links.push(socialMedia);
        });
    
        return(
            <div className="flex">
                {links.map((link) => (
                    <Link key={link.platform} href={link.link} passHref>
                        <a className="p-1 cursor-pointer">{link.icon}</a>
                    </Link>
                ))}
            </div>
        )
    } else {
        return("");
    }
}