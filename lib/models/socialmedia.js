class SocialMediaLink {

    constructor(platform, link, icon) {
        this.platform = platform;
        this.link = link;
        this.icon = icon;
    }

    setPlatform(platform) {
        this.platform = platform;
    }

    getPlatform() {
        return this.platform;
    }

    setLink(link) {
        this.link = link;
    }

    getLink() {
        return this.link;
    }
    
    setIcon(icon) {
        this.icon = icon;
    }

    getIcon() {
        return this.icon
    }
}
module.exports.socialMediaLink = SocialMediaLink;