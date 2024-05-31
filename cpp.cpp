#include <iostream>
#include <stack>
#include <vector>

using namespace std;

vector<pair<int, int>> dfs(vector<vector<int>>& matrix, int startX, int startY, int endX, int endY)
{
    int rows = matrix.size();
    int cols = matrix[0].size();
    vector<vector<bool>> visited(rows, vector<bool>(cols, false));
    stack<pair<int, int>> s;
    stack<vector<pair<int, int>>> paths;
    s.push({ startX, startY });
    paths.push({ { startX, startY } });
    visited[startX][startY] = true;
    int directions[4][2] = { { -1, 0 }, { 1, 0 }, { 0, -1 }, { 0, 1 } };
    while (!s.empty()) {
        pair<int, int> current = s.top();
        vector<pair<int, int>> currentPath = paths.top();
        s.pop();
        paths.pop();
        int x = current.first;
        int y = current.second;
        if (x == endX && y == endY)
            return currentPath;
        for (int i = 0; i < 4; ++i) {
            int nx = x + directions[i][0];
            int ny = y + directions[i][1];
            if (nx >= 0 && ny >= 0 && nx < rows && ny < cols && matrix[nx][ny] == 0 && !visited[nx][ny]) {
                visited[nx][ny] = true;
                s.push({ nx, ny });
                vector<pair<int, int>> newPath = currentPath;
                newPath.push_back({ nx, ny });
                paths.push(newPath);
            }
        }
    }
    return {};
}

int main()
{
    vector<vector<int>> matrix = {
        { 0, 1, 0, 0, 0 },
        { 0, 1, 0, 1, 0 },
        { 0, 0, 0, 1, 0 },
        { 0, 1, 1, 1, 0 },
        { 0, 0, 0, 0, 0 }
    };
    int startX = 0, startY = 0, endX = 4, endY = 4;
    vector<pair<int, int>> path = dfs(matrix, startX, startY, endX, endY);

    for (const auto& p : path) {
        cout << "(" << p.first << ", " << p.second << ") ";
    }

    return 0;
}
