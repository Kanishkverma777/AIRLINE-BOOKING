const express = require('express');
const { infoController } = require('../../controllers');
const AirplaneRoute = require('./airplane.route');

const router = express.Router();

router.get('/info', infoController.info);
router.use('/airplane', AirplaneRoute);


module.exports = router;