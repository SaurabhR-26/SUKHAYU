function ApiError(statusCode, message, stack = '') {
    Error.call(this, message);
    this.statusCode = statusCode;

    if (stack) {
        this.stack = stack;
    } else {
        Error.captureStackTrace(this, this.constructor);
    }
}

ApiError.prototype = Object.create(Error.prototype);
ApiError.prototype.constructor = ApiError;

module.exports = ApiError;
