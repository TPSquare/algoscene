function dfs(matrix, startX, startY, endX, endY) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const visited = Array.from({length: rows}, () => Array(cols).fill(false));
    const stack = [[startX, startY]];
    const paths = [[[startX, startY]]];
    visited[startX][startY] = true;
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    while (stack.length > 0) {
        const [x, y] = stack.pop();
        const currentPath = paths.pop();
        if (x == endX && y == endY) return currentPath;
        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;
            if (nx >= 0 && ny >= 0 && nx < rows && ny < cols && matrix[nx][ny] == 0 && !visited[nx][ny]) {
                visited[nx][ny] = true;
                stack.push([nx, ny]);
                paths.push(currentPath.concat([[nx, ny]]));
            }
        }
    }
    return [];
}

// Test the function
const matrix = [
    [0, 1, 0, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
];

const STARTX = 0,
    STARTY = 0,
    endX = 4,
    endY = 4;
const path = dfs(matrix, STARTX, STARTY, endX, endY);

console.log(path.map((p) => `(${p[0]}, ${p[1]})`).join(' '));
