function Game(id, name, category, platform, imageLink) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.platform = platform;
    this.imageLink = imageLink;

    function getPlatform() {
        return this.platform;
    }

    function getCategory() {
        return this.category;
    }

    function createCard(){

    }
}