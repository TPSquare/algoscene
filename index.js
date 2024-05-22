'use strict';

import localData from './local-data.js';
import MODULES from 'https://tpsw.000webhostapp.com/modules.js';

const url = `./languages/${localData.lang}/index.json`,
    langData = await fetch(url).then(async (r) => r.json());

new (class {
    constructor() {
        this.document();
        this.window();
        this.header();
    }
    document() {
        document.querySelector('html').lang = localData.lang;

        MODULES.upgradeDocument();
    }
    window() {
        MODULES.upgradeWindow();
    }
    header() {
        const homeBtn = document.createElement({
                tag: 'button',
                type: 'button',
                className: 'home',
                innerHTML:
                    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"></path></svg>',
                title: langData.return___,
            }),
            title = document.createElement({
                className: 'title',
                innerHTML:
                    'ALGOSCENE<svg viewBox="0 0 212 45" xmlns="http://www.w3.org/2000/svg" font-family="Calibri, sans-serif" author="Hbat(PHHN)"><text fill="#475ab9" font-size="2.99998px" x="38.594646" y="4.856184">+</text><text fill="#ffffff" font-size="3.99998px" x="68.69146" y="7.8561654">+</text><text fill="#475ab9" font-size="3.99998px" x="13.732798" y="41.855953">+</text><text fill="#475ab9" font-size="3.99998px" x="72.941429" y="37.85598">+</text><text fill="#475ab9" font-size="3.99998px" x="96.979279" y="2.8561957">+</text><text fill="#ffffff" font-size="2.99998px" x="46.912594" y="42.855949">+</text><text fill="#ffffff" font-size="3.99998px" x="103.61924" y="44.855938">+</text><text fill="#ffffff" font-size="2.99998px" x="124.41412" y="40.855961">+</text><text fill="#ffffff" font-size="3.99998px" x="-0.086718291" y="15.856116">+</text><text fill="#ffffff" font-size="3.99998px" x="161.50887" y="40.855961">+</text><text fill="#ffffff" font-size="4.99997px" x="118.47816" y="4.856184">+</text><text fill="#ffffff" font-size="2.99998px" x="128.36009" y="6.8561711">+</text><text fill="#ffffff" font-size="3.99998px" x="192.42171" y="4.856184">+</text><text fill="#ffffff" font-size="3.99998px" x="210.09358" y="35.855991">+</text><text fill="#ffffff" font-size="4.99997px" x="9.9238205" y="5.8561783">+</text><text fill="#475ab9" font-size="4.99997px" x="172.76381" y="12.856133">+</text><text fill="#475ab9" font-size="3.99998px" x="80.338387" y="42.855949">+</text><text fill="#475ab9" font-size="4.99997px" x="158.80688" y="2.8561957">+</text><text fill="#ffffff" font-size="2.99998px" x="181.28975" y="44.855938">+</text></svg>',
            }),
            left = document.createElement({className: 'left', children: [homeBtn, title]});

        const input = document.createElement({
                tag: 'input',
                title: langData.search,
                attributes: {placeholder: langData.search},
            }),
            searchBtn = document.createElement({
                tag: 'button',
                type: 'button',
                title: langData.search,
                innerHTML:
                    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path></svg>',
            }),
            searchBox = document.createElement({
                className: 'search-box',
                children: [input, searchBtn],
            });

        const langBtn = document.createElement({
                tag: 'button',
                type: 'button',
                className: 'lang',
                title: langData.language,
                innerHTML: localData.lang.toUpperCase(),
                onclick() {
                    if (this.innerHTML == 'EN') this.innerHTML = 'VI';
                    else this.innerHTML = 'EN';
                    localData.setLanguage(this.innerHTML.toLowerCase());
                },
            }),
            right = document.createElement({className: 'right', children: [langBtn]});

        const header = document.createElement({tag: 'header', children: [left, searchBox, right]});

        document.body.appendChild(header);
    }
})();
