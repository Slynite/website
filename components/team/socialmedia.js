import { faGithub, faInstagram, faLinkedinIn, faTwitter, faXing} from "@fortawesome/free-brands-svg-icons";
import { GlobeIcon, ExternalLinkIcon } from '@heroicons/react/outline'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { socialMediaLink } from '../../lib/models/socialmedia';

export default function SocialMediaButtons({ socialMediaArray }) {
    if(socialMediaArray != undefined) {
        const links = [];
        socialMediaArray.forEach(platform => {
            var link = new socialMediaLink();
    
            //Load strings from array
            let platformFromObj = Object.keys(platform);
            link.setPlatform(platformFromObj.pop());
    
            let urlFromObj = Object.values(platform);
            link.setLink(urlFromObj.pop());
    
            switch(link.platform) {
                case "website":
                    link.setIcon(<GlobeIcon className="h-5 w-5" />);
                    break;
                case "linkedin":
                    link.setIcon(<FontAwesomeIcon icon={faLinkedinIn} width="16" />);
                    break;
                case "xing":
                    link.setIcon(<FontAwesomeIcon icon={faXing} width="16" />);
                    break;
                case "instagram":
                    link.setIcon(<FontAwesomeIcon icon={faInstagram} width="16" />);
                    break;
                case "twitter":
                    link.setIcon(<FontAwesomeIcon icon={faTwitter} width="16" />);
                    break;
                case "github":
                    link.setIcon(<FontAwesomeIcon icon={faGithub} width="16" />);
                    break;
                default:
                    link.setIcon(<ExternalLinkIcon className="h-5 w-5" />);
                    break;
            }
    
            links.push(link);
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