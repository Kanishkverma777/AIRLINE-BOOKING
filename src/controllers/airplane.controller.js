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

module.exports = {
    createAirplane
}