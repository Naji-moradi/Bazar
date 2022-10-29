// Error Handler Class
class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    //this will create.stack property on passed object which is this object
    //this is passed object and th second one ins constructor

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ErrorHandler;
