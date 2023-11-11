const loggerOne = (req, res, next) => {
    console.log(req.originalUrl);
    next();
}

module.exports = loggerOne;