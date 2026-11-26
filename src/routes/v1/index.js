const express = require('express');
const { infoController } = require('../../controllers');
const AirplaneRoute = require('./airplane.route');
const CityRoute = require('./city.route');

const router = express.Router();

router.get('/info', infoController.info);
router.use('/airplanes', AirplaneRoute);
router.use('/cities', CityRoute);


module.exports = router;