'use strict';

const code = {
    cpp: (e, t, n, r) => [
        '<span class="mtk6">const</span> <span class="mtk6">int</span> <span class="mtk10">MAXN</span> <span class="mtk3">=</span> <span class="mtk7">1e5</span><span class="mtk1">;</span>',
        '<span class="mtk6">int</span> <span class="mtk10">segmentTree</span><span class="bracket-highlighting-0">[</span><span class="mtk7">4</span> <span class="mtk3">*</span> <span class="mtk10">MAXN</span><span class="bracket-highlighting-0">]</span><span class="mtk1">;</span>',
        '<span class="mtk6">int</span> <span class="mtk10">arrayData</span><span class="bracket-highlighting-0">[</span><span class="mtk10">MAXN</span><span class="bracket-highlighting-0">]</span><span class="mtk1">;</span>',
        '<span>&empty-line;</span>',
        '<span class="mtk6">void</span> <span class="mtk16">build</span><span class="bracket-highlighting-0">(</span><span class="mtk6">int</span> <span class="mtk10">id</span><span class="mtk1">,</span> <span class="mtk6">int</span> <span class="mtk10">start</span><span class="mtk1">,</span> <span class="mtk6">int</span> <span class="mtk10">end</span><span class="bracket-highlighting-0">)</span> <span class="bracket-highlighting-0">{</span>',
        '&tab1;<span class="mtk18">if</span> <span class="bracket-highlighting-1">(</span><span class="mtk10">start</span> <span class="mtk3">==</span> <span class="mtk10">end</span><span class="bracket-highlighting-1">)</span> <span class="mtk10">segmentTree</span><span class="bracket-highlighting-1">[</span><span class="mtk10">id</span><span class="bracket-highlighting-1">]</span> <span class="mtk3">=</span> <span class="mtk10">arrayData</span><span class="bracket-highlighting-1">[</span><span class="mtk10">start</span><span class="bracket-highlighting-1">]</span><span class="mtk1">;</span>',
        '&tab1;<span class="mtk18">else</span> <span class="bracket-highlighting-1">{</span>',
        '&tab2;<span class="mtk6">int</span> <span class="mtk10">middle</span> <span class="mtk3">=</span> <span class="bracket-highlighting-2">(</span><span class="mtk10">start</span> <span class="mtk3">+</span> <span class="mtk10">end</span><span class="bracket-highlighting-2">)</span> <span class="mtk3">/</span> <span class="mtk7">2</span><span class="mtk1">;</span>',
        '&tab2;<span class="mtk16">build</span><span class="bracket-highlighting-2">(</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span><span class="mtk1">,</span> <span class="mtk10">start</span><span class="mtk1">,</span> <span class="mtk10">middle</span><span class="bracket-highlighting-2">)</span><span class="mtk1">;</span>',
        '&tab2;<span class="mtk16">build</span><span class="bracket-highlighting-2">(</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk10">middle</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk10">end</span><span class="bracket-highlighting-2">)</span><span class="mtk1">;</span>',
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
        '<span class="bracket-highlighting-0">}</span>',
    ],
    js: (e, t, n, r) => [
        '<span class="mtk6">const</span> <span class="mtk19">MAXN</span> <span class="mtk3">=</span> <span class="mtk7">100000</span><span class="mtk1">;</span>',
        '<span class="mtk6">const</span> <span class="mtk19">segmentTree</span> <span class="mtk3">=</span> <span class="mtk6">new</span> <span class="mtk17">Array</span><span class="bracket-highlighting-0">(</span><span class="mtk7">4</span> <span class="mtk3">*</span> <span class="mtk19">MAXN</span><span class="bracket-highlighting-0">)</span><span class="mtk1">;</span>',
        '<span class="mtk6">const</span> <span class="mtk19">arrayData</span> <span class="mtk3">=</span> <span class="mtk6">new</span> <span class="mtk17">Array</span><span class="bracket-highlighting-0">(</span><span class="mtk19">MAXN</span><span class="bracket-highlighting-0">)</span><span class="mtk1">;</span>',
        '<span>&empty-line;</span>',
        '<span class="mtk6">function</span> <span class="mtk16">build</span><span class="bracket-highlighting-0">(</span><span class="mtk10">id</span><span class="mtk1">,</span> <span class="mtk10">start</span><span class="mtk1">,</span> <span class="mtk10">end</span><span class="bracket-highlighting-0">)</span> <span class="bracket-highlighting-0">{</span>',
        '&tab1;<span class="mtk18">if</span> <span class="bracket-highlighting-1">(</span><span class="mtk10">start</span> <span class="mtk3">==</span> <span class="mtk10">end</span><span class="bracket-highlighting-1">)</span> <span class="mtk19">segmentTree</span><span class="bracket-highlighting-1">[</span><span class="mtk10">id</span><span class="bracket-highlighting-1">]</span> <span class="mtk3">=</span> <span class="mtk19">arrayData</span><span class="bracket-highlighting-1">[</span><span class="mtk10">start</span><span class="bracket-highlighting-1">]</span><span class="mtk1">;</span>',
        '&tab1;<span class="mtk18">else</span> <span class="bracket-highlighting-1">{</span>',
        '&tab2;<span class="mtk6">const</span> <span class="mtk19">middle</span> <span class="mtk3">=</span> <span class="mtk10">Math</span><span class="mtk1">.</span><span class="mtk16">floor</span><span class="bracket-highlighting-2">(</span><span class="bracket-highlighting-3">(</span><span class="mtk10">start</span> <span class="mtk3">+</span> <span class="mtk10">end</span><span class="bracket-highlighting-3">)</span> <span class="mtk3">/</span> <span class="mtk7">2</span><span class="bracket-highlighting-2">)</span><span class="mtk1">;</span>',
        '&tab2;<span class="mtk16">build</span><span class="bracket-highlighting-2">(</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span><span class="mtk1">,</span> <span class="mtk10">start</span><span class="mtk1">,</span> <span class="mtk19">middle</span><span class="bracket-highlighting-2">)</span><span class="mtk1">;</span>',
        '&tab2;<span class="mtk16">build</span><span class="bracket-highlighting-2">(</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk19">middle</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk10">end</span><span class="bracket-highlighting-2">)</span><span class="mtk1">;</span>',
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
        '<span class="bracket-highlighting-0">}</span>',
    ],
};

