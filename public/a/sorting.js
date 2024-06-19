'use strict';

await ALGOSCENE.init(
    'cpp,js,py',
    {
        bubble: {
            code: {
                js: [
                    '<span class="mtk6">const</span> <span class="mtk16">bubbleSort</span> <span class="mtk3">=</span> <span class="bracket-highlighting-0">(</span><span class="mtk10">array</span><span class="bracket-highlighting-0">)</span> <span class="mtk6">=&gt;</span> <span class="bracket-highlighting-0">{</span>',
                    '&tab1;<span class="mtk18">for</span> <span class="bracket-highlighting-1">(</span><span class="mtk6">let</span> <span class="mtk10">i</span> <span class="mtk3">=</span> <span class="mtk7">0</span><span class="mtk1">;</span> <span class="mtk10">i</span> <span class="mtk3">&lt;</span> <span class="mtk10">array</span><span class="mtk1">.</span><span class="mtk10">length</span> <span class="mtk3">-</span> <span class="mtk7">1</span><span class="mtk1">;</span> <span class="mtk10">i</span><span class="mtk3">++</span><span class="bracket-highlighting-1">)</span>',
                    '&tab2;<span class="mtk18">for</span> <span class="bracket-highlighting-1">(</span><span class="mtk6">let</span> <span class="mtk10">j</span> <span class="mtk3">=</span> <span class="mtk7">0</span><span class="mtk1">;</span> <span class="mtk10">j</span> <span class="mtk3">&lt;</span> <span class="mtk10">array</span><span class="mtk1">.</span><span class="mtk10">length</span> <span class="mtk3">-</span> <span class="mtk10">i</span> <span class="mtk3">-</span> <span class="mtk7">1</span><span class="mtk1">;</span> <span class="mtk10">j</span><span class="mtk3">++</span><span class="bracket-highlighting-1">)</span>',
                    '&tab3;<span class="mtk18">if</span> <span class="bracket-highlighting-1">(</span><span class="mtk10">array</span><span class="bracket-highlighting-2">[</span><span class="mtk10">j</span><span class="bracket-highlighting-2">]</span> <span class="mtk3">&gt;</span> <span class="mtk10">array</span><span class="bracket-highlighting-2">[</span><span class="mtk10">j</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="bracket-highlighting-2">]</span><span class="bracket-highlighting-1">)</span>',
                    '&tab4;<span class="bracket-highlighting-1">[</span><span class="mtk10">array</span><span class="bracket-highlighting-2">[</span><span class="mtk10">j</span><span class="bracket-highlighting-2">]</span><span class="mtk1">,</span> <span class="mtk10">array</span><span class="bracket-highlighting-2">[</span><span class="mtk10">j</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="bracket-highlighting-2">]</span><span class="bracket-highlighting-1">]</span> <span class="mtk3">=</span> <span class="bracket-highlighting-1">[</span><span class="mtk10">array</span><span class="bracket-highlighting-2">[</span><span class="mtk10">j</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="bracket-highlighting-2">]</span><span class="mtk1">,</span> <span class="mtk10">array</span><span class="bracket-highlighting-2">[</span><span class="mtk10">j</span><span class="bracket-highlighting-2">]</span><span class="bracket-highlighting-1">]</span><span class="mtk1">;</span>',
                    '<span class="bracket-highlighting-0">}</span><span class="mtk1">;</span>',
                ],
                cpp: [
                    '<span class="mtk5">// include: vector</span>',
                    '<span class="mtk5">// namespace: std</span>',
                    '<span>&empty-line;</span>',
                    '<span class="mtk6">void</span> <span class="mtk16">bubbleSort</span><span class="bracket-highlighting-0">(</span><span class="mtk17">vector</span><span class="mtk1">&lt;</span><span class="mtk6">int</span><span class="mtk1">&gt;</span><span class="mtk6">&amp;</span> <span class="mtk10">array</span><span class="bracket-highlighting-0">)</span> <span class="bracket-highlighting-0">{</span>',
                    '&tab1;<span class="mtk18">for</span> <span class="bracket-highlighting-1">(</span><span class="mtk6">int</span> <span class="mtk10">i</span> <span class="mtk3">=</span> <span class="mtk7">0</span><span class="mtk1">;</span> <span class="mtk10">i</span> <span class="mtk3">&lt;</span> <span class="mtk10">array</span><span class="mtk1">.</span><span class="mtk16">size</span><span class="bracket-highlighting-2">(</span><span class="bracket-highlighting-2">)</span> <span class="mtk3">-</span> <span class="mtk7">1</span><span class="mtk1">;</span> <span class="mtk10">i</span><span class="mtk3">++</span><span class="bracket-highlighting-1">)</span>',
                    '&tab2;<span class="mtk18">for</span> <span class="bracket-highlighting-1">(</span><span class="mtk6">int</span> <span class="mtk10">j</span> <span class="mtk3">=</span> <span class="mtk7">0</span><span class="mtk1">;</span> <span class="mtk10">j</span> <span class="mtk3">&lt;</span> <span class="mtk10">array</span><span class="mtk1">.</span><span class="mtk16">size</span><span class="bracket-highlighting-2">(</span><span class="bracket-highlighting-2">)</span> <span class="mtk3">-</span> <span class="mtk10">i</span> <span class="mtk3">-</span> <span class="mtk7">1</span><span class="mtk1">;</span> <span class="mtk10">j</span><span class="mtk3">++</span><span class="bracket-highlighting-1">)</span>',
                    '&tab3;<span class="mtk18">if</span> <span class="bracket-highlighting-1">(</span><span class="mtk10">array</span><span class="bracket-highlighting-2">[</span><span class="mtk10">j</span><span class="bracket-highlighting-2">]</span> <span class="mtk3">&gt;</span> <span class="mtk10">array</span><span class="bracket-highlighting-2">[</span><span class="mtk10">j</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="bracket-highlighting-2">]</span><span class="bracket-highlighting-1">)</span>',
                    '&tab4;<span class="mtk16">swap</span><span class="bracket-highlighting-1">(</span><span class="mtk10">array</span><span class="bracket-highlighting-2">[</span><span class="mtk10">j</span><span class="bracket-highlighting-2">]</span><span class="mtk1">,</span> <span class="mtk10">array</span><span class="bracket-highlighting-2">[</span><span class="mtk10">j</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="bracket-highlighting-2">]</span><span class="bracket-highlighting-1">)</span><span class="mtk1">;</span>',
                    '<span class="bracket-highlighting-0">}</span><span class="mtk1">;</span>',
                ],
                py: [
                    '<span class="mtk6">def</span> <span class="mtk16">bubbleSort</span><span class="bracket-highlighting-0">(</span><span class="mtk10">array</span><span class="bracket-highlighting-0">)</span><span class="mtk1">:</span>',
                    '&tab1;<span class="mtk18">for</span> <span class="mtk10">i</span> <span class="mtk18">in</span> <span class="mtk17">range</span><span class="bracket-highlighting-0">(</span><span class="mtk16">len</span><span class="bracket-highlighting-1">(</span><span class="mtk10">array</span><span class="bracket-highlighting-1">)</span> <span class="mtk3">-</span> <span class="mtk7">1</span><span class="bracket-highlighting-0">)</span><span class="mtk1">:</span>',
                    '&tab2;<span class="mtk18">for</span> <span class="mtk10">j</span> <span class="mtk18">in</span> <span class="mtk17">range</span><span class="bracket-highlighting-0">(</span><span class="mtk16">len</span><span class="bracket-highlighting-1">(</span><span class="mtk10">array</span><span class="bracket-highlighting-1">)</span> <span class="mtk3">-</span> <span class="mtk10">i</span> <span class="mtk3">-</span> <span class="mtk7">1</span><span class="bracket-highlighting-0">)</span><span class="mtk1">:</span>',
                    '&tab3;<span class="mtk18">if</span> <span class="mtk10">array</span><span class="bracket-highlighting-0">[</span><span class="mtk10">j</span><span class="bracket-highlighting-0">]</span> <span class="mtk3">&gt;</span> <span class="mtk10">array</span><span class="bracket-highlighting-0">[</span><span class="mtk10">j</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="bracket-highlighting-0">]</span><span class="mtk1">:</span>',
                    '&tab4;<span class="mtk10">array</span><span class="bracket-highlighting-0">[</span><span class="mtk10">j</span><span class="bracket-highlighting-0">]</span><span class="mtk1">,</span> <span class="mtk10">array</span><span class="bracket-highlighting-0">[</span><span class="mtk10">j</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="bracket-highlighting-0">]</span> <span class="mtk3">=</span> <span class="mtk10">array</span><span class="bracket-highlighting-0">[</span><span class="mtk10">j</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="bracket-highlighting-0">]</span><span class="mtk1">,</span> <span class="mtk10">array</span><span class="bracket-highlighting-0">[</span><span class="mtk10">j</span><span class="bracket-highlighting-0">]</span>',
                ],
            },
            complexity: ALGOSCENE.createComplexity('n{^2}', 'n', 'n{^2}', '1'),
        },
        selection: {
            code: {
                js: [
                    '<span class="mtk6">const</span> <span class="mtk16">selectionSort</span> <span class="mtk3">=</span> <span class="bracket-highlighting-0">(</span><span class="mtk10">array</span><span class="bracket-highlighting-0">)</span> <span class="mtk6">=&gt;</span> <span class="bracket-highlighting-0">{</span>',
                    '&tab1;<span class="mtk18">for</span> <span class="bracket-highlighting-1">(</span><span class="mtk6">let</span> <span class="mtk10">i</span> <span class="mtk3">=</span> <span class="mtk7">0</span><span class="mtk1">;</span> <span class="mtk10">i</span> <span class="mtk3">&lt;</span> <span class="mtk10">array</span><span class="mtk1">.</span><span class="mtk10">length</span> <span class="mtk3">-</span> <span class="mtk7">1</span><span class="mtk1">;</span> <span class="mtk10">i</span><span class="mtk3">++</span><span class="bracket-highlighting-1">)</span> <span class="bracket-highlighting-1">{</span>',
                    '&tab2;<span class="mtk6">let</span> <span class="mtk10">min</span> <span class="mtk3">=</span> <span class="mtk10">i</span><span class="mtk1">;</span>',
                    '&tab2;<span class="mtk18">for</span> <span class="bracket-highlighting-2">(</span><span class="mtk6">let</span> <span class="mtk10">j</span> <span class="mtk3">=</span> <span class="mtk10">i</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="mtk1">;</span> <span class="mtk10">j</span> <span class="mtk3">&lt;</span> <span class="mtk10">array</span><span class="mtk1">.</span><span class="mtk10">length</span><span class="mtk1">;</span> <span class="mtk10">j</span><span class="mtk3">++</span><span class="bracket-highlighting-2">)</span>',
                    '&tab3;<span class="mtk18">if</span> <span class="bracket-highlighting-2">(</span><span class="mtk10">array</span><span class="bracket-highlighting-3">[</span><span class="mtk10">j</span><span class="bracket-highlighting-3">]</span> <span class="mtk3">&lt;</span> <span class="mtk10">array</span><span class="bracket-highlighting-3">[</span><span class="mtk10">min</span><span class="bracket-highlighting-3">]</span><span class="bracket-highlighting-2">)</span> <span class="mtk10">min</span> <span class="mtk3">=</span> <span class="mtk10">j</span><span class="mtk1">;</span>',
                    '&tab2;<span class="bracket-highlighting-2">[</span><span class="mtk10">array</span><span class="bracket-highlighting-3">[</span><span class="mtk10">i</span><span class="bracket-highlighting-3">]</span><span class="mtk1">,</span> <span class="mtk10">array</span><span class="bracket-highlighting-3">[</span><span class="mtk10">min</span><span class="bracket-highlighting-3">]</span><span class="bracket-highlighting-2">]</span> <span class="mtk3">=</span> <span class="bracket-highlighting-2">[</span><span class="mtk10">array</span><span class="bracket-highlighting-3">[</span><span class="mtk10">min</span><span class="bracket-highlighting-3">]</span><span class="mtk1">,</span> <span class="mtk10">array</span><span class="bracket-highlighting-3">[</span><span class="mtk10">i</span><span class="bracket-highlighting-3">]</span><span class="bracket-highlighting-2">]</span><span class="mtk1">;</span>',
                    '&tab1;<span class="bracket-highlighting-1">}</span>',
                    '<span class="bracket-highlighting-0">}</span><span class="mtk1">;</span>',
                ],
                cpp: [
                    '<span class="mtk5">// include: vector</span>',
                    '<span class="mtk5">// namespace: std</span>',
                    '<span>&empty-line;</span>',
                    '<span class="mtk6">void</span> <span class="mtk16">selectionSort</span><span class="bracket-highlighting-0">(</span><span class="mtk17">vector</span><span class="mtk1">&lt;</span><span class="mtk6">int</span><span class="mtk1">&gt;</span><span class="mtk6">&amp;</span> <span class="mtk10">array</span><span class="bracket-highlighting-0">)</span> <span class="bracket-highlighting-0">{</span>',
                    '&tab1;<span class="mtk18">for</span> <span class="bracket-highlighting-1">(</span><span class="mtk6">int</span> <span class="mtk10">i</span> <span class="mtk3">=</span> <span class="mtk7">0</span><span class="mtk1">;</span> <span class="mtk10">i</span> <span class="mtk3">&lt;</span> <span class="mtk10">array</span><span class="mtk1">.</span><span class="mtk16">size</span><span class="bracket-highlighting-2">(</span><span class="bracket-highlighting-2">)</span> <span class="mtk3">-</span> <span class="mtk7">1</span><span class="mtk1">;</span> <span class="mtk10">i</span><span class="mtk3">++</span><span class="bracket-highlighting-1">)</span> <span class="bracket-highlighting-1">{</span>',
                    '&tab2;<span class="mtk6">int</span> <span class="mtk10">min</span> <span class="mtk3">=</span> <span class="mtk10">i</span><span class="mtk1">;</span>',
                    '&tab2;<span class="mtk18">for</span> <span class="bracket-highlighting-2">(</span><span class="mtk6">int</span> <span class="mtk10">j</span> <span class="mtk3">=</span> <span class="mtk10">i</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="mtk1">;</span> <span class="mtk10">j</span> <span class="mtk3">&lt;</span> <span class="mtk10">array</span><span class="mtk1">.</span><span class="mtk16">size</span><span class="bracket-highlighting-3">(</span><span class="bracket-highlighting-3">)</span><span class="mtk1">;</span> <span class="mtk10">j</span><span class="mtk3">++</span><span class="bracket-highlighting-2">)</span>',
                    '&tab3;<span class="mtk18">if</span> <span class="bracket-highlighting-2">(</span><span class="mtk10">array</span><span class="bracket-highlighting-3">[</span><span class="mtk10">j</span><span class="bracket-highlighting-3">]</span> <span class="mtk3">&lt;</span> <span class="mtk10">array</span><span class="bracket-highlighting-3">[</span><span class="mtk10">min</span><span class="bracket-highlighting-3">]</span><span class="bracket-highlighting-2">)</span> <span class="mtk10">min</span> <span class="mtk3">=</span> <span class="mtk10">j</span><span class="mtk1">;</span>',
                    '&tab2;<span class="mtk16">swap</span><span class="bracket-highlighting-2">(</span><span class="mtk10">array</span><span class="bracket-highlighting-3">[</span><span class="mtk10">min</span><span class="bracket-highlighting-3">]</span><span class="mtk1">,</span> <span class="mtk10">array</span><span class="bracket-highlighting-3">[</span><span class="mtk10">i</span><span class="bracket-highlighting-3">]</span><span class="bracket-highlighting-2">)</span><span class="mtk1">;</span>',
                    '&tab1;<span class="bracket-highlighting-1">}</span>',
                    '<span class="bracket-highlighting-0">}</span><span class="mtk1">;</span>',
                ],
                py: [
                    '<span class="mtk6">def</span> <span class="mtk16">selectionSort</span><span class="bracket-highlighting-0">(</span><span class="mtk10">array</span><span class="bracket-highlighting-0">)</span><span class="mtk1">:</span>',
                    '&tab1;<span class="mtk18">for</span> <span class="mtk10">i</span> <span class="mtk18">in</span> <span class="mtk17">range</span><span class="bracket-highlighting-0">(</span><span class="mtk16">len</span><span class="bracket-highlighting-1">(</span><span class="mtk10">array</span><span class="bracket-highlighting-1">)</span> <span class="mtk3">-</span> <span class="mtk7">1</span><span class="bracket-highlighting-0">)</span><span class="mtk1">:</span>',
                    '&tab2;<span class="mtk10">min</span> <span class="mtk3">=</span> <span class="mtk10">i</span>',
                    '&tab2;<span class="mtk18">for</span> <span class="mtk10">j</span> <span class="mtk18">in</span> <span class="mtk17">range</span><span class="bracket-highlighting-0">(</span><span class="mtk10">i</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk16">len</span><span class="bracket-highlighting-1">(</span><span class="mtk10">array</span><span class="bracket-highlighting-1">)</span><span class="bracket-highlighting-0">)</span><span class="mtk1">:</span>',
                    '&tab3;<span class="mtk18">if</span> <span class="mtk10">array</span><span class="bracket-highlighting-0">[</span><span class="mtk10">j</span><span class="bracket-highlighting-0">]</span> <span class="mtk3">&lt;</span> <span class="mtk10">array</span><span class="bracket-highlighting-0">[</span><span class="mtk10">min</span><span class="bracket-highlighting-0">]</span><span class="mtk1">:</span> ',
                    '&tab4;<span class="mtk10">min</span> <span class="mtk3">=</span> <span class="mtk10">j</span>',
                    '&tab2;<span class="mtk10">array</span><span class="bracket-highlighting-0">[</span><span class="mtk10">i</span><span class="bracket-highlighting-0">]</span><span class="mtk1">,</span> <span class="mtk10">array</span><span class="bracket-highlighting-0">[</span><span class="mtk10">min</span><span class="bracket-highlighting-0">]</span> <span class="mtk3">=</span> <span class="mtk10">array</span><span class="bracket-highlighting-0">[</span><span class="mtk10">min</span><span class="bracket-highlighting-0">]</span><span class="mtk1">,</span> <span class="mtk10">array</span><span class="bracket-highlighting-0">[</span><span class="mtk10">i</span><span class="bracket-highlighting-0">]</span>',
                ],
            },
            complexity: ALGOSCENE.createComplexity('n{^2}', 'n{^2}', 'n{^2}', '1'),
        },
        insertion: {
            code: {
                js: [
                    '<span class="mtk6">const</span> <span class="mtk16">insertionSort</span> <span class="mtk3">=</span> <span class="bracket-highlighting-0">(</span><span class="mtk10">array</span><span class="bracket-highlighting-0">)</span> <span class="mtk6">=&gt;</span> <span class="bracket-highlighting-0">{</span>',
                    '&tab1;<span class="mtk18">for</span> <span class="bracket-highlighting-1">(</span><span class="mtk6">let</span> <span class="mtk10">i</span> <span class="mtk3">=</span> <span class="mtk7">1</span><span class="mtk1">;</span> <span class="mtk10">i</span> <span class="mtk3">&lt;</span> <span class="mtk10">array</span><span class="mtk1">.</span><span class="mtk10">length</span><span class="mtk1">;</span> <span class="mtk10">i</span><span class="mtk3">++</span><span class="bracket-highlighting-1">)</span> <span class="bracket-highlighting-1">{</span>',
                    '&tab2;<span class="mtk6">let</span> <span class="mtk10">j</span> <span class="mtk3">=</span> <span class="mtk10">i</span><span class="mtk1">,</span>',
                    '&tab3;<span class="mtk10">current</span> <span class="mtk3">=</span> <span class="mtk10">array</span><span class="bracket-highlighting-2">[</span><span class="mtk10">i</span><span class="bracket-highlighting-2">]</span><span class="mtk1">;</span>',
                    '&tab2;<span class="mtk18">while</span> <span class="bracket-highlighting-2">(</span><span class="mtk3">--</span><span class="mtk10">j</span> <span class="mtk3">&gt;=</span> <span class="mtk7">0</span> <span class="mtk3">&amp;&amp;</span> <span class="mtk10">array</span><span class="bracket-highlighting-3">[</span><span class="mtk10">j</span><span class="bracket-highlighting-3">]</span> <span class="mtk3">&gt;</span> <span class="mtk10">current</span><span class="bracket-highlighting-2">)</span>',
                    '&tab3;<span class="mtk10">array</span><span class="bracket-highlighting-2">[</span><span class="mtk10">j</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="bracket-highlighting-2">]</span> <span class="mtk3">=</span> <span class="mtk10">array</span><span class="bracket-highlighting-2">[</span><span class="mtk10">j</span><span class="bracket-highlighting-2">]</span><span class="mtk1">;</span>',
                    '&tab2;<span class="mtk10">array</span><span class="bracket-highlighting-2">[</span><span class="mtk10">j</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="bracket-highlighting-2">]</span> <span class="mtk3">=</span> <span class="mtk10">current</span><span class="mtk1">;</span>',
                    '&tab1;<span class="bracket-highlighting-1">}</span>',
                    '<span class="bracket-highlighting-0">}</span><span class="mtk1">;</span>',
                ],
                cpp: [
                    '<span class="mtk5">// include: vector</span>',
                    '<span class="mtk5">// namespace: std</span>',
                    '<span>&empty-line;</span>',
                    '<span class="mtk6">void</span> <span class="mtk16">insertionSort</span><span class="bracket-highlighting-0">(</span><span class="mtk17">vector</span><span class="mtk1">&lt;</span><span class="mtk6">int</span><span class="mtk1">&gt;</span><span class="mtk6">&amp;</span> <span class="mtk10">array</span><span class="bracket-highlighting-0">)</span> <span class="bracket-highlighting-0">{</span>',
                    '&tab1;<span class="mtk18">for</span> <span class="bracket-highlighting-1">(</span><span class="mtk6">int</span> <span class="mtk10">i</span> <span class="mtk3">=</span> <span class="mtk7">1</span><span class="mtk1">;</span> <span class="mtk10">i</span> <span class="mtk3">&lt;</span> <span class="mtk10">array</span><span class="mtk1">.</span><span class="mtk16">size</span><span class="bracket-highlighting-2">(</span><span class="bracket-highlighting-2">)</span><span class="mtk1">;</span> <span class="mtk10">i</span><span class="mtk3">++</span><span class="bracket-highlighting-1">)</span> <span class="bracket-highlighting-1">{</span>',
                    '&tab2;<span class="mtk6">int</span> <span class="mtk10">j</span> <span class="mtk3">=</span> <span class="mtk10">i</span><span class="mtk1">,</span>',
                    '&tab3; <span class="mtk10">current</span> <span class="mtk3">=</span> <span class="mtk10">array</span><span class="bracket-highlighting-2">[</span><span class="mtk10">i</span><span class="bracket-highlighting-2">]</span><span class="mtk1">;</span>',
                    '&tab2;<span class="mtk18">while</span> <span class="bracket-highlighting-2">(</span><span class="mtk3">--</span><span class="mtk10">j</span> <span class="mtk3">&gt;=</span> <span class="mtk7">0</span> <span class="mtk3">&amp;&amp;</span> <span class="mtk10">array</span><span class="bracket-highlighting-3">[</span><span class="mtk10">j</span><span class="bracket-highlighting-3">]</span> <span class="mtk3">&gt;</span> <span class="mtk10">current</span><span class="bracket-highlighting-2">)</span>',
                    '&tab3;<span class="mtk10">array</span><span class="bracket-highlighting-2">[</span><span class="mtk10">j</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="bracket-highlighting-2">]</span> <span class="mtk3">=</span> <span class="mtk10">array</span><span class="bracket-highlighting-2">[</span><span class="mtk10">j</span><span class="bracket-highlighting-2">]</span><span class="mtk1">;</span>',
                    '&tab2;<span class="mtk10">array</span><span class="bracket-highlighting-2">[</span><span class="mtk10">j</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="bracket-highlighting-2">]</span> <span class="mtk3">=</span> <span class="mtk10">current</span><span class="mtk1">;</span>',
                    '&tab1;<span class="bracket-highlighting-1">}</span>',
                    '<span class="bracket-highlighting-0">}</span><span class="mtk1">;</span>',
                ],
                py: [
                    '<span class="mtk6">def</span> <span class="mtk16">insertionSort</span><span class="bracket-highlighting-0">(</span><span class="mtk10">array</span><span class="bracket-highlighting-0">)</span><span class="mtk1">:</span>',
                    '&tab1;<span class="mtk18">for</span> <span class="mtk10">i</span> <span class="mtk18">in</span> <span class="mtk17">range</span><span class="bracket-highlighting-0">(</span><span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk16">len</span><span class="bracket-highlighting-1">(</span><span class="mtk10">array</span><span class="bracket-highlighting-1">)</span><span class="bracket-highlighting-0">)</span><span class="mtk1">:</span>',
                    '&tab2;<span class="mtk10">j</span><span class="mtk1">,</span> <span class="mtk10">current</span> <span class="mtk3">=</span> <span class="mtk10">i</span> <span class="mtk3">-</span> <span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk10">array</span><span class="bracket-highlighting-0">[</span><span class="mtk10">i</span><span class="bracket-highlighting-0">]</span>',
                    '&tab2;<span class="mtk18">while</span> <span class="mtk10">j</span> <span class="mtk3">&gt;=</span> <span class="mtk7">0</span> <span class="mtk6">and</span> <span class="mtk10">array</span><span class="bracket-highlighting-0">[</span><span class="mtk10">j</span><span class="bracket-highlighting-0">]</span> <span class="mtk3">&gt;</span> <span class="mtk10">current</span><span class="mtk1">:</span>',
                    '&tab3;<span class="mtk10">array</span><span class="bracket-highlighting-0">[</span><span class="mtk10">j</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="bracket-highlighting-0">]</span> <span class="mtk3">=</span> <span class="mtk10">array</span><span class="bracket-highlighting-0">[</span><span class="mtk10">j</span><span class="bracket-highlighting-0">]</span>',
                    '&tab3;<span class="mtk10">j</span> <span class="mtk3">-=</span> <span class="mtk7">1</span>',
                    '&tab2;<span class="mtk10">array</span><span class="bracket-highlighting-0">[</span><span class="mtk10">j</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="bracket-highlighting-0">]</span> <span class="mtk3">=</span> <span class="mtk10">current</span>',
                ],
            },
            complexity: ALGOSCENE.createComplexity('n{^2}', 'n', 'n{^2}', '1'),
        },
        quick: {
            code: {
                js: [
                    '<span class="mtk6">const</span> <span class="mtk16">quickSort</span> <span class="mtk3">=</span> <span class="bracket-highlighting-0">(</span><span class="mtk10">array</span><span class="mtk1">,</span> <span class="mtk10">left</span> <span class="mtk3">=</span> <span class="mtk7">0</span><span class="mtk1">,</span> <span class="mtk10">right</span> <span class="mtk3">=</span> <span class="mtk10">array</span><span class="mtk1">.</span><span class="mtk10">length</span> <span class="mtk3">-</span> <span class="mtk7">1</span><span class="bracket-highlighting-0">)</span> <span class="mtk6">=&gt;</span> <span class="bracket-highlighting-0">{</span>',
                    '&tab1;<span class="mtk18">if</span> <span class="bracket-highlighting-1">(</span><span class="mtk10">left</span> <span class="mtk3">&gt;=</span> <span class="mtk10">right</span><span class="bracket-highlighting-1">)</span> <span class="mtk18">return</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk6">const</span> <span class="mtk19">pivot</span> <span class="mtk3">=</span> <span class="mtk10">array</span><span class="bracket-highlighting-1">[</span><span class="mtk10">Math</span><span class="mtk1">.</span><span class="mtk16">floor</span><span class="bracket-highlighting-2">(</span><span class="bracket-highlighting-3">(</span><span class="mtk10">left</span> <span class="mtk3">+</span> <span class="mtk10">right</span><span class="bracket-highlighting-3">)</span> <span class="mtk3">/</span> <span class="mtk7">2</span><span class="bracket-highlighting-2">)</span><span class="bracket-highlighting-1">]</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk6">let</span> <span class="mtk10">i</span> <span class="mtk3">=</span> <span class="mtk10">left</span><span class="mtk1">,</span>',
                    '&tab2;<span class="mtk10">j</span> <span class="mtk3">=</span> <span class="mtk10">right</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk18">while</span> <span class="bracket-highlighting-1">(</span><span class="mtk10">i</span> <span class="mtk3">&lt;=</span> <span class="mtk10">j</span><span class="bracket-highlighting-1">)</span> <span class="bracket-highlighting-1">{</span>',
                    '&tab2;<span class="mtk18">while</span> <span class="bracket-highlighting-2">(</span><span class="mtk10">array</span><span class="bracket-highlighting-3">[</span><span class="mtk10">i</span><span class="bracket-highlighting-3">]</span> <span class="mtk3">&lt;</span> <span class="mtk19">pivot</span><span class="bracket-highlighting-2">)</span> <span class="mtk3">++</span><span class="mtk10">i</span><span class="mtk1">;</span>',
                    '&tab2;<span class="mtk18">while</span> <span class="bracket-highlighting-2">(</span><span class="mtk10">array</span><span class="bracket-highlighting-3">[</span><span class="mtk10">j</span><span class="bracket-highlighting-3">]</span> <span class="mtk3">&gt;</span> <span class="mtk19">pivot</span><span class="bracket-highlighting-2">)</span> <span class="mtk3">--</span><span class="mtk10">j</span><span class="mtk1">;</span>',
                    '&tab2;<span class="mtk18">if</span> <span class="bracket-highlighting-2">(</span><span class="mtk10">i</span> <span class="mtk3">&lt;=</span> <span class="mtk10">j</span><span class="bracket-highlighting-2">)</span> <span class="bracket-highlighting-2">{</span>',
                    '&tab3;<span class="bracket-highlighting-3">[</span><span class="mtk10">array</span><span class="bracket-highlighting-4">[</span><span class="mtk10">i</span><span class="bracket-highlighting-4">]</span><span class="mtk1">,</span> <span class="mtk10">array</span><span class="bracket-highlighting-4">[</span><span class="mtk10">j</span><span class="bracket-highlighting-4">]</span><span class="bracket-highlighting-3">]</span> <span class="mtk3">=</span> <span class="bracket-highlighting-3">[</span><span class="mtk10">array</span><span class="bracket-highlighting-4">[</span><span class="mtk10">j</span><span class="bracket-highlighting-4">]</span><span class="mtk1">,</span> <span class="mtk10">array</span><span class="bracket-highlighting-4">[</span><span class="mtk10">i</span><span class="bracket-highlighting-4">]</span><span class="bracket-highlighting-3">]</span><span class="mtk1">;</span>',
                    '&tab3;<span class="mtk3">++</span><span class="mtk10">i</span><span class="mtk1">;</span>',
                    '&tab3;<span class="mtk3">--</span><span class="mtk10">j</span><span class="mtk1">;</span>',
                    '&tab2;<span class="bracket-highlighting-2">}</span>',
                    '&tab1;<span class="bracket-highlighting-1">}</span>',
                    '&tab1;<span class="mtk16">quickSort</span><span class="bracket-highlighting-1">(</span><span class="mtk10">array</span><span class="mtk1">,</span> <span class="mtk10">left</span><span class="mtk1">,</span> <span class="mtk10">j</span><span class="bracket-highlighting-1">)</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk16">quickSort</span><span class="bracket-highlighting-1">(</span><span class="mtk10">array</span><span class="mtk1">,</span> <span class="mtk10">i</span><span class="mtk1">,</span> <span class="mtk10">right</span><span class="bracket-highlighting-1">)</span><span class="mtk1">;</span>',
                    '<span class="bracket-highlighting-0">}</span><span class="mtk1">;</span>',
                ],
                cpp: [
                    '<span class="mtk5">// include: vector</span>',
                    '<span class="mtk5">// namespace: std</span>',
                    '<span>&empty-line;</span>',
                    '<span class="mtk6">void</span> <span class="mtk16">quickSort</span><span class="bracket-highlighting-0">(</span><span class="mtk17">vector</span><span class="mtk1">&lt;</span><span class="mtk6">int</span><span class="mtk1">&gt;</span><span class="mtk6">&amp;</span> <span class="mtk10">array</span><span class="mtk1">,</span> <span class="mtk6">int</span> <span class="mtk10">left</span><span class="mtk1">,</span> <span class="mtk6">int</span> <span class="mtk10">right</span><span class="bracket-highlighting-0">)</span> <span class="bracket-highlighting-0">{</span>',
                    '&tab1;<span class="mtk18">if</span> <span class="bracket-highlighting-1">(</span><span class="mtk10">left</span> <span class="mtk3">&gt;=</span> <span class="mtk10">right</span><span class="bracket-highlighting-1">)</span> <span class="mtk18">return</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk6">int</span> <span class="mtk10">pivot</span> <span class="mtk3">=</span> <span class="mtk10">array</span><span class="bracket-highlighting-1">[</span><span class="bracket-highlighting-2">(</span><span class="mtk10">left</span> <span class="mtk3">+</span> <span class="mtk10">right</span><span class="bracket-highlighting-2">)</span> <span class="mtk3">/</span> <span class="mtk7">2</span><span class="bracket-highlighting-1">]</span><span class="mtk1">,</span>',
                    '&tab2;<span class="mtk10">i</span> <span class="mtk3">=</span> <span class="mtk10">left</span><span class="mtk1">,</span>',
                    '&tab2;<span class="mtk10">j</span> <span class="mtk3">=</span> <span class="mtk10">right</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk18">while</span> <span class="bracket-highlighting-1">(</span><span class="mtk10">i</span> <span class="mtk3">&lt;=</span> <span class="mtk10">j</span><span class="bracket-highlighting-1">)</span> <span class="bracket-highlighting-1">{</span>',
                    '&tab2;<span class="mtk18">while</span> <span class="bracket-highlighting-2">(</span><span class="mtk10">array</span><span class="bracket-highlighting-3">[</span><span class="mtk10">i</span><span class="bracket-highlighting-3">]</span> <span class="mtk3">&lt;</span> <span class="mtk10">pivot</span><span class="bracket-highlighting-2">)</span> <span class="mtk3">++</span><span class="mtk10">i</span><span class="mtk1">;</span>',
                    '&tab2;<span class="mtk18">while</span> <span class="bracket-highlighting-2">(</span><span class="mtk10">array</span><span class="bracket-highlighting-3">[</span><span class="mtk10">j</span><span class="bracket-highlighting-3">]</span> <span class="mtk3">&gt;</span> <span class="mtk10">pivot</span><span class="bracket-highlighting-2">)</span> <span class="mtk3">--</span><span class="mtk10">j</span><span class="mtk1">;</span>',
                    '&tab2;<span class="mtk18">if</span> <span class="bracket-highlighting-2">(</span><span class="mtk10">i</span> <span class="mtk3">&lt;=</span> <span class="mtk10">j</span><span class="bracket-highlighting-2">)</span>',
                    '&tab3;<span class="mtk16">swap</span><span class="bracket-highlighting-2">(</span><span class="mtk10">array</span><span class="bracket-highlighting-3">[</span><span class="mtk10">i</span><span class="mtk3">++</span><span class="bracket-highlighting-3">]</span><span class="mtk1">,</span> <span class="mtk10">array</span><span class="bracket-highlighting-3">[</span><span class="mtk10">j</span><span class="mtk3">--</span><span class="bracket-highlighting-3">]</span><span class="bracket-highlighting-2">)</span><span class="mtk1">;</span>',
                    '&tab1;<span class="bracket-highlighting-1">}</span>',
                    '&tab1;<span class="mtk16">quickSort</span><span class="bracket-highlighting-1">(</span><span class="mtk10">array</span><span class="mtk1">,</span> <span class="mtk10">left</span><span class="mtk1">,</span> <span class="mtk10">j</span><span class="bracket-highlighting-1">)</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk16">quickSort</span><span class="bracket-highlighting-1">(</span><span class="mtk10">array</span><span class="mtk1">,</span> <span class="mtk10">i</span><span class="mtk1">,</span> <span class="mtk10">right</span><span class="bracket-highlighting-1">)</span><span class="mtk1">;</span>',
                    '<span class="bracket-highlighting-0">}</span><span class="mtk1">;</span>',
                ],
                py: [
                    '<span class="mtk6">def</span> <span class="mtk16">quickSort</span><span class="bracket-highlighting-0">(</span><span class="mtk10">array</span><span class="mtk1">,</span> <span class="mtk10">left</span><span class="mtk1">,</span> <span class="mtk10">right</span><span class="bracket-highlighting-0">)</span><span class="mtk1">:</span>',
                    '&tab1;<span class="mtk18">if</span> <span class="bracket-highlighting-0">(</span><span class="mtk10">left</span> <span class="mtk3">&gt;=</span> <span class="mtk10">right</span><span class="bracket-highlighting-0">)</span><span class="mtk1">:</span>',
                    '&tab2;<span class="mtk18">return</span>',
                    '&tab1;<span class="mtk10">pivot</span> <span class="mtk3">=</span> <span class="mtk10">array</span><span class="bracket-highlighting-0">[</span><span class="mtk17">int</span><span class="bracket-highlighting-1">(</span><span class="bracket-highlighting-2">(</span><span class="mtk10">left</span> <span class="mtk3">+</span> <span class="mtk10">right</span><span class="bracket-highlighting-2">)</span> <span class="mtk3">/</span> <span class="mtk7">2</span><span class="bracket-highlighting-1">)</span><span class="bracket-highlighting-0">]</span>',
                    '&tab1;<span class="mtk10">i</span><span class="mtk1">,</span> <span class="mtk10">j</span> <span class="mtk3">=</span> <span class="mtk10">left</span><span class="mtk1">,</span> <span class="mtk10">right</span>',
                    '&tab1;<span class="mtk18">while</span> <span class="mtk10">i</span> <span class="mtk3">&lt;=</span> <span class="mtk10">j</span><span class="mtk1">:</span>',
                    '&tab2;<span class="mtk18">while</span> <span class="mtk10">array</span><span class="bracket-highlighting-0">[</span><span class="mtk10">i</span><span class="bracket-highlighting-0">]</span> <span class="mtk3">&lt;</span> <span class="mtk10">pivot</span><span class="mtk1">:</span>',
                    '&tab3;<span class="mtk10">i</span> <span class="mtk3">+=</span> <span class="mtk7">1</span>',
                    '&tab2;<span class="mtk18">while</span> <span class="mtk10">array</span><span class="bracket-highlighting-0">[</span><span class="mtk10">j</span><span class="bracket-highlighting-0">]</span> <span class="mtk3">&gt;</span> <span class="mtk10">pivot</span><span class="mtk1">:</span>',
                    '&tab3;<span class="mtk10">j</span> <span class="mtk3">-=</span> <span class="mtk7">1</span>',
                    '&tab2;<span class="mtk18">if</span> <span class="mtk10">i</span> <span class="mtk3">&lt;=</span> <span class="mtk10">j</span><span class="mtk1">:</span>',
                    '&tab3;<span class="mtk10">array</span><span class="bracket-highlighting-0">[</span><span class="mtk10">i</span><span class="bracket-highlighting-0">]</span><span class="mtk1">,</span> <span class="mtk10">array</span><span class="bracket-highlighting-0">[</span><span class="mtk10">j</span><span class="bracket-highlighting-0">]</span> <span class="mtk3">=</span> <span class="mtk10">array</span><span class="bracket-highlighting-0">[</span><span class="mtk10">j</span><span class="bracket-highlighting-0">]</span><span class="mtk1">,</span> <span class="mtk10">array</span><span class="bracket-highlighting-0">[</span><span class="mtk10">i</span><span class="bracket-highlighting-0">]</span>',
                    '&tab3;<span class="mtk10">i</span> <span class="mtk3">+=</span> <span class="mtk7">1</span>',
                    '&tab3;<span class="mtk10">j</span> <span class="mtk3">-=</span> <span class="mtk7">1</span>',
                    '&tab1;<span class="mtk16">quickSort</span><span class="bracket-highlighting-0">(</span><span class="mtk10">array</span><span class="mtk1">,</span> <span class="mtk10">left</span><span class="mtk1">,</span> <span class="mtk10">j</span><span class="bracket-highlighting-0">)</span>',
                    '&tab1;<span class="mtk16">quickSort</span><span class="bracket-highlighting-0">(</span><span class="mtk10">array</span><span class="mtk1">,</span> <span class="mtk10">i</span><span class="mtk1">,</span> <span class="mtk10">right</span><span class="bracket-highlighting-0">)</span>',
                ],
            },
            complexity: ALGOSCENE.createComplexity('n {x} log n', 'n {x} log n', 'n{^2}', 'n'),
        },
        merge: {
            code: {
                cpp: [
                    '<span class="mtk5">// include: vector</span>',
                    '<span class="mtk5">// namespace: std</span>',
                    '<span>&empty-line;</span>',
                    '<span class="mtk6">void</span> <span class="mtk16">merge</span><span class="bracket-highlighting-0">(</span><span class="mtk17">vector</span><span class="mtk1">&lt;</span><span class="mtk6">int</span><span class="mtk1">&gt;</span><span class="mtk6">&amp;</span> <span class="mtk10">array</span><span class="mtk1">,</span> <span class="mtk6">int</span> <span class="mtk10">left</span><span class="mtk1">,</span> <span class="mtk6">int</span> <span class="mtk10">middle</span><span class="mtk1">,</span> <span class="mtk6">int</span> <span class="mtk10">right</span><span class="bracket-highlighting-0">)</span> <span class="bracket-highlighting-0">{</span>',
                    '&tab1;<span class="mtk6">int</span> <span class="mtk10">leftSize</span> <span class="mtk3">=</span> <span class="mtk10">middle</span> <span class="mtk3">-</span> <span class="mtk10">left</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk6">int</span> <span class="mtk10">rightSize</span> <span class="mtk3">=</span> <span class="mtk10">right</span> <span class="mtk3">-</span> <span class="mtk10">middle</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk17">vector</span><span class="mtk3">&lt;</span><span class="mtk6">int</span><span class="mtk3">&gt;</span> <span class="mtk10">leftArray</span><span class="bracket-highlighting-1">(</span><span class="mtk10">leftSize</span><span class="bracket-highlighting-1">)</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk17">vector</span><span class="mtk3">&lt;</span><span class="mtk6">int</span><span class="mtk3">&gt;</span> <span class="mtk10">rightArray</span><span class="bracket-highlighting-1">(</span><span class="mtk10">rightSize</span><span class="bracket-highlighting-1">)</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk18">for</span> <span class="bracket-highlighting-1">(</span><span class="mtk6">int</span> <span class="mtk10">i</span> <span class="mtk3">=</span> <span class="mtk7">0</span><span class="mtk1">;</span> <span class="mtk10">i</span> <span class="mtk3">&lt;</span> <span class="mtk10">leftSize</span><span class="mtk1">;</span> <span class="mtk10">i</span><span class="mtk3">++</span><span class="bracket-highlighting-1">)</span> <span class="mtk10">leftArray</span><span class="bracket-highlighting-1">[</span><span class="mtk10">i</span><span class="bracket-highlighting-1">]</span> <span class="mtk3">=</span> <span class="mtk10">array</span><span class="bracket-highlighting-1">[</span><span class="mtk10">left</span> <span class="mtk3">+</span> <span class="mtk10">i</span><span class="bracket-highlighting-1">]</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk18">for</span> <span class="bracket-highlighting-1">(</span><span class="mtk6">int</span> <span class="mtk10">j</span> <span class="mtk3">=</span> <span class="mtk7">0</span><span class="mtk1">;</span> <span class="mtk10">j</span> <span class="mtk3">&lt;</span> <span class="mtk10">rightSize</span><span class="mtk1">;</span> <span class="mtk10">j</span><span class="mtk3">++</span><span class="bracket-highlighting-1">)</span> <span class="mtk10">rightArray</span><span class="bracket-highlighting-1">[</span><span class="mtk10">j</span><span class="bracket-highlighting-1">]</span> <span class="mtk3">=</span> <span class="mtk10">array</span><span class="bracket-highlighting-1">[</span><span class="mtk10">middle</span> <span class="mtk3">+</span> <span class="mtk7">1</span> <span class="mtk3">+</span> <span class="mtk10">j</span><span class="bracket-highlighting-1">]</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk6">int</span> <span class="mtk10">i</span> <span class="mtk3">=</span> <span class="mtk7">0</span><span class="mtk1">,</span> <span class="mtk10">j</span> <span class="mtk3">=</span> <span class="mtk7">0</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk6">int</span> <span class="mtk10">k</span> <span class="mtk3">=</span> <span class="mtk10">left</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk18">while</span> <span class="bracket-highlighting-1">(</span><span class="mtk10">i</span> <span class="mtk3">&lt;</span> <span class="mtk10">leftSize</span> <span class="mtk3">&amp;&amp;</span> <span class="mtk10">j</span> <span class="mtk3">&lt;</span> <span class="mtk10">rightSize</span><span class="bracket-highlighting-1">)</span>',
                    '&tab2;<span class="mtk18">if</span> <span class="bracket-highlighting-1">(</span><span class="mtk10">leftArray</span><span class="bracket-highlighting-2">[</span><span class="mtk10">i</span><span class="bracket-highlighting-2">]</span> <span class="mtk3">&lt;=</span> <span class="mtk10">rightArray</span><span class="bracket-highlighting-2">[</span><span class="mtk10">j</span><span class="bracket-highlighting-2">]</span><span class="bracket-highlighting-1">)</span> <span class="mtk10">array</span><span class="bracket-highlighting-1">[</span><span class="mtk10">k</span><span class="mtk3">++</span><span class="bracket-highlighting-1">]</span> <span class="mtk3">=</span> <span class="mtk10">leftArray</span><span class="bracket-highlighting-1">[</span><span class="mtk10">i</span><span class="mtk3">++</span><span class="bracket-highlighting-1">]</span><span class="mtk1">;</span>',
                    '&tab2;<span class="mtk18">else</span> <span class="mtk10">array</span><span class="bracket-highlighting-1">[</span><span class="mtk10">k</span><span class="mtk3">++</span><span class="bracket-highlighting-1">]</span> <span class="mtk3">=</span> <span class="mtk10">rightArray</span><span class="bracket-highlighting-1">[</span><span class="mtk10">j</span><span class="mtk3">++</span><span class="bracket-highlighting-1">]</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk18">while</span> <span class="bracket-highlighting-1">(</span><span class="mtk10">i</span> <span class="mtk3">&lt;</span> <span class="mtk10">leftSize</span><span class="bracket-highlighting-1">)</span> <span class="mtk10">array</span><span class="bracket-highlighting-1">[</span><span class="mtk10">k</span><span class="mtk3">++</span><span class="bracket-highlighting-1">]</span> <span class="mtk3">=</span> <span class="mtk10">leftArray</span><span class="bracket-highlighting-1">[</span><span class="mtk10">i</span><span class="mtk3">++</span><span class="bracket-highlighting-1">]</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk18">while</span> <span class="bracket-highlighting-1">(</span><span class="mtk10">j</span> <span class="mtk3">&lt;</span> <span class="mtk10">rightSize</span><span class="bracket-highlighting-1">)</span> <span class="mtk10">array</span><span class="bracket-highlighting-1">[</span><span class="mtk10">k</span><span class="mtk3">++</span><span class="bracket-highlighting-1">]</span> <span class="mtk3">=</span> <span class="mtk10">rightArray</span><span class="bracket-highlighting-1">[</span><span class="mtk10">j</span><span class="mtk3">++</span><span class="bracket-highlighting-1">]</span><span class="mtk1">;</span>',
                    '<span class="bracket-highlighting-0">}</span>',
                    '<span>&empty-line;</span>',
                    '<span class="mtk6">void</span> <span class="mtk16">mergeSort</span><span class="bracket-highlighting-0">(</span><span class="mtk17">vector</span><span class="mtk1">&lt;</span><span class="mtk6">int</span><span class="mtk1">&gt;</span><span class="mtk6">&amp;</span> <span class="mtk10">array</span><span class="mtk1">,</span> <span class="mtk6">int</span> <span class="mtk10">left</span><span class="mtk1">,</span> <span class="mtk6">int</span> <span class="mtk10">right</span><span class="bracket-highlighting-0">)</span> <span class="bracket-highlighting-0">{</span>',
                    '&tab1;<span class="mtk18">if</span> <span class="bracket-highlighting-1">(</span><span class="mtk10">left</span> <span class="mtk3">&gt;=</span> <span class="mtk10">right</span><span class="bracket-highlighting-1">)</span> <span class="mtk18">return</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk6">int</span> <span class="mtk10">middle</span> <span class="mtk3">=</span> <span class="bracket-highlighting-1">(</span><span class="mtk10">left</span> <span class="mtk3">+</span> <span class="mtk10">right</span><span class="bracket-highlighting-1">)</span> <span class="mtk3">/</span> <span class="mtk7">2</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk16">mergeSort</span><span class="bracket-highlighting-1">(</span><span class="mtk10">array</span><span class="mtk1">,</span> <span class="mtk10">left</span><span class="mtk1">,</span> <span class="mtk10">middle</span><span class="bracket-highlighting-1">)</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk16">mergeSort</span><span class="bracket-highlighting-1">(</span><span class="mtk10">array</span><span class="mtk1">,</span> <span class="mtk10">middle</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk10">right</span><span class="bracket-highlighting-1">)</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk16">merge</span><span class="bracket-highlighting-1">(</span><span class="mtk10">array</span><span class="mtk1">,</span> <span class="mtk10">left</span><span class="mtk1">,</span> <span class="mtk10">middle</span><span class="mtk1">,</span> <span class="mtk10">right</span><span class="bracket-highlighting-1">)</span><span class="mtk1">;</span>',
                    '<span class="bracket-highlighting-0">}</span>',
                ],
                js: [
                    '<span class="mtk6">const</span> <span class="mtk16">merge</span> <span class="mtk3">=</span> <span class="bracket-highlighting-0">(</span><span class="mtk10">array</span><span class="mtk1">,</span> <span class="mtk10">left</span><span class="mtk1">,</span> <span class="mtk10">middle</span><span class="mtk1">,</span> <span class="mtk10">right</span><span class="bracket-highlighting-0">)</span> <span class="mtk6">=&gt;</span> <span class="bracket-highlighting-0">{</span>',
                    '&tab1;<span class="mtk6">const</span> <span class="mtk19">leftSize</span> <span class="mtk3">=</span> <span class="mtk10">middle</span> <span class="mtk3">-</span> <span class="mtk10">left</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk6">const</span> <span class="mtk19">rightSize</span> <span class="mtk3">=</span> <span class="mtk10">right</span> <span class="mtk3">-</span> <span class="mtk10">middle</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk6">const</span> <span class="mtk19">leftArray</span> <span class="mtk3">=</span> <span class="mtk10">array</span><span class="mtk1">.</span><span class="mtk16">slice</span><span class="bracket-highlighting-1">(</span><span class="mtk10">left</span><span class="mtk1">,</span> <span class="mtk10">left</span> <span class="mtk3">+</span> <span class="mtk19">leftSize</span><span class="bracket-highlighting-1">)</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk6">const</span> <span class="mtk19">rightArray</span> <span class="mtk3">=</span> <span class="mtk10">array</span><span class="mtk1">.</span><span class="mtk16">slice</span><span class="bracket-highlighting-1">(</span><span class="mtk10">middle</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk10">middle</span> <span class="mtk3">+</span> <span class="mtk7">1</span> <span class="mtk3">+</span> <span class="mtk19">rightSize</span><span class="bracket-highlighting-1">)</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk6">let</span> <span class="mtk10">i</span> <span class="mtk3">=</span> <span class="mtk7">0</span><span class="mtk1">,</span> <span class="mtk10">j</span> <span class="mtk3">=</span> <span class="mtk7">0</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk6">let</span> <span class="mtk10">k</span> <span class="mtk3">=</span> <span class="mtk10">left</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk18">while</span> <span class="bracket-highlighting-1">(</span><span class="mtk10">i</span> <span class="mtk3">&lt;</span> <span class="mtk19">leftSize</span> <span class="mtk3">&amp;&amp;</span> <span class="mtk10">j</span> <span class="mtk3">&lt;</span> <span class="mtk19">rightSize</span><span class="bracket-highlighting-1">)</span>',
                    '&tab2;<span class="mtk18">if</span> <span class="bracket-highlighting-1">(</span><span class="mtk19">leftArray</span><span class="bracket-highlighting-2">[</span><span class="mtk10">i</span><span class="bracket-highlighting-2">]</span> <span class="mtk3">&lt;=</span> <span class="mtk19">rightArray</span><span class="bracket-highlighting-2">[</span><span class="mtk10">j</span><span class="bracket-highlighting-2">]</span><span class="bracket-highlighting-1">)</span> <span class="mtk10">array</span><span class="bracket-highlighting-1">[</span><span class="mtk10">k</span><span class="mtk3">++</span><span class="bracket-highlighting-1">]</span> <span class="mtk3">=</span> <span class="mtk19">leftArray</span><span class="bracket-highlighting-1">[</span><span class="mtk10">i</span><span class="mtk3">++</span><span class="bracket-highlighting-1">]</span><span class="mtk1">;</span>',
                    '&tab2;<span class="mtk18">else</span> <span class="mtk10">array</span><span class="bracket-highlighting-1">[</span><span class="mtk10">k</span><span class="mtk3">++</span><span class="bracket-highlighting-1">]</span> <span class="mtk3">=</span> <span class="mtk19">rightArray</span><span class="bracket-highlighting-1">[</span><span class="mtk10">j</span><span class="mtk3">++</span><span class="bracket-highlighting-1">]</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk18">while</span> <span class="bracket-highlighting-1">(</span><span class="mtk10">i</span> <span class="mtk3">&lt;</span> <span class="mtk19">leftSize</span><span class="bracket-highlighting-1">)</span> <span class="mtk10">array</span><span class="bracket-highlighting-1">[</span><span class="mtk10">k</span><span class="mtk3">++</span><span class="bracket-highlighting-1">]</span> <span class="mtk3">=</span> <span class="mtk19">leftArray</span><span class="bracket-highlighting-1">[</span><span class="mtk10">i</span><span class="mtk3">++</span><span class="bracket-highlighting-1">]</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk18">while</span> <span class="bracket-highlighting-1">(</span><span class="mtk10">j</span> <span class="mtk3">&lt;</span> <span class="mtk19">rightSize</span><span class="bracket-highlighting-1">)</span> <span class="mtk10">array</span><span class="bracket-highlighting-1">[</span><span class="mtk10">k</span><span class="mtk3">++</span><span class="bracket-highlighting-1">]</span> <span class="mtk3">=</span> <span class="mtk19">rightArray</span><span class="bracket-highlighting-1">[</span><span class="mtk10">j</span><span class="mtk3">++</span><span class="bracket-highlighting-1">]</span><span class="mtk1">;</span>',
                    '<span class="bracket-highlighting-0">}</span><span class="mtk1">;</span>',
                    '<span>&empty-line;</span>',
                    '<span class="mtk6">const</span> <span class="mtk16">mergeSort</span> <span class="mtk3">=</span> <span class="bracket-highlighting-0">(</span><span class="mtk10">array</span><span class="mtk1">,</span> <span class="mtk10">left</span> <span class="mtk3">=</span> <span class="mtk7">0</span><span class="mtk1">,</span> <span class="mtk10">right</span> <span class="mtk3">=</span> <span class="mtk10">array</span><span class="mtk1">.</span><span class="mtk10">length</span> <span class="mtk3">-</span> <span class="mtk7">1</span><span class="bracket-highlighting-0">)</span> <span class="mtk6">=&gt;</span> <span class="bracket-highlighting-0">{</span>',
                    '&tab1;<span class="mtk18">if</span> <span class="bracket-highlighting-1">(</span><span class="mtk10">left</span> <span class="mtk3">&gt;=</span> <span class="mtk10">right</span><span class="bracket-highlighting-1">)</span> <span class="mtk18">return</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk6">const</span> <span class="mtk19">middle</span> <span class="mtk3">=</span> <span class="mtk10">Math</span><span class="mtk1">.</span><span class="mtk16">floor</span><span class="bracket-highlighting-1">(</span><span class="bracket-highlighting-2">(</span><span class="mtk10">left</span> <span class="mtk3">+</span> <span class="mtk10">right</span><span class="bracket-highlighting-2">)</span> <span class="mtk3">/</span> <span class="mtk7">2</span><span class="bracket-highlighting-0">)</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk16">mergeSort</span><span class="bracket-highlighting-1">(</span><span class="mtk10">array</span><span class="mtk1">,</span> <span class="mtk10">left</span><span class="mtk1">,</span> <span class="mtk19">middle</span><span class="bracket-highlighting-1">)</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk16">mergeSort</span><span class="bracket-highlighting-1">(</span><span class="mtk10">array</span><span class="mtk1">,</span> <span class="mtk19">middle</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk10">right</span><span class="bracket-highlighting-1">)</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk16">merge</span><span class="bracket-highlighting-1">(</span><span class="mtk10">array</span><span class="mtk1">,</span> <span class="mtk10">left</span><span class="mtk1">,</span> <span class="mtk19">middle</span><span class="mtk1">,</span> <span class="mtk10">right</span><span class="bracket-highlighting-1">)</span><span class="mtk1">;</span>',
                    '<span class="bracket-highlighting-0">}</span><span class="mtk1">;</span>',
                ],
                py: [
                    '<span class="mtk6">def</span> <span class="mtk16">merge</span><span class="bracket-highlighting-0">(</span><span class="mtk10">array</span><span class="mtk1">,</span> <span class="mtk10">left</span><span class="mtk1">,</span> <span class="mtk10">middle</span><span class="mtk1">,</span> <span class="mtk10">right</span><span class="bracket-highlighting-0">)</span><span class="mtk1">:</span>',
                    '&tab1;<span class="mtk10">leftSize</span> <span class="mtk3">=</span> <span class="mtk10">middle</span> <span class="mtk3">-</span> <span class="mtk10">left</span> <span class="mtk3">+</span> <span class="mtk7">1</span>',
                    '&tab1;<span class="mtk10">rightSize</span> <span class="mtk3">=</span> <span class="mtk10">right</span> <span class="mtk3">-</span> <span class="mtk10">middle</span>',
                    '&tab1;<span class="mtk10">leftArray</span> <span class="mtk3">=</span> <span class="mtk10">array</span><span class="bracket-highlighting-0">[</span><span class="mtk10">left</span> <span class="mtk1">:</span> <span class="mtk10">left</span> <span class="mtk3">+</span> <span class="mtk10">leftSize</span><span class="bracket-highlighting-0">]</span>',
                    '&tab1;<span class="mtk10">rightArray</span> <span class="mtk3">=</span> <span class="mtk10">array</span><span class="bracket-highlighting-0">[</span><span class="mtk10">middle</span> <span class="mtk3">+</span> <span class="mtk7">1</span> <span class="mtk1">:</span> <span class="mtk10">middle</span> <span class="mtk3">+</span> <span class="mtk7">1</span> <span class="mtk3">+</span> <span class="mtk10">rightSize</span><span class="bracket-highlighting-0">]</span>',
                    '&tab1;<span class="mtk10">i</span><span class="mtk1">,</span> <span class="mtk10">j</span> <span class="mtk3">=</span> <span class="mtk7">0</span><span class="mtk1">,</span> <span class="mtk7">0</span>',
                    '&tab1;<span class="mtk10">k</span> <span class="mtk3">=</span> <span class="mtk10">left</span>',
                    '&tab1;<span class="mtk18">while</span> <span class="mtk10">i</span> <span class="mtk3">&lt;</span> <span class="mtk10">leftSize</span> <span class="mtk6">and</span> <span class="mtk10">j</span> <span class="mtk3">&lt;</span> <span class="mtk10">rightSize</span><span class="mtk1">:</span>',
                    '&tab2;<span class="mtk18">if</span> <span class="mtk10">leftArray</span><span class="bracket-highlighting-0">[</span><span class="mtk10">i</span><span class="bracket-highlighting-0">]</span> <span class="mtk3">&lt;=</span> <span class="mtk10">rightArray</span><span class="bracket-highlighting-0">[</span><span class="mtk10">j</span><span class="bracket-highlighting-0">]</span><span class="mtk1">:</span>',
                    '&tab3;<span class="mtk10">array</span><span class="bracket-highlighting-0">[</span><span class="mtk10">k</span><span class="bracket-highlighting-0">]</span> <span class="mtk3">=</span> <span class="mtk10">leftArray</span><span class="bracket-highlighting-0">[</span><span class="mtk10">i</span><span class="bracket-highlighting-0">]</span>',
                    '&tab3;<span class="mtk10">i</span> <span class="mtk3">+=</span> <span class="mtk7">1</span>',
                    '&tab2;<span class="mtk18">else</span><span class="mtk1">:</span>',
                    '&tab3;<span class="mtk10">array</span><span class="bracket-highlighting-0">[</span><span class="mtk10">k</span><span class="bracket-highlighting-0">]</span> <span class="mtk3">=</span> <span class="mtk10">rightArray</span><span class="bracket-highlighting-0">[</span><span class="mtk10">j</span><span class="bracket-highlighting-0">]</span>',
                    '&tab3;<span class="mtk10">j</span> <span class="mtk3">+=</span> <span class="mtk7">1</span>',
                    '&tab2;<span class="mtk10">k</span> <span class="mtk3">+=</span> <span class="mtk7">1</span>',
                    '&tab1;<span class="mtk18">while</span> <span class="mtk10">i</span> <span class="mtk3">&lt;</span> <span class="mtk10">leftSize</span><span class="mtk1">:</span>',
                    '&tab2;<span class="mtk10">array</span><span class="bracket-highlighting-0">[</span><span class="mtk10">k</span><span class="bracket-highlighting-0">]</span> <span class="mtk3">=</span> <span class="mtk10">leftArray</span><span class="bracket-highlighting-0">[</span><span class="mtk10">i</span><span class="bracket-highlighting-0">]</span>',
                    '&tab2;<span class="mtk10">i</span> <span class="mtk3">+=</span> <span class="mtk7">1</span>',
                    '&tab2;<span class="mtk10">k</span> <span class="mtk3">+=</span> <span class="mtk7">1</span>',
                    '&tab1;<span class="mtk18">while</span> <span class="mtk10">j</span> <span class="mtk3">&lt;</span> <span class="mtk10">rightSize</span><span class="mtk1">:</span>',
                    '&tab2;<span class="mtk10">array</span><span class="bracket-highlighting-0">[</span><span class="mtk10">k</span><span class="bracket-highlighting-0">]</span> <span class="mtk3">=</span> <span class="mtk10">rightArray</span><span class="bracket-highlighting-0">[</span><span class="mtk10">j</span><span class="bracket-highlighting-0">]</span>',
                    '&tab2;<span class="mtk10">j</span> <span class="mtk3">+=</span> <span class="mtk7">1</span>',
                    '&tab2;<span class="mtk10">k</span> <span class="mtk3">+=</span> <span class="mtk7">1</span>',
                    '<span>&empty-line;</span>',
                    '<span class="mtk6">def</span> <span class="mtk16">mergeSort</span><span class="bracket-highlighting-0">(</span><span class="mtk10">array</span><span class="mtk1">,</span> <span class="mtk10">left</span><span class="mtk1">,</span> <span class="mtk10">right</span><span class="bracket-highlighting-0">)</span><span class="mtk1">:</span>',
                    '&tab1;<span class="mtk18">if</span> <span class="mtk10">left</span> <span class="mtk3">&gt;=</span> <span class="mtk10">right</span><span class="mtk1">:</span> <span class="mtk18">return</span>',
                    '&tab1;<span class="mtk10">middle</span> <span class="mtk3">=</span> <span class="bracket-highlighting-0">(</span><span class="mtk10">left</span> <span class="mtk3">+</span> <span class="mtk10">right</span><span class="bracket-highlighting-0">)</span> <span class="mtk3">//</span> <span class="mtk7">2</span>',
                    '&tab1;<span class="mtk16">mergeSort</span><span class="bracket-highlighting-0">(</span><span class="mtk10">array</span><span class="mtk1">,</span> <span class="mtk10">left</span><span class="mtk1">,</span> <span class="mtk10">middle</span><span class="bracket-highlighting-0">)</span>',
                    '&tab1;<span class="mtk16">mergeSort</span><span class="bracket-highlighting-0">(</span><span class="mtk10">array</span><span class="mtk1">,</span> <span class="mtk10">middle</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk10">right</span><span class="bracket-highlighting-0">)</span>',
                    '&tab1;<span class="mtk16">merge</span><span class="bracket-highlighting-0">(</span><span class="mtk10">array</span><span class="mtk1">,</span> <span class="mtk10">left</span><span class="mtk1">,</span> <span class="mtk10">middle</span><span class="mtk1">,</span> <span class="mtk10">right</span><span class="bracket-highlighting-0">)</span>',
                ],
            },
            complexity: ALGOSCENE.createComplexity(
                'n {x} log n',
                'n {x} log n',
                'n {x} log n',
                'n'
            ),
        },
    },
    {
        bbs: 'mtk16|bubbleSort',
        j: 'mtk10|j',
        i: 'mtk10|i',
        min: 'mtk10|min',
        slts: 'mtk16|selectionSort',
        ists: 'mtk16|insertionSort',
        current: 'mtk10|current',
        qs: 'mtk16|quickSort',
        left: 'mtk10|left',
        right: 'mtk10|right',
        jspivot: 'mtk19|pivot',
        pivot: 'mtk10|pivot',
        jspivot: 'mtk19|pivot',
        merge: 'mtk16|merge',
        vector: 'mtk17|vector',
        k: 'mtk10|k',
        ms: 'mtk16|mergeSort',
        middle: 'mtk10|middle',
        middlejs: 'mtk19|middle',
        1: 'mtk7|1',
    }
);

