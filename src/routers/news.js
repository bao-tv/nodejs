const express = require('express');
const router = express.Router();

const newsController = require('../resource/app/controllers/NewsController');

// console.log('NewsController: ',NewsController);

router.get( '/:slug', newsController.show);
router.get('/', newsController.index);

module.exports = router;