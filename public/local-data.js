'use strict';

const version = await fetch('/version').then((res) => res.json());
const key = await fetch('/localdata-key').then((res) => res.json());
const debug = await fetch('/debugging').then((res) => res.json());

window.localData = new (class {
    constructor() {
        this.version = version;
        this.debug = debug;
        this.key = key;
        const localData = JSON.parse(localStorage.getItem(this.key)) || {};
        Object.assign(this, localData);
        this.keys = {lang: true};
        this.lang = document.querySelector('html')?.lang || this.lang;
        this.check('delay', 500);
        this.check('history', {a: {}, lang: []}, () => {
            this.history.a.update = (e) => {
                this.history.a[ALGOSCENE.key] = e;
                this.upload();
            };
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