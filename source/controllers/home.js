import infoComponent from '../components/info.js';
import langBtnComponent from '../components/lang-btn.js';
import footerComponent from '../components/footer.js';
export default {
    async init(app, fs, contentData) {
        app.get('/', (req, res) => res.render('redirect'));

        this.render(app, fs, contentData);
    },
    async render(app, fs, contentData) {
        for (const lang of app.languages) {
            const textData = Object.assign(
                JSON.parse(await fs.readFileSync(`./source/data/texts/${lang}/home.json`)),
                JSON.parse(await fs.readFileSync(`./source/data/texts/${lang}/general.json`))
            );
            const getAContentTag = (e) =>
                `<a href="/${lang}/${e[1]}/${e[0]}" title="${e[2]}">` +
                `<img src="/jpg/${e[0]}.${e[1]}.jpg" alt="${e[2]}">` +
                `<strong>${e[2]}</strong>` +
                `</a>`;
            const contentHTML = contentData[lang].map(getAContentTag).join('');
            app.get(`/${lang}`, async (req, res) =>
                res.render('home', {
                    lang,
                    description: textData.aboveText,
                    ...textData,
                    contentHTML,
                    infoHTML: await infoComponent(lang, textData.closeText),
                    langBtnHTML: langBtnComponent(lang, app.languages, textData.languageText),
                    footerHTML: await footerComponent(lang, app.version)
                })
            );
        }
    }
};
