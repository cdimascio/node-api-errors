const ApiError = function({ statusCode, customError, error }) {
  this.statusCode = statusCode;
  this.customError = customError;
  this.error = error;
};

ApiError.prototype = new Error();

ApiError.prototype.toJSON = function() {
  return this.customError;
};

ApiError.prototype.toString = function() {
  return `${this.code}: ${this.customError}`;
};

const ApiErrorFactory = {
  create({ statusCode, codeName, message, error, opts }, creatorFn) {
    const p = { statusCode, codeName, message, error, opts };
    const customError = creatorFn(p);

    return new exports.ApiError({
      statusCode,
      customError,
      error,
    });
  },
};

exports.ApiError = ApiError;
exports.ApiErrorFactory = ApiErrorFactory;
