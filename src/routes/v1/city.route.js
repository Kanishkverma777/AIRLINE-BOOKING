const express = require('express');
const router = express.Router();
const { CityController } = require('../../controllers');
const { CityMiddleware } = require('../../middleware')

/**
 * api : /api/v1/cities
 * method : POST
 * access : PUBLIC
 * description : create a new city
 */

router.post('/',CityMiddleware.validateCreateRequest, CityController.createCity);

/**
 * api : /api/v1/cities
 * method : GET
 * access : PUBLIC
 * description : get all cities
 */

router.get('/', CityController.getAllCities);

/**
 * api : /api/v1/cities/:id
 * method : GET
 * access : PUBLIC
 * description : get a city by id
 */

router.get('/:id', CityController.getCity);

/**
 * api : /api/v1/cities/:id
 * method : DELETE
 * access : PUBLIC
 * description : delete a city by id
 */

router.delete('/:id', CityController.destroyCity);

/**
 * api : /api/v1/cities/:id
 * method : PATCH
 * access : PUBLIC
 * description : update a city by id
 */

router.patch('/:id', CityController.updateCity);


module.exports = router;