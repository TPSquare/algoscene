import express from 'express';
const app = express();

import dotenv from 'dotenv';
dotenv.config();

import {fileURLToPath} from 'url';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.joinPath = (p) => path.join(__dirname, p);

app.use(express.static(app.joinPath('/public')));

app.set('view engine', 'ejs');
app.set('views', app.joinPath('/source/ejs'));

import fs from 'fs';
app.get('/version', (req, res) => {
    fs.readFile('package.json', (err, dt) => {
        const data = JSON.parse(dt);
        res.json(data.version);
    });
});

app.get('/localdata-key', (req, res) => res.json(process.env.LOCALDATA_KEY));

app.languages = ['vi', 'en'];

import HomePage from './source/homepage.js';
new HomePage(app);

import APages from './source/apages.js';
new APages(app);

const port = process.env.PORT || 8002;
app.listen(port, () => console.log(`   =====   http://localhost:${port}   =====`));
