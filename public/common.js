'use strict';

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
        window.ALGOSCENE = {
            init() {
                this.setElms();
                document.update();
            },
            run() {
                this.runAction(document.body.main.bottombar.list.value);
            },
            developing: localData.developing,
            delayDuration: localData.delay,
            updateDelayDuration() {
                this.delayDuration = localData.delay;
                this.frameElm.setDelay(this.delayDuration);
            },
            async delay(mul = 1) {
                if (!this.playPauseBtn.isPlaying) return;
                await TPSM.delay(localData.delay * mul);
                const t = localData.delay / 10;
                while (this.playPauseBtn.isPausing) await TPSM.delay(t);
            },
            getDefaultHTMLFrame: () => '',
            actions: {},
            configs: {},
            setAction(key, action, config = {}) {
                this.actions[key] = action;
                this.configs[key] = config;
            },
            runAction(key, save = true) {
                this.playPauseBtn.reset();
                this.resetFrame.clearAction();
                this.currentAction = key;
                this.frameElm.innerHTML = this.getDefaultHTMLFrame();
                if (this.actions[key]) {
                    if (Object.keys(this.configs[key]).length != 0)
                        this.enableSelectAction(this.configs[key]);
                    else this.disableSelection();
                    document.body.main.noAction('f');
                    this.actions[key]();
                } else document.body.main.noAction();
                this.frameElm.className = key;
                if (save) localData.history[document.TYPE].update(document.KEY, key);
            },
            async endAction() {},
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
                clearAction() {
                    this.actions = {};
                }
                reset() {
                    for (const key in this.actions) this.actions[key]();
                }
            })(),
            enableSelectAction(config) {
                this.playPauseBtn.enableSelection(config);
                document.body.popup.selectAction.setSelectAction(config);
            },
            disableSelection() {
                this.defaultAction();
            },
            defaultAction() {
                this.playPauseBtn.disableSelection();
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
                document.body.popup.customInput.constraints.update(key);
            };
        else
            document.update = function () {
                const lang = this.body.codeBox.prolangList.querySelector('.active').classList[0],
                    key = this.body.main.bottombar.list.value;
                this.updatePageTitle(key);
                this.body.codeBox.update(key, lang);
                this.body.informations.update(key);
                document.body.popup.customInput.constraints.update(key);
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
    }
    header() {
        const header = document.body.querySelector('header');
        document.body.header = header;

        header.querySelector('.right > .guide').onclick = () => {
            localData.history.guide.reset();
            document.body.popup.guideBox.run();
        };

        const homeBtn = TPSM.doc.fromElement(header).querySelector('.home', {
            click() {
                window.location.href = this.href;
            }
        });
        homeBtn.title += ` (${SHORTCUT_CONFIG.homeBtn})`;
        document.body.header.homeBtn = homeBtn;
    }
    main() {
        const main = TPSM.doc.querySelector('main', {
            noAction(t = 't') {
                if (t == 't') {
                    this.classList.add('no-action');
                    TPSM.doc.closeFullScreen();
                } else this.classList.remove('no-action');
            }
        });
        document.body.main = main;

        const frame = TPSM.doc.fromElement(main).querySelector('#frame', {
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
                TPSM.doc.setStyle(this, {
                    width: this.width + 'px',
                    height: this.height + 'px',
                    '--em': this.em + 'px'
                });
            },
            setDelay(value) {
                TPSM.doc.setStyle(this, {'--delay': (value || localData.delay) + 'ms'});
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

        const list = TPSM.doc.fromElement(bottombar).querySelector('.left .list', {
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

        const playPauseBtn = TPSM.doc.fromElement(bottombar).querySelector('.right > .play-pause', {
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
            setStatus(status) {
                this.title = this.textData[status];
                this.innerHTML = this[this.titleConfig[status]];
            },
            async onclick() {
                if (main.classList.contains('no-action')) return;
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
            reset() {
                this.isPlaying = false;
                this.isPausing = false;
                this.setStatus(this.defaultStatus);
            },
            enableSelection(config) {
                this.defaultStatus = 'select';
                this.clickConfig = config.actions;
                this.endAction = async () =>
                    (this.click = () => document.body.popup.selectAction.handle());
                this.reset();
            },
            disableSelection() {
                this.defaultAction();
            },
            defaultAction() {
                this.defaultStatus = 'play';
                this.clickConfig = {};
                this.endAction = async () => {
                    this.isPausing = true;
                    this.setStatus('repeat');
                    await ALGOSCENE.delay(0);
                    ALGOSCENE.resetFrame.reset();
                };
                this.reset();
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

        const screenBtn = TPSM.doc.fromElement(bottombar).querySelector('.right > .screen', {
            open() {
                if (main.classList.contains('no-action')) return;
                main.classList.add('fullscreen');
                TPSM.doc.openFullScreen(document.body.main);
                this.onclick = this.close;
                this.title = this.textData.exitFullScreen;
                this.innerHTML =
                    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V64zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32H96v64c0 17.7 14.3 32 32 32s32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V64zM320 320c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32s32-14.3 32-32V384h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320z"/></svg>';
            },
            close() {
                main.classList.remove('fullscreen');
                TPSM.doc.closeFullScreen();
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

        const settingBtn = TPSM.doc.fromElement(bottombar).querySelector('.right > .setting', {
            onclick(e) {
                if (!e) e = {target: this};
                if (e.target.classList.contains('setting'))
                    if (this.classList.contains('show')) this.classList.remove('show');
                    else this.classList.add('show');
            }
        });
        document.body.main.bottombar.settingBtn = settingBtn;

        TPSM.doc.fromElement(settingBtn).querySelector('ul > .delay > input', {
            value: localData.delay,
            saveValue: localData.delay,
            min: 50,
            onblur() {
                this.handle();
            },
            onkeydown({key}) {
                if (key != 'Enter') return;
                this.handle();
                this.blur();
            },
            handle() {
                if (isNaN(this.value)) this.value = this.saveValue;
                else {
                    if (Number(this.value) < this.min) this.value = this.min;
                    this.saveValue = this.value;
                    localData.setDelay(this.value);
                    ALGOSCENE.updateDelayDuration();
                }
            }
        });

        const customInputBtn = TPSM.doc
            .fromElement(bottombar)
            .querySelector('.right > .custom-input', {
                onclick: () => document.body.popup.customInput.handle()
            });
        document.body.main.bottombar.customInputBtn = customInputBtn;
    }
    informations() {
        const informations = TPSM.doc.querySelector('#informations', {
            update(key) {
                this.querySelector('.show')?.classList?.remove('show');
                this.querySelector(`.${key}`).classList.add('show');
                this.setComplexity();
            },
            onresize() {
                this.complexity?.onresize();
            },
            setComplexity() {
                this.complexity = TPSM.doc.fromElement(this).querySelector(`.show tbody`, {
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

        const expandBtn = TPSM.doc.fromElement(informations).querySelector('.expand', {
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
        const codeBox = TPSM.doc.querySelector('#code-box', {
            update(key, lang) {
                codes.update(key, lang);
                usage.update(key, lang);
            }
        });
        document.body.codeBox = codeBox;

        const prolangList = TPSM.doc.fromElement(codeBox).querySelector('.top > .prolang-list', {
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

        const codes = TPSM.doc.fromElement(codeBox).querySelector('.codes', {
            update(key, lang) {
                this.querySelector('.show')?.classList?.remove('show');
                this.querySelector(`.${key}.${lang}`).classList.add('show');
            }
        });
        document.body.codeBox.codes = codes;

        const usage = TPSM.doc.fromElement(codeBox).querySelector('.usage', {
            update(key, lang) {
                this.querySelector('.show')?.classList?.remove('show');
                this.querySelector(`.${key}.${lang}`).classList.add('show');

                labelName.update(lang);
            }
        });
        document.body.codeBox.usage = usage;

        const labelName = TPSM.doc.fromElement(usage).querySelector('.label-name', {
            update(lang) {
                labelNameIcon.update(lang);
                labelNameExtension.innerText = lang;
            }
        });

        const labelNameIcon = TPSM.doc.fromElement(labelName).querySelector('.icon', {
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
                        .map((e) => {
                            let res = '';
                            res += e.querySelector('.tab')?.innerText || '';
                            res += e.querySelector('.line-code').innerText;
                            return res.replaceAll(' ', ' ');
                        })
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

        const copyCodeBtn = TPSM.doc
            .fromElement(codes)
            .querySelector('.copy-code', copyCodeBtnConfig);
        document.body.codeBox.copyCodeBtn = copyCodeBtn;

        TPSM.doc.fromElement(usage).querySelector('.copy-code', copyCodeBtnConfig);
    }
    popup() {
        const popup = document.body.querySelector('#popup');
        document.body.popup = popup;

        const selectAction = TPSM.doc.fromElement(popup).querySelector('.select-action', {
            handle() {
                if (this.classList.contains('show')) this.classList.remove('show');
                else {
                    this.classList.add('show');
                    if (!localData.history.guide.selectAction)
                        guideBox.controller.run('selectAction', 1000);
                }
                overlay.handle();
            },
            getTextData() {
                this.textData = {
                    select: this.querySelector('.title').getAttribute('data-text')
                };
            },
            setSelectAction(config) {
                this.style = `--span-width:${config.elmSize[0]}em;--input-width:${config.elmSize[1]}em;`;
                this.querySelectorAll('section').forEach((e) => this.removeChild(e));
                Object.keys(config.actions)
                    .filter((key) => !config.actions[key].hidden)
                    .map((key) => {
                        const input = TPSM.doc.createElement({
                            tag: 'input',
                            attributes: {placeholder: config.actions[key].input || ''},
                            onkeydown({key}) {
                                if (key != 'Enter') return;
                                button.onclick();
                            }
                        });
                        const button = TPSM.doc.createElement({
                            tag: 'button',
                            type: 'button',
                            title: selectAction.textData.select,
                            innerHTML:
                                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path></svg>',
                            onclick() {
                                const input = TPSM.removeExtraWhitespace(
                                    this.parentNode.childNodes[1].value,
                                    {oneLine: true}
                                );
                                if (
                                    !config.actions[key].checkInput ||
                                    config.actions[key].checkInput(input)
                                ) {
                                    document.body.main.bottombar.playPauseBtn.setClick(key, input);
                                    this.parentNode.childNodes[1].value = '';
                                    selectAction.handle();
                                    this.parentNode.childNodes[1].blur();
                                } else {
                                    this.classList.add('error');
                                    setTimeout(() => this.classList.remove('error'), 200);
                                }
                            }
                        });
                        this.appendChild(
                            TPSM.doc.createElement({
                                tag: 'section',
                                className: key,
                                innerHTML: `<span>${key}:</span>`,
                                children: [input, button]
                            })
                        );
                    });
            }
        });
        selectAction.getTextData();
        document.body.popup.selectAction = selectAction;

        selectAction.querySelector('.close').onclick = () => selectAction.handle();

        const overlay = TPSM.doc.fromElement(popup).querySelector('.overlay', {
            handle() {
                if (this.classList.contains('show')) this.classList.remove('show');
                else this.classList.add('show');
            }
        });
        document.body.popup.overlay = overlay;

        const multiOverlay = TPSM.doc.fromElement(popup).querySelector('.multi-overlay', {
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

        const guideBox = TPSM.doc.fromElement(popup).querySelector('.guide-box', {
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
                    await TPSM.delay(delay);
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

                    await TPSM.doc.scrollToElement(elm, 'center');

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
                    TPSM.doc.setStyle(guideBox, styles);
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

        const messageGuideBox = TPSM.doc.fromElement(guideBox).querySelector('.message', {
            setText(text) {
                this.innerHTML = text;
            }
        });

        const previousGuideBtn = TPSM.doc.fromElement(guideBox).querySelector('button.previous', {
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

        const nextGuideBtn = TPSM.doc.fromElement(guideBox).querySelector('button.next', {
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

        const line = TPSM.doc.fromElement(guideBox).querySelector('.line', {
            setLen(len) {
                this.style.setProperty('--len', len);
            },
            setCurrent(cur) {
                this.style.setProperty('--cur', cur);
            }
        });

        const customInput = TPSM.doc.fromElement(popup).querySelector('.custom-input', {
            handle() {
                if (this.classList.contains('show')) this.classList.remove('show');
                else {
                    this.classList.add('show');
                    inputCustomInput.clearValue();
                    this.setPlaceholder();
                    if (!localData.history.guide[this.guideKey])
                        guideBox.controller.run(this.guideKey, 1000);
                }
                overlay.handle();
            },
            guideKey: 'customInputDefault',
            error(item) {
                console.error(
                    'customInput -> configAll -> ' +
                        item +
                        '  |  ' +
                        (ALGOSCENE.currentAction || 'all')
                );
            },
            configAll(config) {
                this.checkValue = config.checkValue || this.error('checkValue');
                this.applyValue = config.applyValue || this.error('applyValue');
                this.getPlaceholder = config.getPlaceholder || this.error('getPlaceholder');
                this.preprocessing = config.preprocessing || this.error('preprocessing');
                this.configValue = config.configValue || this.error('configValue');
            },
            reset() {
                this.checkValue = () => true;
                this.applyValue = () => {};
                this.getPlaceholder = () => '';
                this.preprocessing = (value) => value;
                this.configValue = {};
            },
            setPlaceholder() {
                inputCustomInput.setAttribute('placeholder', this.getPlaceholder());
            },
            notify: {
                success: () => {
                    customInput.setPlaceholder();
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

                const applyFrameEditingBtn = TPSM.doc
                    .fromElement(popup)
                    .querySelector('.apply-frame-editing', {
                        style: 'display: block;',
                        onclick() {
                            document.body.overflow(true);
                            document.body.main.frame.disableEditing();
                            multiOverlay.handle();
                            this.handle();
                            customInput.applyValue();
                        },
                        handle() {
                            if (this.classList.contains('show')) this.classList.remove('show');
                            else {
                                this.classList.add('show');
                                const {top, width, left} =
                                    document.body.main.frame.getBoundingClientRect();
                                TPSM.doc.setStyle(this, {
                                    bottom: window.innerHeight - top + 10 + 'px',
                                    right: window.innerWidth - left - width + 'px'
                                });
                            }
                        }
                    });
                document.body.popup.applyFrameEditingBtn = applyFrameEditingBtn;
            }
        });
        customInput.reset();
        document.body.popup.customInput = customInput;

        const constraintsCustomInput = TPSM.doc
            .fromElement(customInput)
            .querySelector('.constraints', {
                update(key) {
                    this.querySelector('.show')?.classList?.remove('show');
                    (this.querySelector('.' + key) || this.querySelector('.default')).classList.add(
                        'show'
                    );
                }
            });
        document.body.popup.customInput.constraints = constraintsCustomInput;

        const inputCustomInput = TPSM.doc.fromElement(customInput).querySelector('textarea', {
            getValue() {
                return this.value;
            },
            clearValue() {
                this.value = '';
            },
            isEditOnFrame() {
                customInput.removeChild(this);
            },
            oninput() {
                this.style.height = 'auto';
                this.style.height = this.scrollHeight + 'px';
            }
        });
        document.body.popup.customInput.input = inputCustomInput;

        customInput.querySelector('button.close').onclick = () => customInput.handle();

        const customBtn = TPSM.doc.fromElement(customInput).querySelector('button.custom', {
            onclick() {
                const value = customInput.preprocessing(
                    TPSM.removeExtraWhitespace(inputCustomInput.getValue(), customInput.configValue)
                );
                if (customInput.checkValue(value)) {
                    customInput.applyValue(value);
                    customInput.notify.success();
                } else customInput.notify.failure();
            },
            isEditOnFrame() {
                this.getTextData();
                this.title = this.textData.edit;
                this.innerText = this.textData.edit;
                this.onclick = async () => {
                    ALGOSCENE.resetAction();
                    customInput.handle();
                    document.body.overflow(false);
                    await TPSM.doc.scrollToElement(document.body.main.frame, 'center');
                    await TPSM.delay(100);
                    document.body.main.frame.enableEditing();
                    multiOverlay.handle(true);
                    multiOverlay.focusTo(document.body.main.frame);
                    document.body.popup.applyFrameEditingBtn.handle();
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
            const getCodeFromVSCode = TPSM.doc.createElement({
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
                    TPSM.doc.createElement({
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
                        TPSM.doc.setStyle(this, {
                            transform: 'translate(-50%, 50%)',
                            opacity: 0,
                            pointerEvents: 'none'
                        });
                        this.input.style.pointerEvents = 'none';
                    } else {
                        this.classList.add('show');
                        TPSM.doc.setStyle(this, {
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
    await TPSM.delay(100);
}
