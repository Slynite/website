import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from "next/link";
import { faGlobe, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { faInstagramSquare, faLinkedin, faTwitterSquare, faXingSquare } from "@fortawesome/free-brands-svg-icons";
import { socialMediaLink } from '../../lib/models/socialmedia';

export default function SocialMediaButtons({ socialMediaArray }) {
    const links = []
    socialMediaArray.forEach(platform => {
        var link = new socialMediaLink();

        link.setPlatform(Object.keys(platform));
        link.setLink(Object.values(platform));

        switch(link.platform) {
            case "website":
                link.setIcon(<FontAwesomeIcon icon={faGlobe} />);
                break;
            case "linkedin":
                link.setIcon(<FontAwesomeIcon icon={faLinkedin} />);
                break;
            case "xing":
                link.setIcon(<FontAwesomeIcon icon={faXingSquare} />);
                break;
            case "instagram":
                link.setIcon(<FontAwesomeIcon icon={faInstagramSquare} />);
                break;
            case "twitter":
                link.setIcon(<FontAwesomeIcon icon={faTwitterSquare} />);
                break;
            default:
                link.setIcon(<FontAwesomeIcon icon={faQuestionCircle} />);
                break;
        }

        links.push(link);
    });

    return(
        <div>
            {links.map((link) => (
                <Link key={link.platform} href={link.link} passHref>
                    {link.icon}
                </Link>
            ))}
        </div>
    )
}