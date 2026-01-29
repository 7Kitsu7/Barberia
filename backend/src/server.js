const express = require('express');
const cors = require('cors');
const barberiaRoutes = require('./src/modules/barberias/barberia.routes');

const app = express();

app.use(cors());
app.use(express.json());

// Registro de rutas por módulo
app.use('/api/barberias', barberiaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});