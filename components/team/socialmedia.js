import Link from "next/link";
import { socialMediaLink } from '../../lib/models/socialmedia';

//TODO: Add real FontAwesome

export default function SocialMediaButtons({ socialMediaArray }) {
    const links = []
    socialMediaArray.forEach(platform => {
        var link = new socialMediaLink();

        link.setPlatform(Object.keys(platform));
        link.setLink(Object.values(platform));

        switch(link.platform) {
            case "website":
                link.setIcon("faGlobe");
                break;
            case "linkedin":
                link.setIcon("faLinkedin");
                break;
            case "xing":
                link.setIcon("faXingSquare");
                break;
            case "instagram":
                link.setIcon("faInstagramSquare");
                break;
            case "twitter":
                link.setIcon("faTwitterSquare");
                break;
            default:
                link.setIcon("faQuestionCircle");
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