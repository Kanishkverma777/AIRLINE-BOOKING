const express = require('express');
const router = express.Router();
const { AirplaneController} = require('../../controllers');
const { AirplaneValidate} = require('../../middleware')

/**
 * api : /api/v1/airplane
 * method : POST
 * access : PUBLIC
 * description : create a new airplane
 */

router.post('/', AirplaneValidate.validateCreateRequest, AirplaneController.createAirplane);

module.exports = router;