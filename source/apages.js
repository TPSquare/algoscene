export default class {
    constructor(app) {
        this.algorithms = {
            sorting: {
                description: 'Depth-First Search (DFS), Breadth-First Search (BFS)',
            },
            searching: {
                description: 'Sequential Search, Binary Search',
            },
            pathfinding: {
                description: 'Bubble Sort, Selection Sort, Insertion Sort, Quick Sort',
            },
        };

        app.get('/listA', (req, res) => res.json(Object.keys(this.algorithms)));

        Object.keys(this.algorithms).forEach((key) =>
            app.get(`/a/${key}`, (req, res) =>
                res.render('a', {
                    title: key.charAt(0).toUpperCase() + key.substring(1),
                    description: this.algorithms[key].description,
                    key,
                })
            )
        );
    }
}
