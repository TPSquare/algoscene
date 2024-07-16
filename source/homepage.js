import infoComponent from './components/info.js';
export default {
    async init(app, fs, contentData) {
        app.get('/', (req, res) => res.render('redirect'));

        this.render(app, fs, contentData);
    },
    async render(app, fs, contentData) {
        for (const lang of app.languages) {
            const textData = Object.assign(
                JSON.parse(await fs.readFileSync(`./source/data/texts/${lang}/index.json`)),
                JSON.parse(await fs.readFileSync(`./source/data/texts/${lang}/general.json`))
            );
            const getAContentTag = (e) =>
                `<a href="/${lang}/${e[1]}/${e[0]}" title="${e[2]}">` +
                `<img src="/jpg/${e[0]}.${e[1]}.jpg" alt="">` +
                `<strong>${e[2]}</strong>` +
                `</a>`;
            const contentHTML = contentData[lang].map(getAContentTag).join('');
            app.get(`/${lang}`, (req, res) =>
                res.render('home', {
                    lang,
                    title: textData.learning___,
                    description: textData.aboveText,
                    ...textData,
                    version: app.version,
                    contentHTML,
                    infoHTML: infoComponent(lang, textData, app.version),
                })
            );
        }
    },
};
