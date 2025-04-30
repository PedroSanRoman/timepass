const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const horaActual = new Date();
  const hora = horaActual.toLocaleTimeString();
  const mensaje = req.query.mensaje || '¡Bienvenido a la página principal!';

  res.send(`
    <h1>${mensaje}</h1>
    <p>Hora actual: ${hora}</p>
    <form action="/endroute" method="get">
      <button type="submit">Ir a EndRoute</button>
    </form>
  `);
});

module.exports = router;
