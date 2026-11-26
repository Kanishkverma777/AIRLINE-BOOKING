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

/**
 * api : /api/v1/airplane
 * method : GET
 * access : PUBLIC
 * description : get all airplanes
 */

router.get('/', AirplaneController.getAllAirplanes);

/**
 * api : /api/v1/airplane/:id
 * method : GET
 * access : PUBLIC
 * description : get an airplane by id
 */

router.get('/:id', AirplaneController.getAirplane);

/**
 * api : /api/v1/airplane/:id
 * method : DELETE
 * access : PUBLIC
 * description : delete an airplane by id
 */

router.delete('/:id', AirplaneController.destroyAirplane);

/**
 * api : /api/v1/airplane/:id
 * method : PATCH
 * access : PUBLIC
 * description : update an airplane by id
 */

router.patch('/:id', AirplaneController.updateAirplane);

module.exports = router;