export default class {
    constructor(app, fs) {
        app.get('/', (req, res) => res.render('redirect'));
        app.languages.forEach((lang) => {
            fs.readFile(`./public/languages/${lang}/index.json`, (err, dt) => {
                const data = JSON.parse(dt);
                app.get(`/${lang}`, (req, res) =>
                    res.render('home', {
                        lang,
                        title: data.learningAlgorithms,
                        description: data.above,
                    })
                );
            });
        });
    }
}
