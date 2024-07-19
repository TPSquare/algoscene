import fs from 'fs';

const code = {
    cpp: {
        main: (e, t, n, r) => [
            '<span class="mtk6">const</span> <span class="mtk6">int</span> <span class="mtk10">MAXN</span> <span class="mtk3">=</span> <span class="mtk7">1e5</span><span class="mtk1">;</span>',
            '<span class="mtk6">int</span> <span class="mtk10">segmentTree</span><span class="bracket-highlighting-0">[</span><span class="mtk7">4</span> <span class="mtk3">*</span> <span class="mtk10">MAXN</span><span class="bracket-highlighting-0">]</span><span class="mtk1">;</span>',
            '<span>&empty-line;</span>',
            '<span class="mtk6">void</span> <span class="mtk16">build</span><span class="bracket-highlighting-0">(</span><span class="mtk6">int</span> <span class="mtk10">array</span><span class="bracket-highlighting-1">[</span><span class="bracket-highlighting-1">]</span><span class="mtk1">,</span> <span class="mtk6">int</span> <span class="mtk10">id</span><span class="mtk1">,</span> <span class="mtk6">int</span> <span class="mtk10">start</span><span class="mtk1">,</span> <span class="mtk6">int</span> <span class="mtk10">end</span><span class="bracket-highlighting-0">)</span> <span class="bracket-highlighting-0">{</span>',
            '&tab1;<span class="mtk18">if</span> <span class="bracket-highlighting-1">(</span><span class="mtk10">start</span> <span class="mtk3">==</span> <span class="mtk10">end</span><span class="bracket-highlighting-1">)</span> <span class="mtk10">segmentTree</span><span class="bracket-highlighting-1">[</span><span class="mtk10">id</span><span class="bracket-highlighting-1">]</span> <span class="mtk3">=</span> <span class="mtk10">array</span><span class="bracket-highlighting-1">[</span><span class="mtk10">start</span><span class="bracket-highlighting-1">]</span><span class="mtk1">;</span>',
            '&tab1;<span class="mtk18">else</span> <span class="bracket-highlighting-1">{</span>',
            '&tab2;<span class="mtk6">int</span> <span class="mtk10">middle</span> <span class="mtk3">=</span> <span class="bracket-highlighting-2">(</span><span class="mtk10">start</span> <span class="mtk3">+</span> <span class="mtk10">end</span><span class="bracket-highlighting-2">)</span> <span class="mtk3">/</span> <span class="mtk7">2</span><span class="mtk1">;</span>',
            '&tab2;<span class="mtk16">build</span><span class="bracket-highlighting-2">(<span class="mtk10">array</span><span class="mtk1">,</span> </span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span><span class="mtk1">,</span> <span class="mtk10">start</span><span class="mtk1">,</span> <span class="mtk10">middle</span><span class="bracket-highlighting-2">)</span><span class="mtk1">;</span>',
            '&tab2;<span class="mtk16">build</span><span class="bracket-highlighting-2">(<span class="mtk10">array</span><span class="mtk1">,</span> </span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk10">middle</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk10">end</span><span class="bracket-highlighting-2">)</span><span class="mtk1">;</span>',
            `&tab2;${e}<span class="mtk1">;</span>`,
            '&tab1;<span class="bracket-highlighting-1">}</span>',
            '<span class="bracket-highlighting-0">}</span>',
            '<span>&empty-line;</span>',
            '<span class="mtk6">void</span> <span class="mtk16">update</span><span class="bracket-highlighting-0">(</span><span class="mtk6">int</span> <span class="mtk10">id</span><span class="mtk1">,</span> <span class="mtk6">int</span> <span class="mtk10">start</span><span class="mtk1">,</span> <span class="mtk6">int</span> <span class="mtk10">end</span><span class="mtk1">,</span> <span class="mtk6">int</span> <span class="mtk10">index</span><span class="mtk1">,</span> <span class="mtk6">int</span> <span class="mtk10">value</span><span class="bracket-highlighting-0">)</span> <span class="bracket-highlighting-0">{</span>',
            '&tab1;<span class="mtk18">if</span> <span class="bracket-highlighting-1">(</span><span class="mtk10">index</span> <span class="mtk3">&lt;</span> <span class="mtk10">start</span> <span class="mtk3">||</span> <span class="mtk10">index</span> <span class="mtk3">&gt;</span> <span class="mtk10">end</span><span class="bracket-highlighting-1">)</span> <span class="mtk18">return</span><span class="mtk1">;</span>',
            '&tab1;<span class="mtk18">if</span> <span class="bracket-highlighting-1">(</span><span class="mtk10">start</span> <span class="mtk3">==</span> <span class="mtk10">end</span><span class="bracket-highlighting-1">)</span> <span class="mtk10">segmentTree</span><span class="bracket-highlighting-1">[</span><span class="mtk10">id</span><span class="bracket-highlighting-1">]</span> <span class="mtk3">=</span> <span class="mtk10">value</span><span class="mtk1">;</span>',
            '&tab1;<span class="mtk18">else</span> <span class="bracket-highlighting-1">{</span>',
            '&tab2;<span class="mtk6">int</span> <span class="mtk10">middle</span> <span class="mtk3">=</span> <span class="bracket-highlighting-2">(</span><span class="mtk10">start</span> <span class="mtk3">+</span> <span class="mtk10">end</span><span class="bracket-highlighting-2">)</span> <span class="mtk3">/</span> <span class="mtk7">2</span><span class="mtk1">;</span>',
            '&tab2;<span class="mtk16">update</span><span class="bracket-highlighting-2">(</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span><span class="mtk1">,</span> <span class="mtk10">start</span><span class="mtk1">,</span> <span class="mtk10">middle</span><span class="mtk1">,</span> <span class="mtk10">index</span><span class="mtk1">,</span> <span class="mtk10">value</span><span class="bracket-highlighting-2">)</span><span class="mtk1">;</span>',
            '&tab2;<span class="mtk16">update</span><span class="bracket-highlighting-2">(</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk10">middle</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk10">end</span><span class="mtk1">,</span> <span class="mtk10">index</span><span class="mtk1">,</span> <span class="mtk10">value</span><span class="bracket-highlighting-2">)</span><span class="mtk1">;</span>',
            `&tab2;${e}<span class="mtk1">;</span>`,
            '&tab1;<span class="bracket-highlighting-1">}</span>',
            '<span class="bracket-highlighting-0">}</span>',
            '<span>&empty-line;</span>',
            '<span class="mtk6">void</span> <span class="mtk16">rangeUpdate</span><span class="bracket-highlighting-0">(</span><span class="mtk6">int</span> <span class="mtk10">id</span><span class="mtk1">,</span> <span class="mtk6">int</span> <span class="mtk10">start</span><span class="mtk1">,</span> <span class="mtk6">int</span> <span class="mtk10">end</span><span class="mtk1">,</span> <span class="mtk6">int</span> <span class="mtk10">leftRange</span><span class="mtk1">,</span> <span class="mtk6">int</span> <span class="mtk10">rightRange</span><span class="mtk1">,</span> <span class="mtk6">int</span> <span class="mtk10">value</span><span class="bracket-highlighting-0">)</span> <span class="bracket-highlighting-0">{</span>',
            '&tab1;<span class="mtk18">if</span> <span class="bracket-highlighting-1">(</span><span class="mtk10">leftRange</span> <span class="mtk3">&gt;</span> <span class="mtk10">end</span> <span class="mtk3">||</span> <span class="mtk10">rightRange</span> <span class="mtk3">&lt;</span> <span class="mtk10">start</span><span class="bracket-highlighting-1">)</span> <span class="mtk18">return</span><span class="mtk1">;</span>',
            '&tab1;<span class="mtk18">if</span> <span class="bracket-highlighting-1">(</span><span class="mtk10">start</span> <span class="mtk3">==</span> <span class="mtk10">end</span><span class="bracket-highlighting-1">)</span> <span class="mtk10">segmentTree</span><span class="bracket-highlighting-1">[</span><span class="mtk10">id</span><span class="bracket-highlighting-1">]</span> <span class="mtk3">+=</span> <span class="mtk10">value</span><span class="mtk1">;</span>',
            '&tab1;<span class="mtk18">else</span> <span class="bracket-highlighting-1">{</span>',
            '&tab2;<span class="mtk6">int</span> <span class="mtk10">middle</span> <span class="mtk3">=</span> <span class="bracket-highlighting-2">(</span><span class="mtk10">start</span> <span class="mtk3">+</span> <span class="mtk10">end</span><span class="bracket-highlighting-2">)</span> <span class="mtk3">/</span> <span class="mtk7">2</span><span class="mtk1">;</span>',
            '&tab2;<span class="mtk16">rangeUpdate</span><span class="bracket-highlighting-2">(</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span><span class="mtk1">,</span> <span class="mtk10">start</span><span class="mtk1">,</span> <span class="mtk10">middle</span><span class="mtk1">,</span> <span class="mtk10">leftRange</span><span class="mtk1">,</span> <span class="mtk10">rightRange</span><span class="mtk1">,</span> <span class="mtk10">value</span><span class="bracket-highlighting-2">)</span><span class="mtk1">;</span>',
            '&tab2;<span class="mtk16">rangeUpdate</span><span class="bracket-highlighting-2">(</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk10">middle</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk10">end</span><span class="mtk1">,</span> <span class="mtk10">leftRange</span><span class="mtk1">,</span> <span class="mtk10">rightRange</span><span class="mtk1">,</span> <span class="mtk10">value</span><span class="bracket-highlighting-2">)</span><span class="mtk1">;</span>',
            `&tab2;${e}<span class="mtk1">;</span>`,
            '&tab1;<span class="bracket-highlighting-1">}</span>',
            '<span class="bracket-highlighting-0">}</span>',
            '<span>&empty-line;</span>',
            '<span class="mtk6">int</span> <span class="mtk16">get</span><span class="bracket-highlighting-0">(</span><span class="mtk6">int</span> <span class="mtk10">id</span><span class="mtk1">,</span> <span class="mtk6">int</span> <span class="mtk10">start</span><span class="mtk1">,</span> <span class="mtk6">int</span> <span class="mtk10">end</span><span class="mtk1">,</span> <span class="mtk6">int</span> <span class="mtk10">leftRange</span><span class="mtk1">,</span> <span class="mtk6">int</span> <span class="mtk10">rightRange</span><span class="bracket-highlighting-0">)</span> <span class="bracket-highlighting-0">{</span>',
            `&tab1;<span class="mtk18">if</span> <span class="bracket-highlighting-1">(</span><span class="mtk10">leftRange</span> <span class="mtk3">&gt;</span> <span class="mtk10">end</span> <span class="mtk3">||</span> <span class="mtk10">rightRange</span> <span class="mtk3">&lt;</span> <span class="mtk10">start</span><span class="bracket-highlighting-1">)</span> <span class="mtk18">return</span> ${t}<span class="mtk1">;</span>`,
            '&tab1;<span class="mtk18">if</span> <span class="bracket-highlighting-1">(</span><span class="mtk10">leftRange</span> <span class="mtk3">&lt;=</span> <span class="mtk10">start</span> <span class="mtk3">&amp;&amp;</span> <span class="mtk10">rightRange</span> <span class="mtk3">&gt;=</span> <span class="mtk10">end</span><span class="bracket-highlighting-1">)</span> <span class="mtk18">return</span> <span class="mtk10">segmentTree</span><span class="bracket-highlighting-1">[</span><span class="mtk10">id</span><span class="bracket-highlighting-1">]</span><span class="mtk1">;</span>',
            '&tab1;<span class="mtk6">int</span> <span class="mtk10">middle</span> <span class="mtk3">=</span> <span class="bracket-highlighting-1">(</span><span class="mtk10">start</span> <span class="mtk3">+</span> <span class="mtk10">end</span><span class="bracket-highlighting-1">)</span> <span class="mtk3">/</span> <span class="mtk7">2</span><span class="mtk1">;</span>',
            `&tab1;<span class="mtk6">int</span> <span class="mtk10">left${n}</span> <span class="mtk3">=</span> <span class="mtk16">get</span><span class="bracket-highlighting-1">(</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span><span class="mtk1">,</span> <span class="mtk10">start</span><span class="mtk1">,</span> <span class="mtk10">middle</span><span class="mtk1">,</span> <span class="mtk10">leftRange</span><span class="mtk1">,</span> <span class="mtk10">rightRange</span><span class="bracket-highlighting-1">)</span><span class="mtk1">;</span>`,
            `&tab1;<span class="mtk6">int</span> <span class="mtk10">right${n}</span> <span class="mtk3">=</span> <span class="mtk16">get</span><span class="bracket-highlighting-1">(</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk10">middle</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk10">end</span><span class="mtk1">,</span> <span class="mtk10">leftRange</span><span class="mtk1">,</span> <span class="mtk10">rightRange</span><span class="bracket-highlighting-1">)</span><span class="mtk1">;</span>`,
            `&tab1;<span class="mtk18">return</span> ${r}<span class="mtk1">;</span>`,
            '<span class="bracket-highlighting-0">}</span>'
        ],
        usage: [
            '<span class="mtk6">int</span> <span class="mtk10">n</span> <span class="mtk3">=</span> <span class="mtk7">6</span><span class="mtk1">;</span>',
            '<span class="mtk6">int</span> <span class="mtk10">array</span><span class="bracket-highlighting-0">[</span><span class="mtk10">n</span><span class="bracket-highlighting-0">]</span> <span class="mtk3">=</span> <span class="bracket-highlighting-0">{</span><span class="mtk7">12</span><span class="mtk1">,</span> <span class="mtk7">48</span><span class="mtk1">,</span> <span class="mtk7">70</span><span class="mtk1">,</span> <span class="mtk7">8</span><span class="mtk1">,</span> <span class="mtk7">20</span><span class="mtk1">,</span> <span class="mtk7">4</span><span class="bracket-highlighting-0">}</span><span class="mtk1">;</span>',
            '<span class="mtk16">build</span><span class="bracket-highlighting-0">(</span><span class="mtk10">array</span><span class="mtk1">,</span> <span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk7">0</span><span class="mtk1">,</span> <span class="mtk10">n</span> <span class="mtk3">-</span> <span class="mtk7">1</span><span class="bracket-highlighting-0">)</span><span class="mtk1">;</span>',
            '<span class="mtk6">int</span> <span class="mtk10">result</span> <span class="mtk3">=</span> <span class="mtk16">get</span><span class="bracket-highlighting-0">(</span><span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk7">0</span><span class="mtk1">,</span> <span class="mtk10">n</span> <span class="mtk3">-</span> <span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk7">2</span><span class="bracket-highlighting-0">)</span><span class="mtk1">;</span>',
            '<span class="mtk16">update</span><span class="bracket-highlighting-0">(</span><span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk7">0</span><span class="mtk1">,</span> <span class="mtk10">n</span> <span class="mtk3">-</span> <span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk7">3</span><span class="mtk1">,</span> <span class="mtk7">10</span><span class="bracket-highlighting-0">)</span><span class="mtk1">;</span>',
            '<span class="mtk16">rangeUpdate</span><span class="bracket-highlighting-0">(</span><span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk7">0</span><span class="mtk1">,</span> <span class="mtk10">n</span> <span class="mtk3">-</span> <span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk7">2</span><span class="mtk1">,</span> <span class="mtk7">4</span><span class="mtk1">,</span> <span class="mtk7">1</span><span class="bracket-highlighting-0">)</span><span class="mtk1">;</span>'
        ]
    },
    js: {
        main: (e, t, n, r) => [
            '<span class="mtk6">const</span> <span class="mtk19">MAXN</span> <span class="mtk3">=</span> <span class="mtk7">100000</span><span class="mtk1">;</span>',
            '<span class="mtk6">const</span> <span class="mtk19">segmentTree</span> <span class="mtk3">=</span> <span class="mtk6">new</span> <span class="mtk17">Array</span><span class="bracket-highlighting-0">(</span><span class="mtk7">4</span> <span class="mtk3">*</span> <span class="mtk19">MAXN</span><span class="bracket-highlighting-0">)</span><span class="mtk1">;</span>',
            '<span>&empty-line;</span>',
            '<span class="mtk6">function</span> <span class="mtk16">build</span><span class="bracket-highlighting-0">(</span><span class="mtk10">array</span><span class="mtk1">,</span> <span class="mtk10">id</span><span class="mtk1">,</span> <span class="mtk10">start</span><span class="mtk1">,</span> <span class="mtk10">end</span><span class="bracket-highlighting-0">)</span> <span class="bracket-highlighting-0">{</span>',
            '&tab1;<span class="mtk18">if</span> <span class="bracket-highlighting-1">(</span><span class="mtk10">start</span> <span class="mtk3">==</span> <span class="mtk10">end</span><span class="bracket-highlighting-1">)</span> <span class="mtk19">segmentTree</span><span class="bracket-highlighting-1">[</span><span class="mtk10">id</span><span class="bracket-highlighting-1">]</span> <span class="mtk3">=</span> <span class="mtk10">array</span><span class="bracket-highlighting-1">[</span><span class="mtk10">start</span><span class="bracket-highlighting-1">]</span><span class="mtk1">;</span>',
            '&tab1;<span class="mtk18">else</span> <span class="bracket-highlighting-1">{</span>',
            '&tab2;<span class="mtk6">const</span> <span class="mtk19">middle</span> <span class="mtk3">=</span> <span class="mtk10">Math</span><span class="mtk1">.</span><span class="mtk16">floor</span><span class="bracket-highlighting-2">(</span><span class="bracket-highlighting-3">(</span><span class="mtk10">start</span> <span class="mtk3">+</span> <span class="mtk10">end</span><span class="bracket-highlighting-3">)</span> <span class="mtk3">/</span> <span class="mtk7">2</span><span class="bracket-highlighting-2">)</span><span class="mtk1">;</span>',
            '&tab2;<span class="mtk16">build</span><span class="bracket-highlighting-2">(</span><span class="mtk10">array</span><span class="mtk1">,</span> <span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span><span class="mtk1">,</span> <span class="mtk10">start</span><span class="mtk1">,</span> <span class="mtk19">middle</span><span class="bracket-highlighting-2">)</span><span class="mtk1">;</span>',
            '&tab2;<span class="mtk16">build</span><span class="bracket-highlighting-2">(</span><span class="mtk10">array</span><span class="mtk1">,</span> <span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk19">middle</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk10">end</span><span class="bracket-highlighting-2">)</span><span class="mtk1">;</span>',
            `&tab2;${e}<span class="mtk1">;</span>`,
            '&tab1;<span class="bracket-highlighting-1">}</span>',
            '<span class="bracket-highlighting-0">}</span>',
            '<span>&empty-line;</span>',
            '<span class="mtk6">function</span> <span class="mtk16">update</span><span class="bracket-highlighting-0">(</span><span class="mtk10">id</span><span class="mtk1">,</span> <span class="mtk10">start</span><span class="mtk1">,</span> <span class="mtk10">end</span><span class="mtk1">,</span> <span class="mtk10">index</span><span class="mtk1">,</span> <span class="mtk10">value</span><span class="bracket-highlighting-0">)</span> <span class="bracket-highlighting-0">{</span>',
            '&tab1;<span class="mtk18">if</span> <span class="bracket-highlighting-1">(</span><span class="mtk10">index</span> <span class="mtk3">&lt;</span> <span class="mtk10">start</span> <span class="mtk3">||</span> <span class="mtk10">index</span> <span class="mtk3">&gt;</span> <span class="mtk10">end</span><span class="bracket-highlighting-1">)</span> <span class="mtk18">return</span><span class="mtk1">;</span>',
            '&tab1;<span class="mtk18">if</span> <span class="bracket-highlighting-1">(</span><span class="mtk10">start</span> <span class="mtk3">==</span> <span class="mtk10">end</span><span class="bracket-highlighting-1">)</span> <span class="mtk19">segmentTree</span><span class="bracket-highlighting-1">[</span><span class="mtk10">id</span><span class="bracket-highlighting-1">]</span> <span class="mtk3">=</span> <span class="mtk10">value</span><span class="mtk1">;</span>',
            '&tab1;<span class="mtk18">else</span> <span class="bracket-highlighting-1">{</span>',
            '&tab2;<span class="mtk6">const</span> <span class="mtk19">middle</span> <span class="mtk3">=</span> <span class="mtk10">Math</span><span class="mtk1">.</span><span class="mtk16">floor</span><span class="bracket-highlighting-2">(</span><span class="bracket-highlighting-3">(</span><span class="mtk10">start</span> <span class="mtk3">+</span> <span class="mtk10">end</span><span class="bracket-highlighting-3">)</span> <span class="mtk3">/</span> <span class="mtk7">2</span><span class="bracket-highlighting-2">)</span><span class="mtk1">;</span>',
            '&tab2;<span class="mtk16">update</span><span class="bracket-highlighting-2">(</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span><span class="mtk1">,</span> <span class="mtk10">start</span><span class="mtk1">,</span> <span class="mtk19">middle</span><span class="mtk1">,</span> <span class="mtk10">index</span><span class="mtk1">,</span> <span class="mtk10">value</span><span class="bracket-highlighting-2">)</span><span class="mtk1">;</span>',
            '&tab2;<span class="mtk16">update</span><span class="bracket-highlighting-2">(</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk19">middle</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk10">end</span><span class="mtk1">,</span> <span class="mtk10">index</span><span class="mtk1">,</span> <span class="mtk10">value</span><span class="bracket-highlighting-2">)</span><span class="mtk1">;</span>',
            `&tab2;${e}<span class="mtk1">;</span>`,
            '&tab1;<span class="bracket-highlighting-1">}</span>',
            '<span class="bracket-highlighting-0">}</span>',
            '<span>&empty-line;</span>',
            '<span class="mtk6">function</span> <span class="mtk16">rangeUpdate</span><span class="bracket-highlighting-0">(</span><span class="mtk10">id</span><span class="mtk1">,</span> <span class="mtk10">start</span><span class="mtk1">,</span> <span class="mtk10">end</span><span class="mtk1">,</span> <span class="mtk10">leftRange</span><span class="mtk1">,</span> <span class="mtk10">rightRange</span><span class="mtk1">,</span> <span class="mtk10">value</span><span class="bracket-highlighting-0">)</span> <span class="bracket-highlighting-0">{</span>',
            '&tab1;<span class="mtk18">if</span> <span class="bracket-highlighting-1">(</span><span class="mtk10">leftRange</span> <span class="mtk3">&gt;</span> <span class="mtk10">end</span> <span class="mtk3">||</span> <span class="mtk10">rightRange</span> <span class="mtk3">&lt;</span> <span class="mtk10">start</span><span class="bracket-highlighting-1">)</span> <span class="mtk18">return</span><span class="mtk1">;</span>',
            '&tab1;<span class="mtk18">if</span> <span class="bracket-highlighting-1">(</span><span class="mtk10">start</span> <span class="mtk3">==</span> <span class="mtk10">end</span><span class="bracket-highlighting-1">)</span> <span class="mtk19">segmentTree</span><span class="bracket-highlighting-1">[</span><span class="mtk10">id</span><span class="bracket-highlighting-1">]</span> <span class="mtk3">+=</span> <span class="mtk10">value</span><span class="mtk1">;</span>',
            '&tab1;<span class="mtk18">else</span> <span class="bracket-highlighting-1">{</span>',
            '&tab2;<span class="mtk6">const</span> <span class="mtk19">middle</span> <span class="mtk3">=</span> <span class="mtk10">Math</span><span class="mtk1">.</span><span class="mtk16">floor</span><span class="bracket-highlighting-2">(</span><span class="bracket-highlighting-3">(</span><span class="mtk10">start</span> <span class="mtk3">+</span> <span class="mtk10">end</span><span class="bracket-highlighting-3">)</span> <span class="mtk3">/</span> <span class="mtk7">2</span><span class="bracket-highlighting-2">)</span><span class="mtk1">;</span>',
            '&tab2;<span class="mtk16">rangeUpdate</span><span class="bracket-highlighting-2">(</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span><span class="mtk1">,</span> <span class="mtk10">start</span><span class="mtk1">,</span> <span class="mtk19">middle</span><span class="mtk1">,</span> <span class="mtk10">leftRange</span><span class="mtk1">,</span> <span class="mtk10">rightRange</span><span class="mtk1">,</span> <span class="mtk10">value</span><span class="bracket-highlighting-2">)</span><span class="mtk1">;</span>',
            '&tab2;<span class="mtk16">rangeUpdate</span><span class="bracket-highlighting-2">(</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk19">middle</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk10">end</span><span class="mtk1">,</span> <span class="mtk10">leftRange</span><span class="mtk1">,</span> <span class="mtk10">rightRange</span><span class="mtk1">,</span> <span class="mtk10">value</span><span class="bracket-highlighting-2">)</span><span class="mtk1">;</span>',
            `&tab2;${e}<span class="mtk1">;</span>`,
            '&tab1;<span class="bracket-highlighting-1">}</span>',
            '<span class="bracket-highlighting-0">}</span>',
            '<span>&empty-line;</span>',
            '<span class="mtk6">function</span> <span class="mtk16">get</span><span class="bracket-highlighting-0">(</span><span class="mtk10">id</span><span class="mtk1">,</span> <span class="mtk10">start</span><span class="mtk1">,</span> <span class="mtk10">end</span><span class="mtk1">,</span> <span class="mtk10">leftRange</span><span class="mtk1">,</span> <span class="mtk10">rightRange</span><span class="bracket-highlighting-0">)</span> <span class="bracket-highlighting-0">{</span>',
            `&tab1;<span class="mtk18">if</span> <span class="bracket-highlighting-1">(</span><span class="mtk10">leftRange</span> <span class="mtk3">&gt;</span> <span class="mtk10">end</span> <span class="mtk3">||</span> <span class="mtk10">rightRange</span> <span class="mtk3">&lt;</span> <span class="mtk10">start</span><span class="bracket-highlighting-1">)</span> <span class="mtk18">return</span> ${t}<span class="mtk1">;</span>`,
            '&tab1;<span class="mtk18">if</span> <span class="bracket-highlighting-1">(</span><span class="mtk10">leftRange</span> <span class="mtk3">&lt;=</span> <span class="mtk10">start</span> <span class="mtk3">&amp;&amp;</span> <span class="mtk10">rightRange</span> <span class="mtk3">&gt;=</span> <span class="mtk10">end</span><span class="bracket-highlighting-1">)</span> <span class="mtk18">return</span> <span class="mtk19">segmentTree</span><span class="bracket-highlighting-1">[</span><span class="mtk10">id</span><span class="bracket-highlighting-1">]</span><span class="mtk1">;</span>',
            '&tab1;<span class="mtk6">const</span> <span class="mtk19">middle</span> <span class="mtk3">=</span> <span class="mtk10">Math</span><span class="mtk1">.</span><span class="mtk16">floor</span><span class="bracket-highlighting-1">(</span><span class="bracket-highlighting-2">(</span><span class="mtk10">start</span> <span class="mtk3">+</span> <span class="mtk10">end</span><span class="bracket-highlighting-2">)</span> <span class="mtk3">/</span> <span class="mtk7">2</span><span class="bracket-highlighting-1">)</span><span class="mtk1">;</span>',
            `&tab1;<span class="mtk6">const</span> <span class="mtk19">left${n}</span> <span class="mtk3">=</span> <span class="mtk16">get</span><span class="bracket-highlighting-1">(</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span><span class="mtk1">,</span> <span class="mtk10">start</span><span class="mtk1">,</span> <span class="mtk19">middle</span><span class="mtk1">,</span> <span class="mtk10">leftRange</span><span class="mtk1">,</span> <span class="mtk10">rightRange</span><span class="bracket-highlighting-1">)</span><span class="mtk1">;</span>`,
            `&tab1;<span class="mtk6">const</span> <span class="mtk19">right${n}</span> <span class="mtk3">=</span> <span class="mtk16">get</span><span class="bracket-highlighting-1">(</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk19">middle</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk10">end</span><span class="mtk1">,</span> <span class="mtk10">leftRange</span><span class="mtk1">,</span> <span class="mtk10">rightRange</span><span class="bracket-highlighting-1">)</span><span class="mtk1">;</span>`,
            `&tab1;<span class="mtk18">return</span> ${r}<span class="mtk1">;</span>`,
            '<span class="bracket-highlighting-0">}</span>'
        ],
        usage: [
            '<span class="mtk6">const</span> <span class="mtk19">n</span> <span class="mtk3">=</span> <span class="mtk7">6</span><span class="mtk1">;</span>',
            '<span class="mtk6">const</span> <span class="mtk19">array</span> <span class="mtk3">=</span> <span class="bracket-highlighting-0">[</span><span class="mtk7">12</span><span class="mtk1">,</span> <span class="mtk7">48</span><span class="mtk1">,</span> <span class="mtk7">70</span><span class="mtk1">,</span> <span class="mtk7">8</span><span class="mtk1">,</span> <span class="mtk7">20</span><span class="mtk1">,</span> <span class="mtk7">4</span><span class="bracket-highlighting-0">]</span><span class="mtk1">;</span>',
            '<span class="mtk16">build</span><span class="bracket-highlighting-0">(</span><span class="mtk19">array</span><span class="mtk1">,</span> <span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk7">0</span><span class="mtk1">,</span> <span class="mtk19">n</span> <span class="mtk3">-</span> <span class="mtk7">1</span><span class="bracket-highlighting-0">)</span><span class="mtk1">;</span>',
            '<span class="mtk6">const</span> <span class="mtk19">result</span> <span class="mtk3">=</span> <span class="mtk16">get</span><span class="bracket-highlighting-0">(</span><span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk7">0</span><span class="mtk1">,</span> <span class="mtk19">n</span> <span class="mtk3">-</span> <span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk7">2</span><span class="bracket-highlighting-0">)</span><span class="mtk1">;</span>',
            '<span class="mtk16">update</span><span class="bracket-highlighting-0">(</span><span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk7">0</span><span class="mtk1">,</span> <span class="mtk19">n</span> <span class="mtk3">-</span> <span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk7">3</span><span class="mtk1">,</span> <span class="mtk7">10</span><span class="bracket-highlighting-0">)</span><span class="mtk1">;</span>',
            '<span class="mtk16">rangeUpdate</span><span class="bracket-highlighting-0">(</span><span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk7">0</span><span class="mtk1">,</span> <span class="mtk19">n</span> <span class="mtk3">-</span> <span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk7">2</span><span class="mtk1">,</span> <span class="mtk7">4</span><span class="mtk1">,</span> <span class="mtk7">1</span><span class="bracket-highlighting-0">)</span><span class="mtk1">;</span>'
        ]
    }
};

