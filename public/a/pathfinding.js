'use strict';

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
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0]
    ];

ALGOSCENE.getDefaultHTMLFrame = () => {
    let t = '';
    for (let i = 0; i < COLS; i++) t += '<span></span>';
    let html = '';
    for (let i = 0; i < ROWS; i++) html += `<div>${t}</div>`;
    return html;
};

ALGOSCENE.customInput.isEditOnFrame();
ALGOSCENE.customInput.applyValue = () => {
    MATRIX = matrix.getVALUE();
    [STARTX, STARTY] = matrix.getSTART();
    [ENDX, ENDY] = matrix.getEND();
};

const matrix = new (class {
    regetElm() {
        ALGOSCENE.resetFrame.setAction('resetMatrix', () => this.reset());
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
            [0, 1]
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
            [0, 1]
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
