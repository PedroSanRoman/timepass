const express = require('express');
const router = express.Router();
const horaMiddleware = require('../middlewares/horaMiddleware');
const validarHora = require('../middlewares/validarHora');

router.get('/', horaMiddleware, validarHora, (req, res) => {
  res.send(`
    <h1>¡Has llegado a la ruta /endroute!</h1>
    <p>Bienvenido a esta sección.</p>
  `);
});

module.exports = router;
