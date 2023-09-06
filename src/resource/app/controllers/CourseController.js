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
        res.render('courses/create')
    }
    // [POST] /courses/store
    async store(req, res, next) {
        const formData = req.body;
        formData.image = `http://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`
        try {
            const data = await Course.create(formData);
            res.redirect('/')
        } catch (error) {
            console.log(error);
        }
    }

    // [GET] /courses/:id/edit
    async edit(req, res) {
        try {
            const courseEdit = await Course.findById(req.params.id).exec();
            res.render('courses/edit', {courseEdit: mongooseToObject(courseEdit)});
        } catch (error) {
            console.log("error");
        }
    }
    // [PUT] /courses/:id
    async update(req, res) {
        try {
            const result = await Course.updateOne({ _id: req.params.id }, req.body);
            res.redirect('/me/stored/courses');
        } catch (error) {
            console.log("error");
        }
    }

    // [DELETE] /courses/:id
    async delete(req, res) {
        try {
            const result = await Course.delete({ _id: req.params.id });
            res.redirect('back');
        } catch (error) {
            console.log("error");
        }
    }

      // [DESTROY] /courses/:id/destroy
      async destroy(req, res) {
        try {
            const result = await Course.deleteOne({ _id: req.params.id });
            res.redirect('back');
        } catch (error) {
            console.log("error");
        }
    }

     // [PATCH] /courses/:id/restore
     async restore(req, res) {
        try {
            await Course.restore({ _id: req.params.id });
            res.redirect('back');
        } catch (error) {
            console.log("error");
        }
    }
    
}

module.exports = new CourseController;