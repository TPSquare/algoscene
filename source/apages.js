import fs from 'fs';
export default class {
    constructor(app) {
        this.algorithms = ['sorting', 'searching', 'pathfinding'];

        app.get('/listA', (req, res) => res.json(this.algorithms));

        app.languages.forEach((lang) => {
            this.algorithms.forEach((key) => {
                fs.readFile(`./public/languages/${lang}/${key}.a.json`, (err, dt) => {
                    const data = JSON.parse(dt);
                    const list = Object.keys(data);
                    list.splice(
                        list.findIndex((e) => e == '_'),
                        1
                    );
                    list.splice(
                        list.findIndex((e) => e == 'NAME'),
                        1
                    );
                    const description = list.map((e) => data[e].name).join(', ');
                    app.get(`/${lang}/a/${key}`, (req, res) =>
                        res.render('a', {
                            title: data.NAME,
                            description,
                            key,
                            lang,
                        })
                    );
                    app.get(`/${lang}/a`, (req, res) => res.render('redirect'));
                });
            });
        });
    }
}
