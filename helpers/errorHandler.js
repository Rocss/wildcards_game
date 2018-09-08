// error handler
// no stacktraces leaked to user unless in development environment
const errorHandler = (err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err,
  });
}

module.exports = errorHandler;

