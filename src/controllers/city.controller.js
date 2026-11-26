const { error } = require('winston');
const { CityService } = require('../services');
const { StatusCodes } = require('http-status-codes');
const { successResponse , errorResponse } = require ('../utils/common');

/**
 * POST : /cities  
 * req-body : { name : 'delhi', state : 'delhi', country : 'india' }
 */

async function createCity(req, res) {

    try{ 

        const city = await CityService.createCity({
            name : req.body.name,
            state : req.body.state,
            country : req.body.country
        });
        successResponse.data = city;

        return res
                .status(StatusCodes.CREATED)
                .json( successResponse );

    } catch(error){ 

        errorResponse.error = error;
        return res
                .status(error.statusCode)
                .json( errorResponse );
    }  
}

/**
 * GET : /cities
 */

async function getAllCities(req, res) {

    try{ 

        const cities = await CityService.getAllCities();
        successResponse.data = cities;
        return res
                .status(StatusCodes.OK)
                .json( successResponse );

    }catch(error){
        errorResponse.error = error;
        return res
                .status(error.statusCode)
                .json( errorResponse );
    }
}

/**
 * GET : /cities/:id
 * req-params : { id : 1 }
 */

async function getCity(req, res) {

    try{ 

        const city = await CityService.getCity(req.params.id);
        successResponse.data = city;
        return res
                .status(StatusCodes.OK)
                .json( successResponse );

    }catch(error){
        errorResponse.error = error;
        return res
                .status(error.statusCode)
                .json( errorResponse );
    }
}

/**
 * DELETE : /cities/:id
 * req-params : { id : 1 }
 */

async function destroyCity(req, res) {

    try{ 

        const response = await CityService.destroyCity(req.params.id);
        successResponse.data = response;
        return res
                .status(StatusCodes.OK)
                .json( successResponse );

    }catch(error){
        errorResponse.error = error;
        return res
                .status(error.statusCode)
                .json( errorResponse );
    }
}

/**
 * PATCH : /cities/:id
 * req-params : { id : 1 }
 * req-body : { name : 'delhi', state : 'delhi', country : 'india' }
 */

async function updateCity(req, res) {

    try{ 

        const response = await CityService.updateCity( 
            req.params.id , 
            req.body
        );
        successResponse.data = response;
        return res
                .status(StatusCodes.OK)
                .json( successResponse );

    }catch(error){
        errorResponse.error = error;
        return res
                .status(error.statusCode)
                .json( errorResponse );
    }
}

module.exports = {
    createCity,
    destroyCity,
    getCity,
    getAllCities,
    updateCity
}