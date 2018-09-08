const loggerMiddleware = (req, res, next) => {
  console.log('LOGGED')
  next()
}

module.exports = loggerMiddleware;