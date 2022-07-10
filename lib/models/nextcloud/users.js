class Users {

    constructor(meta, data) {
        this.meta = meta;
        this.data = data;
    }

    setMeta(meta) {
        this.meta = meta;
    }

    getMeta() {
        return this.meta;
    }

    setData(data) {
        this.data = data;
    }

    getData() {
        return this.data;
    }
}

class Meta {
    constructor(status, statuscode, message) {
        this.status = status;
        this.statuscode = statuscode;
        this.message = message;
    }

    setStatus(status) {
        this.status = status;
    }

    getStatus() {
        return this.status;
    }

    setStatusCode(statuscode) {
        this.statuscode = statuscode;
    }

    getStatusCode() {
        return this.statuscode;
    }

    setMessage(message) {
        this.message = message;
    }

    getMessage() {
        return this.message;
    }
}

class Data {
    constructor(data) {
        this.data = data;
    }

    setData(users) {
        this.data = data;
    }

    getData(){
        return this.data;
    }
}

class UserData {
    //All important information we need from instance
    constructor(enabled, id, email, emailScope, displayname, website, websiteScope, role, headline, biography ) {
        this.enabled = enabled;
        this.id = id;
        this.email = email;
        this.emailScope = emailScope;
        this.displayname = displayname;
        this.website = website;
        this.websiteScope = websiteScope;
        this.role = role;
        this.headline = headline;
        this.biography = biography;
    }

    setEnabled(enabled) {
        this.enabled = enabled;
    }

    getEnabled() {
        return this.enabled;
    }

    setId(id) {
        this.id = id;
    }

    getId() {
        return this.id;
    }

    setEmail(email) {
        this.email = email;
    }

    getEmail() {
        return this.email;
    }

    setEmailScope(emailScope) {
        this.emailScope = emailScope;
    }

    setDisplayName(displayname) {
        this.displayname = displayname;
    }

    getDisplayName() {
        return this.displayname;
    }

    getEmailScope() {
        return this.emailScope;
    }

    setWebiste(website) {
        this.website = website;
    }

    getWebsite() {
        return this.website;
    }

    setWebisteScope(websiteScope) {
        this.websiteScope = websiteScope;
    }

    getWebsiteScope() {
        return this.websiteScope;
    }

    setRole(role) {
        this.role = role;
    }

    getRole() {
        return this.role;
    }

    setHeadline(headline) {
        this.headline = headline;
    }

    getHeadline() {
        return this.headline;
    }

    setBiography(biography) {
        this.biography = biography;
    }

    getBiography() {
        return this.biography;
    }
}


module.exports.meta = Meta;
module.exports.users = Users;
module.exports.data = Data;
module.exports.userData = UserData;
