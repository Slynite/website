import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MailIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import { SITE_URL } from '../../lib/constrants';

export default function Share({posts}) {
    var url = GetPostUrl()
    var shareText = GetShareText(posts, url)
    var tags = GetHashtagStringFromTags(posts.tags)
    return(
        <div>
            <p className='text-lg font-semibold mb-2'>Share this post</p>
            <div className='flex space-x-2'>
                <LinkedIn url={url} />
                <Twitter url={url} text={shareText} tags={tags} />
                <Email text={shareText} />
            </div>
        </div>
    )
}

function GetPostUrl(){
    const router = useRouter();
    return SITE_URL + router.asPath;
}

function GetShareText(post, url) {
    return "I found a interesting post on #slynite newsroom: \n\n" +
                post.title + "\n" +
                post.excerpt + "...\n\n" +
                "Read more here: " + url
}

function GetHashtagStringFromTags(tags) {
    var tagString = "";
    tags.forEach(tag => {
        tagString = tagString + "#" + tag + " ";
    });

    return tagString;
}

//Share Provider
function LinkedIn({url}) {
    var shareUrl = "https://www.linkedin.com/sharing/share-offsite/?url=" + url;
    return(
        <a href={shareUrl}>
            <FontAwesomeIcon icon={faLinkedin} width="16" />
        </a>
    )
}

function Twitter({url, text, tags}) {
    var shareUrl = "https://twitter.com/intent/tweet?url=" + url + "&text=" + text + "&hashtags=" + tags;
    return(
        <a href={shareUrl}>
            <FontAwesomeIcon icon={faTwitter} width="16" />
        </a>
    )
}

function Email({text}) {
    var shareUrl = "mailto:?subject=I have found a interesting post on Slynite Newsroom&body=" + text;
    return(
        <a href={shareUrl}>
            <MailIcon className="h-5 w-5" />
        </a>
    )
}


