const express = require('express');
const app = express();
const indexRouter = require('./routes/index');
const endrouteRouter = require('./routes/endroute');

app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/endroute', endrouteRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
