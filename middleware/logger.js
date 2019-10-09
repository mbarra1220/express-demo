// next is a reference to the next middleware function in the pipeline
function log(req, res, next) {
    console.log('Logging...');
    next();
}

module.exports = log;