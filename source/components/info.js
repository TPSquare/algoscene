export default (lang, data, version) => {
    const lineHTML = '<div class="line"></div>';
    const newParagraph = (content) => {
        switch (lang) {
            case 'vi':
                return `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${content}</p>`;
            case 'en':
                return `<p>${content}</p>`;
            default:
                console.warn('Unknown language: ' + lang);
        }
    };
    return (
        '<div id="info">' +
        `<button type="button" class="close" title="${data.closeText}">&times;</button>` +
        '<fieldset>' +
        `<legend>${data.infoText}</legend>` +
        '<div class="logo"><img src="/svg/logo-with-name.svg" alt="logo"></div>' +
        newParagraph(data.infoTexts[0]) +
        newParagraph(data.infoTexts[1]) +
        lineHTML +
        newParagraph(data.infoTexts[2]) +
        `<ul class="contact-box">` +
        `<li class="email"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg><a href="mailto:tps201cn@gmail.com">tps201cn@gmail.com</a></li>` +
        `<li class="form"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"/></svg><a href="https://forms.gle/3AuzDd1ELquCPyWy8" target="_blank">${data.googleFormsText}</a></li>` +
        `</ul>` +
        lineHTML +
        newParagraph(data.developmentTeamText + ':') +
        `<ul class="development-team">` +
        `<li>TPSquare - ${data.leadDeveloperText}</li>` +
        `<li>Hbat - ${data.graphicDesignerText}</li>` +
        `</ul>` +
        lineHTML +
        `<div class="footer"><span>© ${data.copyrightText} TPSquare</span><span>${data.versionText}: ${version}</span></div>` +
        '</fieldset>' +
        '</div>'
    );
};
