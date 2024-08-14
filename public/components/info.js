document.body.popup.info = document.body.querySelector('#info').combine({
    handle: function (key) {
        if (this.classList.contains('show')) this.classList.remove('show');
        else {
            this.querySelector('.show')?.classList?.remove('show');
            this.querySelector('.' + key).classList.add('show');
            this.classList.add('show');
        }
        document.body.popup.overlay.handle();
    }
})

document.body.popup.info.querySelector('.close').onclick = () => document.body.popup.info.handle();