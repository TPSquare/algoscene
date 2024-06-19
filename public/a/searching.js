'use strict';

await ALGOSCENE.init(
    'js,cpp,py',
    {
        sequential: {
            code: {
                js: [
                    '<span class="mtk6">const</span> <span class="mtk16">sequentialSearch</span> <span class="mtk3">=</span> <span class="bracket-highlighting-0">(</span><span class="mtk10">array</span><span class="mtk1">,</span> <span class="mtk10">target</span><span class="bracket-highlighting-0">)</span> <span class="mtk6">=&gt;</span> <span class="bracket-highlighting-0">{</span>',
                    '&tab1;<span class="mtk18">for</span> <span class="bracket-highlighting-1">(</span><span class="mtk6">let</span> <span class="mtk10">i</span> <span class="mtk3">=</span> <span class="mtk7">0</span><span class="mtk1">;</span> <span class="mtk10">i</span> <span class="mtk3">&lt;</span> <span class="mtk10">array</span><span class="mtk1">.</span><span class="mtk10">length</span><span class="mtk1">;</span> <span class="mtk10">i</span><span class="mtk3">++</span><span class="bracket-highlighting-1">)</span>',
                    '&tab2;<span class="mtk18">if</span> <span class="bracket-highlighting-1">(</span><span class="mtk10">array</span><span class="bracket-highlighting-2">[</span><span class="mtk10">i</span><span class="bracket-highlighting-2">]</span> <span class="mtk3">==</span> <span class="mtk10">target</span><span class="bracket-highlighting-1">)</span> <span class="mtk18">return</span> <span class="mtk10">i</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk18">return</span> <span class="mtk3">-</span><span class="mtk7">1</span><span class="mtk1">;</span>',
                    '<span class="bracket-highlighting-0">}</span><span class="mtk1">;</span>',
                ],
                cpp: [
                    '<span class="mtk5">// include: vector</span>',
                    '<span class="mtk5">// namespace: std</span>',
                    '<span>&empty-line;</span>',
                    '<span class="mtk6">int</span> <span class="mtk16">sequentialSearch</span><span class="bracket-highlighting-0">(</span><span class="mtk17">vector</span><span class="mtk1">&lt;</span><span class="mtk6">int</span><span class="mtk1">&gt;</span> <span class="mtk10">array</span><span class="mtk1">,</span> <span class="mtk6">int</span> <span class="mtk10">target</span><span class="bracket-highlighting-0">)</span> <span class="bracket-highlighting-0">{</span>',
                    '&tab1;<span class="mtk18">for</span> <span class="bracket-highlighting-1">(</span><span class="mtk6">int</span> <span class="mtk10">i</span> <span class="mtk3">=</span> <span class="mtk7">0</span><span class="mtk1">;</span> <span class="mtk10">i</span> <span class="mtk3">&lt;</span> <span class="mtk10">array</span><span class="mtk1">.</span><span class="mtk16">size</span><span class="bracket-highlighting-2">(</span><span class="bracket-highlighting-2">)</span><span class="mtk1">;</span> <span class="mtk10">i</span><span class="mtk3">++</span><span class="bracket-highlighting-1">)</span>',
                    '&tab2;<span class="mtk18">if</span> <span class="bracket-highlighting-1">(</span><span class="mtk10">array</span><span class="bracket-highlighting-2">[</span><span class="mtk10">i</span><span class="bracket-highlighting-2">]</span> <span class="mtk3">==</span> <span class="mtk10">target</span><span class="bracket-highlighting-1">)</span> <span class="mtk18">return</span> <span class="mtk10">i</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk18">return</span> <span class="mtk3">-</span><span class="mtk7">1</span><span class="mtk1">;</span>',
                    '<span class="bracket-highlighting-0">}</span><span class="mtk1">;</span>',
                ],
                py: [
                    '<span class="mtk6">def</span> <span class="mtk16">sequentialSearch</span><span class="bracket-highlighting-0">(</span><span class="mtk10">array</span><span class="mtk1">,</span> <span class="mtk10">target</span><span class="bracket-highlighting-0">)</span><span class="mtk1">:</span>',
                    '&tab1;<span class="mtk18">for</span> <span class="mtk10">i</span> <span class="mtk18">in</span> <span class="mtk17">range</span><span class="bracket-highlighting-0">(</span><span class="mtk7">0</span><span class="mtk1">,</span> <span class="mtk16">len</span><span class="bracket-highlighting-1">(</span><span class="mtk10">array</span><span class="bracket-highlighting-1">)</span><span class="bracket-highlighting-0">)</span><span class="mtk1">:</span>',
                    '&tab2;<span class="mtk18">if</span> <span class="mtk10">array</span><span class="bracket-highlighting-0">[</span><span class="mtk10">i</span><span class="bracket-highlighting-0">]</span> <span class="mtk3">==</span> <span class="mtk10">target</span><span class="mtk1">:</span>',
                    '&tab3;<span class="mtk18">return</span> <span class="mtk10">i</span>',
                    '&tab1;<span class="mtk18">return</span> <span class="mtk3">-</span><span class="mtk7">1</span>',
                ],
            },
            complexity: ALGOSCENE.createComplexity('n', '1', 'n', '1'),
        },
        binary: {
            code: {
                js: [
                    '<span class="mtk6">const</span> <span class="mtk16">binarySearch</span> <span class="mtk3">=</span> <span class="bracket-highlighting-0">(</span><span class="mtk10">array</span><span class="mtk1">,</span> <span class="mtk10">target</span><span class="bracket-highlighting-0">)</span> <span class="mtk6">=&gt;</span> <span class="bracket-highlighting-0">{</span>',
                    '&tab1;<span class="mtk6">let</span> <span class="mtk10">left</span> <span class="mtk3">=</span> <span class="mtk7">0</span><span class="mtk1">,</span>',
                    '&tab2;<span class="mtk10">right</span> <span class="mtk3">=</span> <span class="mtk10">array</span><span class="mtk1">.</span><span class="mtk10">length</span> <span class="mtk3">-</span> <span class="mtk7">1</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk18">while</span> <span class="bracket-highlighting-1">(</span><span class="mtk10">left</span> <span class="mtk3">&lt;=</span> <span class="mtk10">right</span><span class="bracket-highlighting-1">)</span> <span class="bracket-highlighting-1">{</span>',
                    '&tab2;<span class="mtk6">const</span> <span class="mtk19">middle</span> <span class="mtk3">=</span> <span class="mtk10">Math</span><span class="mtk1">.</span><span class="mtk16">floor</span><span class="bracket-highlighting-2">(</span><span class="bracket-highlighting-3">(</span><span class="mtk10">left</span> <span class="mtk3">+</span> <span class="mtk10">right</span><span class="bracket-highlighting-3">)</span> <span class="mtk3">/</span> <span class="mtk7">2</span><span class="bracket-highlighting-2">)</span><span class="mtk1">;</span>',
                    '&tab2;<span class="mtk18">if</span> <span class="bracket-highlighting-2">(</span><span class="mtk10">array</span><span class="bracket-highlighting-3">[</span><span class="mtk19">middle</span><span class="bracket-highlighting-3">]</span> <span class="mtk3">==</span> <span class="mtk10">target</span><span class="bracket-highlighting-2">)</span> <span class="mtk18">return</span> <span class="mtk19">middle</span><span class="mtk1">;</span>',
                    '&tab2;<span class="mtk18">if</span> <span class="bracket-highlighting-2">(</span><span class="mtk10">array</span><span class="bracket-highlighting-3">[</span><span class="mtk19">middle</span><span class="bracket-highlighting-3">]</span> <span class="mtk3">&lt;</span> <span class="mtk10">target</span><span class="bracket-highlighting-2">)</span> <span class="mtk10">left</span> <span class="mtk3">=</span> <span class="mtk19">middle</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="mtk1">;</span>',
                    '&tab2;<span class="mtk18">else</span> <span class="mtk10">right</span> <span class="mtk3">=</span> <span class="mtk19">middle</span> <span class="mtk3">-</span> <span class="mtk7">1</span><span class="mtk1">;</span>',
                    '&tab1;<span class="bracket-highlighting-1">}</span>',
                    '&tab1;<span class="mtk18">return</span> <span class="mtk3">-</span><span class="mtk7">1</span><span class="mtk1">;</span>',
                    '<span class="bracket-highlighting-0">}</span><span class="mtk1">;</span>',
                ],
                cpp: [
                    '<span class="mtk5">// include: vector</span>',
                    '<span class="mtk5">// namespace: std</span>',
                    '<span>&empty-line;</span>',
                    '<span class="mtk6">int</span> <span class="mtk16">binarySearch</span><span class="bracket-highlighting-0">(</span><span class="mtk17">vector</span><span class="mtk1">&lt;</span><span class="mtk6">int</span><span class="mtk1">&gt;</span> <span class="mtk10">array</span><span class="mtk1">,</span> <span class="mtk6">int</span> <span class="mtk10">target</span><span class="bracket-highlighting-0">)</span> <span class="bracket-highlighting-0">{</span>',
                    '&tab1;<span class="mtk6">int</span> <span class="mtk10">left</span> <span class="mtk3">=</span> <span class="mtk7">0</span><span class="mtk1">,</span>',
                    '&tab2;<span class="mtk10">right</span> <span class="mtk3">=</span> <span class="mtk10">array</span><span class="mtk1">.</span><span class="mtk16">size</span><span class="bracket-highlighting-1">(</span><span class="bracket-highlighting-1">)</span> <span class="mtk3">-</span> <span class="mtk7">1</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk18">while</span> <span class="bracket-highlighting-1">(</span><span class="mtk10">left</span> <span class="mtk3">&lt;=</span> <span class="mtk10">right</span><span class="bracket-highlighting-1">)</span> <span class="bracket-highlighting-1">{</span>',
                    '&tab2;<span class="mtk6">int</span> <span class="mtk10">middle</span> <span class="mtk3">=</span> <span class="bracket-highlighting-2">(</span><span class="mtk10">left</span> <span class="mtk3">+</span> <span class="mtk10">right</span><span class="bracket-highlighting-2">)</span> <span class="mtk3">/</span> <span class="mtk7">2</span><span class="mtk1">;</span>',
                    '&tab2;<span class="mtk18">if</span> <span class="bracket-highlighting-2">(</span><span class="mtk10">array</span><span class="bracket-highlighting-3">[</span><span class="mtk10">middle</span><span class="bracket-highlighting-3">]</span> <span class="mtk3">==</span> <span class="mtk10">target</span><span class="bracket-highlighting-2">)</span> <span class="mtk18">return</span> <span class="mtk10">middle</span><span class="mtk1">;</span>',
                    '&tab2;<span class="mtk18">if</span> <span class="bracket-highlighting-2">(</span><span class="mtk10">array</span><span class="bracket-highlighting-3">[</span><span class="mtk10">middle</span><span class="bracket-highlighting-3">]</span> <span class="mtk3">&lt;</span> <span class="mtk10">target</span><span class="bracket-highlighting-2">)</span> <span class="mtk10">left</span> <span class="mtk3">=</span> <span class="mtk10">middle</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="mtk1">;</span>',
                    '&tab2;<span class="mtk18">else</span> <span class="mtk10">right</span> <span class="mtk3">=</span> <span class="mtk10">middle</span> <span class="mtk3">-</span> <span class="mtk7">1</span><span class="mtk1">;</span>',
                    '&tab1;<span class="bracket-highlighting-1">}</span>',
                    '&tab1;<span class="mtk18">return</span> <span class="mtk3">-</span><span class="mtk7">1</span><span class="mtk1">;</span>',
                    '<span class="bracket-highlighting-0">}</span><span class="mtk1">;</span>',
                ],
                py: [
                    '<span class="mtk6">def</span> <span class="mtk16">binarySearch</span><span class="bracket-highlighting-0">(</span><span class="mtk10">array</span><span class="mtk1">,</span> <span class="mtk10">target</span><span class="bracket-highlighting-0">)</span><span class="mtk1">:</span>',
                    '&tab1;<span class="mtk10">left</span><span class="mtk1">,</span> <span class="mtk10">right</span> <span class="mtk3">=</span> <span class="mtk7">0</span><span class="mtk1">,</span> <span class="mtk16">len</span><span class="bracket-highlighting-0">(</span><span class="mtk10">array</span><span class="bracket-highlighting-0">)</span> <span class="mtk3">-</span> <span class="mtk7">1</span>',
                    '&tab1;<span class="mtk18">while</span> <span class="mtk10">left</span> <span class="mtk3">&lt;=</span> <span class="mtk10">right</span><span class="mtk1">:</span>',
                    '&tab2;<span class="mtk10">middle</span> <span class="mtk3">=</span> <span class="mtk17">int</span><span class="bracket-highlighting-0">(</span><span class="bracket-highlighting-1">(</span><span class="mtk10">left</span> <span class="mtk3">+</span> <span class="mtk10">right</span><span class="bracket-highlighting-1">)</span> <span class="mtk3">/</span> <span class="mtk7">2</span><span class="bracket-highlighting-0">)</span>',
                    '&tab2;<span class="mtk18">if</span> <span class="mtk10">array</span><span class="bracket-highlighting-0">[</span><span class="mtk10">middle</span><span class="bracket-highlighting-0">]</span> <span class="mtk3">==</span> <span class="mtk10">target</span><span class="mtk1">:</span>',
                    '&tab3;<span class="mtk18">return</span> <span class="mtk10">middle</span>',
                    '&tab2;<span class="mtk18">if</span> <span class="mtk10">array</span><span class="bracket-highlighting-0">[</span><span class="mtk10">middle</span><span class="bracket-highlighting-0">]</span> <span class="mtk3">&lt;</span> <span class="mtk10">target</span><span class="mtk1">:</span>',
                    '&tab3;<span class="mtk10">left</span> <span class="mtk3">=</span> <span class="mtk10">middle</span> <span class="mtk3">+</span> <span class="mtk7">1</span>',
                    '&tab2;<span class="mtk18">else</span><span class="mtk1">:</span>',
                    '&tab3;<span class="mtk10">right</span> <span class="mtk3">=</span> <span class="mtk10">middle</span> <span class="mtk3">-</span> <span class="mtk7">1</span>',
                    '&tab1;<span class="mtk18">return</span> <span class="mtk3">-</span><span class="mtk7">1</span>',
                ],
            },
            complexity: ALGOSCENE.createComplexity('log n', '1', 'log n', '1'),
        },
    },
    {
        sqts: 'mtk16|sequentialSearch',
        bnrs: 'mtk16|binarySearch',
        target: 'mtk10|target',
        i: 'mtk10|i',
        1: 'mtk7|1',
        left: 'mtk10|left',
        right: 'mtk10|right',
        middle: 'mtk10|middle',
        middlejs: 'mtk19|middle',
    }
);

