const selectKey = 's';

export default class {
    constructor(app, fs) {
        this.config = {
            a: ['sorting', 'searching', 'pathfinding'],
            ds: ['segment-tree'],
        };

        this.getData(app, fs);
    }
    async getData(app, fs) {
        this.data = {};
        for (const lang of app.languages) {
            this.data[lang] = {};
            for (const type in this.config) {
                this.data[lang][type] = {};
                for (const key of this.config[type]) {
                    const path = `./public/languages/${lang}/${key}.${type}.json`;
                    const fileData = await fs.readFileSync(path);
                    this.data[lang][type][key] = JSON.parse(fileData);
                }
            }
        }
        this.setHomeData(app);
        this.render(app);
    }
    setHomeData(app) {
        app.languages.forEach((lang) => {
            const searchData = [],
                bottomData = [];
            Object.keys(this.config).forEach((type) =>
                this.config[type].forEach((key) => {
                    searchData.push(
                        [this.data[lang][type][key].NAME, `${type}/${key}`],
                        ...Object.keys(this.data[lang][type][key].list).map((e) => [
                            this.data[lang][type][key].list[e].name,
                            `${type}/${key}?${selectKey}=${e}`,
                        ])
                    );
                    bottomData.push([key, type, this.data[lang][type][key].NAME]);
                })
            );
            app.get(`/${lang}/home-data-search`, (req, res) => res.json(searchData));
            app.get(`/${lang}/home-data-bottom`, (req, res) => res.json(bottomData));
        });
    }
    render(app) {
        app.languages.forEach((lang) =>
            Object.keys(this.config).forEach((type) => {
                this.config[type].forEach((key) => {
                    const data = this.data[lang][type][key];
                    app.get(`/${lang}/${type}/${key}`, (req, res) =>
                        res.render('common', {
                            title: data.NAME,
                            description: Object.keys(data.list)
                                .map((e) => data.list[e].name)
                                .join(', '),
                            ...{key, lang, type},
                        })
                    );
                });
                app.get(`/${lang}/${type}`, (req, res) => res.render('redirect'));
            })
        );
    }
}
