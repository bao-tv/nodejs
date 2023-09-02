const newRouter =require('./news.js');
const courseRouter =require('./courses');
const siteRouter = require('./site')

function route (app) {
    
    app.use('/news',newRouter);
    app.use('/courses',courseRouter);
    // app.use('/search', siteRouter);
    app.use('/', siteRouter);
    
}

module.exports = route;