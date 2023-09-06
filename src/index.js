const path = require('path');
const express = require('express');
const methodOverride = require('method-override')
const morgan = require('morgan');
const handlebars = require('express-handlebars');

const route = require('./routers');
const db = require('./config/BD');

// connect to DB
db.connect();

const app = express();
const port = 3003;

app.use(
    express.urlencoded({
        extended: true
    })
);
app.use(express.json());


//setup method-override
app.use(methodOverride('_method'));

//HTTP logger
// app.use(morgan('combined'));


//Template engine
//View engine setup
app.engine('.hbs', handlebars.engine({ 
    extname: '.hbs' ,
    helpers: {
        sum : (a, b) => a + b,
    }
}));

//forder public
app.use('/public',express.static(path.join(__dirname, '/public')));
//bootstrap
app.use('/scripts', express.static(path.join(__dirname, '../node_modules/bootstrap/dist')));
app.use('/scripts-icon', express.static(path.join(__dirname, '../node_modules/bootstrap-icons/font')));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource', 'views'));

// route init
route(app);

app.listen(port, () => {
    console.log(`App listening on at http://localhost:${port}`);
});