let TARGET = 7,
    ARRAY = [5, 9, 2, 4, 11, 6, 8, 1, 12, 3, 7, 10];

ALGOSCENE.customInput.setCurrentValue(`${String(TARGET)}\n${ARRAY.join(' ')}`);

ALGOSCENE.customInput.onApply = function (value) {
    let isValid = true;
    value = value.split(' ').map((e) => Number(e));
    value.forEach((e) =>
        isNaN(e) || e < -9 || e > 99 || !Number.isInteger(e) ? (isValid = false) : null
    );
    if (value.length < 13) isValid = false;
    if (isValid) {
        TARGET = value[0];
        ARRAY = value.slice(1, 13);
        ALGOSCENE.frameHTML = getframeHTML();
        ALGOSCENE.resetAction();
        ALGOSCENE.customInput.setCurrentValue(`${String(TARGET)}\n${ARRAY.join(' ')}`);
        ALGOSCENE.customInput.notify.success();
    } else ALGOSCENE.customInput.notify.failure();
};

const getframeHTML = () =>
    '<div class="background"><span></span><span></span><span></span><span></span><span></span><span></span></div>' +
    `<div class="array">${ARRAY.map((e, i) => `<span o="${i + 1}">${e}</span>`).join('')}</div>` +
    `<div class="target"><span>${TARGET}</span>: <span>?</span></div>`;

