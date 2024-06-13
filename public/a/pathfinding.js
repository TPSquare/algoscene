'use strict';

await ALGOSCENE.init(
    'pathfinding',
    'js,cpp',
    {
        dfs: {
            code: {
                cpp: [
                    '<span class="mtk5">// include: vector</span>',
                    '<span class="mtk5">// namespace: std</span>',
                    '<span>&empty-line;</span>',
                    '<span class="mtk6">void</span> <span class="mtk16">dfs</span><span class="bracket-highlighting-0">(</span><span class="mtk17">vector</span><span class="mtk1">&lt;</span><span class="mtk17">vector</span><span class="mtk1">&lt;</span><span class="mtk6">int</span><span class="mtk1">&gt;&gt;</span><span class="mtk6">&amp;</span> <span class="mtk10">matrix</span><span class="mtk1">,</span> <span class="mtk6">int</span> <span class="mtk10">x</span><span class="mtk1">,</span> <span class="mtk6">int</span> <span class="mtk10">y</span><span class="mtk1">,</span> <span class="mtk17">vector</span><span class="mtk1">&lt;</span><span class="mtk17">pair</span><span class="mtk1">&lt;</span><span class="mtk6">int</span><span class="mtk1">,</span> <span class="mtk6">int</span><span class="mtk1">&gt;&gt;</span><span class="mtk6">&amp;</span> <span class="mtk10">path</span><span class="mtk1">,</span> <span class="mtk17">vector</span><span class="mtk1">&lt;</span><span class="mtk17">vector</span><span class="mtk1">&lt;</span><span class="mtk6">bool</span><span class="mtk1">&gt;&gt;</span><span class="mtk6">&amp;</span> <span class="mtk10">visited</span><span class="mtk1">,</span> <span class="mtk6">int</span> <span class="mtk10">endX</span><span class="mtk1">,</span> <span class="mtk6">int</span> <span class="mtk10">endY</span><span class="mtk1">,</span> <span class="mtk6">bool&amp;</span> <span class="mtk10">found</span><span class="bracket-highlighting-0">)</span> <span class="bracket-highlighting-0">{</span>',
                    '&tab1;<span class="mtk18">if</span> <span class="bracket-highlighting-0">(</span><span class="mtk10">found</span><span class="bracket-highlighting-0">)</span> <span class="mtk18">return</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk6">int</span> <span class="mtk10">rows</span> <span class="mtk3">=</span> <span class="mtk10">matrix</span><span class="mtk1">.</span><span class="mtk16">size</span><span class="bracket-highlighting-1">(</span><span class="bracket-highlighting-1">)</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk6">int</span> <span class="mtk10">cols</span> <span class="mtk3">=</span> <span class="mtk10">matrix</span><span class="bracket-highlighting-1">[</span><span class="mtk7">0</span><span class="bracket-highlighting-1">]</span><span class="mtk1">.</span><span class="mtk16">size</span><span class="bracket-highlighting-1">(</span><span class="bracket-highlighting-1">)</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk6">int</span> <span class="mtk10">directions</span><span class="bracket-highlighting-1">[</span><span class="mtk7">4</span><span class="bracket-highlighting-1">]</span><span class="bracket-highlighting-1">[</span><span class="mtk7">2</span><span class="bracket-highlighting-1">]</span> <span class="mtk3">=</span> <span class="bracket-highlighting-1">{</span> <span class="bracket-highlighting-2">{</span> <span class="mtk3">-</span><span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk7">0</span> <span class="bracket-highlighting-2">}</span><span class="mtk1">,</span> <span class="bracket-highlighting-2">{</span> <span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk7">0</span> <span class="bracket-highlighting-2">}</span><span class="mtk1">,</span> <span class="bracket-highlighting-2">{</span> <span class="mtk7">0</span><span class="mtk1">,</span> <span class="mtk3">-</span><span class="mtk7">1</span> <span class="bracket-highlighting-2">}</span><span class="mtk1">,</span> <span class="bracket-highlighting-2">{</span> <span class="mtk7">0</span><span class="mtk1">,</span> <span class="mtk7">1</span> <span class="bracket-highlighting-2">}</span> <span class="bracket-highlighting-1">}</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk10">visited</span><span class="bracket-highlighting-1">[</span><span class="mtk10">x</span><span class="bracket-highlighting-1">]</span><span class="bracket-highlighting-1">[</span><span class="mtk10">y</span><span class="bracket-highlighting-1">]</span> <span class="mtk3">=</span> <span class="mtk6">true</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk10">path</span><span class="mtk1">.</span><span class="mtk16">push_back</span><span class="bracket-highlighting-1">(</span><span class="bracket-highlighting-2">{</span> <span class="mtk1">x,</span> <span class="mtk10">y</span> <span class="bracket-highlighting-2">}</span><span class="bracket-highlighting-1">)</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk18">for</span> <span class="bracket-highlighting-1">(</span><span class="mtk6">int</span> <span class="mtk10">i</span> <span class="mtk3">=</span> <span class="mtk7">0</span><span class="mtk1">;</span> <span class="mtk10">i</span> <span class="mtk3">&lt;</span> <span class="mtk7">4</span><span class="mtk1">;</span> <span class="mtk3">++</span><span class="mtk10">i</span><span class="bracket-highlighting-1">)</span> <span class="bracket-highlighting-1">{</span>',
                    '&tab2;<span class="mtk6">int</span> <span class="mtk10">nx</span> <span class="mtk3">=</span> <span class="mtk10">x</span> <span class="mtk3">+</span> <span class="mtk10">directions</span><span class="bracket-highlighting-2">[</span><span class="mtk10">i</span><span class="bracket-highlighting-2">]</span><span class="bracket-highlighting-2">[</span><span class="mtk7">0</span><span class="bracket-highlighting-2">]</span><span class="mtk1">;</span>',
                    '&tab2;<span class="mtk6">int</span> <span class="mtk10">ny</span> <span class="mtk3">=</span> <span class="mtk10">y</span> <span class="mtk3">+</span> <span class="mtk10">directions</span><span class="bracket-highlighting-2">[</span><span class="mtk10">i</span><span class="bracket-highlighting-2">]</span><span class="bracket-highlighting-2">[</span><span class="mtk7">1</span><span class="bracket-highlighting-2">]</span><span class="mtk1">;</span>',
                    '&tab2;<span class="mtk18">if</span> <span class="bracket-highlighting-2">(</span><span class="mtk10">nx</span> <span class="mtk3">&gt;=</span> <span class="mtk7">0</span> <span class="mtk3">&amp;&amp;</span> <span class="mtk10">ny</span> <span class="mtk3">&gt;=</span> <span class="mtk7">0</span> <span class="mtk3">&amp;&amp;</span> <span class="mtk10">nx</span> <span class="mtk3">&lt;</span> <span class="mtk10">rows</span> <span class="mtk3">&amp;&amp;</span> <span class="mtk10">ny</span> <span class="mtk3">&lt;</span> <span class="mtk10">cols</span> <span class="mtk3">&amp;&amp;</span> <span class="mtk10">matrix</span><span class="bracket-highlighting-3">[</span><span class="mtk10">nx</span><span class="bracket-highlighting-3">]</span><span class="bracket-highlighting-3">[</span><span class="mtk10">ny</span><span class="bracket-highlighting-3">]</span> <span class="mtk3">==</span> <span class="mtk7">0</span> <span class="mtk3">&amp;&amp;</span> <span class="mtk3">!</span><span class="mtk10">visited</span><span class="bracket-highlighting-3">[</span><span class="mtk10">nx</span><span class="bracket-highlighting-3">]</span><span class="bracket-highlighting-3">[</span><span class="mtk10">ny</span><span class="bracket-highlighting-3">]</span><span class="bracket-highlighting-2">)</span>',
                    '&tab3;<span class="mtk16">dfs</span><span class="bracket-highlighting-2">(</span><span class="mtk10">matrix</span><span class="mtk1">,</span> <span class="mtk10">nx</span><span class="mtk1">,</span> <span class="mtk10">ny</span><span class="mtk1">,</span> <span class="mtk10">path</span><span class="mtk1">,</span> <span class="mtk10">visited</span><span class="mtk1">,</span> <span class="mtk10">endX</span><span class="mtk1">,</span> <span class="mtk10">endY</span><span class="mtk1">,</span> <span class="mtk10">found</span><span class="bracket-highlighting-2">)</span><span class="mtk1">;</span>',
                    '&tab1;<span class="bracket-highlighting-1">}</span>',
                    '&tab1;<span class="mtk18">if</span> <span class="bracket-highlighting-1">(</span><span class="mtk10">path</span><span class="mtk1">.</span><span class="mtk16">back</span><span class="bracket-highlighting-2">(</span><span class="bracket-highlighting-2">)</span><span class="mtk1">.</span><span class="mtk10">first</span> <span class="mtk3">!=</span> <span class="mtk10">endX</span> <span class="mtk3">||</span> <span class="mtk10">path</span><span class="mtk1">.</span><span class="mtk16">back</span><span class="bracket-highlighting-2">(</span><span class="bracket-highlighting-2">)</span><span class="mtk1">.</span><span class="mtk10">second</span> <span class="mtk3">!=</span> <span class="mtk10">endY</span><span class="bracket-highlighting-1">)</span> <span class="mtk10">path</span><span class="mtk1">.</span><span class="mtk16">pop_back</span><span class="bracket-highlighting-1">(</span><span class="bracket-highlighting-1">)</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk18">else</span> <span class="mtk10">found</span> <span class="mtk3">=</span> <span class="mtk6">true</span><span class="mtk1">;</span>',
                    '<span class="bracket-highlighting-0">}</span>',
                    '<span>&empty-line;</span>',
                    '<span class="mtk17">vector</span><span class="mtk1">&lt;</span><span class="mtk17">pair</span><span class="mtk1">&lt;</span><span class="mtk6">int</span><span class="mtk1">,</span> <span class="mtk6">int</span><span class="mtk1">&gt;&gt;</span> <span class="mtk16">findPath</span><span class="bracket-highlighting-0">(</span><span class="mtk17">vector</span><span class="mtk1">&lt;</span><span class="mtk17">vector</span><span class="mtk1">&lt;</span><span class="mtk6">int</span><span class="mtk1">&gt;&gt;</span><span class="mtk6">&amp;</span> <span class="mtk10">matrix</span><span class="mtk1">,</span> <span class="mtk6">int</span> <span class="mtk10">startX</span><span class="mtk1">,</span> <span class="mtk6">int</span> <span class="mtk10">startY</span><span class="mtk1">,</span> <span class="mtk6">int</span> <span class="mtk10">endX</span><span class="mtk1">,</span> <span class="mtk6">int</span> <span class="mtk10">endY</span><span class="bracket-highlighting-0">)</span> <span class="bracket-highlighting-0">{</span>',
                    '&tab1;<span class="mtk6">int</span> <span class="mtk10">rows</span> <span class="mtk3">=</span> <span class="mtk10">matrix</span><span class="mtk1">.</span><span class="mtk16">size</span><span class="bracket-highlighting-1">(</span><span class="bracket-highlighting-1">)</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk6">int</span> <span class="mtk10">cols</span> <span class="mtk3">=</span> <span class="mtk10">matrix</span><span class="bracket-highlighting-1">[</span><span class="mtk7">0</span><span class="bracket-highlighting-1">]</span><span class="mtk1">.</span><span class="mtk16">size</span><span class="bracket-highlighting-1">(</span><span class="bracket-highlighting-1">)</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk17">vector</span><span class="mtk3">&lt;</span><span class="mtk17">vector</span><span class="mtk3">&lt;</span><span class="mtk6">bool</span><span class="mtk3">&gt;&gt;</span> <span class="mtk10">visited</span><span class="bracket-highlighting-1">(</span><span class="mtk10">rows</span><span class="mtk1">,</span> <span class="mtk17">vector</span><span class="mtk1">&lt;</span><span class="mtk6">bool</span><span class="mtk1">&gt;</span><span class="bracket-highlighting-2">(</span><span class="mtk10">cols</span><span class="mtk1">,</span> <span class="mtk6">false</span><span class="bracket-highlighting-2">)</span><span class="bracket-highlighting-1">)</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk17">vector</span><span class="mtk3">&lt;</span><span class="mtk17">pair</span><span class="mtk3">&lt;</span><span class="mtk6">int</span><span class="mtk1">,</span> <span class="mtk6">int</span><span class="mtk3">&gt;&gt;</span> <span class="mtk10">path</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk6">bool</span> <span class="mtk10">found</span> <span class="mtk3">=</span> <span class="mtk6">false</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk16">dfs</span><span class="bracket-highlighting-1">(</span><span class="mtk10">matrix</span><span class="mtk1">,</span> <span class="mtk10">startX</span><span class="mtk1">,</span> <span class="mtk10">startY</span><span class="mtk1">,</span> <span class="mtk10">path</span><span class="mtk1">,</span> <span class="mtk10">visited</span><span class="mtk1">,</span> <span class="mtk10">endX</span><span class="mtk1">,</span> <span class="mtk10">endY</span><span class="mtk1">,</span> <span class="mtk10">found</span><span class="bracket-highlighting-1">)</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk18">if</span> <span class="bracket-highlighting-0">(</span><span class="mtk10">found</span><span class="bracket-highlighting-0">)</span> <span class="mtk18">return</span> <span class="mtk10">path</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk18">return</span> <span class="bracket-highlighting-1">{</span><span class="bracket-highlighting-1">}</span><span class="mtk1">;</span>',
                    '<span class="bracket-highlighting-0">}</span>',
                ],
                js: [
                    '<span class="mtk6">function</span> <span class="mtk16">findPath</span><span class="bracket-highlighting-0">(</span><span class="mtk10">matrix</span><span class="mtk1">,</span> <span class="mtk10">startX</span><span class="mtk1">,</span> <span class="mtk10">startY</span><span class="mtk1">,</span> <span class="mtk10">endX</span><span class="mtk1">,</span> <span class="mtk10">endY</span><span class="bracket-highlighting-0">)</span> <span class="bracket-highlighting-0">{</span>',
                    '&tab1;<span class="mtk6">const</span> <span class="mtk16">dfs</span> <span class="mtk3">=</span> <span class="bracket-highlighting-1">(</span><span class="mtk10">x</span><span class="mtk1">,</span> <span class="mtk10">y</span><span class="bracket-highlighting-1">)</span> <span class="mtk6">=&gt;</span> <span class="bracket-highlighting-1">{</span>',
                    '&tab2;<span class="mtk18">if</span> <span class="bracket-highlighting-2">(</span><span class="mtk10">found</span><span class="bracket-highlighting-2">)</span> <span class="mtk18">return</span><span class="mtk1">;</span>',
                    '&tab2;<span class="mtk19">visited</span><span class="bracket-highlighting-2">[</span><span class="mtk10">x</span><span class="bracket-highlighting-2">]</span><span class="bracket-highlighting-2">[</span><span class="mtk10">y</span><span class="bracket-highlighting-2">]</span> <span class="mtk3">=</span> <span class="mtk6">true</span><span class="mtk1">;</span>',
                    '&tab2;<span class="mtk19">path</span><span class="mtk1">.</span><span class="mtk16">push</span><span class="bracket-highlighting-2">(</span><span class="bracket-highlighting-3">[</span><span class="mtk10">x</span><span class="mtk1">,</span> <span class="mtk10">y</span><span class="bracket-highlighting-3">]</span><span class="bracket-highlighting-2">)</span><span class="mtk1">;</span>',
                    '&tab2;<span class="mtk18">for</span> <span class="bracket-highlighting-2">(</span><span class="mtk6">let</span> <span class="mtk10">i</span> <span class="mtk3">=</span> <span class="mtk7">0</span><span class="mtk1">;</span> <span class="mtk10">i</span> <span class="mtk3">&lt;</span> <span class="mtk7">4</span><span class="mtk1">;</span> <span class="mtk3">++</span><span class="mtk10">i</span><span class="bracket-highlighting-2">)</span> <span class="bracket-highlighting-2">{</span>',
                    '&tab3;<span class="mtk6">const</span> <span class="mtk19">nx</span> <span class="mtk3">=</span> <span class="mtk10">x</span> <span class="mtk3">+</span> <span class="mtk19">directions</span><span class="bracket-highlighting-3">[</span><span class="mtk10">i</span><span class="bracket-highlighting-3">]</span><span class="bracket-highlighting-3">[</span><span class="mtk7">0</span><span class="bracket-highlighting-3">]</span><span class="mtk1">;</span>',
                    '&tab3;<span class="mtk6">const</span> <span class="mtk19">ny</span> <span class="mtk3">=</span> <span class="mtk10">y</span> <span class="mtk3">+</span> <span class="mtk19">directions</span><span class="bracket-highlighting-3">[</span><span class="mtk10">i</span><span class="bracket-highlighting-3">]</span><span class="bracket-highlighting-3">[</span><span class="mtk7">1</span><span class="bracket-highlighting-3">]</span><span class="mtk1">;</span>',
                    '&tab3;<span class="mtk18">if</span> <span class="bracket-highlighting-3">(</span><span class="mtk19">nx</span> <span class="mtk3">&gt;=</span> <span class="mtk7">0</span> <span class="mtk3">&amp;&amp;</span> <span class="mtk19">ny</span> <span class="mtk3">&gt;=</span> <span class="mtk7">0</span> <span class="mtk3">&amp;&amp;</span> <span class="mtk19">nx</span> <span class="mtk3">&lt;</span> <span class="mtk19">rows</span> <span class="mtk3">&amp;&amp;</span> <span class="mtk19">ny</span> <span class="mtk3">&lt;</span> <span class="mtk19">cols</span> <span class="mtk3">&amp;&amp;</span> <span class="mtk10">matrix</span><span class="bracket-highlighting-4">[</span><span class="mtk19">nx</span><span class="bracket-highlighting-4">]</span><span class="bracket-highlighting-4">[</span><span class="mtk19">ny</span><span class="bracket-highlighting-4">]</span> <span class="mtk3">==</span> <span class="mtk7">0</span> <span class="mtk3">&amp;&amp;</span> <span class="mtk3">!</span><span class="mtk19">visited</span><span class="bracket-highlighting-4">[</span><span class="mtk19">nx</span><span class="bracket-highlighting-4">]</span><span class="bracket-highlighting-4">[</span><span class="mtk19">ny</span><span class="bracket-highlighting-4">]</span><span class="bracket-highlighting-3">)</span>',
                    '&tab4;<span class="mtk16">dfs</span><span class="bracket-highlighting-3">(</span><span class="mtk19">nx</span><span class="mtk1">,</span> <span class="mtk19">ny</span><span class="bracket-highlighting-3">)</span><span class="mtk1">;</span>',
                    '&tab2;<span class="bracket-highlighting-2">}</span>',
                    '&tab2;<span class="mtk18">if</span> <span class="bracket-highlighting-2">(</span><span class="mtk19">path</span><span class="bracket-highlighting-3">[</span><span class="mtk19">path</span><span class="mtk1">.</span><span class="mtk10">length</span> <span class="mtk3">-</span> <span class="mtk7">1</span><span class="bracket-highlighting-3">]</span><span class="bracket-highlighting-3">[</span><span class="mtk7">0</span><span class="bracket-highlighting-3">]</span> <span class="mtk3">!=</span> <span class="mtk10">endX</span> <span class="mtk3">||</span> <span class="mtk19">path</span><span class="bracket-highlighting-3">[</span><span class="mtk19">path</span><span class="mtk1">.</span><span class="mtk10">length</span> <span class="mtk3">-</span> <span class="mtk7">1</span><span class="bracket-highlighting-3">]</span><span class="bracket-highlighting-3">[</span><span class="mtk7">1</span><span class="bracket-highlighting-3">]</span> <span class="mtk3">!=</span> <span class="mtk10">endY</span><span class="bracket-highlighting-2">)</span> <span class="mtk19">path</span><span class="mtk1">.</span><span class="mtk16">pop</span><span class="bracket-highlighting-2">(</span><span class="bracket-highlighting-2">)</span><span class="mtk1">;</span>',
                    '&tab2;<span class="mtk18">else</span> <span class="mtk10">found</span> <span class="mtk3">=</span> <span class="mtk6">true</span><span class="mtk1">;</span>',
                    '&tab1;<span class="bracket-highlighting-1">}</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk6">const</span> <span class="mtk19">rows</span> <span class="mtk3">=</span> <span class="mtk10">matrix</span><span class="mtk1">.</span><span class="mtk10">length</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk6">const</span> <span class="mtk19">cols</span> <span class="mtk3">=</span> <span class="mtk10">matrix</span><span class="bracket-highlighting-1">[</span><span class="mtk7">0</span><span class="bracket-highlighting-1">]</span><span class="mtk1">.</span><span class="mtk10">length</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk6">const</span> <span class="mtk19">visited</span> <span class="mtk3">=</span> <span class="mtk17">Array</span><span class="mtk1">.</span><span class="mtk16">from</span><span class="bracket-highlighting-1">(</span><span class="bracket-highlighting-2">{</span><span class="mtk10">length:</span> <span class="mtk19">rows</span><span class="bracket-highlighting-2">}</span><span class="mtk1">,</span> <span class="bracket-highlighting-2">(</span><span class="bracket-highlighting-2">)</span> <span class="mtk6">=&gt;</span> <span class="mtk17">Array</span><span class="bracket-highlighting-2">(</span><span class="mtk19">cols</span><span class="bracket-highlighting-2">)</span><span class="mtk1">.</span><span class="mtk16">fill</span><span class="bracket-highlighting-2">(</span><span class="mtk6">false</span><span class="bracket-highlighting-2">)</span><span class="bracket-highlighting-1">)</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk6">const</span> <span class="mtk19">path</span> <span class="mtk3">=</span> <span class="bracket-highlighting-1">[</span><span class="bracket-highlighting-1">]</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk6">const</span> <span class="mtk19">directions</span> <span class="mtk3">=</span> <span class="bracket-highlighting-1">[</span><span class="bracket-highlighting-2">[</span><span class="mtk3">-</span><span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk7">0</span><span class="bracket-highlighting-2">]</span><span class="mtk1">,</span> <span class="bracket-highlighting-2">[</span><span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk7">0</span><span class="bracket-highlighting-2">]</span><span class="mtk1">,</span> <span class="bracket-highlighting-2">[</span><span class="mtk7">0</span><span class="mtk1">,</span> <span class="mtk3">-</span><span class="mtk7">1</span><span class="bracket-highlighting-2">]</span><span class="mtk1">,</span> <span class="bracket-highlighting-2">[</span><span class="mtk7">0</span><span class="mtk1">,</span> <span class="mtk7">1</span><span class="bracket-highlighting-2">]</span><span class="bracket-highlighting-1">]</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk6">let</span> <span class="mtk10">found</span> <span class="mtk3">=</span> <span class="mtk6">false</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk16">dfs</span><span class="bracket-highlighting-1">(</span><span class="mtk10">startX</span><span class="mtk1">,</span> <span class="mtk10">startY</span><span class="bracket-highlighting-1">)</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk18">if</span> <span class="bracket-highlighting-1">(</span><span class="mtk10">found</span><span class="bracket-highlighting-1">)</span> <span class="mtk18">return</span> <span class="mtk19">path</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk18">return</span> <span class="bracket-highlighting-1">[</span><span class="bracket-highlighting-1">]</span><span class="mtk1">;</span>',
                    '<span class="bracket-highlighting-0">}</span>',
                ],
            },
            complexity: ALGOSCENE.createComplexity('V + E', 'V + E', 'V + E', 'V'),
        },
        bfs: {
            code: {
                cpp: [
                    '<span class="mtk5">// include: vector, queue, algorithm</span>',
                    '<span class="mtk5">// namespace: std</span>',
                    '<span>&empty-line;</span>',
                    '<span class="mtk17">vector</span><span class="mtk1">&lt;</span><span class="mtk17">pair</span><span class="mtk1">&lt;</span><span class="mtk6">int</span><span class="mtk1">,</span> <span class="mtk6">int</span><span class="mtk1">&gt;&gt;</span> <span class="mtk16">bfs</span><span class="bracket-highlighting-0">(</span><span class="mtk17">vector</span><span class="mtk1">&lt;</span><span class="mtk17">vector</span><span class="mtk1">&lt;</span><span class="mtk6">int</span><span class="mtk1">&gt;&gt;</span><span class="mtk6">&amp;</span> <span class="mtk10">matrix</span><span class="mtk1">,</span> <span class="mtk6">int</span> <span class="mtk10">startX</span><span class="mtk1">,</span> <span class="mtk6">int</span> <span class="mtk10">startY</span><span class="mtk1">,</span> <span class="mtk6">int</span> <span class="mtk10">endX</span><span class="mtk1">,</span> <span class="mtk6">int</span> <span class="mtk10">endY</span><span class="bracket-highlighting-0">)</span> <span class="bracket-highlighting-0">{</span>',
                    '&tab1;<span class="mtk6">int</span> <span class="mtk10">rows</span> <span class="mtk3">=</span> <span class="mtk10">matrix</span><span class="mtk1">.</span><span class="mtk16">size</span><span class="bracket-highlighting-1">(</span><span class="bracket-highlighting-1">)</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk6">int</span> <span class="mtk10">cols</span> <span class="mtk3">=</span> <span class="mtk10">matrix</span><span class="bracket-highlighting-1">[</span><span class="mtk7">0</span><span class="bracket-highlighting-1">]</span><span class="mtk1">.</span><span class="mtk16">size</span><span class="bracket-highlighting-1">(</span><span class="bracket-highlighting-1">)</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk17">vector</span><span class="mtk3">&lt;</span><span class="mtk17">vector</span><span class="mtk3">&lt;</span><span class="mtk6">bool</span><span class="mtk3">&gt;&gt;</span> <span class="mtk10">visited</span><span class="bracket-highlighting-1">(</span><span class="mtk10">rows</span><span class="mtk1">,</span> <span class="mtk17">vector</span><span class="mtk1">&lt;</span><span class="mtk6">bool</span><span class="mtk1">&gt;</span><span class="bracket-highlighting-2">(</span><span class="mtk10">cols</span><span class="mtk1">,</span> <span class="mtk6">false</span><span class="bracket-highlighting-2">)</span><span class="bracket-highlighting-1">)</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk17">vector</span><span class="mtk3">&lt;</span><span class="mtk17">vector</span><span class="mtk3">&lt;</span><span class="mtk17">pair</span><span class="mtk3">&lt;</span><span class="mtk6">int</span><span class="mtk1">,</span> <span class="mtk6">int</span><span class="mtk3">&gt;&gt;&gt;</span> <span class="mtk10">cameFrom</span><span class="bracket-highlighting-1">(</span><span class="mtk10">rows</span><span class="mtk1">,</span> <span class="mtk17">vector</span><span class="mtk1">&lt;</span><span class="mtk17">pair</span><span class="mtk1">&lt;</span><span class="mtk6">int</span><span class="mtk1">,</span> <span class="mtk6">int</span><span class="mtk1">&gt;&gt;</span><span class="bracket-highlighting-2">(</span><span class="mtk10">cols</span><span class="mtk1">,</span> <span class="bracket-highlighting-3">{</span> <span class="mtk3">-</span><span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk3">-</span><span class="mtk7">1</span> <span class="bracket-highlighting-3">}</span><span class="bracket-highlighting-2">)</span><span class="bracket-highlighting-1">)</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk17">queue</span><span class="mtk3">&lt;</span><span class="mtk17">pair</span><span class="mtk3">&lt;</span><span class="mtk6">int</span><span class="mtk1">,</span> <span class="mtk6">int</span><span class="mtk3">&gt;&gt;</span> <span class="mtk10">q</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk10">q</span><span class="mtk1">.</span><span class="mtk16">push</span><span class="bracket-highlighting-1">(</span><span class="bracket-highlighting-2">{</span> <span class="mtk10">startX</span><span class="mtk1">,</span> <span class="mtk10">startY</span> <span class="bracket-highlighting-2">}</span><span class="bracket-highlighting-1">)</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk10">visited</span><span class="bracket-highlighting-1">[</span><span class="mtk10">startX</span><span class="bracket-highlighting-1">]</span><span class="bracket-highlighting-1">[</span><span class="mtk10">startY</span><span class="bracket-highlighting-1">]</span> <span class="mtk3">=</span> <span class="mtk6">true</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk6">int</span> <span class="mtk10">directions</span><span class="bracket-highlighting-1">[</span><span class="mtk7">4</span><span class="bracket-highlighting-1">]</span><span class="bracket-highlighting-1">[</span><span class="mtk7">2</span><span class="bracket-highlighting-1">]</span> <span class="mtk3">=</span> <span class="bracket-highlighting-1">{</span> <span class="bracket-highlighting-2">{</span> <span class="mtk3">-</span><span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk7">0</span> <span class="bracket-highlighting-2">}</span><span class="mtk1">,</span> <span class="bracket-highlighting-2">{</span> <span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk7">0</span> <span class="bracket-highlighting-2">}</span><span class="mtk1">,</span> <span class="bracket-highlighting-2">{</span> <span class="mtk7">0</span><span class="mtk1">,</span> <span class="mtk3">-</span><span class="mtk7">1</span> <span class="bracket-highlighting-2">}</span><span class="mtk1">,</span> <span class="bracket-highlighting-2">{</span> <span class="mtk7">0</span><span class="mtk1">,</span> <span class="mtk7">1</span> <span class="bracket-highlighting-2">}</span> <span class="bracket-highlighting-1">}</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk18">while</span> <span class="bracket-highlighting-1">(</span><span class="mtk3">!</span><span class="mtk10">q</span><span class="mtk1">.</span><span class="mtk16">empty</span><span class="bracket-highlighting-2">(</span><span class="bracket-highlighting-2">)</span><span class="bracket-highlighting-1">)</span> <span class="bracket-highlighting-1">{</span>',
                    '&tab2;<span class="mtk17">pair</span><span class="mtk3">&lt;</span><span class="mtk6">int</span><span class="mtk1">,</span> <span class="mtk6">int</span><span class="mtk3">&gt;</span> <span class="mtk10">current</span> <span class="mtk3">=</span> <span class="mtk10">q</span><span class="mtk1">.</span><span class="mtk16">front</span><span class="bracket-highlighting-2">(</span><span class="bracket-highlighting-2">)</span><span class="mtk1">;</span>',
                    '&tab2;<span class="mtk10">q</span><span class="mtk1">.</span><span class="mtk16">pop</span><span class="bracket-highlighting-2">(</span><span class="bracket-highlighting-2">)</span><span class="mtk1">;</span>',
                    '&tab2;<span class="mtk6">int</span> <span class="mtk10">x</span> <span class="mtk3">=</span> <span class="mtk10">current</span><span class="mtk1">.</span><span class="mtk10">first</span><span class="mtk1">;</span>',
                    '&tab2;<span class="mtk6">int</span> <span class="mtk10">y</span> <span class="mtk3">=</span> <span class="mtk10">current</span><span class="mtk1">.</span><span class="mtk10">second</span><span class="mtk1">;</span>',
                    '&tab2;<span class="mtk18">if</span> <span class="bracket-highlighting-2">(</span><span class="mtk10">x</span> <span class="mtk3">==</span> <span class="mtk10">endX</span> <span class="mtk3">&amp;&amp;</span> <span class="mtk10">y</span> <span class="mtk3">==</span> <span class="mtk10">endY</span><span class="bracket-highlighting-2">)</span> <span class="bracket-highlighting-2">{</span>',
                    '&tab3;<span class="mtk17">vector</span><span class="mtk3">&lt;</span><span class="mtk17">pair</span><span class="mtk3">&lt;</span><span class="mtk6">int</span><span class="mtk1">,</span> <span class="mtk6">int</span><span class="mtk3">&gt;&gt;</span> <span class="mtk10">path</span><span class="mtk1">;</span>',
                    '&tab3;<span class="mtk18">for</span> <span class="bracket-highlighting-3">(</span><span class="mtk17">pair</span><span class="mtk3">&lt;</span><span class="mtk6">int</span><span class="mtk1">,</span> <span class="mtk6">int</span><span class="mtk3">&gt;</span> <span class="mtk10">at</span> <span class="mtk3">=</span> <span class="bracket-highlighting-4">{</span> <span class="mtk10">endX</span><span class="mtk1">,</span> <span class="mtk10">endY</span> <span class="bracket-highlighting-4">}</span><span class="mtk1">;</span> <span class="mtk10">at</span><span class="mtk1">.</span><span class="mtk10">first</span> <span class="mtk3">!=</span> <span class="mtk3">-</span><span class="mtk7">1</span><span class="mtk1">;</span> <span class="mtk10">at</span> <span class="mtk3">=</span> <span class="mtk10">cameFrom</span><span class="bracket-highlighting-4">[</span><span class="mtk10">at</span><span class="mtk1">.</span><span class="mtk10">first</span><span class="bracket-highlighting-4">]</span><span class="bracket-highlighting-4">[</span><span class="mtk10">at</span><span class="mtk1">.</span><span class="mtk10">second</span><span class="bracket-highlighting-4">]</span><span class="bracket-highlighting-3">)</span>',
                    '&tab4;<span class="mtk10">path</span><span class="mtk1">.</span><span class="mtk16">push_back</span><span class="bracket-highlighting-3">(</span><span class="mtk10">at</span><span class="bracket-highlighting-3">)</span><span class="mtk1">;</span>',
                    '&tab3;<span class="mtk16">reverse</span><span class="bracket-highlighting-3">(</span><span class="mtk10">path</span><span class="mtk1">.</span><span class="mtk16">begin</span><span class="bracket-highlighting-4">(</span><span class="bracket-highlighting-4">)</span><span class="mtk1">,</span> <span class="mtk10">path</span><span class="mtk1">.</span><span class="mtk16">end</span><span class="bracket-highlighting-4">(</span><span class="bracket-highlighting-4">)</span><span class="bracket-highlighting-3">)</span><span class="mtk1">;</span>',
                    '&tab3;<span class="mtk18">return</span> <span class="mtk10">path</span><span class="mtk1">;</span>',
                    '&tab2;<span class="bracket-highlighting-2">}</span>',
                    '&tab2;<span class="mtk18">for</span> <span class="bracket-highlighting-2">(</span><span class="mtk6">int</span> <span class="mtk10">i</span> <span class="mtk3">=</span> <span class="mtk7">0</span><span class="mtk1">;</span> <span class="mtk10">i</span> <span class="mtk3">&lt;</span> <span class="mtk7">4</span><span class="mtk1">;</span> <span class="mtk3">++</span><span class="mtk10">i</span><span class="bracket-highlighting-2">)</span> <span class="bracket-highlighting-2">{</span>',
                    '&tab3;<span class="mtk6">int</span> <span class="mtk10">nx</span> <span class="mtk3">=</span> <span class="mtk10">x</span> <span class="mtk3">+</span> <span class="mtk10">directions</span><span class="bracket-highlighting-3">[</span><span class="mtk10">i</span><span class="bracket-highlighting-3">]</span><span class="bracket-highlighting-3">[</span><span class="mtk7">0</span><span class="bracket-highlighting-3">]</span><span class="mtk1">;</span>',
                    '&tab3;<span class="mtk6">int</span> <span class="mtk10">ny</span> <span class="mtk3">=</span> <span class="mtk10">y</span> <span class="mtk3">+</span> <span class="mtk10">directions</span><span class="bracket-highlighting-3">[</span><span class="mtk10">i</span><span class="bracket-highlighting-3">]</span><span class="bracket-highlighting-3">[</span><span class="mtk7">1</span><span class="bracket-highlighting-3">]</span><span class="mtk1">;</span>',
                    '&tab3;<span class="mtk18">if</span> <span class="bracket-highlighting-3">(</span><span class="mtk10">nx</span> <span class="mtk3">&gt;=</span> <span class="mtk7">0</span> <span class="mtk3">&amp;&amp;</span> <span class="mtk10">nx</span> <span class="mtk3">&lt;</span> <span class="mtk10">rows</span> <span class="mtk3">&amp;&amp;</span> <span class="mtk10">ny</span> <span class="mtk3">&gt;=</span> <span class="mtk7">0</span> <span class="mtk3">&amp;&amp;</span> <span class="mtk10">ny</span> <span class="mtk3">&lt;</span> <span class="mtk10">cols</span> <span class="mtk3">&amp;&amp;</span> <span class="mtk10">matrix</span><span class="bracket-highlighting-4">[</span><span class="mtk10">nx</span><span class="bracket-highlighting-4">]</span><span class="bracket-highlighting-4">[</span><span class="mtk10">ny</span><span class="bracket-highlighting-4">]</span> <span class="mtk3">==</span> <span class="mtk7">0</span> <span class="mtk3">&amp;&amp;</span> <span class="mtk3">!</span><span class="mtk10">visited</span><span class="bracket-highlighting-4">[</span><span class="mtk10">nx</span><span class="bracket-highlighting-4">]</span><span class="bracket-highlighting-4">[</span><span class="mtk10">ny</span><span class="bracket-highlighting-4">]</span><span class="bracket-highlighting-3">)</span> <span class="bracket-highlighting-3">{</span>',
                    '&tab4;<span class="mtk10">q</span><span class="mtk1">.</span><span class="mtk16">push</span><span class="bracket-highlighting-4">(</span><span class="bracket-highlighting-5">{</span> <span class="mtk10">nx</span><span class="mtk1">,</span> <span class="mtk10">ny</span> <span class="bracket-highlighting-5">}</span><span class="bracket-highlighting-4">)</span><span class="mtk1">;</span>',
                    '&tab4;<span class="mtk10">visited</span><span class="bracket-highlighting-4">[</span><span class="mtk10">nx</span><span class="bracket-highlighting-4">]</span><span class="bracket-highlighting-4">[</span><span class="mtk10">ny</span><span class="bracket-highlighting-4">]</span> <span class="mtk3">=</span> <span class="mtk6">true</span><span class="mtk1">;</span>',
                    '&tab4;<span class="mtk10">cameFrom</span><span class="bracket-highlighting-4">[</span><span class="mtk10">nx</span><span class="bracket-highlighting-4">]</span><span class="bracket-highlighting-4">[</span><span class="mtk10">ny</span><span class="bracket-highlighting-4">]</span> <span class="mtk3">=</span> <span class="bracket-highlighting-4">{</span> <span class="mtk10">x</span><span class="mtk1">,</span> <span class="mtk10">y</span> <span class="bracket-highlighting-4">}</span><span class="mtk1">;</span>',
                    '&tab3;<span class="bracket-highlighting-3">}</span>',
                    '&tab2;<span class="bracket-highlighting-2">}</span>',
                    '&tab1;<span class="bracket-highlighting-1">}</span>',
                    '&tab1;<span class="mtk18">return</span> <span class="bracket-highlighting-1">{</span><span class="bracket-highlighting-1">}</span><span class="mtk1">;</span>',
                    '<span class="bracket-highlighting-0">}</span>',
                ],
                js: [
                    '<span class="mtk6">function</span> <span class="mtk16">bfs</span><span class="bracket-highlighting-0">(</span><span class="mtk10">matrix</span><span class="mtk1">,</span> <span class="mtk10">startX</span><span class="mtk1">,</span> <span class="mtk10">startY</span><span class="mtk1">,</span> <span class="mtk10">endX</span><span class="mtk1">,</span> <span class="mtk10">endY</span><span class="bracket-highlighting-0">)</span> <span class="bracket-highlighting-0">{</span>',
                    '&tab1;<span class="mtk6">const</span> <span class="mtk19">rows</span> <span class="mtk3">=</span> <span class="mtk10">matrix</span><span class="mtk1">.</span><span class="mtk10">length</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk6">const</span> <span class="mtk19">cols</span> <span class="mtk3">=</span> <span class="mtk10">matrix</span><span class="bracket-highlighting-1">[</span><span class="mtk7">0</span><span class="bracket-highlighting-1">]</span><span class="mtk1">.</span><span class="mtk10">length</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk6">const</span> <span class="mtk19">visited</span> <span class="mtk3">=</span> <span class="mtk17">Array</span><span class="mtk1">.</span><span class="mtk16">from</span><span class="bracket-highlighting-1">(</span><span class="bracket-highlighting-2">{</span><span class="mtk10">length:</span> <span class="mtk19">rows</span><span class="bracket-highlighting-2">}</span><span class="mtk1">,</span> <span class="bracket-highlighting-2">(</span><span class="bracket-highlighting-2">)</span> <span class="mtk6">=&gt;</span> <span class="mtk17">Array</span><span class="bracket-highlighting-2">(</span><span class="mtk19">cols</span><span class="bracket-highlighting-2">)</span><span class="mtk1">.</span><span class="mtk16">fill</span><span class="bracket-highlighting-2">(</span><span class="mtk6">false</span><span class="bracket-highlighting-2">)</span><span class="bracket-highlighting-1">)</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk6">const</span> <span class="mtk19">cameFrom</span> <span class="mtk3">=</span> <span class="mtk17">Array</span><span class="mtk1">.</span><span class="mtk16">from</span><span class="bracket-highlighting-1">(</span><span class="bracket-highlighting-2">{</span><span class="mtk10">length:</span> <span class="mtk19">rows</span><span class="bracket-highlighting-2">}</span><span class="mtk1">,</span> <span class="bracket-highlighting-2">(</span><span class="bracket-highlighting-2">)</span> <span class="mtk6">=&gt;</span> <span class="mtk17">Array</span><span class="bracket-highlighting-2">(</span><span class="mtk19">cols</span><span class="bracket-highlighting-2">)</span><span class="mtk1">.</span><span class="mtk16">fill</span><span class="bracket-highlighting-2">(</span><span class="mtk6">null</span><span class="bracket-highlighting-2">)</span><span class="bracket-highlighting-1">)</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk6">const</span> <span class="mtk19">queue</span> <span class="mtk3">=</span> <span class="bracket-highlighting-1">[</span><span class="bracket-highlighting-2">[</span><span class="mtk10">startX</span><span class="mtk1">,</span> <span class="mtk10">startY</span><span class="bracket-highlighting-2">]</span><span class="bracket-highlighting-1">]</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk19">visited</span><span class="bracket-highlighting-1">[</span><span class="mtk10">startX</span><span class="bracket-highlighting-1">]</span><span class="bracket-highlighting-1">[</span><span class="mtk10">startY</span><span class="bracket-highlighting-1">]</span> <span class="mtk3">=</span> <span class="mtk6">true</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk6">const</span> <span class="mtk19">directions</span> <span class="mtk3">=</span> <span class="bracket-highlighting-1">[</span><span class="bracket-highlighting-2">[</span><span class="mtk3">-</span><span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk7">0</span><span class="bracket-highlighting-2">]</span><span class="mtk1">,</span> <span class="bracket-highlighting-2">[</span><span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk7">0</span><span class="bracket-highlighting-2">]</span><span class="mtk1">,</span> <span class="bracket-highlighting-2">[</span><span class="mtk7">0</span><span class="mtk1">,</span> <span class="mtk3">-</span><span class="mtk7">1</span><span class="bracket-highlighting-2">]</span><span class="mtk1">,</span> <span class="bracket-highlighting-2">[</span><span class="mtk7">0</span><span class="mtk1">,</span> <span class="mtk7">1</span><span class="bracket-highlighting-2">]</span><span class="bracket-highlighting-1">]</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk18">while</span> <span class="bracket-highlighting-1">(</span><span class="mtk19">queue</span><span class="mtk1">.</span><span class="mtk10">length</span> <span class="mtk3">&gt;</span> <span class="mtk7">0</span><span class="bracket-highlighting-1">)</span> <span class="bracket-highlighting-1">{</span>',
                    '&tab2;<span class="mtk6">const</span> <span class="bracket-highlighting-2">[</span><span class="mtk19">x</span><span class="mtk1">,</span> <span class="mtk19">y</span><span class="bracket-highlighting-2">]</span> <span class="mtk3">=</span> <span class="mtk19">queue</span><span class="mtk1">.</span><span class="mtk16">shift</span><span class="bracket-highlighting-2">(</span><span class="bracket-highlighting-2">)</span><span class="mtk1">;</span>',
                    '&tab2;<span class="mtk18">if</span> <span class="bracket-highlighting-2">(</span><span class="mtk19">x</span> <span class="mtk3">==</span> <span class="mtk10">endX</span> <span class="mtk3">&amp;&amp;</span> <span class="mtk19">y</span> <span class="mtk3">==</span> <span class="mtk10">endY</span><span class="bracket-highlighting-2">)</span> <span class="bracket-highlighting-2">{</span>',
                    '&tab3;<span class="mtk6">const</span> <span class="mtk19">path</span> <span class="mtk3">=</span> <span class="bracket-highlighting-3">[</span><span class="bracket-highlighting-3">]</span><span class="mtk1">;</span>',
                    '&tab3;<span class="mtk18">for</span> <span class="bracket-highlighting-3">(</span><span class="mtk6">let</span> <span class="mtk10">at</span> <span class="mtk3">=</span> <span class="bracket-highlighting-4">[</span><span class="mtk10">endX</span><span class="mtk1">,</span> <span class="mtk10">endY</span><span class="bracket-highlighting-4">]</span><span class="mtk1">;</span> <span class="mtk10">at</span><span class="mtk1">;</span> <span class="mtk10">at</span> <span class="mtk3">=</span> <span class="mtk19">cameFrom</span><span class="bracket-highlighting-4">[</span><span class="mtk10">at</span><span class="bracket-highlighting-5">[</span><span class="mtk7">0</span><span class="bracket-highlighting-5">]</span><span class="bracket-highlighting-4">]</span><span class="bracket-highlighting-4">[</span><span class="mtk10">at</span><span class="bracket-highlighting-5">[</span><span class="mtk7">1</span><span class="bracket-highlighting-5">]</span><span class="bracket-highlighting-4">]</span><span class="bracket-highlighting-3">)</span>',
                    '&tab4;<span class="mtk19">path</span><span class="mtk1">.</span><span class="mtk16">push</span><span class="bracket-highlighting-3">(</span><span class="mtk10">at</span><span class="bracket-highlighting-3">)</span><span class="mtk1">;</span>',
                    '&tab3;<span class="mtk18">return</span> <span class="mtk19">path</span><span class="mtk1">.</span><span class="mtk16">reverse</span><span class="bracket-highlighting-3">(</span><span class="bracket-highlighting-3">)</span><span class="mtk1">;</span>',
                    '&tab2;<span class="bracket-highlighting-2">}</span>',
                    '&tab2;<span class="mtk18">for</span> <span class="bracket-highlighting-2">(</span><span class="mtk6">const</span> <span class="bracket-highlighting-3">[</span><span class="mtk19">dx</span><span class="mtk1">,</span> <span class="mtk19">dy</span><span class="bracket-highlighting-3">]</span> <span class="mtk6">of</span> <span class="mtk19">directions</span><span class="bracket-highlighting-2">)</span> <span class="bracket-highlighting-2">{</span>',
                    '&tab3;<span class="mtk6">const</span> <span class="mtk19">nx</span> <span class="mtk3">=</span> <span class="mtk19">x</span> <span class="mtk3">+</span> <span class="mtk19">dx</span><span class="mtk1">;</span>',
                    '&tab3;<span class="mtk6">const</span> <span class="mtk19">ny</span> <span class="mtk3">=</span> <span class="mtk19">y</span> <span class="mtk3">+</span> <span class="mtk19">dy</span><span class="mtk1">;</span>',
                    '&tab3;<span class="mtk18">if</span> <span class="bracket-highlighting-3">(</span><span class="mtk19">nx</span> <span class="mtk3">&gt;=</span> <span class="mtk7">0</span> <span class="mtk3">&amp;&amp;</span> <span class="mtk19">nx</span> <span class="mtk3">&lt;</span> <span class="mtk19">rows</span> <span class="mtk3">&amp;&amp;</span> <span class="mtk19">ny</span> <span class="mtk3">&gt;=</span> <span class="mtk7">0</span> <span class="mtk3">&amp;&amp;</span> <span class="mtk19">ny</span> <span class="mtk3">&lt;</span> <span class="mtk19">cols</span> <span class="mtk3">&amp;&amp;</span> <span class="mtk10">matrix</span><span class="bracket-highlighting-4">[</span><span class="mtk19">nx</span><span class="bracket-highlighting-4">]</span><span class="bracket-highlighting-4">[</span><span class="mtk19">ny</span><span class="bracket-highlighting-4">]</span> <span class="mtk3">==</span> <span class="mtk7">0</span> <span class="mtk3">&amp;&amp;</span> <span class="mtk3">!</span><span class="mtk19">visited</span><span class="bracket-highlighting-4">[</span><span class="mtk19">nx</span><span class="bracket-highlighting-4">]</span><span class="bracket-highlighting-4">[</span><span class="mtk19">ny</span><span class="bracket-highlighting-4">]</span><span class="bracket-highlighting-3">)</span> <span class="bracket-highlighting-3">{</span>',
                    '&tab4;<span class="mtk19">queue</span><span class="mtk1">.</span><span class="mtk16">push</span><span class="bracket-highlighting-4">(</span><span class="bracket-highlighting-5">[</span><span class="mtk19">nx</span><span class="mtk1">,</span> <span class="mtk19">ny</span><span class="bracket-highlighting-5">]</span><span class="bracket-highlighting-4">)</span><span class="mtk1">;</span>',
                    '&tab4;<span class="mtk19">visited</span><span class="bracket-highlighting-4">[</span><span class="mtk19">nx</span><span class="bracket-highlighting-4">]</span><span class="bracket-highlighting-4">[</span><span class="mtk19">ny</span><span class="bracket-highlighting-4">]</span> <span class="mtk3">=</span> <span class="mtk6">true</span><span class="mtk1">;</span>',
                    '&tab4;<span class="mtk19">cameFrom</span><span class="bracket-highlighting-4">[</span><span class="mtk19">nx</span><span class="bracket-highlighting-4">]</span><span class="bracket-highlighting-4">[</span><span class="mtk19">ny</span><span class="bracket-highlighting-4">]</span> <span class="mtk3">=</span> <span class="bracket-highlighting-4">[</span><span class="mtk19">x</span><span class="mtk1">,</span> <span class="mtk19">y</span><span class="bracket-highlighting-4">]</span><span class="mtk1">;</span>',
                    '&tab3;<span class="bracket-highlighting-3">}</span>',
                    '&tab2;<span class="bracket-highlighting-2">}</span>',
                    '&tab1;<span class="bracket-highlighting-1">}</span>',
                    '&tab1;<span class="mtk18">return</span> <span class="bracket-highlighting-1">[</span><span class="bracket-highlighting-1">]</span><span class="mtk1">;</span>',
                    '<span class="bracket-highlighting-0">}</span>',
                ],
            },
            complexity: ALGOSCENE.createComplexity('V + E', 'V + E', 'V + E', 'V'),
        },
    },
    {
        bfs: 'mtk16|bfs',
        dfs: 'mtk16|dfs',
        x: 'mtk10|x',
        y: 'mtk10|y',
        xjs: 'mtk19|x',
        yjs: 'mtk19|y',
        findPath: 'mtk16|findPath',
        vector: 'mtk17|vector',
        stackjs: 'mtk19|stack',
    }
);

