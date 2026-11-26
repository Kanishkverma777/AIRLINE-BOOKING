const { StatusCodes } = require('http-status-codes');
const { errorResponse } = require('../utils/common'); 
const AppError = require('../utils/errors/app.error');

function validateCreateRequest(req, res, next) {
    if( !req.body.name || !req.body.state ){
        errorResponse.message = 'Something went wrong while creating the city';
        errorResponse.error = new AppError(['name or state not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(errorResponse);
    }
    next();
}

module.exports = {
    validateCreateRequest
}