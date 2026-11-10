const { StatusCodes } = require('http-status-codes');

const info = (req, res) => {
    return res.status(StatusCodes.OK).json({
        success: true,
        message: "Welcome to the Airline Booking API",
        error: {},
        data: {}
    });
};

module.exports = {
    info
};