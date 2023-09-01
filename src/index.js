const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');

const app = express();
const port = 3001;
// Use static folder
app.use(express.static(path.join(__dirname, 'public')));

// route
const route = require('./routers');

const db = require('./config/BD');

// connect to DB
db.connect();
// route init
route(app);


//forder public
app.use(express.static(path.join(__dirname, 'public')));
//HTTP logger
// app.use(morgan('combined'));

//Template engine
//View engine setup
app.set("view engine", 'handlebars');
app.engine('.hbs', handlebars.engine({ extname: '.hbs' }));
// app.engine('.hbs', engine({ extname: '.hbs' }));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));

// bootstrap
app.use('/', express.static('./node_modules/bootstrap/dist/'));

app.listen(port, () => {
    console.log(`Example app listening on at http://localhost:${port}`);
});
