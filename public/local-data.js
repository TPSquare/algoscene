'use strict';

const version = await fetch('/data/version').then((res) => res.json());
const key = await fetch('/data/local-data/key').then((res) => res.json());
const developing = await fetch('/data/developing').then((res) => res.json());
const typeList = await fetch('/data/types').then((res) => res.json());

if (developing) console.warn('Development mode is enabled');

window.localData = new (class {
    constructor() {
        this.version = version;
        this.developing = developing;
        this.key = key;
        const localData = JSON.parse(localStorage.getItem(this.key)) || {};
        Object.assign(this, localData);
        this.keys = {lang: true};
        this.lang = document.querySelector('html')?.lang || this.lang;
        this.check('delay', 500);
        this.check('history', {lang: [], guide: []}, () => {
            const tempHistory = {};
            typeList.forEach(
                (type) =>
                    (tempHistory[type] = Object.assign(this.history[type] || {}, {
                        update: (key, value) => {
                            this.history[type][key] = value;
                            this.upload();
                        }
                    }))
            );
            Object.assign(this.history, tempHistory);
            this.history.lang.update = (e) => {
                if (this.history.lang.includes(e))
                    this.history.lang.push(
                        this.history.lang.splice(
                            this.history.lang.findIndex((t) => t == e),
                            1
                        )[0]
                    );
                else this.history.lang.push(e);
                this.upload();
            };
            this.history.lang.get = function (i = 0) {
                return this[this.length - 1 - i];
            };
            this.history.guide.forEach((e) => (this.history.guide[e] = true));
            this.history.guide.update = (e) => {
                if (!this.history.guide.includes(e)) {
                    this.history.guide.push(e);
                    this.history.guide[e] = true;
                    this.upload();
                }
            };
            this.history.guide.reset = () => {
                while (this.history.guide.length > 0) this.history.guide[this.history.guide.shift()] = false;
                this.upload();
            };
        });
        this.upload();
    }
    setDelay(value) {
        this.delay = Number(value);
        this.upload();
    }
    check(key, value, callback = () => {}) {
        this.keys[key] = true;
        if (!this[key]) this[key] = value;
        callback();
    }
    upload() {
        const keys = Object.keys(this.keys),
            data = {};
        keys.forEach((key) => (data[key] = this[key]));
        localStorage.setItem(this.key, JSON.stringify(data));
    }
})();