const data = JSON.stringify({
    prolangs: 'cpp,js',
    codes: {
        sum: {
            cpp: {
                main: code.cpp.main(
                    '<span class="mtk10">segmentTree</span><span class="bracket-highlighting-2">[</span><span class="mtk10">id</span><span class="bracket-highlighting-2">]</span> <span class="mtk3">=</span> <span class="mtk10">segmentTree</span><span class="bracket-highlighting-2">[</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span><span class="bracket-highlighting-2">]</span> <span class="mtk3">+</span> <span class="mtk10">segmentTree</span><span class="bracket-highlighting-2">[</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="bracket-highlighting-2">]</span>',
                    '<span class="mtk7">0</span>',
                    'Sum',
                    '<span class="mtk10">leftSum</span> <span class="mtk3">+</span> <span class="mtk10">rightSum</span>'
                ),
                usage: code.cpp.usage
            },
            js: {
                main: code.js.main(
                    '<span class="mtk19">segmentTree</span><span class="bracket-highlighting-2">[</span><span class="mtk10">id</span><span class="bracket-highlighting-2">]</span> <span class="mtk3">=</span> <span class="mtk19">segmentTree</span><span class="bracket-highlighting-2">[</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span><span class="bracket-highlighting-2">]</span> <span class="mtk3">+</span> <span class="mtk19">segmentTree</span><span class="bracket-highlighting-2">[</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="bracket-highlighting-2">]</span>',
                    '<span class="mtk7">0</span>',
                    'Sum',
                    '<span class="mtk19">leftSum</span> <span class="mtk3">+</span> <span class="mtk19">rightSum</span>'
                ),
                usage: code.js.usage
            }
        },
        min: {
            cpp: {
                main: [
                    '<span class="mtk5">// include: algorithm</span>',
                    '<span class="mtk5">// namespace: std</span>',
                    '<span>&empty-line;</span>'
                ].concat(
                    code.cpp.main(
                        '<span class="mtk10">segmentTree</span><span class="bracket-highlighting-2">[</span><span class="mtk10">id</span><span class="bracket-highlighting-2">]</span> <span class="mtk3">=</span> <span class="mtk16">min</span><span class="bracket-highlighting-2">(</span><span class="mtk10">segmentTree</span><span class="bracket-highlighting-3">[</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span><span class="bracket-highlighting-3">]</span><span class="mtk1">,</span> <span class="mtk10">segmentTree</span><span class="bracket-highlighting-3">[</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="bracket-highlighting-3">]</span><span class="bracket-highlighting-2">)</span>',
                        '<span class="mtk6">INT_MAX</span>',
                        'Min',
                        '<span class="mtk16">min</span><span class="bracket-highlighting-1">(</span><span class="mtk10">leftMin</span><span class="mtk1">,</span> <span class="mtk10">rightMin</span><span class="bracket-highlighting-1">)</span>'
                    )
                ),
                usage: code.cpp.usage
            },
            js: {
                main: code.js.main(
                    '<span class="mtk19">segmentTree</span><span class="bracket-highlighting-2">[</span><span class="mtk10">id</span><span class="bracket-highlighting-2">]</span> <span class="mtk3">=</span> <span class="mtk10">Math</span><span class="mtk1">.</span><span class="mtk16">min</span><span class="bracket-highlighting-2">(</span><span class="mtk19">segmentTree</span><span class="bracket-highlighting-3">[</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span><span class="bracket-highlighting-3">]</span><span class="mtk1">,</span> <span class="mtk19">segmentTree</span><span class="bracket-highlighting-3">[</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="bracket-highlighting-3">]</span><span class="bracket-highlighting-2">)</span>',
                    '<span class="mtk6">Infinity</span>',
                    'Min',
                    '<span class="mtk10">Math</span><span class="mtk1">.</span><span class="mtk16">min</span><span class="bracket-highlighting-1">(</span><span class="mtk19">leftMin</span><span class="mtk1">,</span> <span class="mtk19">rightMin</span><span class="bracket-highlighting-1">)</span>'
                ),
                usage: code.js.usage
            }
        },
        max: {
            cpp: {
                main: [
                    '<span class="mtk5">// include: algorithm</span>',
                    '<span class="mtk5">// namespace: std</span>',
                    '<span>&empty-line;</span>'
                ].concat(
                    code.cpp.main(
                        '<span class="mtk10">segmentTree</span><span class="bracket-highlighting-2">[</span><span class="mtk10">id</span><span class="bracket-highlighting-2">]</span> <span class="mtk3">=</span> <span class="mtk16">max</span><span class="bracket-highlighting-2">(</span><span class="mtk10">segmentTree</span><span class="bracket-highlighting-3">[</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span><span class="bracket-highlighting-3">]</span><span class="mtk1">,</span> <span class="mtk10">segmentTree</span><span class="bracket-highlighting-3">[</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="bracket-highlighting-3">]</span><span class="bracket-highlighting-2">)</span>',
                        '<span class="mtk6">INT_MIN</span>',
                        'Max',
                        '<span class="mtk16">max</span><span class="bracket-highlighting-1">(</span><span class="mtk10">leftMax</span><span class="mtk1">,</span> <span class="mtk10">rightMax</span><span class="bracket-highlighting-1">)</span>'
                    )
                ),
                usage: code.cpp.usage
            },
            js: {
                main: code.js.main(
                    '<span class="mtk19">segmentTree</span><span class="bracket-highlighting-2">[</span><span class="mtk10">id</span><span class="bracket-highlighting-2">]</span> <span class="mtk3">=</span> <span class="mtk10">Math</span><span class="mtk1">.</span><span class="mtk16">max</span><span class="bracket-highlighting-2">(</span><span class="mtk19">segmentTree</span><span class="bracket-highlighting-3">[</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span><span class="bracket-highlighting-3">]</span><span class="mtk1">,</span> <span class="mtk19">segmentTree</span><span class="bracket-highlighting-3">[</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="bracket-highlighting-3">]</span><span class="bracket-highlighting-2">)</span>',
                    '<span class="mtk3">-</span><span class="mtk6">Infinity</span>',
                    'Max',
                    '<span class="mtk10">Math</span><span class="mtk1">.</span><span class="mtk16">max</span><span class="bracket-highlighting-1">(</span><span class="mtk19">leftMax</span><span class="mtk1">,</span> <span class="mtk19">rightMax</span><span class="bracket-highlighting-1">)</span>'
                ),
                usage: code.js.usage
            }
        },
        gcd: {
            cpp: {
                main: [
                    '<span class="mtk5">// include: numeric</span>',
                    '<span class="mtk5">// namespace: std</span>',
                    '<span>&empty-line;</span>'
                ].concat(
                    code.cpp.main(
                        '<span class="mtk10">segmentTree</span><span class="bracket-highlighting-2">[</span><span class="mtk10">id</span><span class="bracket-highlighting-2">]</span> <span class="mtk3">=</span> <span class="mtk16">gcd</span><span class="bracket-highlighting-2">(</span><span class="mtk10">segmentTree</span><span class="bracket-highlighting-3">[</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span><span class="bracket-highlighting-3">]</span><span class="mtk1">,</span> <span class="mtk10">segmentTree</span><span class="bracket-highlighting-3">[</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="bracket-highlighting-3">]</span><span class="bracket-highlighting-2">)</span>',
                        '<span class="mtk7">0</span>',
                        'GCD',
                        '<span class="mtk16">gcd</span><span class="bracket-highlighting-1">(</span><span class="mtk10">leftGCD</span><span class="mtk1">,</span> <span class="mtk10">rightGCD</span><span class="bracket-highlighting-1">)</span>'
                    )
                ),
                usage: code.cpp.usage
            },
            js: {
                main: [
                    '<span class="mtk6">const</span> <span class="mtk16">gcd</span> <span class="mtk3">=</span> <span class="bracket-highlighting-0">(</span><span class="mtk10">a</span><span class="mtk1">,</span> <span class="mtk10">b</span><span class="bracket-highlighting-0">)</span> <span class="mtk6">=&gt;</span> <span class="bracket-highlighting-0">(</span><span class="mtk10">b</span> <span class="mtk3">==</span> <span class="mtk7">0</span> <span class="mtk3">?</span> <span class="mtk10">a</span> <span class="mtk3">:</span> <span class="mtk16">gcd</span><span class="bracket-highlighting-1">(</span><span class="mtk10">b</span><span class="mtk1">,</span> <span class="mtk10">a</span> <span class="mtk3">%</span> <span class="mtk10">b</span><span class="bracket-highlighting-1">)</span><span class="bracket-highlighting-0">)</span><span class="mtk1">;</span>',
                    '<span>&empty-line;</span>'
                ].concat(
                    code.js.main(
                        '<span class="mtk19">segmentTree</span><span class="bracket-highlighting-2">[</span><span class="mtk10">id</span><span class="bracket-highlighting-2">]</span> <span class="mtk3">=</span> <span class="mtk16">gcd</span><span class="bracket-highlighting-2">(</span><span class="mtk19">segmentTree</span><span class="bracket-highlighting-3">[</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span><span class="bracket-highlighting-3">]</span><span class="mtk1">,</span> <span class="mtk19">segmentTree</span><span class="bracket-highlighting-3">[</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="bracket-highlighting-3">]</span><span class="bracket-highlighting-2">)</span>',
                        '<span class="mtk7">0</span>',
                        'GCD',
                        '<span class="mtk16">gcd</span><span class="bracket-highlighting-1">(</span><span class="mtk19">leftGCD</span><span class="mtk1">,</span> <span class="mtk19">rightGCD</span><span class="bracket-highlighting-1">)</span>'
                    )
                ),

                usage: code.js.usage
            }
        },
        lcm: {
            cpp: {
                main: [
                    '<span class="mtk5">// include: numeric</span>',
                    '<span class="mtk5">// namespace: std</span>',
                    '<span>&empty-line;</span>'
                ].concat(
                    code.cpp.main(
                        '<span class="mtk10">segmentTree</span><span class="bracket-highlighting-2">[</span><span class="mtk10">id</span><span class="bracket-highlighting-2">]</span> <span class="mtk3">=</span> <span class="mtk16">lcm</span><span class="bracket-highlighting-2">(</span><span class="mtk10">segmentTree</span><span class="bracket-highlighting-3">[</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span><span class="bracket-highlighting-3">]</span><span class="mtk1">,</span> <span class="mtk10">segmentTree</span><span class="bracket-highlighting-3">[</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="bracket-highlighting-3">]</span><span class="bracket-highlighting-2">)</span>',
                        '<span class="mtk7">1</span>',
                        'LCM',
                        '<span class="mtk16">lcm</span><span class="bracket-highlighting-1">(</span><span class="mtk10">leftLCM</span><span class="mtk1">,</span> <span class="mtk10">rightLCM</span><span class="bracket-highlighting-1">)</span>'
                    )
                ),
                usage: code.cpp.usage
            },
            js: {
                main: [
                    '<span class="mtk6">const</span> <span class="mtk16">gcd</span> <span class="mtk3">=</span> <span class="bracket-highlighting-0">(</span><span class="mtk10">a</span><span class="mtk1">,</span> <span class="mtk10">b</span><span class="bracket-highlighting-0">)</span> <span class="mtk6">=&gt;</span> <span class="bracket-highlighting-0">(</span><span class="mtk10">b</span> <span class="mtk3">==</span> <span class="mtk7">0</span> <span class="mtk3">?</span> <span class="mtk10">a</span> <span class="mtk3">:</span> <span class="mtk16">gcd</span><span class="bracket-highlighting-1">(</span><span class="mtk10">b</span><span class="mtk1">,</span> <span class="mtk10">a</span> <span class="mtk3">%</span> <span class="mtk10">b</span><span class="bracket-highlighting-1">)</span><span class="bracket-highlighting-0">)</span><span class="mtk1">,</span>',
                    '&tab1;<span class="mtk16">lcm</span> <span class="mtk3">=</span> <span class="bracket-highlighting-0">(</span><span class="mtk10">a</span><span class="mtk1">,</span> <span class="mtk10">b</span><span class="bracket-highlighting-0">)</span> <span class="mtk6">=&gt;</span> <span class="bracket-highlighting-0">(</span><span class="mtk10">a</span> <span class="mtk3">*</span> <span class="mtk10">b</span><span class="bracket-highlighting-0">)</span> <span class="mtk3">/</span> <span class="mtk16">gcd</span><span class="bracket-highlighting-0">(</span><span class="mtk10">a</span><span class="mtk1">,</span> <span class="mtk10">b</span><span class="bracket-highlighting-0">)</span><span class="mtk1">;</span>',
                    '<span>&empty-line;</span>'
                ].concat(
                    code.js.main(
                        '<span class="mtk19">segmentTree</span><span class="bracket-highlighting-2">[</span><span class="mtk10">id</span><span class="bracket-highlighting-2">]</span> <span class="mtk3">=</span> <span class="mtk16">lcm</span><span class="bracket-highlighting-2">(</span><span class="mtk19">segmentTree</span><span class="bracket-highlighting-3">[</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span><span class="bracket-highlighting-3">]</span><span class="mtk1">,</span> <span class="mtk19">segmentTree</span><span class="bracket-highlighting-3">[</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="bracket-highlighting-3">]</span><span class="bracket-highlighting-2">)</span>',
                        '<span class="mtk7">1</span>',
                        'LCM',
                        '<span class="mtk16">lcm</span><span class="bracket-highlighting-1">(</span><span class="mtk19">leftLCM</span><span class="mtk1">,</span> <span class="mtk19">rightLCM</span><span class="bracket-highlighting-1">)</span>'
                    )
                ),
                usage: code.js.usage
            }
        }
    },
    commentCodes: {
        0: 'mtk7|0',
        1: 'mtk7|1',
        INTMAX: 'mtk6|INT_MAX',
        Infinity: 'mtk6|Infinity',
        INTMIN: 'mtk6|INT_MIN'
    },
    complexitys: {
        build: 'n',
        update: 'log n',
        rangeUpdate: 'log n',
        get: 'log n'
    }
});

await fs.writeFileSync('./source/data/pages/segment-tree.ds.json', data);

console.log('Done!');
