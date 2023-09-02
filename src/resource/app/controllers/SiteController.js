const Course = require('../models/Course');
const {mutipleMogooseToObject} = require('../../../util/mongoose');

class SiteController {
    // [GET] /news
    async index(req, res) {       
        try {
            const course = await Course.find({});
            res.render('home', {course : mutipleMogooseToObject(course)});
        } catch (error) {
            console.log("error");
        }
    }
    search(     req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;