await ALGOSCENE.init(
    'cpp,js',
    {
        list: {
            sum: {
                cpp: code.cpp(
                    '<span class="mtk10">segmentTree</span><span class="bracket-highlighting-2">[</span><span class="mtk10">id</span><span class="bracket-highlighting-2">]</span> <span class="mtk3">=</span> <span class="mtk10">segmentTree</span><span class="bracket-highlighting-2">[</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span><span class="bracket-highlighting-2">]</span> <span class="mtk3">+</span> <span class="mtk10">segmentTree</span><span class="bracket-highlighting-2">[</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="bracket-highlighting-2">]</span>',
                    '<span class="mtk7">0</span>',
                    'Sum',
                    '<span class="mtk10">leftSum</span> <span class="mtk3">+</span> <span class="mtk10">rightSum</span>'
                ),
                js: code.js(
                    '<span class="mtk19">segmentTree</span><span class="bracket-highlighting-2">[</span><span class="mtk10">id</span><span class="bracket-highlighting-2">]</span> <span class="mtk3">=</span> <span class="mtk19">segmentTree</span><span class="bracket-highlighting-2">[</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span><span class="bracket-highlighting-2">]</span> <span class="mtk3">+</span> <span class="mtk19">segmentTree</span><span class="bracket-highlighting-2">[</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="bracket-highlighting-2">]</span>',
                    '<span class="mtk7">0</span>',
                    'Sum',
                    '<span class="mtk19">leftSum</span> <span class="mtk3">+</span> <span class="mtk19">rightSum</span>'
                ),
            },
            min: {
                cpp: [
                    '<span class="mtk5">// include: algorithm</span>',
                    '<span class="mtk5">// namespace: std</span>',
                    '<span>&empty-line;</span>',
                ].concat(
                    code.cpp(
                        '<span class="mtk10">segmentTree</span><span class="bracket-highlighting-2">[</span><span class="mtk10">id</span><span class="bracket-highlighting-2">]</span> <span class="mtk3">=</span> <span class="mtk16">min</span><span class="bracket-highlighting-2">(</span><span class="mtk10">segmentTree</span><span class="bracket-highlighting-3">[</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span><span class="bracket-highlighting-3">]</span><span class="mtk1">,</span> <span class="mtk10">segmentTree</span><span class="bracket-highlighting-3">[</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="bracket-highlighting-3">]</span><span class="bracket-highlighting-2">)</span>',
                        '<span class="mtk6">INT_MAX</span>',
                        'Min',
                        '<span class="mtk16">min</span><span class="bracket-highlighting-1">(</span><span class="mtk10">leftMin</span><span class="mtk1">,</span> <span class="mtk10">rightMin</span><span class="bracket-highlighting-1">)</span>'
                    )
                ),
                js: code.js(
                    '<span class="mtk19">segmentTree</span><span class="bracket-highlighting-2">[</span><span class="mtk10">id</span><span class="bracket-highlighting-2">]</span> <span class="mtk3">=</span> <span class="mtk10">Math</span><span class="mtk1">.</span><span class="mtk16">min</span><span class="bracket-highlighting-2">(</span><span class="mtk19">segmentTree</span><span class="bracket-highlighting-3">[</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span><span class="bracket-highlighting-3">]</span><span class="mtk1">,</span> <span class="mtk19">segmentTree</span><span class="bracket-highlighting-3">[</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="bracket-highlighting-3">]</span><span class="bracket-highlighting-2">)</span>',
                    '<span class="mtk6">Infinity</span>',
                    'Min',
                    '<span class="mtk10">Math</span><span class="mtk1">.</span><span class="mtk16">min</span><span class="bracket-highlighting-1">(</span><span class="mtk19">leftMin</span><span class="mtk1">,</span> <span class="mtk19">rightMin</span><span class="bracket-highlighting-1">)</span>'
                ),
            },
            max: {
                cpp: [
                    '<span class="mtk5">// include: algorithm</span>',
                    '<span class="mtk5">// namespace: std</span>',
                    '<span>&empty-line;</span>',
                ].concat(
                    code.cpp(
                        '<span class="mtk10">segmentTree</span><span class="bracket-highlighting-2">[</span><span class="mtk10">id</span><span class="bracket-highlighting-2">]</span> <span class="mtk3">=</span> <span class="mtk16">max</span><span class="bracket-highlighting-2">(</span><span class="mtk10">segmentTree</span><span class="bracket-highlighting-3">[</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span><span class="bracket-highlighting-3">]</span><span class="mtk1">,</span> <span class="mtk10">segmentTree</span><span class="bracket-highlighting-3">[</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="bracket-highlighting-3">]</span><span class="bracket-highlighting-2">)</span>',
                        '<span class="mtk6">INT_MIN</span>',
                        'Max',
                        '<span class="mtk16">max</span><span class="bracket-highlighting-1">(</span><span class="mtk10">leftMax</span><span class="mtk1">,</span> <span class="mtk10">rightMax</span><span class="bracket-highlighting-1">)</span>'
                    )
                ),
                js: code.js(
                    '<span class="mtk19">segmentTree</span><span class="bracket-highlighting-2">[</span><span class="mtk10">id</span><span class="bracket-highlighting-2">]</span> <span class="mtk3">=</span> <span class="mtk10">Math</span><span class="mtk1">.</span><span class="mtk16">max</span><span class="bracket-highlighting-2">(</span><span class="mtk19">segmentTree</span><span class="bracket-highlighting-3">[</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span><span class="bracket-highlighting-3">]</span><span class="mtk1">,</span> <span class="mtk19">segmentTree</span><span class="bracket-highlighting-3">[</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="bracket-highlighting-3">]</span><span class="bracket-highlighting-2">)</span>',
                    '<span class="mtk3">-</span><span class="mtk6">Infinity</span>',
                    'Max',
                    '<span class="mtk10">Math</span><span class="mtk1">.</span><span class="mtk16">max</span><span class="bracket-highlighting-1">(</span><span class="mtk19">leftMax</span><span class="mtk1">,</span> <span class="mtk19">rightMax</span><span class="bracket-highlighting-1">)</span>'
                ),
            },
            gcd: {
                cpp: [
                    '<span class="mtk5">// include: numeric</span>',
                    '<span class="mtk5">// namespace: std</span>',
                    '<span>&empty-line;</span>',
                ].concat(
                    code.cpp(
                        '<span class="mtk10">segmentTree</span><span class="bracket-highlighting-2">[</span><span class="mtk10">id</span><span class="bracket-highlighting-2">]</span> <span class="mtk3">=</span> <span class="mtk16">gcd</span><span class="bracket-highlighting-2">(</span><span class="mtk10">segmentTree</span><span class="bracket-highlighting-3">[</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span><span class="bracket-highlighting-3">]</span><span class="mtk1">,</span> <span class="mtk10">segmentTree</span><span class="bracket-highlighting-3">[</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="bracket-highlighting-3">]</span><span class="bracket-highlighting-2">)</span>',
                        '<span class="mtk7">0</span>',
                        'GCD',
                        '<span class="mtk16">gcd</span><span class="bracket-highlighting-1">(</span><span class="mtk10">leftGCD</span><span class="mtk1">,</span> <span class="mtk10">rightGCD</span><span class="bracket-highlighting-1">)</span>'
                    )
                ),
                js: [
                    '<span class="mtk6">const</span> <span class="mtk16">gcd</span> <span class="mtk3">=</span> <span class="bracket-highlighting-0">(</span><span class="mtk10">a</span><span class="mtk1">,</span> <span class="mtk10">b</span><span class="bracket-highlighting-0">)</span> <span class="mtk6">=&gt;</span> <span class="bracket-highlighting-0">(</span><span class="mtk10">b</span> <span class="mtk3">==</span> <span class="mtk7">0</span> <span class="mtk3">?</span> <span class="mtk10">a</span> <span class="mtk3">:</span> <span class="mtk16">gcd</span><span class="bracket-highlighting-1">(</span><span class="mtk10">b</span><span class="mtk1">,</span> <span class="mtk10">a</span> <span class="mtk3">%</span> <span class="mtk10">b</span><span class="bracket-highlighting-1">)</span><span class="bracket-highlighting-0">)</span><span class="mtk1">;</span>',
                    '<span>&empty-line;</span>',
                ].concat(
                    code.js(
                        '<span class="mtk19">segmentTree</span><span class="bracket-highlighting-2">[</span><span class="mtk10">id</span><span class="bracket-highlighting-2">]</span> <span class="mtk3">=</span> <span class="mtk16">gcd</span><span class="bracket-highlighting-2">(</span><span class="mtk19">segmentTree</span><span class="bracket-highlighting-3">[</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span><span class="bracket-highlighting-3">]</span><span class="mtk1">,</span> <span class="mtk19">segmentTree</span><span class="bracket-highlighting-3">[</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="bracket-highlighting-3">]</span><span class="bracket-highlighting-2">)</span>',
                        '<span class="mtk7">0</span>',
                        'GCD',
                        '<span class="mtk16">gcd</span><span class="bracket-highlighting-1">(</span><span class="mtk19">leftGCD</span><span class="mtk1">,</span> <span class="mtk19">rightGCD</span><span class="bracket-highlighting-1">)</span>'
                    )
                ),
            },
            lcm: {
                cpp: [
                    '<span class="mtk5">// include: numeric</span>',
                    '<span class="mtk5">// namespace: std</span>',
                    '<span>&empty-line;</span>',
                ].concat(
                    code.cpp(
                        '<span class="mtk10">segmentTree</span><span class="bracket-highlighting-2">[</span><span class="mtk10">id</span><span class="bracket-highlighting-2">]</span> <span class="mtk3">=</span> <span class="mtk16">lcm</span><span class="bracket-highlighting-2">(</span><span class="mtk10">segmentTree</span><span class="bracket-highlighting-3">[</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span><span class="bracket-highlighting-3">]</span><span class="mtk1">,</span> <span class="mtk10">segmentTree</span><span class="bracket-highlighting-3">[</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="bracket-highlighting-3">]</span><span class="bracket-highlighting-2">)</span>',
                        '<span class="mtk7">1</span>',
                        'LCM',
                        '<span class="mtk16">lcm</span><span class="bracket-highlighting-1">(</span><span class="mtk10">leftLCM</span><span class="mtk1">,</span> <span class="mtk10">rightLCM</span><span class="bracket-highlighting-1">)</span>'
                    )
                ),
                js: [
                    '<span class="mtk6">const</span> <span class="mtk16">gcd</span> <span class="mtk3">=</span> <span class="bracket-highlighting-0">(</span><span class="mtk10">a</span><span class="mtk1">,</span> <span class="mtk10">b</span><span class="bracket-highlighting-0">)</span> <span class="mtk6">=&gt;</span> <span class="bracket-highlighting-0">(</span><span class="mtk10">b</span> <span class="mtk3">==</span> <span class="mtk7">0</span> <span class="mtk3">?</span> <span class="mtk10">a</span> <span class="mtk3">:</span> <span class="mtk16">gcd</span><span class="bracket-highlighting-1">(</span><span class="mtk10">b</span><span class="mtk1">,</span> <span class="mtk10">a</span> <span class="mtk3">%</span> <span class="mtk10">b</span><span class="bracket-highlighting-1">)</span><span class="bracket-highlighting-0">)</span><span class="mtk1">,</span>',
                    '&tab1;<span class="mtk16">lcm</span> <span class="mtk3">=</span> <span class="bracket-highlighting-0">(</span><span class="mtk10">a</span><span class="mtk1">,</span> <span class="mtk10">b</span><span class="bracket-highlighting-0">)</span> <span class="mtk6">=&gt;</span> <span class="bracket-highlighting-0">(</span><span class="mtk10">a</span> <span class="mtk3">*</span> <span class="mtk10">b</span><span class="bracket-highlighting-0">)</span> <span class="mtk3">/</span> <span class="mtk16">gcd</span><span class="bracket-highlighting-0">(</span><span class="mtk10">a</span><span class="mtk1">,</span> <span class="mtk10">b</span><span class="bracket-highlighting-0">)</span><span class="mtk1">;</span>',
                    '<span>&empty-line;</span>',
                ].concat(
                    code.js(
                        '<span class="mtk19">segmentTree</span><span class="bracket-highlighting-2">[</span><span class="mtk10">id</span><span class="bracket-highlighting-2">]</span> <span class="mtk3">=</span> <span class="mtk16">lcm</span><span class="bracket-highlighting-2">(</span><span class="mtk19">segmentTree</span><span class="bracket-highlighting-3">[</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span><span class="bracket-highlighting-3">]</span><span class="mtk1">,</span> <span class="mtk19">segmentTree</span><span class="bracket-highlighting-3">[</span><span class="mtk10">id</span> <span class="mtk3">*</span> <span class="mtk7">2</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="bracket-highlighting-3">]</span><span class="bracket-highlighting-2">)</span>',
                        '<span class="mtk7">1</span>',
                        'LCM',
                        '<span class="mtk16">lcm</span><span class="bracket-highlighting-1">(</span><span class="mtk19">leftLCM</span><span class="mtk1">,</span> <span class="mtk19">rightLCM</span><span class="bracket-highlighting-1">)</span>'
                    )
                ),
            },
        },
        complexity: {
            build: 'n',
            update: 'log n',
            rangeUpdate: 'log n',
            get: 'log n',
        },
    },
    {
        0: 'mtk7|0',
        1: 'mtk7|1',
        INTMAX: 'mtk6|INT_MAX',
        Infinity: 'mtk6|Infinity',
        INTMIN: 'mtk6|INT_MIN',
    }
);

