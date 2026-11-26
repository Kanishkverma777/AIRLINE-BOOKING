const { error } = require('winston');
const { AirplaneService } = require('../services');
const { StatusCodes } = require('http-status-codes');
const { successResponse , errorResponse } = require ('../utils/common');

/**
 * POST : /airplanes  
 * req-body : { model_no : 'airbus a320', capacity : 180 }
 */

async function createAirplane(req, res) {

    try{

        const airplane = await AirplaneService.createAirplane({
            model_no : req.body.model_no,
            capacity : req.body.capacity
        });
        successResponse.data = airplane;
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
 * GET : /airplanes
 */

async function getAllAirplanes(req, res) {

    try{ 

        const airplanes = await AirplaneService.getAllAirplanes();
        successResponse.data = airplanes;
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
 * GET : /airplanes/:id
 * req-params : { id : 1 }
 */

async function getAirplane(req, res) {

    try{ 

        const airplanes = await AirplaneService.getAirplane(req.params.id);
        successResponse.data = airplanes;
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
 * DELETE : /airplanes/:id
 * req-params : { id : 1 }
 */

async function destroyAirplane(req, res) {

    try{ 

        const response = await AirplaneService.destroyAirplane(req.params.id);
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
 * PATCH : /airplanes/:id
 * req-params : { id : 1 }
 * req-body : { model_no : 'airbus a320', capacity : 180 }
 */

async function updateAirplane(req, res) {

    try{ 

        const response = await AirplaneService.updateAirplane( 
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
    createAirplane,
    getAllAirplanes,
    getAirplane,
    updateAirplane,
    destroyAirplane
}