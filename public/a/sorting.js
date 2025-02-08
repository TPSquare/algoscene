'use strict';

let ARRAY = [5, 2, 4, 6, 1, 3, 7];

ALGOSCENE.customInput.configAll({
    getPlaceholder: () => ARRAY.join(' '),
    configValue: {oneLine: true},
    preprocessing: (value) => value.split(' ').map((e) => Number(e)),
    checkValue: (value) => {
        for (const e of value)
            if (isNaN(e) || e < -9 || e > 99 || !Number.isInteger(e)) return false;
        if (value.length < 7) return false;
        return true;
    },
    applyValue: (value) => (ARRAY = value.slice(0, 7))
});

ALGOSCENE.getDefaultHTMLFrame = () =>
    '<div class="background"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>' +
    `<div class="array">${ARRAY.map((e, i) => `<span o="${i + 1}">${e}</span>`).join('')}</div>`;

const colors = ['', 'yellowgreen', 'red', 'orange'];

const array = new (class {
    constructor() {
        this.length = ARRAY.length;
    }
    setPosition() {
        this.elm.childNodes.forEach((e) => (e.style.left = 2.4 * e.index + 'em'));
    }
    regetElm() {
        ALGOSCENE.resetFrame.setAction('resetArray', () => this.reset());
        this.elm = ALGOSCENE.frameElm.querySelector('.array');
        this.elm.childNodes.forEach((e) => {
            e.setBackgroundColor = async function (c = 0) {
                this.style.backgroundColor = colors[c];
                await ALGOSCENE.delay();
            };
            e.goOut = async function () {
                this.style.top = '2.4em';
                await ALGOSCENE.delay();
            };
            e.comeIn = async function () {
                this.style.top = '';
                await ALGOSCENE.delay();
            };
            e.moveTo = async function (index) {
                const td = Math.abs(index - e.index);
                ALGOSCENE.frameElm.setDelay(td * ALGOSCENE.delayDuration);
                e.index = index;
                e.style.left = 2.4 * index + 'em';
                await ALGOSCENE.delay(td);
                ALGOSCENE.frameElm.setDelay();
            };
        });
        this.reset();
    }
    reset() {
        this.elm.childNodes.forEach((e, i) => {
            e.index = i;
            e.value = Number(e.innerText);
        });
        this.setPosition();
    }
    get(index) {
        return Array.from(this.elm.childNodes).find((e) => e.index == index);
    }
    getMax() {
        let max = this.get(0).value,
            i = 0;
        for (let j = 1; j < this.length; j++)
            if (this.get(j).value > max) {
                max = this.get(j).value;
                i = j;
            }
        return this.get(i);
    }
    async swap(i, j) {
        if (i == j) return;
        const a = this.get(i),
            b = this.get(j);
        a.setBackgroundColor(1);
        b.setBackgroundColor(1);
        await ALGOSCENE.delay();
        a.style.top = '-2.4em';
        b.style.top = '2.4em';
        await ALGOSCENE.delay();
        a.index = j;
        b.index = i;
        const td = Math.abs(i - j);
        ALGOSCENE.frameElm.setDelay(td * ALGOSCENE.delayDuration);
        this.setPosition();
        await ALGOSCENE.delay(td);
        ALGOSCENE.frameElm.setDelay();
        a.style.top = '';
        b.style.top = '';
        await ALGOSCENE.delay();
        a.setBackgroundColor();
        b.setBackgroundColor();
    }
    async end() {
        await ALGOSCENE.delay(0.2);
        const c = Array.from(this.elm.childNodes);
        for (let i = 0; i < this.length; i++) {
            c.find((e) => e.index == i)?.setBackgroundColor(1);
            await ALGOSCENE.delay(0.2);
        }
        await ALGOSCENE.delay();
        c.forEach((e) => e.setBackgroundColor());
    }
})();

ALGOSCENE.setAction('bubble', () => {
    array.regetElm();
    ALGOSCENE.playPauseBtn.click = async () => {
        for (let i = 0; i < array.length - 1; i++)
            for (let j = 0; j < array.length - i - 1; j++) {
                await array.get(j).setBackgroundColor(2);
                if (array.get(j).value > array.get(j + 1).value) await array.swap(j, j + 1);
                array.get(j)?.setBackgroundColor();
            }
        await array.end();
    };
});

