const Course = require('../models/Course');
const {mutipleMogooseToObject} = require('../../../util/mongoose');

class CourseController {
    // [GET] /me/stored/courses
    async storeCourese(req, res) {       
        try {
            const course = await Course.find().exec();
            res.render('me/store-courese', {course : mutipleMogooseToObject(course)});
        } catch (error) {
            console.log("error");
        }
    }
    // [GET] /me/trash/courses
    async trashCourese(req, res) {       
        try {
            const courseDelete = await Course.findDeleted().exec();
            res.render('me/trash-courses', {courseDelete : mutipleMogooseToObject(courseDelete.filter(doc => doc.deleted))})
        } catch (error) {
            console.log("error trash");
        }
    }
}

module.exports = new CourseController;