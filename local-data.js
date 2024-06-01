'use strict';

const localData = new (class {
    constructor() {
        this.version = 'Preview 1.0.3';
        this.debug = false;
        this.key = 'azlfgvoestczednteu';
        const localData = JSON.parse(localStorage.getItem(this.key)) || {};
        Object.assign(this, localData);
        this.keys = {};
        this.check('lang', 'vi');
        this.check('delay', 500);
        this.upload();
    }
    init(root) {
        this.getText(root);
    }
    async setLanguage(value) {
        this.lang = value;
        this.upload();
        await window.delay(100);
        if (confirm(this.reload___ + '?')) window.location.reload();
    }

    setDelay(value) {
        this.delay = Number(value);
        this.upload();
    }
    check(key, value) {
        this.keys[key] = true;
        if (!this[key]) this[key] = value;
    }
    upload() {
        const keys = Object.keys(this.keys),
            data = {};
        keys.forEach((key) => (data[key] = this[key]));
        localStorage.setItem(this.key, JSON.stringify(data));
    }
    async getText(root) {
        const url = `${root}languages/${this.lang}/default.json`,
            {reload___} = await fetch(url).then(async (r) => r.json());
        this.reload___ = reload___;
    }
})();

export default localData;
