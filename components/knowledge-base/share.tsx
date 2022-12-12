import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MailIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import { KnowledgeBaseEntry } from '../../interfaces/interfaces';

type Props = {
    entry: KnowledgeBaseEntry
}

export default function Share({ entry }: Props) {
    const url: string = GetPostUrl()
    const shareText: string = GetShareText(entry, url)
    const tags: string = GetHashtagStringFromTags(entry.tags)
    return(
        <div>
            <p className='text-lg font-semibold mb-2'>Share this article</p>
            <div className='flex space-x-2'>
                <LinkedIn url={url} />
                <Twitter url={url} text={shareText} tags={tags} />
                <Email text={shareText} />
            </div>
        </div>
    )
}

function GetPostUrl(): string{
    const router = useRouter();
    return process.env.NEXT_PUBLIC_SITE_URL + router.asPath;
}

function GetShareText(entry: KnowledgeBaseEntry, url: string): string {
    return "I found a interesting article on the #slynite Knowledge Base: \n\n" +
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
    let shareUrl = "mailto:?subject=I have found a interesting article on the Slynite Knowledge Base&body=" + text;
    return(
        <a href={shareUrl}>
            <MailIcon className="h-5 w-5" />
        </a>
    )
}


