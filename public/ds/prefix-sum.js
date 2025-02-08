'use strict';

const array = new (class {
    constructor() {
        this.value = [11, 6, 20, 1];

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
        ALGOSCENE.resetFrame.setAction('array', () => this.reset());
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
        for (let i = 0; i < left; i++) this.unset(i, 'plus');
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
    appendElm() {
        ALGOSCENE.resetFrame.setAction('prefixSumArray', () => this.reset());
        this.elm = TPSM.doc.createElement({className: 'prefix-sum-array'});
        this.hidden();
        ALGOSCENE.frameElm.appendChild(this.elm);
    }
    setTop(value) {
        this.elm.style.top = `${value}%`;
    }
    initToSum() {
        this.appendElm();
        this.length = array.length + 1;
        this.elm.classList.add('sum');

        this.elm.innerHTML = '<span class="hidden">0</span>';
        for (let i = 0; i < array.length; i++) this.elm.innerHTML += '<span class="hidden"></span>';
        array.value.forEach((v, i) => this.setValue(i + 1, this.getValue(i) + v));

        let index = '<div class="index">';
        for (let i = 0; i < this.length; i++) index += '<span>' + i + '</span>';
        index += '</div>';
        this.elm.innerHTML += index;

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
    appendElm() {
        ALGOSCENE.resetFrame.setAction('result', () => this.reset());
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
        ALGOSCENE.customInput.configAll({
            getPlaceholder: () => array.value.join(' '),
            configValue: {oneLine: true},
            preprocessing: (value) => value.split(' ').map((e) => Number(e)),
            checkValue: (value) => {
                for (const v of value)
                    if (isNaN(v) || v < -9 || v > 99 || !Number.isInteger(v)) return false;
                if (value.length <= 0 || value.length > 8) return false;
                return true;
            },
            applyValue: (value) => {
                if (value.length < 10) array.value = value;
                else array.value = value.slice(0, 10);
            }
        });

        array.appendElm(1);
        result.appendElm();
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
                action: async (input) => {
                    input = input.split(' ').map((e) => Number(e));
                    await result.show(await prefixSumArray.getSum(...input));
                },
                input: 'left right',
                checkInput: (value) => {
                    value = value.split(' ').map((e) => Number(e));
                    for (const v of value) if (isNaN(v) || !Number.isInteger(v)) return false;
                    if (value.length < 2 || value[0] > value[1]) return false;
                    if (value[0] < 0 || value[1] > array.length - 1) return false;
                    return true;
                }
            }
        },
        elmSize: [4, 7]
    }
);

const matrix = new (class {
    constructor() {
        this.value = [
            [1, 2, 4, 1],
            [-2, 3, 6, 7],
            [1, 1, 6, 9]
        ];
    }
    appendElm() {
        ALGOSCENE.resetFrame.setAction('matrix', () => this.reset());
        this.rows = this.value.length;
        this.cols = this.value[0].length;
        this.elm = TPSM.doc.createElement({
            className: 'matrix',
            style: {'--cols': this.cols, '--rows': this.rows},
            innerHTML:
                this.createIndex() +
                this.value
                    .map((t, i) => t.map((e, j) => `<span index="${i},${j}">${e}</span>`).join(''))
                    .join('')
        });
        ALGOSCENE.frameElm.appendChild(this.elm);
        this.setLeft(50);
    }
    createIndex() {
        let res = '<div class="index"><section>';
        for (let i = 0; i < this.cols; i++) res += '<span>' + i + '</span>';
        res += '</section><section>';
        for (let i = 0; i < this.rows; i++) res += '<span>' + i + '</span>';
        res += '</section></div>';
        return res;
    }
    getValue(x, y) {
        return Number(this.getChild(x, y).innerText);
    }
    getChild(x, y) {
        return this.elm.querySelector(`span[index="${x},${y}"]`);
    }
    setLeft(per) {
        this.elm.style.left = per + '%';
    }
    async setM(x, y, xx, yy, value) {
        for (let i = x; i <= xx; i++)
            for (let j = y; j <= yy; j++) this.getChild(i, j).classList.add(value);
        await ALGOSCENE.delay();
    }
    async unsetM(x, y, xx, yy, value) {
        for (let i = x; i <= xx; i++)
            for (let j = y; j <= yy; j++) this.getChild(i, j).classList.remove(value);
        await ALGOSCENE.delay();
    }
    reset() {
        this.elm.querySelectorAll('.plus').forEach((e) => e.classList.remove('plus'));
    }
})();

const prefixSumMatrix = new (class {
    appendElm() {
        ALGOSCENE.resetFrame.setAction('prefixSumMatrix', () => this.reset());
        this.elm = TPSM.doc.createElement({className: 'prefix-sum-matrix hidden'});
        ALGOSCENE.frameElm.appendChild(this.elm);
    }
    initToSum() {
        this.appendElm();
        this.setLeft(100);
        this.rows = matrix.rows + 1;
        this.cols = matrix.cols + 1;
        TPSM.doc.setStyle(this.elm, {'--cols': this.cols, '--rows': this.rows});
        this.elm.innerHTML = this.createIndex();
        for (let i = 0; i < this.cols; i++) this.elm.innerHTML += `<span index="0,${i}">0</span>`;
        for (let i = 1; i < this.rows; i++) {
            this.elm.innerHTML += `<span index="${i},0">0</span>`;
            for (let j = 1; j < this.cols; j++)
                this.elm.innerHTML +=
                    `<span index="${i},${j}" class="hidden">` +
                    `${
                        matrix.getValue(i - 1, j - 1) +
                        this.getValue(i - 1, j) +
                        this.getValue(i, j - 1) -
                        this.getValue(i - 1, j - 1)
                    }` +
                    '</span>';
        }

        this.show = async () => {
            this.setLeft(73);
            this.elm.classList.remove('hidden');
            await ALGOSCENE.delay();

            for (let i = 1; i < this.rows; i++)
                for (let j = 1; j < this.cols; j++) {
                    this.set(i, j, 'plus');
                    await matrix.setM(0, 0, i - 1, j - 1, 'plus');
                    this.unset(i, j, 'plus');
                    await this.unset(i, j, 'hidden');
                    matrix.unsetM(0, 0, i - 1, j - 1, 'plus');
                }
        };
    }
    createIndex() {
        let res = '<div class="index"><section>';
        for (let i = 0; i < this.cols; i++) res += '<span>' + i + '</span>';
        res += '</section><section>';
        for (let i = 0; i < this.rows; i++) res += '<span>' + i + '</span>';
        res += '</section></div>';
        return res;
    }
    async getSum(x, y, xx, yy) {
        await this.set(xx + 1, yy + 1, 'plus');
        await matrix.setM(0, 0, xx, yy, 'plus');
        await this.set(x, yy + 1, 'minus');
        await matrix.unsetM(0, 0, x - 1, yy, 'plus');
        await this.set(xx + 1, y, 'minus');
        matrix.setM(0, 0, x - 1, y - 1, 'minus');
        await matrix.unsetM(0, 0, xx, y - 1, 'plus');
        await this.set(x, y, 'plus');
        await matrix.unsetM(0, 0, x - 1, y - 1, 'minus');
        return (
            this.getValue(xx + 1, yy + 1) -
            this.getValue(x, yy + 1) -
            this.getValue(xx + 1, y) +
            this.getValue(x, y)
        );
    }
    getValue(x, y) {
        return Number(this.getChild(x, y).innerText);
    }
    getChild(x, y) {
        return this.elm.querySelector(`span[index="${x},${y}"]`);
    }
    setLeft(per) {
        this.elm.style.left = per + '%';
    }
    async setM(x, y, xx, yy, value) {
        for (let i = x; i <= xx; i++)
            for (let j = y; j <= yy; j++) this.getChild(i, j).classList.add(value);
        await ALGOSCENE.delay();
    }
    async unsetM(x, y, xx, yy, value) {
        for (let i = x; i <= xx; i++)
            for (let j = y; j <= yy; j++) this.getChild(i, j).classList.remove(value);
        await ALGOSCENE.delay();
    }
    async set(x, y, value) {
        this.getChild(x, y).classList.add(value);
        await ALGOSCENE.delay();
    }
    async unset(x, y, value) {
        this.getChild(x, y).classList.remove(value);
        await ALGOSCENE.delay();
    }
    setLeft(per) {
        this.elm.style.left = per + '%';
    }
    reset() {
        this.elm.querySelectorAll('.plus').forEach((e) => e.classList.remove('plus'));
        this.elm.querySelectorAll('.minus').forEach((e) => e.classList.remove('minus'));
    }
})();

ALGOSCENE.setAction(
    'sumMatrix',
    () => {
        ALGOSCENE.customInput.configAll({
            getPlaceholder: () =>
                `${matrix.value.length} ${matrix.value[0].length}\n` +
                matrix.value.map((e) => e.join(' ')).join('\n'),
            configValue: {oneLine: true},
            preprocessing: (value) => {
                value = value.split(' ').map((e) => Number(e));
                return {m: value.shift(), n: value.shift(), mat: value};
            },
            checkValue: ({m, n, mat}) => {
                if (!(m > 0 && m <= 5) || !(n > 0 && n <= 6)) return false;
                for (const v of mat)
                    if (isNaN(v) || v < -3 || v > 33 || !Number.isInteger(v)) return false;
                if (mat.length != m * n) return false;
                return true;
            },
            applyValue: ({m, n, mat}) => {
                matrix.value = [];
                while (mat.length) matrix.value.push(mat.splice(0, n));
            }
        });

        matrix.appendElm();
        prefixSumMatrix.initToSum();
        result.appendElm();
        ALGOSCENE.playPauseBtn.setClick('build');
    },
    {
        actions: {
            build: {
                action: async () => {
                    matrix.setLeft(26);
                    await prefixSumMatrix.show();
                },
                hidden: true
            },
            getSum: {
                action: async (input) => {
                    input = input.split(' ').map((e) => Number(e));
                    await result.show(await prefixSumMatrix.getSum(...input));
                },
                input: 'x y xx yy',
                checkInput: (value) => {
                    value = value.split(' ').map((e) => Number(e));
                    for (const v of value)
                        if (isNaN(v) || !Number.isInteger(v) || v < 0) return false;
                    if (value.length < 4 || value[0] > value[2] || value[1] > value[3])
                        return false;
                    if (
                        value[0] >= matrix.rows ||
                        value[1] >= matrix.cols ||
                        value[2] >= matrix.rows ||
                        value[3] >= matrix.cols
                    )
                        return false;
                    return true;
                }
            }
        },
        elmSize: [4, 7]
    }
);
