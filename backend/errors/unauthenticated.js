const { StatusCodes } = require('http-status-codes');
const CustomApiError = require('./custom-api.js');

class UnauthenticatedError extends Error {
  constructor(message) {
    super(message);
    this.statusCodes = StatusCodes.UNAUTHORIZED;
  }
}