const gcd = (a, b) => (b == 0 ? a : gcd(b, a % b));

const config = {
    sum: [(a, b) => a + b, 0],
    min: [(a, b) => (a < b ? a : b), Infinity],
    max: [(a, b) => (a > b ? a : b), -Infinity],
    gcd: [(a, b) => gcd(a, b), 0],
    lcm: [(a, b) => (a * b) / gcd(a, b), 1],
};

const MAXN = 8,
    MINN = 2,
    MAXVALUE = 100,
    MINVALUE = 1;
let ARRAY = [12, 48, 70, 8, 20, 4];

ALGOSCENE.customInput.setCurrentValue(ARRAY.join(' '));

ALGOSCENE.customInput.onApply = function (value) {
    let isValid = true;
    value = value.split(' ').map((e) => Number(e));
    value.forEach((e) =>
        isNaN(e) || e < MINVALUE || e > MAXVALUE || !Number.isInteger(e) ? (isValid = false) : null
    );
    if (value.length < MINN) isValid = false;
    if (isValid) {
        ARRAY = value.slice(0, MAXN);
        ALGOSCENE.customInput.setCurrentValue(ARRAY.join(' '));
        ALGOSCENE.customInput.notify.success();
    } else ALGOSCENE.customInput.notify.failure();
};

