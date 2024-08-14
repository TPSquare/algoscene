document.body
    .querySelectorAll('footer button')
    .forEach((e) => (e.onclick = () => document.body.popup.info.handle(e.className)));
