import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MailIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import { KnowledgeBaseEntry, Post } from '../../interfaces/interfaces';

type Props = {
    entryToShare: Post | KnowledgeBaseEntry
}

export default function Share({ entryToShare }: Props) {
    const url: string = GetUrl()
    const shareText: string = GetShareText(entryToShare, url)
    const tags: string = GetHashtagStringFromTags(entryToShare.tags)
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

function GetUrl(): string{
    const router = useRouter();
    return process.env.NEXT_PUBLIC_SITE_URL + router.asPath;
}

function GetShareText(entry: Post | KnowledgeBaseEntry, url: string): string {
    return "Look what I just found on Slynite.com: \n\n" +
                entry.title + "\n" +
                entry.excerpt + "...\n\n" +
                "Read more here: " + url
}

function GetHashtagStringFromTags(tags: string[]): string {
    let tagString = "";
    tags.forEach(tag => {
        tagString = tagString + "#" + tag + " ";
    });

    return tagString;
}

//Share Provider
function LinkedIn({ url }: { url: string }) {
    let shareUrl = "https://www.linkedin.com/sharing/share-offsite/?url=" + url;
    return(
        <a href={shareUrl}>
            <FontAwesomeIcon icon={faLinkedin} width="16" />
        </a>
    )
}

function Twitter({ url, text, tags }: { url: string, text: string, tags: string }) {
    let shareUrl = "https://twitter.com/intent/tweet?url=" + url + "&text=" + text + "&hashtags=" + tags;
    return(
        <a href={shareUrl}>
            <FontAwesomeIcon icon={faTwitter} width="16" />
        </a>
    )
}

function Email({ text }: { text: string }) {
    let shareUrl = "mailto:?subject=I have found a interesting post on Slynite Newsroom&body=" + text;
    return(
        <a href={shareUrl}>
            <MailIcon className="h-5 w-5" />
        </a>
    )
}


