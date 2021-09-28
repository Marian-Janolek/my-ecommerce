const { StatusCodes } = require('http-status-codes');
const CustomApiError = require('./custom-api.js');

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCodes = StatusCodes.NOT_FOUND;
  }
}

module.exports = NotFoundError;
