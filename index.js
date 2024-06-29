import express from 'express';
const app = express();

import {fileURLToPath} from 'url';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.joinPath = (p) => path.join(__dirname, p);

app.use(express.static(app.joinPath('/public')));

const port = 11608;
app.listen(port, () => console.log(`   =====   http://localhost:${port}   =====`));
