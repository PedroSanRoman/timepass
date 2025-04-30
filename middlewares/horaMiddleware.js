function horaMiddleware(req, res, next) {
    const ahora = new Date();
    req.horaActual = ahora.getHours();
    next();
  }
  
  module.exports = horaMiddleware;
  