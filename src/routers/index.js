const newRouter =require('./news.js');
const siteRouter = require('./site')

function route (app) {
    
        app.use('/news',newRouter);
    // app.use('/search', siteRouter);
    app.use('/', siteRouter);
    
}

module.exports = route;