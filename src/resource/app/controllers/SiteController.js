const Course = require('../models/Course')

class SiteController {
    // [GET] /news
     index(      req, res) {
        // try {
        //     await Course.find({}, function(err, courses) {
        //                     if(!err) res.json(courses);
        //     res.status(400).json({err: 'ERROR!!!'})
        //     });
        // } catch (error) {
        //     console.log("error");
        // }
            // res.render('home')(;
        Course.find({} , function(err, courses) {
            if(!err) res.json(courses) 
            else res.status(400).json({err: 'ERROR!!!'})
        })
        
    }

    search(     req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;