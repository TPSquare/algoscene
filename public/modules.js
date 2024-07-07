'use strict';

export function defaultHandle() {
    if (!document.upgraded) upgradeDocument();
    const title = document.head.querySelector('title');
    title.innerHTML += '&nbsp;&nbsp;|&nbsp;&nbsp;TPSquare';
    document.head.insertBefore(
        document.createElement({
            tag: 'meta',
            name: 'author',
            content: 'TPSquare'
        }),
        title
    );
}

export function upgradeDocument() {
    if (document.upgraded) return;
    document.upgraded = true;

    const setStyle = function (styles) {
        for (const key in styles) this.style.setProperty(key, styles[key]);
    };

    const querySelector = function (s) {
        const elm = this.qs(s);
        if (!elm) return undefined;
        Object.assign(elm, {
            set(k, f) {
                if (typeof k == 'string') this[k] = f;
                else k.forEach((key) => (this[key] = f));
                return this;
            },
            setStyle,
            combine(obj) {
                for (const key in obj) this[key] = obj[key];
                return this;
            }
        });
        elm.qs = elm.querySelector;
        elm.querySelector = querySelector;
        elm.sa = elm.setAttribute;
        elm.setAttribute = function (q, v) {
            this.sa(q, v);
            return this;
        };
        elm.ael = this.addEventListener;
        elm.addEventListener = function (t, f) {
            this.ael(t, f);
            return this;
        };
        return elm;
    };

    const appendChild = function (elm) {
        if (elm.key) this[elm.key] = elm;
        this.ac(elm);
    };

    document.createStyle = function (selectors, style) {
        if (!style) [style, selectors] = [selectors, style];
        let code = '',
            key,
            i,
            value;
        for (key in style) {
            if (key.indexOf('--') == 0) {
                code += key + ':' + style[key] + ';';
                continue;
            }
            value = String(style[key]).replace('!', '!important');
            for (i = 0; i < key.length; i++)
                if (key.charAt(i) >= 'A' && key.charAt(i) <= 'Z') code += '-' + key.charAt(i).toLowerCase();
                else code += key.charAt(i);
            code += ':' + value + ';';
        }
        if (selectors) return selectors + '{' + code + '}';
        else return code;
    };

    document.body.ac = document.body.appendChild;
    document.body.appendChild = appendChild;

    document.body.qs = document.body.querySelector;
    document.body.querySelector = querySelector;

    document.ce = document.createElement;
    document.createElement = function (r = {}) {
        if (r == undefined) return this.ce('div');
        if (typeof r == 'string') return this.ce(r);
        const request = Object.assign({}, r),
            elm = this.ce(request.tag || 'div');
        delete request.tag;
        const children = request.children;
        delete request.children;
        if (typeof request.style == 'object') request.style = this.createStyle(request.style);
        for (const key in request.attributes) elm.setAttribute(key, request.attributes[key]);
        delete request.attributes;
        for (const key in request) elm[key] = request[key];
        elm.ac = elm.appendChild;
        elm.appendChild = appendChild;
        elm.setStyle = setStyle;
        elm.qs = elm.querySelector;
        elm.querySelector = querySelector;
        children?.forEach((child) => elm.appendChild(child));
        elm.set = function (k, f) {
            if (typeof k == 'string') this[k] = f;
            else k.forEach((key) => (this[key] = f));
            return this;
        };
        elm.sa = elm.setAttribute;
        elm.setAttribute = function (q, v) {
            this.sa(q, v);
            return this;
        };
        elm.ael = elm.addEventListener;
        elm.addEventListener = function (t, f) {
            this.ael(t, f);
            return this;
        };
        elm.setStyle = setStyle;
        elm.combine = function (obj) {
            for (const key in obj) this[key] = obj[key];
            return this;
        };
        return elm;
    };

    document.generalStyle = new (class {
        constructor() {
            this.selectors = {};
            this.html = {};
            const ids = ['hiddenScrollBar', 'disableUserSelect'];
            ids.forEach((id) => {
                this.selectors[id] = [];
                this.html[id] = '';
            });
        }
        hiddenScrollBar(s) {
            const id = 'hiddenScrollBar';
            this.push(id, s);
            this.html[id] =
                this.selectors[id].join(',') +
                '{scrollbar-width:none;-ms-overflow-style:none;}' +
                this.selectors[id].map((s) => (s += '::-webkit-scrollbar')).join(',') +
                '{display:none;}';
            this.render();
        }
        disableUserSelect(s) {
            const id = 'disableUserSelect';
            this.push(id, s);
            this.html[id] = this.selectors[id].join(',') + '{-webkit-user-select:none;user-select:none;}';
            this.render();
        }
        push(id, s) {
            if (!this.element) this.createElement();
            this.selectors[id].push(...s.split(','));
        }
        render() {
            let html = '';
            for (const id in this.selectors) html += this.html[id];
            this.element.innerHTML = html;
        }
        createElement() {
            this.element = document.createElement({tag: 'style', id: 'general-style'});
            document.head.appendChild(this.element);
        }
    })();

    document.openFullScreen = (elm) => {
        if (elm.requestFullscreen) elm.requestFullscreen();
        else if (elm.mozRequestFullScreen) elm.mozRequestFullScreen();
        else if (elm.webkitRequestFullscreen) elm.webkitRequestFullscreen();
        else if (elm.msRequestFullscreen) elm.msRequestFullscreen();
    };

    document.closeFullScreen = function closeFullScreen() {
        if (!this.fullscreenElement) return;
        if (this.exitFullscreen) this.exitFullscreen();
        else if (this.mozCancelFullScreen) this.mozCancelFullScreen();
        else if (this.webkitExitFullscreen) this.webkitExitFullscreen();
        else if (this.msExitFullscreen) this.msExitFullscreen();
    };

    document.removeExtraWhitespace = (value) => {
        value = value
            .split('\n')
            .map((e) => {
                e = e.trim();
                while (e.includes('  ')) e = e.replaceAll('  ', ' ');
                return e;
            })
            .join(' ')
            .trim();
        while (value.includes('  ')) value = value.replaceAll('  ', ' ');
        return value;
    };
}

export function upgradeWindow() {
    window.delay = (duration) => new Promise((resolve) => setTimeout(resolve, duration));

    window.setAspectRatio = function (w, h, t) {
        if (!document.upgraded) upgradeDocument();
        t = t ? document.querySelector(t) : document.body;
        t.arResize = () => {
            if ((this.innerWidth * h) / w <= this.innerHeight) t.aspect.width = this.innerWidth;
            else t.aspect.width = (this.innerHeight * w) / h;
            t.aspect.height = (t.aspect.width * h) / w;
            t.style = document.createStyle({
                '--ar-width': t.aspect.width + 'px',
                '--ar-height': t.aspect.height + 'px'
            });
        };
        t.aspect = {};
        this.addEventListener('resize', t.arResize);
        t.arResize();
    };

    window.scrollToElement = function (element, block) {
        return new Promise((resolve) => {
            let isScrolling;
            function onScroll() {
                clearTimeout(isScrolling);
                isScrolling = setTimeout(() => {
                    this.removeEventListener('scroll', onScroll);
                    resolve();
                }, 100);
            }
            this.addEventListener('scroll', onScroll);
            this.dispatchEvent(new Event('scroll'));
            element.scrollIntoView({behavior: 'smooth', block});
        });
    };
}

const MODULES = {
    defaultHandle,
    upgradeDocument,
    upgradeWindow
};
export default MODULES;