ALGOSCENE.frameHTML = getframeHTML();

const colors = ['', 'yellowgreen', 'orange', 'red'];

const array = new (class {
    constructor() {
        this.length = ARRAY.length;
        ALGOSCENE.resetFrame.setAction('resetArray', () => this.reset());
    }
    setPosition() {
        this.elm.childNodes.forEach((e) => (e.style.left = 2 * e.index + 'em'));
    }
    regetElm() {
        this.elm = ALGOSCENE.frameElm.querySelector('.array');
        this.elm.childNodes.forEach((e) => {
            e.setBackgroundColor = async function (c = 0) {
                this.style.backgroundColor = colors[c];
                await ALGOSCENE.delay();
            };
        });
        this.reset();
    }
    reset() {
        this.elm?.querySelector('.selected')?.classList?.remove('selected');
        this.elm.childNodes.forEach((e, i) => {
            e.index = i;
            e.value = Number(e.innerText);
        });
        this.setPosition();

        this.sorted = true;
        for (let i = 1; i < this.length; i++)
            if (this.get(i).value < this.get(i - 1).value) {
                this.sorted = false;
                break;
            }
    }
    get(index) {
        return Array.from(this.elm.childNodes).find((e) => e.index == index);
    }
    async end(index) {
        await ALGOSCENE.delay(0.2);
        if (index == undefined) {
            target.failure();
            return;
        }
        this.get(index).style.removeProperty('background-color');
        this.get(index).classList.add('selected');
        target.success(index);
        await ALGOSCENE.delay();
    }
    quickSort(left = 0, right = this.length - 1) {
        if (left >= right) return;
        const pivot = this.get(Math.floor((left + right) / 2));
        let i = left,
            j = right;
        while (i <= j) {
            while (this.get(i).value < pivot.value) ++i;
            while (this.get(j).value > pivot.value) --j;
            if (i <= j) {
                const a = this.get(i),
                    b = this.get(j);
                a.index = j--;
                b.index = i++;
            }
        }
        this.quickSort(left, j);
        this.quickSort(i, right);
    }
    async sort() {
        if (!this.sorted) {
            this.quickSort();
            this.setPosition();
            await ALGOSCENE.delay(4);
        }
    }
})();

