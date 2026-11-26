const { CityRepository } = require('../repositories');
const AppError = require('../utils/errors/app.error');
const cityRepository = new CityRepository();
const { StatusCodes } = require('http-status-codes');


// To create a new city object in the database

async function createCity(data) {

    try {
        const city = await cityRepository.create(data);
        return city;

    } catch (error) {

        if (error.name == 'SequelizeValidationError' || error.name == 'SequelizeUniqueConstraintError') {

            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });

            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        
        throw new AppError('Cannnot create a new city object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

// To get all cities object from the database

async function getAllCities() {

    try {    
        
        const cities = await cityRepository.getAll();
        return cities;

    }catch(error) {
        throw new AppError('Cannnot fetch all cities', StatusCodes.INTERNAL_SERVER_ERROR);
    }

} 

// To get a single city object from the database

async function getCity(id) {

    try {    
        
        const city = await cityRepository.get(id);
        return city ;

    }catch(error) {
        if( error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The city you requested is not available', error.statusCode);
        }
        throw new AppError('Cannnot fetch all cities', StatusCodes.INTERNAL_SERVER_ERROR);
    }
    
} 

// To delete a single city object from the database

async function destroyCity( id ){

    try{

        const response = await cityRepository.destroy(id);
        return response ;

    }catch(error){

        if( error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The city you requested to delete is not available', error.statusCode);
        }
        throw new AppError('Cannnot fetch all cities', StatusCodes.INTERNAL_SERVER_ERROR);

    }

}

// To update a single city object from the database

async function updateCity( id , data ){

    try{

        const response = await cityRepository.update( id , data); 
        return response ;

    }catch(error){

        if( error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The city you requested to update is not available', error.statusCode);
        }
        throw new AppError('Cannnot fetch all airplanes', StatusCodes.INTERNAL_SERVER_ERROR);

    }

}

module.exports = {
    createCity,
    getAllCities,
    getCity,
    destroyCity,
    updateCity
}