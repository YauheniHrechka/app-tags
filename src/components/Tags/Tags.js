class Tags {
    constructor(tags = []) {
        this._tags = tags;
        this._readonly = false;
        this._separator = ',';
    }

    static getLocalStorage() {
        return JSON.parse(localStorage.getItem('tags')) || [];
    }

    setLocalStorage() {
        localStorage.setItem('tags', JSON.stringify(this.tags));
    }

    get tags() {
        return this._tags;
    }

    set tags(tags) {
        this._tags = [...tags];
        this.setLocalStorage();
    }

    get readonly() {
        return this._readonly;
    }

    set readonly(value) {
        this._readonly = value;
    }

    add(tags) {
        if (this.readonly ||
            tags.trim() === '') return false;

        this.tags = [...this.tags, ...tags.split(this._separator).map(tag => tag.trim())];
        return true;
    }

    remove(tag) {
        if (this.readonly ||
            tag.trim() === '') return false;

        this.tags = this.tags.filter(item => tag !== item);
        return true;
    }
}

export default Tags;