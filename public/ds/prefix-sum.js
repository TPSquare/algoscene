'use strict';

const array = new (class {
    constructor() {
        this.value = [11, 6, 20, 1];
        ALGOSCENE.resetFrame.setAction('array', () => this.reset());

        this.empty = {
            show: async () => {
                this.elm
                    .querySelectorAll('.empty.hidden')
                    .forEach((e) => e.classList.remove('hidden'));
                await ALGOSCENE.delay();
            },
            hidden: () =>
                this.elm.querySelectorAll('.empty').forEach((e) => e.classList.add('hidden')),
            push: (num, pos = 'right') => {
                let t = '';
                while (num--) t += '<span class="empty hidden"></span>';
                if (pos == 'right') this.elm.innerHTML += t;
                else this.elm.innerHTML = t + this.elm.innerHTML;
            }
        };
    }
    appendElm(empty = 0) {
        this.length = this.value.length;
        this.elm = TPSM.doc.createElement({
            className: 'array',
            innerHTML: this.value.map((e, i) => `<span index="${i}">${e}</span>`).join('')
        });
        ALGOSCENE.frameElm.appendChild(this.elm);
        this.setTop(50);
        this.empty.push(empty);
    }
    getValue(index) {
        return this.value[index];
    }
    getChild(index) {
        return this.elm.querySelector(`span[index="${index}"]`);
    }
    setTop(value) {
        this.elm.style.top = `${value}%`;
    }
    async sum(left, right) {
        for (let i = 0; i <= right; i++) this.set(i, 'plus');
        await ALGOSCENE.delay(right - left + 4);
        for (let i = 0; i < left; i++) this.set(i, 'minus');
    }
    async set(index, key) {
        this.getChild(index).classList.add(key);
        await ALGOSCENE.delay();
    }
    async unset(index, key) {
        this.getChild(index).classList.remove(key);
        await ALGOSCENE.delay();
    }
    reset() {
        this.elm.querySelectorAll('.plus').forEach((e) => e.classList.remove('plus'));
        this.elm.querySelectorAll('.minus').forEach((e) => e.classList.remove('minus'));
    }
})();

const prefixSumArray = new (class {
    constructor() {
        ALGOSCENE.resetFrame.setAction('prefixSumArray', () => this.reset());
    }
    appendElm() {
        this.elm = TPSM.doc.createElement({className: 'prefix-sum-array'});
        this.hidden();
        ALGOSCENE.frameElm.appendChild(this.elm);
    }
    setTop(value) {
        this.elm.style.top = `${value}%`;
    }
    initToSum() {
        this.length = array.length + 1;
        this.elm.classList.add('sum');

        this.elm.innerHTML = '<span class="hidden">0</span>';
        for (let i = 0; i < array.length; i++) this.elm.innerHTML += '<span class="hidden"></span>';
        array.value.forEach((v, i) => this.setValue(i + 1, this.getValue(i) + v));

        this.elm.innerHTML += '<section></section>';
        this.elm.section = TPSM.doc.fromElement(this.elm).querySelector('section', {
            async show() {
                this.classList.add('show');
                await ALGOSCENE.delay();
            },
            async hiddenn() {
                this.classList.remove('show');
                await ALGOSCENE.delay();
            }
        });
        this.elm.section.removeAttribute('hidden');

        this.show = async function () {
            await this.showD();
            await this.unset(0, 'hidden');
            for (let i = 1; i < this.length; i++) {
                await this.set(i - 1, 'active');
                await ALGOSCENE.delay();
                await array.set(i - 1, 'plus');
                await ALGOSCENE.delay();
                await this.unset(i, 'hidden');
                this.unset(i - 1, 'active');
                await array.unset(i - 1, 'plus');
            }
        };

        this.reset = function () {
            this.elm.querySelector('.plus')?.classList?.remove('plus');
            this.elm.querySelector('.minus')?.classList?.remove('minus');
            this.elm?.section?.hiddenn();
        };
    }
    async getSum(left, right) {
        this.elm.section.style.setProperty('--right-num', this.length - right - 1);
        this.elm.section.style.setProperty('--width-num', right - left + 1);
        array.sum(left, right);
        await this.set(right + 1, 'plus');
        await this.elm.section.show();
        await ALGOSCENE.delay(right - left + 2);
        await this.set(left, 'minus');
        return this.getValue(right + 1) - this.getValue(left);
    }
    async set(index, key) {
        this.elm.childNodes[index].classList.add(key);
        await ALGOSCENE.delay();
    }
    async unset(index, key) {
        this.elm.childNodes[index].classList.remove(key);
        await ALGOSCENE.delay();
    }
    getValue(index) {
        return Number(this.elm.childNodes[index].innerText);
    }
    setValue(index, value) {
        this.elm.childNodes[index].innerText = value;
    }
    hidden() {
        this.setTop(100);
        this.elm.classList.add('hidden');
    }
    async showD() {
        this.setTop(60);
        this.elm.classList.remove('hidden');
        await ALGOSCENE.delay();
    }
})();

const result = new (class {
    constructor() {
        ALGOSCENE.resetFrame.setAction('result', () => this.reset());
    }
    appendElm() {
        this.elm = TPSM.doc.createElement({className: 'result', innerHTML: '1106'});
        ALGOSCENE.frameElm.appendChild(this.elm);
    }
    async show(value) {
        this.elm.innerText = value;
        this.elm.classList.add('show');
        await ALGOSCENE.delay();
    }
    hidden() {
        this.elm.classList.remove('show');
    }
    reset() {
        this.hidden();
    }
})();

ALGOSCENE.setAction(
    'sumArray',
    () => {
        ALGOSCENE.customInput.setCurrentValue(array.value.join(' '));
        ALGOSCENE.customInput.onApply = function (value) {
            let isValid = true;
            value = value.split(' ').map((e) => Number(e));
            for (const v of value)
                if (isNaN(v) || v < -9 || v > 99 || !Number.isInteger(v)) isValid = false;
            if (value.length <= 0 || value.length > 8) isValid = false;
            if (isValid) {
                if (value.length < 10) array.value = value;
                else array.value = value.slice(0, 10);
                this.setCurrentValue(array.value.join(' '));
                this.notify.success();
            } else this.notify.failure();
        };

        array.appendElm(1);
        result.appendElm();
        prefixSumArray.appendElm();
        prefixSumArray.initToSum();
        ALGOSCENE.playPauseBtn.setClick('build');
    },
    {
        actions: {
            build: {
                action: async () => {
                    array.setTop(40);
                    array.empty.show();
                    await prefixSumArray.show();
                    array.empty.push(2, 'left');
                    await ALGOSCENE.delay();
                    await array.empty.show();
                },
                hidden: true
            },
            getSum: {
                action: async (input) => await result.show(await prefixSumArray.getSum(...input)),
                input: 'left right',
                checkInput: (value) => {
                    for (const v of value) if (isNaN(v) || !Number.isInteger(v)) return false;
                    if (value.length < 2 || value[0] > value[1]) return false;
                    if (value[0] < 0 || value[1] > array.length - 1) return false;
                    // for (const v of value) if (v < -9 || v > 99) isValid = false;
                    return true;
                }
            }
        },
        elmSize: [4, 4.5]
    }
);
