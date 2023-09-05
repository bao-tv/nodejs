const express = require('express');
const router = express.Router();

const courseController = require('../resource/app/controllers/CourseController');

// console.log('courseController: ',courseController);
router.get( '/create', courseController.create);
router.post( '/store', courseController.store);
router.get( '/:id/edit', courseController.edit);
router.put( '/:id', courseController.update);
router.delete( '/:id', courseController.delete);
router.get( '/:slug', courseController.show);
// router.get('/', courseController.index);

module.exports = router;