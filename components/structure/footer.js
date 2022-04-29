import Link from 'next/link';
import { SITE_NAME } from '../../lib/constrants';

var packageObj = require('../../package.json');

//TODO: When we implement the styling, then we can also rewrite this component. This is only for a basic functionallity.
export default function Footer() {
    var year = new Date().getFullYear();
    var versionLink = packageObj.repository.url + "releases/tag/" + packageObj.version
    return(
        <div>
            <p>Copyright {year} {SITE_NAME}</p>
            <p><Link href="/legal/imprint">Imprint</Link> <Link href="/legal/privacy">Privacy</Link></p>
            <p>ver: <a href={versionLink}>{packageObj.version}</a></p>
        </div>
    )
}