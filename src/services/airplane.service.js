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

module.exports = {
    createAirplane,
    getAllAirplanes
}