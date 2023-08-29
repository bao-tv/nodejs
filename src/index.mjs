import express from 'express';
import morgan from 'morgan';
import { engine } from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3001;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// route
import route from './resource/routers/index.js';
// route init
route(app);
//forder public
app.use(express.static(path.join(__dirname, 'public')));
//HTTP logger
// app.use(morgan('combined'));
//Template engine
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));

// bootstrap
app.use('/', express.static('./node_modules/bootstrap/dist/'));

app.listen(port, () => {
            console.log(`Example app listening on at http://localhost:${port}`);
});
