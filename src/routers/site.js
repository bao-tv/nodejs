const express = require('express');
const router = express.Router();

const siteController = require('../resource/app/controllers/SiteController');

router.get('/search', siteController.search);
router.get('/', siteController.index);

module.exports = router;