ALGOSCENE.setAction('selection', () => {
    array.regetElm();
    ALGOSCENE.playPauseBtn.click = async () => {
        for (let i = 0; i < array.length - 1; i++) {
            let min = i;
            array.get(min).setBackgroundColor(1);
            for (let j = i + 1; j < array.length; j++) {
                if (j - 1 != min) array.get(j - 1)?.setBackgroundColor();
                await array.get(j).setBackgroundColor(2);
                if (array.get(j).value < array.get(min).value) {
                    array.get(min).setBackgroundColor();
                    min = j;
                    await array.get(j).setBackgroundColor(1);
                }
            }
            array.get(array.length - 1).setBackgroundColor();
            await array.swap(min, i);
            if (min == i) array.get(min).setBackgroundColor();
        }
        await array.end();
    };
});

ALGOSCENE.setAction('insertion', () => {
    array.regetElm();
    ALGOSCENE.playPauseBtn.click = async () => {
        for (let i = 1; i < array.length; i++) {
            let j = i,
                current = array.get(i);
            await current.setBackgroundColor(1);
            if (j - 1 >= 0 && array.get(j - 1).value > current.value) await current.goOut();
            while (--j >= 0 && array.get(j).value > current.value) {
                array.get(j).setBackgroundColor(2);
                await array.get(j).moveTo(j + 1);
                array.get(j + 1).setBackgroundColor();
            }
            await current.moveTo(j + 1);
            current.setBackgroundColor();
            await current.comeIn();
        }
        await array.end();
    };
});

ALGOSCENE.setAction('quick', () => {
    array.regetElm();
    const quickSort = async (left = 0, right = array.length - 1) => {
        if (left >= right) return;
        for (let i = left; i <= right; i++) array.get(i).setBackgroundColor(3);
        await ALGOSCENE.delay();
        const pivot = array.get(Math.floor((left + right) / 2));
        await pivot.setBackgroundColor(2);
        let i = left,
            j = right;
        while (i <= j) {
            while (array.get(i).value < pivot.value) ++i;
            while (array.get(j).value > pivot.value) --j;
            if (i <= j) {
                await array.swap(i, j);
                ++i;
                --j;
            }
        }
        await pivot.setBackgroundColor();
        for (let i = left; i <= right; i++) array.get(i).setBackgroundColor();
        await ALGOSCENE.delay();
        await quickSort(left, j);
        await quickSort(i, right);
    };
    ALGOSCENE.playPauseBtn.click = async () => {
        await quickSort();
        await array.end();
    };
});

ALGOSCENE.setAction('merge', () => {
    array.regetElm();
    const merge = async (left, middle, right) => {
        const leftSize = middle - left + 1;
        const rightSize = right - middle;
        const leftArray = new Array(leftSize);
        const rightArray = new Array(rightSize);
        for (let i = 0; i < leftSize; i++) {
            leftArray[i] = array.get(left + i);
            leftArray[i].setBackgroundColor(3);
        }
        for (let j = 0; j < rightSize; j++) {
            rightArray[j] = array.get(middle + 1 + j);
            rightArray[j].setBackgroundColor(3);
        }
        await ALGOSCENE.delay();
        let i = 0,
            j = 0;
        let k = left;
        while (i < leftSize && j < rightSize)
            if (leftArray[i].value <= rightArray[j].value)
                await array.swap(k++, leftArray[i++].index);
            else await array.swap(k++, rightArray[j++].index);
        while (i < leftSize) await array.swap(k++, leftArray[i++].index);
        while (j < rightSize) await array.swap(k++, rightArray[j++].index);
        for (; left <= right; left++) array.get(left).setBackgroundColor();
        await ALGOSCENE.delay();
    };
    const mergeSort = async (left = 0, right = array.length - 1) => {
        if (left >= right) return;
        const middle = Math.floor((left + right) / 2);
        await mergeSort(left, middle);
        await mergeSort(middle + 1, right);
        await merge(left, middle, right);
    };
    ALGOSCENE.playPauseBtn.click = async () => {
        await mergeSort();
        await array.end();
    };
});
