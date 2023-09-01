const express = require('express');
const router = express.Router();

const newsController = require('../resource/app/controllers/NewsController');

// console.log('NewsController: ',NewsController);

router.use( '/:slug', newsController.show);
router.use('/', newsController.index);

module.exports = router;