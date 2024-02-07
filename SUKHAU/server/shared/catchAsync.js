const catchAsync = function (fn) {
    return async function (req, res, next) {
        try {
            await fn(req, res, next);
        } catch (error) {
            next(error);
        }
    };
};

module.exports = catchAsync;