const segmentTree = new (class {
    constructor() {
        ALGOSCENE.resetFrame.setAction('resetTree', () => this.reset());
        this.elm = document.createElement({className: 'tree'});
        this.nodeSize = 3;
    }
    growthTree() {
        const degree = 30 * (this.currentLevelNumber / 3);
        const radian = (degree * Math.PI) / 180;
        const addTop = 6 * Math.cos(radian);
        const addLeft =
            7 * this.currentLevelNumber * this.currentLevelNumber * 0.2 * Math.sin(radian);
        return [addTop, addLeft];
    }
    setTree() {
        this.tree = new Array(MAXN * 4);
    }
    init(type) {
        this.elm.innerHTML = '';
        this.func = config[type][0];
        this.notFoundValue = config[type][1];
        this.setTree();
        this.createArrayNodes();
        ALGOSCENE.frameElm.appendChild(this.elm);
    }
    setScale(value) {
        this.scale = value;
        this.elm.style.setProperty('--scale', value);
    }
    setSize(width, height) {
        this.setScale(1);
        this.elm.style.width = width + 'em';
        this.elm.style.height = height + 'em';
        width *= ALGOSCENE.frameElm.em * 10;
        if (width > ALGOSCENE.frameElm.width * 0.9)
            this.setScale((ALGOSCENE.frameElm.width / width) * 0.9);
        height *= this.scale;
        height *= ALGOSCENE.frameElm.em * 10;
        if (height > ALGOSCENE.frameElm.height * 0.8)
            this.setScale(this.scale * (ALGOSCENE.frameElm.height / height) * 0.8);
    }
    setPositionElm(top, left) {
        this.style.top = top + 'em';
        this.style.left = left + 'em';
    }
    getPositionElm() {
        return [
            Number(this.style.top.replace('em', '')),
            Number(this.style.left.replace('em', '')),
        ];
    }
    async selectedElm() {
        this.classList.add('selected');
        await ALGOSCENE.delay();
    }
    async unselectedElm() {
        this.classList.remove('selected');
        await ALGOSCENE.delay();
    }
    async isResultElm() {
        this.classList.add('result');
        await ALGOSCENE.delay();
    }
    setLevelElm(id) {
        this.getElmByIdx(id).setAttribute(
            'data-level',
            this.levelNumber - this.currentLevelNumber + 1
        );
    }
    createArrayNodes() {
        ARRAY.forEach((value, index) => {
            const elm = document.createElement({
                tag: 'span',
                innerText: value,
                arrayIndex: index,
                className: 'array-value pre-build',
                setPos: this.setPositionElm,
                getPos: this.getPositionElm,
                isResult: this.isResultElm,
                selected: this.isResultElm,
            });
            elm.setPos(this.nodeSize / 2, index * (this.nodeSize + 0.4) + this.nodeSize / 2);
            this.elm.appendChild(elm);
        });
        this.setSize((this.nodeSize + 0.4) * ARRAY.length - 0.4, this.nodeSize);
    }
    async setArrayNode(id, index) {
        Array.from(this.elm.childNodes)
            .find((node) => node.arrayIndex == index)
            .combine({idx: id, className: 'array-value'});
        await ALGOSCENE.delay();
    }
    addTreeNode(id) {
        const str = String(this.tree[id]);
        const elm = document.createElement({
            tag: 'span',
            attributes: {'data-value': this.tree[id]},
            style: {
                '--scale': (str.length > 3 ? Math.max((10 - str.length + 3) / 10, 0.7) : 1) + 'em',
            },
            idx: id,
            className: 'tree-value pre-build',
            setPos: this.setPositionElm,
            getPos: this.getPositionElm,
            selected: this.selectedElm,
            unselected: this.unselectedElm,
            isResult: this.isResultElm,
        });
        this.elm.appendChild(elm);
    }
    async build(id = 1, start = 0, end = ARRAY.length - 1) {
        if (start == end) {
            this.tree[id] = ARRAY[start];
            await this.setArrayNode(id, start);
        } else {
            const middle = Math.floor((start + end) / 2);
            this.build(id * 2, start, middle);
            this.build(id * 2 + 1, middle + 1, end);
            this.tree[id] = this.func(this.tree[id * 2], this.tree[id * 2 + 1]);
            this.addTreeNode(id);
        }
        await ALGOSCENE.delay();
    }
    getElmByIdx(id) {
        return Array.from(this.elm.childNodes).find((node) => node.idx == id);
    }
    createPath(id, parentId) {
        const path = document.createElement({
            className: 'path pre-build',
            setPos: this.setPositionElm,
            getPos: this.getPositionElm,
            idx: '' + parentId + ',' + id,
            selected: this.selectedElm,
            unselected: this.unselectedElm,
            isResult: this.isResultElm,
            async show() {
                this.classList.remove('pre-build');
                await ALGOSCENE.delay();
            },
        });
        const parPos = this.getElmByIdx(parentId).getPos();
        const pos = this.getElmByIdx(id).getPos();
        path.setPos(...pos);
        const degrees =
            Math.atan((pos[1] - parPos[1]) / (parPos[0] - pos[0])) * (180 / Math.PI) - 90;
        path.style.setProperty('--rotation', degrees + 'deg');
        const width = Math.sqrt(Math.pow(pos[0] - parPos[0], 2) + Math.pow(pos[1] - parPos[1], 2));
        path.style.setProperty('--width', width + 'em');
        this.elm.appendChild(path);
    }
    getPath(id, parentId) {
        if (id == parentId) return {selected: () => {}, unselected: () => {}};
        const idx = '' + parentId + ',' + id;
        return Array.from(this.elm.querySelectorAll('.path')).find((node) => node.idx == idx);
    }
    async showTreeNode(id) {
        this.getElmByIdx(id).classList.remove('pre-build');
        await ALGOSCENE.delay();
    }
    async showLeft(id) {
        if (this.getElmByIdx(id).className != 'array-value') {
            await this.showLeft(id * 2);
            await this.showRight(id * 2 + 1);
            await this.showTreeNode(id);
        }
        await this.getPath(id, id / 2).show();
    }
    async showRight(id) {
        if (this.getElmByIdx(id).className != 'array-value') {
            await this.showLeft(id * 2);
            await this.showRight(id * 2 + 1);
            await this.showTreeNode(id);
        }
        await this.getPath(id, (id - 1) / 2).show();
    }
    reset() {
        this.elm.querySelectorAll('.result').forEach((e) => e.classList.remove('result'));
        this.elm.querySelectorAll('.selected').forEach((e) => e.classList.remove('selected'));
    }
    async updateValue(id, value) {
        this.tree[id] = value;
        this.getElmByIdx(id).innerText = value;
        await ALGOSCENE.delay();
    }
    async render() {
        this.boundingLeft = 0;
        this.boundingRight = 0;
        this.height = 0;
        this.levelNumber = Math.ceil(Math.log2(ARRAY.length)) + 1;
        this.currentLevelNumber = this.levelNumber;
        this.getElmByIdx(1).setPos(1, 1);
        this.getElmByIdx(1).setAttribute('data-level', 0);
        this.renderLeft(2);
        this.renderRight(3);
        this.boundingLeft--;
        this.boundingRight++;
        Array.from(this.elm.childNodes).forEach((node) => {
            const [top, left] = node.getPos();
            node.setPos(top, left - this.boundingLeft);
        });
        this.width = this.boundingRight - this.boundingLeft;
        this.setSize(this.width, ++this.height);
        await ALGOSCENE.delay();
        await this.showLeft(2);
        await this.showRight(3);
        await this.showTreeNode(1);
    }
    renderLeft(id) {
        const [parentTop, parentLeft] = this.getElmByIdx(id / 2).getPos();
        const elm = this.getElmByIdx(id);
        const growthTree = this.growthTree();
        const pos = {
            top: parentTop + growthTree[0],
            left: parentLeft - growthTree[1],
        };
        elm.setPos(pos.top, pos.left);
        this.setLevelElm(id);
        this.createPath(id, id / 2);
        if (elm.className != 'array-value') {
            --this.currentLevelNumber;
            this.renderLeft(id * 2);
            this.renderRight(id * 2 + 1);
            ++this.currentLevelNumber;
        } else {
            this.boundingLeft = Math.min(this.boundingLeft, pos.left);
            this.height = Math.max(this.height, pos.top);
        }
    }
    renderRight(id) {
        const [parentTop, parentLeft] = this.getElmByIdx((id - 1) / 2).getPos();
        const elm = this.getElmByIdx(id);
        const growthTree = this.growthTree();
        const pos = {
            top: parentTop + growthTree[0],
            left: parentLeft + growthTree[1],
        };
        elm.setPos(pos.top, pos.left);
        this.setLevelElm(id);
        this.createPath(id, (id - 1) / 2);
        if (elm.className != 'array-value') {
            --this.currentLevelNumber;
            this.renderLeft(id * 2);
            this.renderRight(id * 2 + 1);
            ++this.currentLevelNumber;
        } else {
            this.boundingRight = Math.max(this.boundingRight, pos.left);
            this.height = Math.max(this.height, pos.top);
        }
    }
    async update(id, start, end, index, value, parentId) {
        if (index < start || index > end) return;
        await this.getPath(id, parentId).selected();
        if (start == end) {
            await this.updateValue(id, value);
            ARRAY[start] = value;
        } else {
            await this.getElmByIdx(id).selected();
            const middle = Math.floor((start + end) / 2);
            await this.update(id * 2, start, middle, index, value, id);
            await this.update(id * 2 + 1, middle + 1, end, index, value, id);
            await this.updateValue(id, this.func(this.tree[id * 2], this.tree[id * 2 + 1]));
            await this.getElmByIdx(id).unselected();
        }
        await this.getPath(id, parentId).unselected();
    }
    async rangeUpdate(id, start, end, leftRange, rightRange, value, parentId) {
        if (leftRange > end || rightRange < start) return;
        await this.getPath(id, parentId).selected();
        if (start == end) {
            await this.updateValue(id, this.tree[id] + value);
            ARRAY[start] += value;
        } else {
            await this.getElmByIdx(id).selected();
            const middle = Math.floor((start + end) / 2);
            await this.rangeUpdate(id * 2, start, middle, leftRange, rightRange, value, id);
            await this.rangeUpdate(id * 2 + 1, middle + 1, end, leftRange, rightRange, value, id);
            await this.updateValue(id, this.func(this.tree[id * 2], this.tree[id * 2 + 1]));
            await this.getElmByIdx(id).unselected();
        }
        await this.getPath(id, parentId).unselected();
    }
    async get(id, start, end, leftRange, rightRange, parentId) {
        if (leftRange > end || rightRange < start) return this.notFoundValue;
        await this.getPath(id, parentId).selected();
        await this.getElmByIdx(id).selected();
        if (leftRange <= start && rightRange >= end) {
            await this.getElmByIdx(id).isResult();
            await this.getPath(id, parentId).unselected();
            return this.tree[id];
        }
        const middle = Math.floor((start + end) / 2);
        const leftValue = await this.get(id * 2, start, middle, leftRange, rightRange, id);
        const rightValue = await this.get(id * 2 + 1, middle + 1, end, leftRange, rightRange, id);
        await this.getElmByIdx(id).unselected();
        await this.getPath(id, parentId).unselected();
        return this.func(leftValue, rightValue);
    }
})();

