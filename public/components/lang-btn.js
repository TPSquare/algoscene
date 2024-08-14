document.body.querySelector('#lang-btn').onclick = function () {
    let goTo;
    if (this.innerHTML == 'en') goTo = 'vi';
    else goTo = 'en';
    window.location.href = this.baseURI.replace(`/${document.LANG}`, `/${goTo}`);
};