let ARRAY = [5, 2, 4, 6, 1, 3, 7];

ALGOSCENE.customInput.setCurrentValue(ARRAY.join(' '));

ALGOSCENE.customInput.onApply = function (value) {
    let isValid = true;
    value = value.split(' ').map((e) => Number(e));
    value.forEach((e) =>
        isNaN(e) || e < -9 || e > 99 || !Number.isInteger(e) ? (isValid = false) : null
    );
    if (value.length < 7) isValid = false;
    if (isValid) {
        ARRAY = value.slice(0, 7);
        ALGOSCENE.frameHTML = getframeHTML();
        ALGOSCENE.resetAction();
        ALGOSCENE.customInput.setCurrentValue(ARRAY.join(' '));
        ALGOSCENE.customInput.notify.success();
    } else ALGOSCENE.customInput.notify.failure();
};

const getframeHTML = () =>
    '<div class="background"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>' +
    `<div class="array">${ARRAY.map((e, i) => `<span o="${i + 1}">${e}</span>`).join('')}</div>`;

ALGOSCENE.frameHTML = getframeHTML();

const colors = ['', 'yellowgreen', 'red', 'orange'];

const array = new (class {
    constructor() {
        this.length = ARRAY.length;
        ALGOSCENE.resetFrame.setAction('resetArray', () => this.reset());
    }
    setPosition() {
        this.elm.childNodes.forEach((e) => (e.style.left = 2.4 * e.index + 'em'));
    }
    regetElm() {
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
            c.find((e) => e.index == i).setBackgroundColor(1);
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
