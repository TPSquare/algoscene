'use strict';

import MODULES from '/modules.js';

document.LANG = document.querySelector('html').lang;

new (class {
    constructor() {
        this.document();
        this.window();
        this.popup();
        this.main();
    }
    document() {
        MODULES.upgradeDocument();
    }
    window() {
        MODULES.upgradeWindow();
    }
    main() {
        const autoCompleteJS = new autoComplete({
            selector: '#search',
            data: {
                src: (async () => {
                    const url = `/${document.LANG}/data/home/search`;
                    const data = await fetch(url).then((res) => res.json());
                    return data.map((e) => Object.assign(e[0], {path: e[1]}));
                })(),
                cache: true
            },
            resultItem: {highlight: true}
        });
        autoCompleteJS.input.addEventListener(
            'selection',
            (e) => (window.location.href = `/${document.LANG}/${e.detail.selection.value.path}`)
        );
    }
    popup() {
        const popup = document.body.querySelector('#popup');
        document.body.popup = popup;

        const overlay = popup.querySelector('.overlay').combine({
            handle() {
                if (this.classList.contains('show')) this.classList.remove('show');
                else this.classList.add('show');
            }
        });
        document.body.popup.overlay = overlay;
    }
})();