const target = new (class {
    constructor() {
        ALGOSCENE.resetFrame.setAction('resetTarget', () => this.reset());
    }
    regetElm() {
        this.elm = ALGOSCENE.frameElm.querySelector('.target');
        this.elm.value = this.elm.querySelector('span:last-child');
    }
    success(index) {
        this.elm.value.innerText = index;
        this.elm.className = 'target success';
    }
    failure() {
        this.elm.value.innerHTML = '&times;';
        this.elm.className = 'target failure';
    }
    reset() {
        this.elm.value.innerText = '?';
        this.elm.className = 'target';
    }
})();

ALGOSCENE.setAction('sequential', () => {
    array.regetElm();
    target.regetElm();
    ALGOSCENE.playPauseBtn.click = async () => {
        let i;
        for (i = 0; i < array.length; i++) {
            await array.get(i).setBackgroundColor(2);
            if (array.get(i).value == TARGET) {
                await array.end(i);
                break;
            }
            array.get(i).setBackgroundColor();
        }
        if (i == array.length) await array.end();
    };
});

ALGOSCENE.setAction('binary', () => {
    array.regetElm();
    target.regetElm();
    ALGOSCENE.playPauseBtn.click = async () => {
        await array.sort();
        let left = 0,
            right = array.length - 1;
        array.get(left).setBackgroundColor(3);
        await array.get(right).setBackgroundColor(3);
        while (left <= right) {
            const middle = array.get(Math.floor((left + right) / 2));
            await middle.setBackgroundColor(2);
            if (middle.value == TARGET) {
                await array.end(middle.index);
                break;
            }
            await ALGOSCENE.delay();
            array.get(left).setBackgroundColor();
            await array.get(right).setBackgroundColor();
            if (middle.value < TARGET) left = middle.index + 1;
            else right = middle.index - 1;
            middle.setBackgroundColor();
            await ALGOSCENE.delay();
            if (left <= right) {
                array.get(left)?.setBackgroundColor(3);
                await array.get(right)?.setBackgroundColor(3);
            }
        }
        array.get(left)?.setBackgroundColor();
        await array.get(right)?.setBackgroundColor();
        if (left > right) await array.end();
    };
});
