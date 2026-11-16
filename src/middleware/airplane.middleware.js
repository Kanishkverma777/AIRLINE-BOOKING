const { StatusCodes } = require('http-status-codes');
const { errorResponse } = require('../utils/common'); 
const AppError = require('../utils/errors/app.error');

function validateCreateRequest(req, res, next) {
    if( !req.body.model_no ){
        errorResponse.message = 'Something went wrong while creating the airplane';
        errorResponse.error = new AppError(['model_no not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(errorResponse);
    }
    next();
}

module.exports = {
    validateCreateRequest
} 