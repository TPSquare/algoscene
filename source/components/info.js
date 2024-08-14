import fs from 'fs';

export default async (lang, closeText) => {
    const data = JSON.parse(await fs.readFileSync(`./source/data/texts/${lang}/information.json`));

    const lineHTML = '<div class="line"></div>';
    const spaceHTML = '<div class="space"></div>';
    const newParagraph = (content) => {
        content = content.replaceAll('Google Form', `<a href="https://forms.gle/8MzgkJXQwReifetc7" target="_blank">Google Form</a>`)
        switch (lang) {
            case 'vi':
                return `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${content}</p>`;
            case 'en':
                return `<p>${content}</p>`;
            default:
                console.warn('Unknown language: ' + lang);
        }
    };

    const create = (keyName, content) =>
        `<fieldset class="${keyName}">` +
        `<legend>${data.keys[keyName]}</legend>` +
        '<div class="logo"><img src="/svg/logo-with-name.svg" alt="logo"></div>' +
        content +
        '</fieldset>';
        
    return (
        '<div id="info">' +
        `<button type="button" class="close" title="${closeText}">&times;</button>` +
        create('about', data.about.map((e) => newParagraph(e)).join(spaceHTML)) +
        create('team', '<ul>' + data.team.map((e) => `<li>${e}</li>`).join('') + '</ul>') +
        create('terms-of-use', data['terms-of-use'].map((e) => newParagraph(e)).join(spaceHTML)) +
        create('privacy-policy', data['privacy-policy'].map((e) => newParagraph(e)).join(spaceHTML)) +
        '</div>'
    );
};
