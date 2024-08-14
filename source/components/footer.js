import fs from 'fs';
export default async (lang, version) => {
    const data = JSON.parse(
        await fs.readFileSync(`./source/data/texts/${lang}/information.json`)
    ).keys;

    const buttons = Object.keys(data).map((e) => `<button type="button" class="${e}" title="${data[e]}">${data[e]}</button>`).join('');
    
    return `<footer id="footer"><span>© 2024 TPSquare v${version}</span> | <span>${buttons}</span></footer>`;
};