const ROWS = 14,
    COLS = 25;
let [STARTX, STARTY] = [0, 0],
    [ENDX, ENDY] = [ROWS - 1, COLS - 1],
    MATRIX = [
        [0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1],
        [0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1],
        [0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
        [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
        [0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
        [1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
    ];

const setFrameHTML = () => {
    let t = '';
    for (let i = 0; i < COLS; i++) t += '<span></span>';
    let html = '';
    for (let i = 0; i < ROWS; i++) html += `<div>${t}</div>`;

    ALGOSCENE.frameHTML = html;
};
setFrameHTML();

ALGOSCENE.customInput.isEditOnFrame();

ALGOSCENE.customInput.onApply = () => {
    MATRIX = matrix.getVALUE();
    [STARTX, STARTY] = matrix.getSTART();
    [ENDX, ENDY] = matrix.getEND();
};

const matrix = new (class {
    constructor() {
        ALGOSCENE.resetFrame.setAction('resetMatrix', () => this.reset());
    }
    regetElm() {
        this.rows = ALGOSCENE.frameElm.childNodes;
        this.rows.forEach((row, i) =>
            row.childNodes.forEach((elm, j) => {
                elm.x = i;
                elm.y = j;
                elm.value = MATRIX[i][j];
                if (elm.value == 1) elm.classList.add('value-1');
                elm.onclick = function () {
                    if (this.value == 0) {
                        this.value = 1;
                        this.classList.add('value-1');
                    } else {
                        this.value = 0;
                        this.classList.remove('value-1');
                    }
                };
                elm.ondblclick = function () {
                    this.value = 0;
                    if (this.className == 'start') {
                        ALGOSCENE.frameElm.querySelector('.end').className = 'start';
                        this.className = 'end';
                    } else if (this.className == 'end') {
                        ALGOSCENE.frameElm.querySelector('.start').className = 'end';
                        this.className = 'start';
                    } else {
                        ALGOSCENE.frameElm.querySelector('.start').className = '';
                        this.className = 'start';
                    }
                };
            })
        );
        this.reset();
    }
    reset() {
        this.get(STARTX, STARTY).className = 'start';
        this.get(ENDX, ENDY).className = 'end';
        ALGOSCENE.frameElm.querySelectorAll('span').forEach((e) => (e.innerHTML = ''));
        ALGOSCENE.frameElm.querySelectorAll('span.path').forEach((e) => e.classList.remove('path'));
        this.rows.forEach((row) => row.classList.remove('non'));
    }
    get(x, y) {
        return this.rows[x]?.childNodes[y];
    }
    getVALUE() {
        return Array.from(this.rows).map((row) =>
            Array.from(row.childNodes).map((elm) => elm.value)
        );
    }
    getSTART() {
        const {x, y} = ALGOSCENE.frameElm.querySelector('.start');
        return [x, y];
    }
    getEND() {
        const {x, y} = ALGOSCENE.frameElm.querySelector('.end');
        return [x, y];
    }
    async end() {
        await ALGOSCENE.delay();
    }
    async non() {
        await ALGOSCENE.delay();
        ALGOSCENE.frameElm.querySelectorAll('span').forEach((e) => (e.innerHTML = ''));
        this.rows.forEach((row) => row.classList.add('non'));
        await ALGOSCENE.delay();
    }
    async visit(x, y) {
        this.get(x, y).innerHTML += '<i></i>';
        await ALGOSCENE.delay();
    }
    async path(x, y) {
        this.get(x, y).innerHTML = '';
        this.get(x, y).classList.add('path');
        await ALGOSCENE.delay();
    }
})();

ALGOSCENE.setAction('bfs', () => {
    matrix.regetElm();
    ALGOSCENE.playPauseBtn.click = async () => {
        const visited = Array.from({length: ROWS}, () => Array(COLS).fill(false));
        const cameFrom = Array.from({length: ROWS}, () => Array(COLS).fill(null));
        const queue = [[STARTX, STARTY]];
        visited[STARTX][STARTY] = true;
        await matrix.visit(STARTX, STARTY);
        const directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];
        while (queue.length > 0) {
            const [x, y] = queue.shift();
            if (x == ENDX && y == ENDY) {
                const path = [];
                for (let at = [ENDX, ENDY]; at; at = cameFrom[at[0]][at[1]]) {
                    path.push(at);
                    await matrix.path(at[0], at[1]);
                }
                await matrix.end();
                return;
            }
            for (const [dx, dy] of directions) {
                const nx = x + dx;
                const ny = y + dy;
                if (
                    nx >= 0 &&
                    nx < ROWS &&
                    ny >= 0 &&
                    ny < COLS &&
                    matrix.get(nx, ny)?.value == 0 &&
                    !visited[nx][ny]
                ) {
                    queue.push([nx, ny]);
                    visited[nx][ny] = true;
                    await matrix.visit(nx, ny);
                    cameFrom[nx][ny] = [x, y];
                }
            }
        }
        await matrix.non();
        await matrix.end();
    };
});

ALGOSCENE.setAction('dfs', () => {
    matrix.regetElm();
    async function dfs(x, y, path, visited, found) {
        if (found[0]) return;
        const directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];
        visited[x][y] = true;
        await matrix.visit(x, y);
        path.push([x, y]);
        for (let i = 0; i < 4; ++i) {
            const nx = x + directions[i][0];
            const ny = y + directions[i][1];
            if (
                nx >= 0 &&
                ny >= 0 &&
                nx < ROWS &&
                ny < COLS &&
                matrix.get(nx, ny).value == 0 &&
                !visited[nx][ny]
            ) {
                await dfs(nx, ny, path, visited, found);
                if (!found[0]) await matrix.visit(nx, ny);
            }
        }
        if (path[path.length - 1][0] != ENDX || path[path.length - 1][1] != ENDY) path.pop();
        else found[0] = true;
    }
    ALGOSCENE.playPauseBtn.click = async () => {
        const visited = Array.from({length: ROWS}, () => Array(COLS).fill(false));
        const path = [];
        const found = [false];
        await dfs(STARTX, STARTY, path, visited, found);
        if (found[0]) {
            for (const [x, y] of path) await matrix.path(x, y);
            await matrix.end();
            return;
        }
        await matrix.non();
        await matrix.end();
    };
});
