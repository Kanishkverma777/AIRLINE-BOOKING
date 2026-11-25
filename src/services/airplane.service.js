const { AirplaneRepository } = require('../repositories');
const AppError = require('../utils/errors/app.error');
const airplaneRepository = new AirplaneRepository();
const { StatusCodes } = require('http-status-codes');

// To create a new airplane object in the database

async function createAirplane(data) {

    try {
        const airplane = await airplaneRepository.create(data);
        return airplane;

    } catch (error) {

        if (error.name == 'SequelizeValidationError') {

            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });

            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        
        throw new AppError('Cannnot create a new airplane object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

// To get all airplanes object from the database

async function getAllAirplanes() {

    try {    
        
        const arirplanes = await airplaneRepository.getAll();
        return arirplanes;

    }catch(error) {
        throw new AppError('Cannnot fetch all airplanes', StatusCodes.INTERNAL_SERVER_ERROR);
    }

} 

// To get a single airplane object from the database

async function getAirplane(id) {

    try {    
        
        const arirplanes = await airplaneRepository.get(id);
        return arirplanes;

    }catch(error) {
        if( error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The airplane you requested is not available', error.statusCode);
        }
        throw new AppError('Cannnot fetch all airplanes', StatusCodes.INTERNAL_SERVER_ERROR);
    }
    
} 

module.exports = {
    createAirplane,
    getAllAirplanes,
    getAirplane
}