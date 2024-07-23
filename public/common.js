'use strict';

import MODULES from '/modules.js';

document.LANG = document.querySelector('html').lang;
document.TYPE = document.body.getAttribute('type');
document.KEY = document.body.getAttribute('key');

const SHORTCUT_CONFIG = {
    prolangList: ['A', 'D'],
    bottombarList: ['W', 'S'],
    playPauseBtn: 'P',
    screenBtn: 'F',
    homeBtn: 'H',
    expandBtn: 'E'
};

new (class {
    constructor() {
        this.document();
        this.window();
        this.configShortcut();
        this.header();
        this.main();
        this.informations();
        this.codeBox();
        this.popup();
        this.shortcut();
        this.developing(localData.developing);
    }
    window() {
        MODULES.upgradeWindow();

        window.ALGOSCENE = {
            init() {
                this.setElms();
                document.update();
            },
            developing: localData.developing,
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
                if (key == document.body.main.bottombar.list.value) this.runAction(key);
            },
            runAction(key, save = true) {
                ALGOSCENE.playPauseBtn.reset();
                this.currentAction = key;
                this.frameElm.innerHTML = this.frameHTML;
                if (this.actions[key]) this.actions[key]();
                else console.warn(`There are no actions for '${key}'`);
                this.frameElm.className = key;
                if (save) localData.history[document.TYPE].update(document.KEY, key);
            },
            endAction() {},
            resetAction() {
                this.runAction(this.currentAction);
            },
            createComplexity: (a, b, w, s) => ({average: a, best: b, worst: w, space: s}),
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
            enableSelectAction(config) {
                this.playPauseBtn.enableSelection(config);
                document.body.popup.enableSelectAction(config);
            },
            setElms() {
                this.frameElm = document.body.main.frame;
                this.playPauseBtn = document.body.main.bottombar.playPauseBtn;
                this.customInput = document.body.popup.customInput;
            }
        };
    }
    document() {
        if (document.settings.singleInformation)
            document.update = function () {
                const lang = this.body.codeBox.prolangList.querySelector('.active').classList[0],
                    key = this.body.main.bottombar.list.value;
                this.updatePageTitle(key);
                this.body.codeBox.update(key, lang);
            };
        else
            document.update = function () {
                const lang = this.body.codeBox.prolangList.querySelector('.active').classList[0],
                    key = this.body.main.bottombar.list.value;
                this.updatePageTitle(key);
                this.body.codeBox.update(key, lang);
                this.body.informations.update(key);
            };

        document.updatePageTitle = function (key) {
            const t = this.body.main.bottombar.list;
            key = t.querySelector(`option[value="${key}"]`).innerHTML;
            this.head.querySelector('title').innerHTML =
                key + '&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;AlgoScene';
        };

        document.body.overflow = function (ok) {
            this.style.setProperty('overflow', ok ? '' : 'hidden');
        };

        MODULES.upgradeDocument();
    }
    header() {
        const header = document.body.querySelector('header');
        document.body.header = header;

        header.querySelector('.right > .lang').combine({
            onclick() {
                if (this.innerHTML == 'en') this.goTo('vi');
                else this.goTo('en');
            },
            goTo(lang) {
                window.location.href = this.baseURI.replace(`/${document.LANG}`, `/${lang}`);
            }
        });

        header.querySelector('.right > .info').onclick = () => document.body.popup.info.handle();

        header.querySelector('.right > .guide').onclick = () => {
            localData.history.guide.reset();
            document.body.popup.guideBox.run();
        };

        const homeBtn = header.querySelector('.home').combine({
            click() {
                window.location.href = this.href;
            }
        });
        homeBtn.title += ` (${SHORTCUT_CONFIG.homeBtn})`;
        document.body.header.homeBtn = homeBtn;
    }
    main() {
        const main = document.body.querySelector('main');
        document.body.main = main;

        const frame = main.querySelector('#frame').combine({
            onresize() {
                const w = this.parentNode.offsetWidth,
                    h =
                        window.innerHeight -
                        this.parentNode.offsetTop -
                        bottombar.offsetHeight -
                        20;
                if ((w * 9) / 16 <= h) this.width = w;
                else this.width = (h * 16) / 9;
                this.height = (this.width * 9) / 16;
                this.em = this.height / 100;
                this.setStyle({
                    width: this.width + 'px',
                    height: this.height + 'px',
                    '--em': this.em + 'px'
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
            }
        });
        window.addEventListener('resize', () => frame.onresize());
        document.body.main.frame = frame;

        const bottombar = main.querySelector('.bottombar');
        document.body.main.bottombar = bottombar;

        const listWrapper = bottombar.querySelector('.left > .list-wrapper');
        document.body.main.bottombar.listWrapper = listWrapper;

        const list = bottombar.querySelector('.left .list').combine({
            onchange() {
                document.update();
                window.ALGOSCENE.runAction(this.value);
            },
            setStartValue() {
                this.value =
                    localData.history[document.TYPE][document.KEY] || this.childNodes[0].value;
            },
            up() {
                this.selectedIndex =
                    (Array.from(this.children).indexOf(
                        this.querySelector(`option[value="${this.value}"]`)
                    ) -
                        1 +
                        this.children.length) %
                    this.children.length;
                this.onchange();
            },
            down() {
                this.selectedIndex =
                    (Array.from(this.children).indexOf(
                        this.querySelector(`option[value="${this.value}"]`)
                    ) +
                        1) %
                    this.children.length;
                this.onchange();
            }
        });
        list.title += ` (${SHORTCUT_CONFIG.bottombarList[0]})(${SHORTCUT_CONFIG.bottombarList[1]})`;
        list.setStartValue();
        document.body.main.bottombar.list = list;

        const playPauseBtn = bottombar.querySelector('.right > .play-pause').combine({
            playIcon:
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path></svg>',
            resetIcon:
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H48.5z"/></svg>',
            pauseIcon:
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/></svg>',
            selectIcon:
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>',
            titleConfig: {
                pause: 'pauseIcon',
                continue: 'playIcon',
                repeat: 'resetIcon',
                play: 'playIcon',
                select: 'selectIcon'
            },
            getTextData() {
                const data = this.getAttribute('data').split(',');
                this.textData = {
                    play: data[0],
                    pause: data[1],
                    continue: data[2],
                    repeat: data[3],
                    select: data[4]
                };
                for (const key in this.textData)
                    this.textData[key] += ` (${SHORTCUT_CONFIG.playPauseBtn})`;
            },
            defaultStatus: 'play',
            setStatus(status) {
                this.title = this.textData[status];
                this.innerHTML = this[this.titleConfig[status]];
            },
            async onclick() {
                if (this.isPlaying) {
                    if (this.isPausing) {
                        this.isPausing = false;
                        this.setStatus('pause');
                    } else {
                        this.isPausing = true;
                        this.setStatus('continue');
                    }
                } else {
                    this.isPlaying = true;
                    this.setStatus('pause');
                    await this.click(this.actionInput);
                    await this.endAction();
                    this.reset();
                }
            },
            async endAction() {
                this.isPausing = true;
                this.setStatus('repeat');
                await ALGOSCENE.delay(0);
                ALGOSCENE.resetFrame.reset();
            },
            reset() {
                this.isPlaying = false;
                this.isPausing = false;
                this.setStatus(this.defaultStatus);
            },
            enableSelection(config) {
                this.defaultStatus = 'select';
                this.clickConfig = config.actions;
                this.endAction = async () => {
                    this.click = () => {
                        document.body.popup.selectAction.handle();
                    };
                };
            },
            setClick(key, input) {
                ALGOSCENE.resetFrame.reset();
                this.actionInput = input;
                this.click = this.clickConfig[key].action;
                this.setStatus('play');
            }
        });
        playPauseBtn.getTextData();
        document.body.main.bottombar.playPauseBtn = playPauseBtn;

        const screenBtn = bottombar.querySelector('.right > .screen').combine({
            open() {
                document.openFullScreen(document.body.main);
                this.onclick = this.close;
                this.title = this.textData.exitFullScreen;
                this.innerHTML =
                    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V64zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32H96v64c0 17.7 14.3 32 32 32s32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V64zM320 320c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32s32-14.3 32-32V384h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320z"/></svg>';
            },
            close() {
                document.closeFullScreen();
                this.onclick = this.open;
                this.title = this.textData.fullScreen;
                this.innerHTML =
                    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"></path></svg>';
            },
            getTextData() {
                const data = this.getAttribute('data').split(',');
                this.textData = {
                    fullScreen: data[0] + ` (${SHORTCUT_CONFIG.screenBtn})`,
                    exitFullScreen: data[1] + ` (${SHORTCUT_CONFIG.screenBtn})`
                };
            }
        });
        screenBtn.getTextData();
        screenBtn.close();
        document.body.main.bottombar.screenBtn = screenBtn;

        const settingBtn = bottombar.querySelector('.right > .setting').combine({
            onclick(e) {
                if (!e) e = {target: this};
                if (e.target.classList.contains('setting'))
                    if (this.classList.contains('show')) this.classList.remove('show');
                    else this.classList.add('show');
            }
        });
        document.body.main.bottombar.settingBtn = settingBtn;

        settingBtn.querySelector('ul > .delay > input').combine({
            value: localData.delay,
            saveValue: localData.delay,
            min: 50,
            onblur() {
                if (isNaN(this.value)) this.value = this.saveValue;
                else {
                    if (Number(this.value) < this.min) this.value = this.min;
                    this.saveValue = this.value;
                    localData.setDelay(this.value);
                    ALGOSCENE.updateDelayDuration();
                }
            }
        });

        const customInputBtn = bottombar
            .querySelector('.right > .custom-input')
            .combine({onclick: () => document.body.popup.customInput.handle()});
        document.body.main.bottombar.customInputBtn = customInputBtn;
    }
    informations() {
        const informations = document.body.querySelector('#informations').combine({
            update(key) {
                this.querySelector('.show')?.classList?.remove('show');
                this.querySelector(`.${key}`).classList.add('show');
                this.setComplexity();
            },
            onresize() {
                this.complexity?.onresize();
            },
            setComplexity() {
                this.complexity = this.querySelector(`.show tbody`).combine({
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
                    }
                });
                this.complexity.onresize();
            }
        });
        window.addEventListener('resize', () => {
            informations.onresize();
            setTimeout(() => informations.onresize(), 1000);
        });
        document.body.informations = informations;
        if (document.settings.singleInformation) informations.setComplexity();

        const expandBtn = informations.querySelector('.expand').combine({
            onclick: () => {
                if (informations.classList.contains('expand'))
                    informations.classList.remove('expand');
                else informations.classList.add('expand');
                setTimeout(() => informations.onresize(), 1000);
            }
        });
        expandBtn.title += ` (${SHORTCUT_CONFIG.expandBtn})`;
        document.body.informations.expandBtn = expandBtn;
    }
    codeBox() {
        const codeBox = document.body.querySelector('#code-box').combine({
            update(key, lang) {
                codes.update(key, lang);
                usage.update(key, lang);
            }
        });
        document.body.codeBox = codeBox;

        const prolangList = codeBox.querySelector('.top > .prolang-list').combine({
            setActive(lang) {
                this.querySelector('.active')?.classList?.remove('active');
                if (lang) this.okActive(lang);
                let i = 0;
                do lang = localData.history.lang.get(i++);
                while (!this.okActive(lang) && lang);
                if (!this.querySelector('.active')) this.okActive(this.childNodes[0].className);
            },
            okActive(lang) {
                const elm = this.querySelector('.' + lang);
                let ok = !!elm;
                if (ok) {
                    localData.history.lang.update(lang);
                    elm.classList.add('active');
                    this.style.setProperty('--activeID', elm.id);
                }
                return ok;
            },
            right() {
                const index =
                    (Number(this.querySelector('.active').id) + 1) % this.childNodes.length;
                this.setActive(this.childNodes[index].prolang);
                document.update();
            },
            left() {
                const index =
                    (Number(this.querySelector('.active').id) - 1 + this.childNodes.length) %
                    this.childNodes.length;
                this.setActive(this.childNodes[index].prolang);
                document.update();
            },
            setButton() {
                this.childNodes.forEach((button) => {
                    button.prolang = button.className;
                    button.title += ` (${SHORTCUT_CONFIG.prolangList[0]})(${SHORTCUT_CONFIG.prolangList[1]})`;
                    button.onclick = function () {
                        if (this.classList.contains('active')) return;
                        this.parentNode.setActive(this.prolang);
                        document.update();
                    };
                });
            }
        });
        prolangList.setButton();
        prolangList.setActive();
        document.body.codeBox.prolangList = prolangList;

        const textarea = codeBox.querySelector('textarea');

        const codes = codeBox.querySelector('.codes').combine({
            update(key, lang) {
                this.querySelector('.show')?.classList?.remove('show');
                this.querySelector(`.${key}.${lang}`).classList.add('show');
            }
        });
        document.body.codeBox.codes = codes;

        const usage = codeBox.querySelector('.usage').combine({
            update(key, lang) {
                this.querySelector('.show')?.classList?.remove('show');
                this.querySelector(`.${key}.${lang}`).classList.add('show');

                labelName.update(lang);
            }
        });
        document.body.codeBox.usage = usage;

        const labelName = usage.querySelector('.label-name').combine({
            update(lang) {
                labelNameIcon.update(lang);
                labelNameExtension.innerText = lang;
            }
        });

        const labelNameIcon = labelName.querySelector('.icon').combine({
            data: (() => {
                const data = {};
                prolangList.childNodes.forEach((e) => (data[e.classList[0]] = e.innerHTML));
                return data;
            })(),
            update(lang) {
                this.innerHTML = this.data[lang];
            }
        });

        const labelNameExtension = labelName.querySelector('.extension');

        const copyCodeBtnConfig = {
            innerHTML:
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"></path></svg>',
            onclick() {
                if (this.classList.contains('success') || this.classList.contains('failure'))
                    return;
                try {
                    textarea.value = [...this.parentNode.querySelectorAll('code.show .view-line')]
                        .map((e) => e.innerText.replaceAll(' ', ' '))
                        .join('\n');
                    textarea.select();
                    document.execCommand('copy');
                    this.success();
                } catch {
                    this.failure();
                }
            },
            success() {
                this.classList.add('success');
                setTimeout(() => this.classList.remove('success'), 1000);
            },
            failure() {
                this.classList.add('failure');
                setTimeout(() => this.classList.remove('failure'), 1000);
            }
        };

        const copyCodeBtn = codes.querySelector('.copy-code').combine(copyCodeBtnConfig);
        document.body.codeBox.copyCodeBtn = copyCodeBtn;

        usage.querySelector('.copy-code').combine(copyCodeBtnConfig);
    }
    popup() {
        const popup = document.body.querySelector('#popup').combine({
            enableSelectAction(config) {
                const selectAction = popup.querySelector('.select-action').combine({
                    style: `--span-width:${config.elmSize[0]}em;--input-width:${config.elmSize[1]}em;`,
                    handle() {
                        if (this.classList.contains('show')) this.classList.remove('show');
                        else {
                            this.classList.add('show');
                            if (!localData.history.guide.selectAction)
                                guideBox.controller.run('selectAction', 1000);
                        }
                        overlay.handle();
                    }
                });
                document.body.popup.selectAction = selectAction;

                selectAction.querySelector('.close').onclick = () => selectAction.handle();

                const textData = {
                    select: selectAction.querySelector('.title').getAttribute('data-text')
                };
                Object.keys(config.actions)
                    .filter((key) => !config.actions[key].hidden)
                    .map((key) => {
                        const input = document.createElement({
                            tag: 'input',
                            key: 'input',
                            attributes: {placeholder: config.actions[key].input || ''}
                        });
                        const button = document.createElement({
                            tag: 'button',
                            type: 'button',
                            title: textData.select,
                            innerHTML:
                                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path></svg>',
                            onclick() {
                                const input = document
                                    .removeExtraWhitespace(this.parentNode.input.value)
                                    .split(' ')
                                    .map((e) => Number(e));
                                if (config.actions[key].checkInput(input)) {
                                    document.body.main.bottombar.playPauseBtn.setClick(key, input);
                                    this.parentNode.input.value = '';
                                    selectAction.handle();
                                } else {
                                    this.classList.add('error');
                                    setTimeout(() => this.classList.remove('error'), 200);
                                }
                            }
                        });
                        selectAction.appendChild(
                            document.createElement({
                                tag: 'section',
                                className: key,
                                innerHTML: `<span>${key}:</span>`,
                                children: [input, button]
                            })
                        );
                    });
            }
        });
        document.body.popup = popup;

        const overlay = popup.querySelector('.overlay').combine({
            handle() {
                if (this.classList.contains('show')) this.classList.remove('show');
                else this.classList.add('show');
            }
        });
        document.body.popup.overlay = overlay;

        const multiOverlay = popup.querySelector('.multi-overlay').combine({
            handle(enableClick = false) {
                if (this.classList.contains('show')) this.classList.remove('show');
                else {
                    this.classList.add('show');
                    this.setAttribute('enableClick', enableClick);
                }
            },
            focusTo(elm) {
                const bcr = elm.getBoundingClientRect(),
                    t = Math.min(5, window.innerWidth / 100);

                const top = Math.max(t + document.body.header.offsetHeight, bcr.top - t),
                    bottom = Math.max(t, window.innerHeight - bcr.top - bcr.height - t),
                    left = Math.max(bcr.left - t, t),
                    right = Math.max(window.innerWidth - bcr.left - bcr.width - t, t),
                    height = window.innerHeight - top - bottom + t + t;

                this.elmTop.style = `height:${top}px`;
                this.elmBottom.style = `height:${bottom}px`;
                this.elmLeft.style = `top:${top - t}px;height:${height}px;width:${left}px;`;
                this.elmRight.style = `top:${top - t}px;height:${height}px;width:${right}px;`;

                return [left, t];
            },
            setElm() {
                const f = ({className}) => {
                    const key = 'elm' + className.charAt(0).toUpperCase() + className.substring(1);
                    this[key] = this.querySelector('.' + className);
                };
                this.childNodes.forEach(f);
            }
        });
        multiOverlay.setElm();

        const info = popup.querySelector('#info').combine({
            handle: function () {
                if (this.classList.contains('show')) this.classList.remove('show');
                else this.classList.add('show');
                overlay.handle();
            }
        });
        document.body.popup.info = info;

        info.querySelector('.close').onclick = () => info.handle();

        const guideBox = popup.querySelector('.guide-box').combine({
            handle() {
                if (this.classList.contains('show')) this.classList.remove('show');
                else this.classList.add('show');
            },
            async run(key = 'main', delay = 0) {
                await this.controller.run(key, delay);
            },
            controller: new (class {
                constructor() {
                    this.identifier = 2001;
                    const listWrapperIndex = (() => {
                        switch (document.TYPE) {
                            case 'a':
                                return 1;
                            case 'ds':
                                return 2;
                            default:
                                console.warn('Unknown type: ' + document.TYPE);
                        }
                    })();
                    this.config = {
                        main: [
                            () => this.focusTo(document.body.main.frame, 0),
                            () =>
                                this.focusTo(
                                    document.body.main.bottombar.listWrapper,
                                    listWrapperIndex
                                ),
                            () => this.focusTo(document.body.main.bottombar.playPauseBtn, 3),
                            () => this.focusTo(document.body.main.bottombar.customInputBtn, 4),
                            () => this.focusTo(document.body.main.bottombar.settingBtn, 5),
                            () => this.focusTo(document.body.main.bottombar.screenBtn, 6),
                            () => this.focusTo(document.body.informations, 11),
                            () => this.focusTo(document.body.codeBox.codes, 7),
                            () =>
                                this.focusTo(
                                    document.body.codeBox.codes.querySelector('.show span'),
                                    9
                                ),
                            () => this.focusTo(document.body.codeBox.prolangList, 8),
                            () => this.focusTo(document.body.codeBox.copyCodeBtn, 10)
                        ],
                        customInputDefault: [
                            () => this.focusTo(document.body.popup.customInput, 12),
                            () => this.focusTo(document.body.popup.customInput.constraints, 13),
                            () => this.focusTo(document.body.popup.customInput.input, 14),
                            () => this.focusTo(document.body.popup.customInput.customBtn, 15)
                        ],
                        customInputFrame: [
                            () => this.focusTo(document.body.popup.customInput, 16),
                            () => this.focusTo(document.body.popup.customInput.constraints, 17),
                            () => this.focusTo(document.body.popup.customInput.customBtn, 18)
                        ],
                        selectAction: [
                            () => this.focusTo(document.body.popup.selectAction, 19),
                            () => {
                                const elm =
                                    document.body.popup.selectAction.querySelector('section span');
                                this.focusTo(elm, 20);
                            },
                            () => {
                                const elm =
                                    document.body.popup.selectAction.querySelector('section input');
                                this.focusTo(elm, 21);
                            },
                            () => {
                                const elm =
                                    document.body.popup.selectAction.querySelector(
                                        'section button'
                                    );
                                this.focusTo(elm, 22);
                            }
                        ]
                    };
                }
                setConfig(key) {
                    this.currentConfig = this.config[key];
                    this.length = this.currentConfig.length;
                    line.setLen(this.length);
                }
                async run(key, delay) {
                    document.body.overflow(false);
                    multiOverlay.handle();
                    await window.delay(delay);
                    localData.history.guide.update(key);
                    guideBox.handle();

                    this.setConfig(key);
                    this.currentIndex = 0;
                    this.currentConfig[0]();
                    previousGuideBtn.disable();
                    nextGuideBtn.enable();
                    line.setCurrent(this.currentIndex);
                }
                next() {
                    this.currentConfig[++this.currentIndex]();
                    line.setCurrent(this.currentIndex);
                    if (this.currentIndex + 1 >= this.length) return false;
                    return true;
                }
                previous() {
                    this.currentConfig[--this.currentIndex]();
                    line.setCurrent(this.currentIndex);
                    if (this.currentIndex - 1 < 0) return false;
                    return true;
                }
                async focusTo(elm, textIndex) {
                    messageGuideBox.setText(this.textData[textIndex]);

                    await window.scrollToElement(elm, 'center');

                    const [left, t] = multiOverlay.focusTo(elm);
                    const bcr = elm.getBoundingClientRect();

                    const rect = guideBox.getBoundingClientRect(),
                        styles = {},
                        e = t * 4;
                    styles.top = Math.max(bcr.top - rect.height - e, 10) + 'px';
                    if (bcr.left < window.innerWidth / 2) styles.left = left;
                    else styles.left = bcr.left + bcr.width + t - rect.width;
                    if (styles.left < 0) styles.left = 2;
                    styles.left += 'px';
                    guideBox.style = '';
                    guideBox.setStyle(styles);
                }
            })(),
            getTextData() {
                this.controller.textData = this.querySelector('.data').innerText.split('|');
            }
        });
        guideBox.getTextData();
        document.body.popup.guideBox = guideBox;

        guideBox.querySelector('button.close').onclick = () => {
            multiOverlay.handle();
            guideBox.handle();
            document.body.overflow(true);
        };

        const messageGuideBox = guideBox.querySelector('.message').combine({
            setText(text) {
                this.innerHTML = text;
            }
        });

        const previousGuideBtn = guideBox.querySelector('button.previous').combine({
            onclick() {
                if (this.disabled) return;
                if (!guideBox.controller.previous()) this.disable();
                if (nextGuideBtn.disabled) nextGuideBtn.enable();
            },
            disable() {
                this.disabled = true;
                this.classList.add('disabled');
            },
            enable() {
                this.disabled = false;
                this.classList.remove('disabled');
            }
        });
        previousGuideBtn.disable();

        const nextGuideBtn = guideBox.querySelector('button.next').combine({
            onclick() {
                if (this.disabled) return;
                if (!guideBox.controller.next()) this.disable();
                if (previousGuideBtn.disabled) previousGuideBtn.enable();
            },
            disable() {
                this.disabled = true;
                this.classList.add('disabled');
            },
            enable() {
                this.disabled = false;
                this.classList.remove('disabled');
            }
        });

        const line = guideBox.querySelector('.line').combine({
            setLen(len) {
                this.style.setProperty('--len', len);
            },
            setCurrent(cur) {
                this.style.setProperty('--cur', cur);
            }
        });

        const customInput = popup.querySelector('.custom-input').combine({
            handle() {
                if (this.classList.contains('show')) this.classList.remove('show');
                else {
                    this.classList.add('show');
                    inputCustomInput.clearValue();
                    if (!localData.history.guide[this.guideKey])
                        guideBox.controller.run(this.guideKey, 1000);
                }
                overlay.handle();
            },
            guideKey: 'customInputDefault',
            onApply: null,
            setCurrentValue(value) {
                this.currentValue = value;
                inputCustomInput.setAttribute('placeholder', value);
            },
            setConstraints(list) {
                constraintsCustomInput.innerHTML = list.map((e) => '*' + e).join('<br>');
            },
            notify: {
                success: () => {
                    ALGOSCENE.resetAction();
                    customInput.classList.add('success');
                    setTimeout(() => customInput.classList.remove('success'), 1000);
                },
                failure: () => {
                    customInput.classList.add('failure');
                    setTimeout(() => customInput.classList.remove('failure'), 1000);
                }
            },
            isEditOnFrame() {
                customBtn.isEditOnFrame();
                inputCustomInput.isEditOnFrame();
                this.guideKey = 'customInputFrame';

                const applyFrameEditingBtn = popup.querySelector('.apply-frame-editing').combine({
                    style: '',
                    onclick() {
                        document.body.overflow(true);
                        document.body.main.frame.disableEditing();
                        multiOverlay.handle();
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
                                right: window.innerWidth - left - width + 'px'
                            });
                        }
                    }
                });
                document.body.popup.applyFrameEditingBtn = applyFrameEditingBtn;
            }
        });
        document.body.popup.customInput = customInput;

        const constraintsCustomInput = customInput.querySelector('.constraints');
        document.body.popup.customInput.constraints = constraintsCustomInput;

        const inputCustomInput = customInput.querySelector('textarea').combine({
            handle() {
                return document.removeExtraWhitespace(this.value);
            },
            clearValue() {
                this.value = '';
            },
            isEditOnFrame() {
                customInput.removeChild(this);
            }
        });
        document.body.popup.customInput.input = inputCustomInput;

        customInput.querySelector('button.close').onclick = () => customInput.handle();

        const customBtn = customInput.querySelector('button.custom').combine({
            onclick() {
                customInput.onApply(inputCustomInput.handle());
            },
            isEditOnFrame() {
                this.getTextData();
                this.title = this.textData.edit;
                this.innerText = this.textData.edit;
                this.onclick = async () => {
                    ALGOSCENE.resetAction();
                    customInput.handle();
                    document.body.overflow(false);
                    await window.scrollToElement(document.body.main.frame, 'center');
                    await window.delay(100);
                    document.body.main.frame.enableEditing();
                    multiOverlay.handle(true);
                    multiOverlay.focusTo(document.body.main.frame);
                    popup.applyFrameEditingBtn.handle();
                };
            },
            getTextData() {
                this.textData = {edit: this.getAttribute('data')};
            }
        });
        document.body.popup.customInput.customBtn = customBtn;

        if (!localData.history.guide.main) guideBox.controller.run('main', 1000);
    }
    configShortcut() {}
    shortcut() {
        window.onkeydown = (e) => {
            if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;
            if (e.ctrlKey) return;
            switch (e.key.toUpperCase()) {
                case SHORTCUT_CONFIG.prolangList[0]:
                    document.body.codeBox.prolangList.left();
                    return;
                case SHORTCUT_CONFIG.prolangList[1]:
                    document.body.codeBox.prolangList.right();
                    return;
                case SHORTCUT_CONFIG.bottombarList[0]:
                    document.body.main.bottombar.list.up();
                    return;
                case SHORTCUT_CONFIG.bottombarList[1]:
                    document.body.main.bottombar.list.down();
                    return;
                case SHORTCUT_CONFIG.playPauseBtn:
                    document.body.main.bottombar.playPauseBtn.onclick();
                    return;
                case SHORTCUT_CONFIG.screenBtn:
                    document.body.main.bottombar.screenBtn.onclick();
                    return;
                case SHORTCUT_CONFIG.homeBtn:
                    document.body.header.homeBtn.click();
                    return;
                case SHORTCUT_CONFIG.expandBtn:
                    document.body.informations.expandBtn.onclick();
                    return;
            }
        };
    }
    developing(ok) {
        if (ok) {
            const getCodeFromVSCode = document.createElement({
                id: 'get-code-from-vscode',
                style: {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    opacity: 0,
                    transform: 'translate(-50%, 50%)',
                    backgroundColor: 'white',
                    padding: '20px',
                    transition: 'opacity 200ms, transform 200ms',
                    borderRadius: '10px',
                    pointerEvents: 'none'
                },
                children: [
                    document.createElement({
                        tag: 'input',
                        key: 'input',
                        style: {
                            width: '300px',
                            height: '30px',
                            fontSize: '16px',
                            fontFamily: 'monospace',
                            border: '1px solid black',
                            borderRadius: 'inherit',
                            pointerEvents: 'none'
                        },
                        onkeydown(e) {
                            if (e.key != 'Enter') return;
                            this.parentNode.handle();
                            const input = this.value;
                            this.value = '';
                            const t = document.createElement('div'),
                                r = [];
                            let i, s, f, h;
                            t.innerHTML = input;
                            t.childNodes[0].childNodes.forEach((e) => {
                                for (i = 0; i <= 10; i++)
                                    e.childNodes[0]
                                        .querySelectorAll('.bracket-highlighting-' + i)
                                        .forEach(
                                            (e) => (e.className = 'bracket-highlighting-' + i)
                                        );
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
                                                .replaceAll(
                                                    `<span class="mtk${e}">&nbsp;</span>`,
                                                    ' '
                                                )
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
                        }
                    })
                ],
                handle() {
                    if (this.classList.contains('show')) {
                        this.classList.remove('show');
                        this.setStyle({
                            transform: 'translate(-50%, 50%)',
                            opacity: 0,
                            pointerEvents: 'none'
                        });
                        this.input.style.pointerEvents = 'none';
                    } else {
                        this.classList.add('show');
                        this.setStyle({
                            transform: 'translate(-50%, -50%)',
                            opacity: 1,
                            pointerEvents: 'all'
                        });
                        this.input.style.pointerEvents = 'all';
                    }
                    document.body.popup.overlay.handle();
                }
            });

            document.body.popup.appendChild(getCodeFromVSCode);

            window.addEventListener('keydown', (e) => {
                if (!e.ctrlKey) return;
                switch (e.key.toLowerCase()) {
                    case ',':
                        document.body.main.frame.style.setProperty('border-radius', '0');
                        document.openFullScreen(document.body.main.frame);
                        return;
                    case '.':
                        getCodeFromVSCode.handle();
                        return;
                }
            });
        } else {
            document.head.innerHTML += '<style>*{pointer-events:none;}</style>';
        }
    }
})();

for (let i = 0; i < 5; i++) {
    window.dispatchEvent(new Event('resize'));
    await window.delay(100);
}
