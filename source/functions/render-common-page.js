import fs from 'fs';
export default function (type, list) {
    this.get(`/list${type.toUpperCase()}`, (req, res) => res.json(list));
    this.languages.forEach((lang) => {
        list.forEach((key) => {
            fs.readFile(`./public/languages/${lang}/${key}.${type}.json`, (err, dt) => {
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
                this.get(`/${lang}/${type}/${key}`, (req, res) =>
                    res.render('common', {
                        title: data.NAME,
                        description,
                        key,
                        lang,
                        type: type,
                    })
                );
                this.get(`/${lang}/${type}`, (req, res) => res.render('redirect'));
            });
        });
    });
}