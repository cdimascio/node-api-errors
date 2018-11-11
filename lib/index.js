const { ApiError, ApiErrorFactory } = require('./api.error');

/**
 * creator = (message, error, opts) => json
 */
exports.configure = function({ statusCode, statusKey, message, error, opts }) {
  return {
    code: statusCode,
    message,
  };
};

exports.ApiError = ApiError;

exports.badRequest = function(message, error, opts) {
  return ApiErrorFactory.create(
    {
      statusCode: 400,
      statusKey: 'bad_request',
      message: message || 'bad request',
      error,
      opts,
    },
    exports.configure
  );
};

exports.notFound = function(message, error, opts) {
  return ApiErrorFactory.create(
    {
      statusCode: 404,
      statusKey: 'not_found',
      message: message || 'not found',
      error,
      opts,
    },
    exports.configure
  );
};

exports.unAuthorized = function(message, error, opts) {
  return ApiErrorFactory.create(
    {
      statusCode: 401,
      statusKey: 'unauthorized',
      message: message || 'unauthorized',
      error,
      opts,
    },
    exports.configure
  );
};

exports.forbidden = function(message, error, opts) {
  return ApiErrorFactory.create(
    {
      statusCode: 403,
      statusKey: 'forbidden',
      message: message || 'forbidden',
      error,
      opts,
    },
    exports.configure
  );
};

exports.methodNotAllowed = function(message, error, opts) {
  return ApiErrorFactory.create(
    {
      statusCode: 405,
      statusKey: 'method_not_allowed',
      message: message || 'method not allowed',
      error,
      opts,
    },
    exports.configure
  );
};

exports.notAcceptable = function(message, error, opts) {
  return ApiErrorFactory.create(
    {
      statusCode: 406,
      statusKey: 'not_acceptable',
      message: message || 'not acceptable',
      error,
      opts,
    },
    exports.configure
  );
};

exports.conflict = function(message, error, opts) {
  return ApiErrorFactory.create(
    {
      statusCode: 409,
      statusKey: 'conflict',
      message: message || 'conflict',
      error,
      opts,
    },
    exports.configure
  );
};

exports.requestEntityTooLarge = function(message, error, opts) {
  return ApiErrorFactory.create(
    {
      statusCode: 413,
      statusKey: 'request_entity_too_large',
      message: message || 'request entity too large',
      error,
      opts,
    },
    exports.configure
  );
};

exports.unsupportedMediaType = function(message, error, opts) {
  return ApiErrorFactory.create(
    {
      statusCode: 415,
      statusKey: 'unsupported_media_type',
      message: message || 'unsupported media type',
      error,
      opts,
    },
    exports.configure
  );
};

exports.internalServerError = function(message, error, opts) {
  return ApiErrorFactory.create(
    {
      statusCode: 500,
      statusKey: 'internal_server_error',
      message: message || 'internal server error',
      error,
      opts,
    },
    exports.configure
  );
};
