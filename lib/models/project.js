class Project {

    constructor(number, name, description, url, logo, image) {
        this.number = number;
        this.name = name;
        this.description = description;
        this.url = url;
        this.logo = logo;
        this.image = image;
    }

    setNumber(number) {
        this.number = number;
    }

    getNumber() {
        return this.number;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
    
    setDescription(description) {
        this.description = description;
    }

    getDescription() {
        return this.description;
    }

    setUrl(url) {
        this.url = url;
    }

    getUrl() {
        return this.url;
    }

    setLogo(logo) {
        this.logo = logo;
    }

    getLogo() {
        return this.logo;
    }

    setImage(image) {
        this.image = image;
    }

    getImage() {
        return this.image;
    }
}
module.exports.project = Project;