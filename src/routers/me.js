const express = require('express');
const router = express.Router();

const meController = require('../resource/app/controllers/MeController');

router.get( '/stored/courses', meController.storeCourese);
router.get( '/trash/courses', meController.trashCourese);

module.exports = router;