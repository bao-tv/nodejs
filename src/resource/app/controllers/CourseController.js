const Course = require('../models/Course');
const {mongooseToObject} = require('../../../util/mongoose');

class CourseController {
    // [GET] /courses/:slug
    async show(req, res) {       
        try {
            const courseDetail = await Course.findOne({slug: req.params.slug}).exec();
            // res.render('home', {course : mutipleMogooseToObject(courseDetail)});
            res.render('courses/show', {courseDetail: mongooseToObject(courseDetail)});
            // console.log(courseDetail);
        } catch (error) {
            console.log("error");
        }
    }
    // [GET] /courses/create
    create(req, res) {
        res.send('create course')
    }
}

module.exports = new CourseController;