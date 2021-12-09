const express = require('express');
const app = express();

// Puerto
const PORT = process.env.PORT || 3001;

// Archivos Public
app.use(express.static('public'));


const indexRoutes = require('./src/routes/indexRouters');

app.use(indexRoutes)

// Levantar Servidor
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`));