'use strict';

import localData from '../local-data.js';
import MODULES from 'https://tpsw.000webhostapp.com/modules.js';

localData.init('../../');

const langData = Object.assign(
    await fetch(`../../languages/${localData.lang}/default.json`).then(async (r) => r.json()),
    await fetch(`../../languages/${localData.lang}/general.json`).then(async (r) => r.json())
);
// desktopOS = (() => {
//     const userAgent = navigator.userAgent;
//     if (userAgent.includes('Win')) return 'Windows';
//     if (userAgent.includes('Mac')) return 'MacOS';
//     if (userAgent.includes('Linux')) return 'Linux';
//     return 'Mobile';
// })();

new (class {
    constructor() {
        this.developing(localData.debug);
        this.document();
        this.window();
        this.bg();
        this.header();
        this.main();
        this.rightBox();
        this.codeBox();
        this.sizeNotice();
        this.footer();
        this.popup();
    }
    window() {
        MODULES.upgradeWindow();

        window.ALGOSCENE = {
            async init(key, prolangs, algoConfigs, shortcuts) {
                this.frameElm = document.body.main.frame;
                this.playPauseBtn = document.body.main.bottombar.right.playPauseBtn;
                this.customInput = document.body.popup.customInput;

                const lang = await window.importLanguage(key),
                    algos = {},
                    info = {},
                    codes = {},
                    coms = {},
                    cmts = {};

                for (const key in algoConfigs) {
                    algos[key] = lang[key].name;
                    info[key] = lang[key].informations;
                    codes[key] = algoConfigs[key].code;
                    coms[key] = algoConfigs[key].complexity;
                    cmts[key] = lang[key].comments;
                }
                document.body.codeBox.top.prolangList.createList(prolangs);
                document.body.main.bottombar.left.algoListWrapper.algoList.createList(algos);
                document.body.rightBox.informations.save(info, algos);
                document.body.codeBox.code.save(codes, cmts, shortcuts);
                document.body.rightBox.complexity.save(coms);
                document.update();

                // this.langData = lang._;
                this.customInput.setConstraints(lang._.constraints);

                this.firstAction = Object.keys(algos)[0];
            },
            delayDuration: localData.delay,
            updateDelayDuration() {
                this.delayDuration = localData.delay;
                this.frameElm.setDelay(this.delayDuration);
            },
            async delay(mul = 1) {
                if (!this.playPauseBtn.isPlaying) return;
                await window.delay(localData.delay * mul);
                const t = localData.delay / 10;
                while (this.playPauseBtn.isPausing) await window.delay(t);
            },
            frameHTML: '',
            actions: {},
            setAction(key, action) {
                this.actions[key] = action;
                if (key == this.firstAction) this.runAction(key);
            },
            runAction(key) {
                this.currentAction = key;
                this.frameElm.innerHTML = this.frameHTML;
                if (this.actions[key]) this.actions[key]();
                else console.warn(`There are no actions for '${key}'`);
                this.frameElm.className = key;
                ALGOSCENE.playPauseBtn.reset();
            },
            resetAction() {
                this.frameElm.innerHTML = this.frameHTML;
                this.actions[this.currentAction]();
                ALGOSCENE.playPauseBtn.reset();
            },
            createComplexity: (a, b, w, s) => ({a, b, w, s}),
            resetFrame: new (class {
                constructor() {
                    this.identifier = 1106;
                    this.actions = {};
                }
                setAction(key, action) {
                    this.actions[key] = action;
                }
                reset() {
                    for (const key in this.actions) this.actions[key]();
                }
            })(),
        };

        window.importLanguage = async (key) => {
            const url = `../../languages/${localData.lang}/a/${key}.json`;
            return await fetch(url).then((r) => r.json());
        };
    }
    document() {
        document.querySelector('html').lang = localData.lang;

        document.update = function () {
            const lang = this.body.codeBox.top.prolangList.querySelector('.active').classList[0],
                algo = this.body.main.bottombar.left.algoListWrapper.algoList.value;

            this.updatePageTitle(algo);
            this.body.codeBox.code.update(algo, lang);
            this.body.rightBox.informations.update(algo);
            this.body.rightBox.complexity.update(algo);
            this.body.rightBox.complexity.onresize();
        };

        document.updatePageTitle = function (algo) {
            const t = this.body.main.bottombar.left.algoListWrapper.algoList;
            algo = t.querySelector(`option[value="${algo}"]`).innerHTML;
            this.head.querySelector('title').innerHTML =
                algo + '&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;AlgoScene';
        };

        document.body.overflow = function (ok) {
            this.style.setProperty('overflow', ok ? '' : 'hidden');
        };

        MODULES.upgradeDocument();
    }
    bg() {
        document.body.appendChild(
            document.createElement({
                id: 'bg',
                innerHTML: '<img class="brc" src="../../static/bottom-right-decoration.svg" alt="">',
            })
        );
    }
    header() {
        const homeBtn = document.createElement({
                tag: 'button',
                type: 'button',
                className: 'home',
                onclick: () => (window.location.href = '/'),
                innerHTML:
                    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"></path></svg>',
                title: langData.return___,
            }),
            title = document.createElement({
                className: 'title',
                innerHTML: 'ALGOSCENE<img src="../../static/name.svg" alt="">',
            }),
            left = document.createElement({className: 'left', children: [homeBtn, title]});

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
            infoBtn = document.createElement({
                tag: 'button',
                type: 'button',
                className: 'info',
                title: langData.info___,
                innerHTML:
                    '<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><circle cx="64" cy="64" stroke-width="6.67279" style="fill:none;stroke-width:12.073;stroke-dasharray:none" id="circle1" r="57.963501" /><path stroke-linecap="round" stroke-width="6.67279" d="m 55.368515,92.095025 h 9.578464 m 0,0 V 60.965039 c 0,-1.76346 0.622361,-2.877238 -1.141033,-2.877238 h -3.684424 m 4.825457,34.007224 h 9.578463" id="path1" sodipodi:nodetypes="cccssccc" style="stroke-width:11.273;stroke-dasharray:none" /><ellipse cx="63.526512" cy="37.510479" id="circle2" style="stroke-width:3.3;stroke-dasharray:none" rx="7.9820528" ry="7.9820533" /></svg>',
                onclick: () => document.body.popup.info.handle(),
            }),
            guideBtn = document.createElement({
                tag: 'button',
                type: 'button',
                className: 'guide',
                title: langData.___guide,
                innerHTML:
                    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>',
                onclick: () => document.body.popup.guideMessageElm.controller.run(),
            }),
            right = document.createElement({
                className: 'right',
                children: [langBtn, guideBtn, infoBtn],
            });

        const header = document.createElement({
            tag: 'header',
            key: 'header',
            children: [left, right],
        });

        document.body.appendChild(header);
    }
    main() {
        const frame = document.createElement({
            id: 'frame',
            key: 'frame',
            onresize() {
                const w = this.parentNode.offsetWidth,
                    h =
                        window.innerHeight -
                        this.parentNode.offsetTop -
                        document.body.main.bottombar.offsetHeight -
                        20;
                if ((w * 9) / 16 <= h) this.width = w;
                else this.width = (h * 16) / 9;
                this.height = (this.width * 9) / 16;
                this.setStyle({
                    width: this.width + 'px',
                    height: this.height + 'px',
                    '--size': this.height + 'px',
                });
            },
            setDelay(value) {
                this.setStyle({'--delay': (value || localData.delay) + 'ms'});
            },
            style: `--delay:${localData.delay}ms;`,
            enableEditing() {
                this.classList.add('editable');
            },
            disableEditing() {
                this.classList.remove('editable');
            },
        });
        window.addEventListener('resize', () => frame.onresize());

        const algoList = document.createElement({
                tag: 'select',
                key: 'algoList',
                className: 'algo-list',
                title: langData.algorithms,
                onchange() {
                    document.update();
                    window.ALGOSCENE.runAction(this.value);
                },
                createList(algos) {
                    for (const key in algos)
                        this.innerHTML += `<option value="${key}">${algos[key]}</option>`;
                    this.value = Object.keys(algos)[0];
                },
                up() {
                    this.selectedIndex =
                        (Array.from(this.children).indexOf(
                            this.querySelector(`option[value="${this.value}"]`)
                        ) -
                            1 +
                            this.children.length) %
                        this.children.length;
                    document.update();
                    window.ALGOSCENE.runAction(this.value);
                },
                down() {
                    this.selectedIndex =
                        (Array.from(this.children).indexOf(
                            this.querySelector(`option[value="${this.value}"]`)
                        ) +
                            1) %
                        this.children.length;
                    document.update();
                    window.ALGOSCENE.runAction(this.value);
                },
            }),
            algoListWrapper = document.createElement({
                className: 'algo-list-wrapper',
                key: 'algoListWrapper',
                children: [algoList, document.createElement({innerText: '▾'})],
            }),
            left = document.createElement({
                className: 'left',
                key: 'left',
                children: [algoListWrapper],
            });

        const playPauseBtn = document.createElement({
                tag: 'button',
                type: 'button',
                key: 'playPauseBtn',
                className: 'play-pause',
                title: langData.play,
                innerHTML:
                    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path></svg>',
                playIcon:
                    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path></svg>',
                resetIcon:
                    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H48.5z"/></svg>',
                pauseIcon:
                    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/></svg>',
                async onclick() {
                    if (this.isPlaying) {
                        if (this.isPausing) {
                            this.isPausing = false;
                            this.innerHTML = this.pauseIcon;
                            this.title = langData.pause;
                        } else {
                            this.isPausing = true;
                            this.innerHTML = this.playIcon;
                            this.title = langData.continue;
                        }
                    } else {
                        this.isPlaying = true;
                        this.innerHTML = this.pauseIcon;
                        this.title = langData.pause;
                        await this.click();
                        this.isPausing = true;
                        this.innerHTML = this.resetIcon;
                        this.title = langData.repeat;
                        await ALGOSCENE.delay(0);
                        this.isPausing = false;
                        this.isPlaying = false;
                        this.innerHTML = this.playIcon;
                        this.title = langData.play;
                        ALGOSCENE.resetFrame.reset();
                    }
                },
                reset() {
                    this.isPlaying = false;
                    this.isPausing = false;
                    this.innerHTML = this.playIcon;
                },
            }),
            screenBtn = document.createElement({
                tag: 'button',
                type: 'button',
                key: 'screenBtn',
                className: 'screen',
                title: langData.fullScreen,
                innerHTML:
                    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"></path></svg>',
                open() {
                    document.openFullScreen(document.body.main);
                    this.onclick = this.close;
                    this.title = langData.exitFullScreen;
                },
                close() {
                    document.closeFullScreen();
                    this.onclick = this.open;
                    this.title = langData.fullScreen;
                },
            });
        screenBtn.onclick = screenBtn.open;

        const sDelayInput = document.createElement({
                tag: 'input',
                type: 'text',
                className: 'value',
                attributes: {maxlength: 4},
                value: localData.delay,
                saveValue: localData.delay,
                onblur() {
                    if (isNaN(this.value)) this.value = this.saveValue;
                    else {
                        if (Number(this.value) < 100) this.value = 100;
                        this.saveValue = this.value;
                        localData.setDelay(this.value);
                        ALGOSCENE.updateDelayDuration();
                    }
                },
            }),
            sDelay = document.createElement({
                tag: 'li',
                className: 'delay',
                innerHTML: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M32 0C14.3 0 0 14.3 0 32S14.3 64 32 64V75c0 42.4 16.9 83.1 46.9 113.1L146.7 256 78.9 323.9C48.9 353.9 32 394.6 32 437v11c-17.7 0-32 14.3-32 32s14.3 32 32 32H64 320h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V437c0-42.4-16.9-83.1-46.9-113.1L237.3 256l67.9-67.9c30-30 46.9-70.7 46.9-113.1V64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320 64 32zM288 437v11H96V437c0-25.5 10.1-49.9 28.1-67.9L192 301.3l67.9 67.9c18 18 28.1 42.4 28.1 67.9z" /></svg><span>${langData.delay}</span>:`,
                children: [sDelayInput, document.createElement({tag: 'span', innerText: 'ms'})],
            });

        const settingBtn = document.createElement({
            tag: 'button',
            type: 'button',
            key: 'settingBtn',
            className: 'setting',
            title: langData.setting,
            onclick(e) {
                if (!e) e = {target: this};
                if (e.target.classList.contains('setting'))
                    if (this.classList.contains('show')) this.classList.remove('show');
                    else this.classList.add('show');
            },
            innerHTML:
                '<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 512 512"><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"></path></svg>',
            children: [document.createElement({tag: 'ul', children: [sDelay]})],
        });

        const customInputBtn = document.createElement({
            tag: 'button',
            type: 'button',
            title: langData.customizeInput,
            key: 'customInputBtn',
            className: 'custom-input',
            innerHTML:
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm16 64h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm80-176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V144zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zM160 336c0-8.8 7.2-16 16-16H400c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V336zM272 128h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM256 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM368 128h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM352 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V240zM464 128h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM448 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16V240zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16z"/></svg>',
            onclick() {
                document.body.popup.customInput.handle();
            },
        });

        const right = document.createElement({
            className: 'right',
            key: 'right',
            children: [playPauseBtn, customInputBtn, settingBtn, screenBtn],
        });

        const bottombar = document.createElement({
            className: 'bottombar',
            key: 'bottombar',
            children: [left, right],
        });

        const main = document.createElement({
            tag: 'main',
            key: 'main',
            children: [frame, bottombar],
        });

        document.body.appendChild(main);
    }
    rightBox() {
        const informations = document.createElement({
            key: 'informations',
            update(algo) {
                this.innerHTML = this.dess[algo];
            },
            save(dess = {}, names = {}) {
                const tab2 = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
                for (const k in dess) {
                    let t = dess[k];
                    dess[k] = '';
                    for (const l in t)
                        if (typeof t[l] == 'string') t[l] = [t[l]];
                        else t[l] = t[l].map((e) => '- ' + e);
                    switch (localData.lang) {
                        case 'vi':
                            for (const l in t) t[l] = tab2 + t[l].join('<br>' + tab2);
                            break;
                        case 'en':
                            for (const l in t)
                                if (t[l].length != 1) t[l] = tab2 + t[l].join('<br>' + tab2);
                            break;
                    }
                    for (const l in t)
                        dess[k] +=
                            `<label>${langData.information[l]}:</label>` + `<pre>${t[l]}</pre>`;
                }
                for (const k in dess) {
                    dess[k] = dess[k]?.replaceAll('{{', '<span>').replaceAll('}}', '</span>');
                    dess[k] = `<span class="name">${names[k]}</span>` + dess[k];
                }
                this.dess = dess;
            },
        });

        const tbody = document.createElement({
                tag: 'tbody',
            }),
            complexity = document.createElement({
                tag: 'table',
                key: 'complexity',
                children: [tbody],
                save(com = {}) {
                    let t, s;
                    for (const k in com)
                        for (const key in com[k]) {
                            if (com[k][key] == '{none}') {
                                com[k][key] = langData.none;
                                continue;
                            }
                            t = com[k][key];
                            t = t?.replaceAll('{x}', '&times;');
                            while (t?.includes('{^')) {
                                s = t.substring(t.indexOf('{^') + 2, t.indexOf('}'));
                                t = t.replace(`{^${s}}`, `<sup>${s}</sup>`);
                            }
                            t = `<span>${t
                                .split('{el}')
                                .map((e) => `O(${e})`)
                                .join('<br>')}</span>`;
                            com[k][key] = t;
                        }
                    this.com = com;
                },
                onresize() {
                    const elm = Array.from(this.querySelectorAll('tr')).map((e) => {
                            e.childNodes[0].style.width = 'auto';
                            e.childNodes[1].style.width = 'auto';
                            return e;
                        }),
                        right =
                            Math.max(...elm.map((e) => e.childNodes[1].clientWidth)) +
                            this.clientWidth * 0.05,
                        left = this.clientWidth - right;
                    elm.forEach((e) => {
                        e.childNodes[0].style.width = left + 'px';
                        e.childNodes[1].style.width = right + 'px';
                    });
                },
                value: {},
                update(algo) {
                    ['average', 'best', 'worst', 'space'].forEach(
                        (key) => (this.value[key].innerHTML = this.com[algo][key.charAt(0)])
                    );
                },
            });
        ['average', 'best', 'worst', 'space'].forEach((key) => {
            complexity.value[key] = document.createElement({tag: 'td'});
            const tr = document.createElement({
                tag: 'tr',
                innerHTML: `<td>${langData.complexity[key]}</td>`,
                children: [complexity.value[key]],
            });
            tbody.appendChild(tr);
        });
        window.addEventListener('resize', () => complexity.onresize());

        const rightBox = document.createElement({
            id: 'right-box',
            key: 'rightBox',
            children: [
                informations,
                document.createElement({
                    tag: 'label',
                    innerText: langData.information.complexity + ':',
                }),
                complexity,
            ],
        });

        document.body.appendChild(rightBox);
    }
    codeBox() {
        const prolangList = document.createElement({
            className: 'prolang-list',
            key: 'prolangList',
            setActive(lang) {
                this.querySelector('.active')?.classList?.remove('active');
                this.querySelector('.' + lang).classList.add('active');
            },
            createList(prolangs) {
                prolangs = prolangs.split(',').sort();
                prolangs.forEach((lang, id) =>
                    this.appendChild(
                        document.createElement({
                            tag: 'button',
                            type: 'button',
                            id,
                            className: lang,
                            prolang: lang,
                            innerHTML: this.prolangConfig.icon[lang],
                            title: this.prolangConfig.name[lang],
                            onclick: function () {
                                if (this.classList.contains('active')) return;
                                this.parentNode.setActive(this.prolang);
                                document.update();
                            },
                        })
                    )
                );
                this.setActive(prolangs[0]);
            },
            prolangConfig: {
                name: {js: 'JavaScript', cpp: 'C++', py: 'Python'},
                icon: {
                    js: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#ffd600" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path></svg>',
                    cpp: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#00549d" fill-rule="evenodd" d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z" clip-rule="evenodd"></path><path fill="#0086d4" fill-rule="evenodd" d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z" clip-rule="evenodd"></path><path fill="#fff" fill-rule="evenodd" d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z" clip-rule="evenodd"></path><path fill="#0075c0" fill-rule="evenodd" d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z" clip-rule="evenodd"></path><path fill="#fff" fill-rule="evenodd" d="M31 21H33V27H31zM38 21H40V27H38z" clip-rule="evenodd"></path><path fill="#fff" fill-rule="evenodd" d="M29 23H35V25H29zM36 23H42V25H36z" clip-rule="evenodd"></path></svg>',
                    py: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#0277BD" d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"></path><path fill="#FFC107" d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"></path></svg>',
                },
            },
            right() {
                this.setActive(
                    this.childNodes[
                        (Number(this.querySelector('.active').id) + 1) % this.childNodes.length
                    ].prolang
                );
                document.update();
            },
            left() {
                this.setActive(
                    this.childNodes[
                        (Number(this.querySelector('.active').id) - 1 + this.childNodes.length) %
                            this.childNodes.length
                    ].prolang
                );
                document.update();
            },
        });

        const textarea = document.createElement({
            tag: 'textarea',
            style: {
                position: 'absolute',
                opacity: 0,
                pointerEvents: 'none',
            },
        });

        const status = document.createElement({
                tag: 'span',
                className: 'status',
                show(success) {
                    if (success) {
                        this.style.setProperty('--color', 'green');
                        this.innerText = langData.success;
                    } else {
                        this.style.setProperty('--color', 'red');
                        this.innerText = langData.failure;
                    }
                    this.classList.add('show');
                    setTimeout(() => this.classList.remove('show'), 1000);
                },
            }),
            copyCodeBtn = document.createElement({
                tag: 'button',
                type: 'button',
                className: 'copy-code',
                key: 'copyCodeBtn',
                title: langData.copyCode,
                innerHTML:
                    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"></path></svg>',
                children: [status],
                onclick() {
                    try {
                        textarea.value = [...code.querySelectorAll('.view-line')]
                            .map((e) => {
                                return (
                                    (e
                                        .querySelector('.tab')
                                        ?.innerHTML?.replaceAll('&nbsp;', ' ') || '') +
                                    (e.querySelector('.line-code').childNodes[0].innerHTML ==
                                    '&nbsp;'
                                        ? ' '
                                        : e.querySelector('.line-code').innerText)
                                );
                            })
                            .join('\n');
                        textarea.select();
                        document.execCommand('copy');
                        status.show(true);
                    } catch {
                        status.show(false);
                    }
                },
            });

        const settingBtn = document.createElement({
            tag: 'button',
            type: 'button',
            className: 'copy-code',
            title: langData.setting,
            innerHTML:
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"></path></svg>',
        });

        const right = document.createElement({
            className: 'right',
            key: 'right',
            children: [copyCodeBtn, textarea],
        });

        const top = document.createElement({
            className: 'top',
            key: 'top',
            children: [prolangList, right],
        });

        const code = document.createElement({
            tag: 'code',
            key: 'code',
            save(codes, cmts, shortcuts = {}) {
                for (const key in shortcuts)
                    if (shortcuts[key].includes('|'))
                        shortcuts[key] =
                            shortcuts[key]
                                .replace('mtk', '<span class="mtk')
                                .replace('bh', '<span class="bracket-highlighting-')
                                .replace('|', '">') + '</span>';
                shortcuts[' '] = ' ';

                ['1|.', '3|-', '3|+', '3|--', '3|>', '3|<', '3|...', '3|/', '3|%']
                    .map((k) => k.split('|'))
                    .forEach(
                        (k) => (shortcuts[k[1]] = `<span class="mtk${k[0]}">${k[2] || k[1]}</span>`)
                    );

                ['2|()', '1|()']
                    .map((k) => k.split('|'))
                    .forEach((k) =>
                        k[1]
                            .split('')
                            .forEach(
                                (c) =>
                                    (shortcuts[
                                        c + k[0]
                                    ] = `<span class="bracket-highlighting-${k[0]}">${c}</span>`)
                            )
                    );
                let i, r, l;
                for (const f in codes) {
                    for (const s in codes[f]) {
                        if (codes[f][s])
                            codes[f][s] = codes[f][s]
                                .map((e) => {
                                    if (e == '<span>&empty-line;</span>')
                                        return '<span class="line-code"><span>&nbsp;</span></span>';
                                    if (e[0] != '&') return `<span class="line-code">${e}</span>`;
                                    l = Number(e.substring(4, e.indexOf(';')));
                                    r = '';
                                    for (i = 0; i < l; i++) r += '&nbsp;&nbsp;&nbsp;&nbsp;';
                                    r = `<span class="tab">${r}</span><span class="line-code">`;
                                    e = e.replace(`&tab${l};`, r) + '</span>';
                                    return e;
                                })
                                .map((e, i) => `<span order="${++i}" class="view-line">${e}</span>`)
                                .join('');
                        if (cmts[f] && cmts[f][s])
                            cmts[f][s] = cmts[f][s].map((c) => {
                                if (c.includes('{{{') && c.includes('}}}')) {
                                    c = c.substring(3, c.length - 3).split(',');
                                    c = cmts[f][c[0]][Number(c[1])];
                                }
                                l = '';
                                while (c.includes('{')) {
                                    i = c.indexOf('{') + 1;
                                    l += c.substring(0, i).replace('{', '<code>');
                                    c = c.substring(i);
                                    i = c.indexOf('}');
                                    r = c.substring(0, i).split('_');
                                    l += r.map((k) => shortcuts[k]).join('') + '</code>';
                                    c = c.substring(i + 1);
                                }
                                return l + c;
                            });
                        if (s == 'cpp') cmts[f][s] = ['', '', ''].concat(cmts[f][s]);
                    }
                }
                this.codes = codes;
                this.cmts = cmts;
            },
            update(algo, lang) {
                this.innerHTML = this.codes[algo][lang];
                if (this.cmts[algo] && this.cmts[algo][lang])
                    this.querySelectorAll('.view-line').forEach((e, i) => {
                        if (this.cmts[algo][lang][i])
                            e.innerHTML += `<span class="cmt">${this.cmts[algo][lang][i]}</span>`;
                    });
            },
        });

        const codeBox = document.createElement({
            id: 'code-box',
            key: 'codeBox',
            children: [top, code],
        });

        document.body.appendChild(codeBox);
    }
    sizeNotice() {
        const sizeNotice = document.createElement({
            id: 'size-notice',
            innerHTML: langData.sizeNotice,
        });
        document.body.appendChild(sizeNotice);
    }
    footer() {
        const footer = document.createElement({
            tag: 'footer',
            innerHTML: `
            <span>© 2024 TPSquare</span>
            <span>v${localData.version}</span>`,
        });
        document.body.appendChild(footer);
    }
    popup() {
        const overlay = document.createElement({
            tag: 'span',
            className: 'overlay',
            children: ['top', 'right', 'bottom', 'left'].map((e) =>
                document.createElement({
                    className: 'elm-' + e,
                    key: 'elm' + e.charAt(0).toUpperCase() + e.substring(1),
                })
            ),
            handle() {
                if (this.classList.contains('show')) this.classList.remove('show');
                else this.classList.add('show');
            },
            handleElms() {
                if (this.classList.contains('elm-show')) this.classList.remove('elm-show');
                else this.classList.add('elm-show');
            },
            focusTo(elm) {
                const bcr = elm.getBoundingClientRect(),
                    t = 5;

                const top =
                        (bcr.height > window.innerHeight
                            ? t + document.body.header.offsetHeight
                            : bcr.top - t) + 'px',
                    bottom =
                        (bcr.height > window.innerHeight
                            ? t
                            : window.innerHeight - bcr.top - bcr.height - t) + 'px',
                    left = bcr.left - t + 'px',
                    right = window.innerWidth - bcr.left - bcr.width - t + 'px',
                    height = bcr.height + t * 2 + 'px';
                this.elmTop.setStyle({height: top});
                this.elmBottom.setStyle({height: bottom});
                this.elmLeft.setStyle({top, height, width: left});
                this.elmRight.setStyle({top, height, width: right});

                return [left, t];
            },
        });

        const closeConfig = {
            tag: 'button',
            type: 'button',
            className: 'close',
            title: langData.close,
            innerHTML: '&times;',
            onclick() {
                this.parentNode.handle();
            },
        };

        const logoHTML = '<div class="logo"><img src="../../static/logo-with-name.svg" alt=""></div>',
            lineHTML = '<div class="line"></div>';

        const newParagraph = (content) => {
            switch (localData.lang) {
                case 'vi':
                    return `<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${content}</span>`;
                case 'en':
                    return `<span>${content}</span>`;
            }
        };

        const info = document.createElement({
            className: 'info',
            key: 'info',
            children: [
                document.createElement(closeConfig),
                document.createElement({
                    tag: 'fieldset',
                    innerHTML:
                        `<legend>${langData.info___}</legend>` +
                        logoHTML +
                        newParagraph(langData.paragraph1) +
                        newParagraph(langData.paragraph2) +
                        lineHTML +
                        newParagraph(langData.paragraph3) +
                        `<ul class="contact-box">
                            <li class="email"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg><a href="mailto:tps201cn@gmail.com">tps201cn@gmail.com</a></li>
                            <li class="form"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"/></svg><a href="https://forms.gle/3AuzDd1ELquCPyWy8" target="_blank">${langData.googleForms}</a></li>
                        </ul>` +
                        lineHTML +
                        newParagraph(langData.developmentTeam + ':') +
                        `<ul class="development-team">
                            <li>TPSquare - ${langData.leadDeveloper}</li>
                            <li>Hbat - ${langData.graphicDesigner}</li>
                        </ul>` +
                        lineHTML +
                        `<div class="footer"><span>© ${langData.copyright___} TPSquare</span><span>${langData.version}: ${localData.version}</span></div>`,
                }),
            ],
            handle() {
                if (this.classList.contains('show')) this.classList.remove('show');
                else this.classList.add('show');
                overlay.handle();
            },
        });

        // const guide = document.createElement({
        //     className: 'guide',
        //     key: 'guide',
        //     children: [
        //         document.createElement(closeConfig),
        //         document.createElement({
        //             tag: 'fieldset',
        //             innerHTML:
        //                 `<legend>${langData.___guide}</legend>` +
        //                 logoHTML +
        //                 `<div class="start-guide-wrapper"><span>${langData.startGuide}:</span><button class="start-guide" type="button" title="${langData.startGuide}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z"/></svg></button></div>`,
        //         }),
        //     ],
        //     handle,
        // });
        // guide.querySelector('.start-guide').set('onclick', function () {
        //     guide.handle();
        //     overlay.handleElms();
        //     guideMessageElm.handle();
        //     guideController.run();
        // });

        const message = document.createElement({
                className: 'message',
                setText(text) {
                    this.innerHTML = text;
                },
            }),
            previousBtn = document.createElement({
                tag: 'button',
                type: 'button',
                className: 'previous',
                title: langData.previous,
                innerHTML:
                    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 256a208 208 0 1 1 416 0A208 208 0 1 1 48 256zm464 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM217.4 376.9c4.2 4.5 10.1 7.1 16.3 7.1c12.3 0 22.3-10 22.3-22.3V304h96c17.7 0 32-14.3 32-32V240c0-17.7-14.3-32-32-32H256V150.3c0-12.3-10-22.3-22.3-22.3c-6.2 0-12.1 2.6-16.3 7.1L117.5 242.2c-3.5 3.8-5.5 8.7-5.5 13.8s2 10.1 5.5 13.8l99.9 107.1z"/></svg>',
                onclick() {
                    if (!this.disabled) {
                        if (!guideMessageElm.controller.previous()) this.disable();
                        if (nextBtn.disabled) nextBtn.enable();
                    }
                },
                disable() {
                    this.disabled = true;
                    this.classList.add('disabled');
                },
                enable() {
                    this.disabled = false;
                    this.classList.remove('disabled');
                },
            }),
            nextBtn = document.createElement({
                tag: 'button',
                type: 'button',
                className: 'next',
                title: langData.next,
                innerHTML:
                    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 135.1c-4.2-4.5-10.1-7.1-16.3-7.1C266 128 256 138 256 150.3V208H160c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h96v57.7c0 12.3 10 22.3 22.3 22.3c6.2 0 12.1-2.6 16.3-7.1l99.9-107.1c3.5-3.8 5.5-8.7 5.5-13.8s-2-10.1-5.5-13.8L294.6 135.1z"/></svg>',
                onclick() {
                    if (!this.disabled) {
                        if (!guideMessageElm.controller.next()) this.disable();
                        if (previousBtn.disabled) previousBtn.enable();
                    }
                },
                disable() {
                    this.disabled = true;
                    this.classList.add('disabled');
                },
                enable() {
                    this.disabled = false;
                    this.classList.remove('disabled');
                },
            }),
            line = document.createElement({
                className: 'line',
                setLen(len) {
                    this.style.setProperty('--len', len);
                },
                setCurrent(cur) {
                    this.style.setProperty('--cur', cur);
                },
            }),
            bottombar = document.createElement({
                className: 'bottombar',
                children: [previousBtn, line, nextBtn],
            }),
            guideMessageElm = document.createElement({
                tag: 'section',
                className: 'guide-box',
                key: 'guideMessageElm',
                children: [
                    message,
                    bottombar,
                    document.createElement({
                        tag: 'button',
                        type: 'button',
                        className: 'close',
                        title: langData.close,
                        innerHTML: '&times;',
                        onclick() {
                            overlay.handleElms();
                            guideMessageElm.handle();
                        },
                    }),
                ],
                handle() {
                    if (this.classList.contains('show')) this.classList.remove('show');
                    else this.classList.add('show');
                },
                controller: new (class {
                    constructor() {
                        this.identifier = 2001;
                        this.config = [
                            () =>
                                this.focusTo(
                                    document.body.main.frame,
                                    langData.guideMessage.algorithm___
                                ),
                            () =>
                                this.focusTo(
                                    document.body.main.bottombar.left.algoListWrapper,
                                    langData.guideMessage.select___
                                ),
                            () =>
                                this.focusTo(
                                    document.body.main.bottombar.right.playPauseBtn,
                                    langData.guideMessage.run___
                                ),
                            () =>
                                this.focusTo(
                                    document.body.main.bottombar.right.customInputBtn,
                                    langData.guideMessage.change___
                                ),
                            () =>
                                this.focusTo(
                                    document.body.main.bottombar.right.settingBtn,
                                    langData.guideMessage.set___
                                ),
                            () =>
                                this.focusTo(
                                    document.body.main.bottombar.right.screenBtn,
                                    langData.guideMessage.toggle___
                                ),

                            () =>
                                this.focusTo(
                                    document.body.rightBox,
                                    langData.guideMessage.information___
                                ),
                            () =>
                                this.focusTo(
                                    document.body.codeBox.code,
                                    langData.guideMessage.___code
                                ),
                            () =>
                                this.focusTo(
                                    document.body.codeBox.code.querySelector('span'),
                                    langData.guideMessage.hover___
                                ),
                            () =>
                                this.focusTo(
                                    document.body.codeBox.top.prolangList,
                                    langData.guideMessage.choose___
                                ),
                            () =>
                                this.focusTo(
                                    document.body.codeBox.top.right.copyCodeBtn,
                                    langData.guideMessage.copy___
                                ),
                        ];
                        this.length = this.config.length;
                        line.setLen(this.length);
                    }
                    run() {
                        overlay.handleElms();
                        guideMessageElm.handle();

                        this.current = 0;
                        this.config[0]();
                        previousBtn.disable();
                        nextBtn.enable();
                        line.setCurrent(this.current);
                    }
                    next() {
                        this.config[++this.current]();
                        line.setCurrent(this.current);
                        if (this.current + 1 >= this.length) return false;
                        return true;
                    }
                    previous() {
                        this.config[--this.current]();
                        line.setCurrent(this.current);
                        if (this.current - 1 < 0) return false;
                        return true;
                    }
                    async focusTo(elm, text) {
                        message.setText(text);

                        await window.scrollToElement(elm, 'center');

                        const [left, t] = overlay.focusTo(elm);
                        const bcr = elm.getBoundingClientRect();

                        const rect = guideMessageElm.getBoundingClientRect(),
                            styles = {},
                            e = 20;
                        if (bcr.top + bcr.height / 2 < window.innerHeight / 2)
                            styles.top = bcr.top + bcr.height - e;
                        else styles.top = bcr.top - rect.height - e;
                        if (styles.top < 0) styles.top = 10;
                        styles.top += 'px';
                        if (bcr.left < window.innerWidth / 2) styles.left = left;
                        else styles.left = bcr.left + bcr.width + t - rect.width + 'px';
                        guideMessageElm.style = '';
                        guideMessageElm.setStyle(styles);
                    }
                })(),
            });
        previousBtn.disable();

        const constraints = document.createElement({
                tag: 'i',
                className: 'constraints',
                key: 'constraints',
            }),
            input = document.createElement({
                tag: 'textarea',
                title: langData.customizeInput,
                handle() {
                    let value = this.value
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
                },
                clearValue() {
                    this.value = '';
                },
                isEditOnFrame() {
                    customInput.removeChild(this);
                },
            }),
            customBtn = document.createElement({
                tag: 'button',
                type: 'button',
                className: 'custom',
                title: langData.apply,
                innerText: langData.apply,
                onclick() {
                    customInput.onApply(input.handle());
                },
                isEditOnFrame() {
                    this.title = langData.edit;
                    this.innerText = langData.edit;
                    this.onclick = async () => {
                        ALGOSCENE.resetAction();
                        customInput.handle();
                        document.body.overflow(false);
                        await window.scrollToElement(document.body.main.frame, 'center');
                        await window.delay(100);
                        document.body.main.frame.enableEditing();
                        overlay.handleElms();
                        overlay.focusTo(document.body.main.frame);
                        popup.applyFrameEditingBtn.handle();
                    };
                },
            }),
            closeBtn = document.createElement({
                tag: 'button',
                type: 'button',
                className: 'close',
                title: langData.close,
                innerText: langData.close,
                onclick() {
                    customInput.handle();
                },
            }),
            customInput = document.createElement({
                tag: 'section',
                key: 'customInput',
                className: 'custom-input',
                children: [
                    document.createElement({
                        className: 'title',
                        attributes: {'data-text': langData.customizeInput},
                    }),
                    constraints,
                    input,
                    document.createElement({
                        className: 'btns',
                        children: [closeBtn, customBtn],
                    }),
                ],
                handle() {
                    if (this.classList.contains('show')) this.classList.remove('show');
                    else {
                        this.classList.add('show');
                        input.clearValue();
                    }
                    overlay.handle();
                },
                onApply: null,
                setCurrentValue(value) {
                    this.currentValue = value;
                    input.setAttribute('placeholder', value);
                },
                setConstraints(list) {
                    constraints.innerHTML = list.map((e) => '*' + e).join('<br>');
                },
                notify: {
                    success: () => {
                        customInput.classList.add('success');
                        setTimeout(() => customInput.classList.remove('success'), 1000);
                    },
                    failure: () => {
                        customInput.classList.add('failure');
                        setTimeout(() => customInput.classList.remove('failure'), 1000);
                    },
                },
                isEditOnFrame() {
                    customBtn.isEditOnFrame();
                    input.isEditOnFrame();

                    const applyFrameEditingBtn = document.createElement({
                        tag: 'button',
                        type: 'button',
                        key: 'applyFrameEditingBtn',
                        className: 'apply-frame-editing',
                        innerText: langData.apply,
                        title: langData.apply,
                        onclick() {
                            document.body.overflow(true);
                            document.body.main.frame.disableEditing();
                            overlay.handleElms();
                            this.handle();
                            customInput.onApply();
                        },
                        handle() {
                            if (this.classList.contains('show')) this.classList.remove('show');
                            else {
                                this.classList.add('show');

                                const {top, width, left} =
                                    document.body.main.frame.getBoundingClientRect();
                                this.setStyle({
                                    bottom: window.innerHeight - top + 10 + 'px',
                                    right: window.innerWidth - left - width + 'px',
                                });
                            }
                        },
                    });
                    popup.appendChild(applyFrameEditingBtn);
                },
            });

        const popup = document.createElement({
            id: 'popup',
            key: 'popup',
            children: [overlay, info, guideMessageElm, customInput],
        });

        document.body.appendChild(popup);
    }
    developing(ok) {
        if (ok) {
            console.warn('Development mode is enabled');
            window.dev = {
                getCodeData: (input) => {
                    const t = document.createElement('div'),
                        r = [];
                    let i, s, f, h;
                    t.innerHTML = input;
                    t.childNodes[0].childNodes.forEach((e) => {
                        for (i = 0; i <= 10; i++)
                            e.childNodes[0]
                                .querySelectorAll('.bracket-highlighting-' + i)
                                .forEach((e) => (e.className = 'bracket-highlighting-' + i));
                        h = '';
                        let html = e.childNodes[0].innerHTML;
                        for (i = 1; i <= 10; i++) {
                            s = '&tab' + i + ';';
                            h += '&nbsp;&nbsp;&nbsp;&nbsp;';
                            f = `<span class="mtk1">${h}</span>`;
                            html = html.replaceAll(f, s);
                        }
                        '1,6'
                            .split(',')
                            .forEach(
                                (e) =>
                                    (html = html
                                        .replaceAll(`<span class="mtk${e}">&nbsp;</span>`, ' ')
                                        .replaceAll(
                                            `<span class="mtk${e}">&nbsp;`,
                                            ` <span class="mtk${e}">`
                                        ))
                            );
                        html = html
                            .replaceAll('<span></span>', '<span>&empty-line;</span>')
                            .replaceAll('&nbsp;</span>', '</span> ');
                        for (let i = 0; i <= 10; i++)
                            html = html.replaceAll(
                                `<span class="mtk${e}">&nbsp;`,
                                ` <span class="mtk${e}">`
                            );
                        html = html.replaceAll('&nbsp;', '</span> <span class="mtk1">');
                        r.push(html);
                    });
                    console.log(r);
                },
            };
        } else {
            document.head.innerHTML += '<style>*{pointer-events:none;}</style>';
        }
    }
})();

for (let i = 0; i < 5; i++) {
    window.dispatchEvent(new Event('resize'));
    await window.delay(100);
}
