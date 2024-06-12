export default class {
    constructor(app) {
        app.get('/', (req, res) => res.render('home', {}));
    }
}
