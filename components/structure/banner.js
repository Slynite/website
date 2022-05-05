import { IS_BANNER_ACTIVE } from "../../lib/constrants";

//This Component is Hardcoded so that it can directly modified and the style can changes at any time.
export default function Banner() {
    if (IS_BANNER_ACTIVE) {
        return(
            <div>
                <h3>Welcome</h3>
                <h5>to our new website</h5>
                <p>We created a new, structured and more buitiful slynite.com.</p>
            </div>
        )
    }

    return null;
}