const result = new (class {
    constructor() {
        this.elm = document.createElement({className: 'result'});
        ALGOSCENE.resetFrame.setAction('result', () => this.reset());
    }
    reset() {
        this.hidden();
    }
    init() {
        this.hidden();
        ALGOSCENE.frameElm.appendChild(this.elm);
    }
    async show(value) {
        this.elm.innerHTML = value;
        this.elm.classList.add('show');
        await ALGOSCENE.delay();
    }
    hidden() {
        this.elm.classList.remove('show');
    }
})();

ALGOSCENE.enableSelectAction({
    actions: {
        build: {
            action: async () => {
                await segmentTree.build();
                await segmentTree.render();
            },
            hidden: true,
        },
        get: {
            action: async (e) =>
                await result.show(await segmentTree.get(1, 0, ARRAY.length - 1, e[0], e[1], 1)),
            input: 'leftRange rightRange',
            checkInput: (value) => {
                let isValid = true;
                value.forEach((e) =>
                    isNaN(e) || e < MINVALUE || e > MAXVALUE || !Number.isInteger(e)
                        ? (isValid = false)
                        : null
                );
                if (value.length < 2 || value[0] > value[1]) isValid = false;
                return isValid;
            },
        },
        update: {
            action: async (e) => await segmentTree.update(1, 0, ARRAY.length - 1, e[0], e[1], 1),
            input: 'index value',
            checkInput: (value) => {
                let isValid = true;
                value.forEach((e) =>
                    isNaN(e) || e < MINVALUE || e > MAXVALUE || !Number.isInteger(e)
                        ? (isValid = false)
                        : null
                );
                if (value.length < 2) isValid = false;
                return isValid;
            },
        },
        rangeUpdate: {
            action: async (e) =>
                await segmentTree.rangeUpdate(1, 0, ARRAY.length - 1, e[0], e[1], e[2], 1),
            input: 'leftRange rightRange value',
            checkInput: (value) => {
                let isValid = true;
                value.forEach((e) =>
                    isNaN(e) || e < MINVALUE || e > MAXVALUE || !Number.isInteger(e)
                        ? (isValid = false)
                        : null
                );
                if (value.length < 2 || value[0] > value[1]) isValid = false;
                for (let i = value[0]; i <= value[1]; i++)
                    if (ARRAY[i] + value[2] > MAXVALUE || ARRAY[i] + value[2] < MINVALUE)
                        isValid = false;
                return isValid;
            },
        },
    },
    elmSize: [7, 13],
});

Object.keys(config).forEach((key) =>
    ALGOSCENE.setAction(key, () => {
        segmentTree.init(key);
        result.init();
        ALGOSCENE.playPauseBtn.setClick('build');
    })
);
