function validarHora(req, res, next) {
    const hora = req.horaActual;
  
    if (hora >= 12 && hora <= 15) {
      return next();
    } else {
      res.locals.mensaje = `Aún no es la hora, espera hasta las 12:00 para entrar`;
      return res.redirect('/?mensaje=' + encodeURIComponent(res.locals.mensaje));
    }
  }
  
  module.exports = validarHora;
  