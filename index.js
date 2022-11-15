const express = require('express');
require('dotenv').config();
const cors = require('cors');
const {dbConnection} = require('./database/config');


// ver las variables de entorno
// console.log(process.env);

//Servidor express
const app = express();

// Base de datos
dbConnection();

// Cors
app.use(cors());

// Directorio publico
app.use(express.static('public'));

// Lectura y parse del body
// todas las peticiones la convertimos en json 
app.use(express.json());


// rutas
// auth // crear, login, renew 
app.use('/api/auth', require('./routes/auth') );

// CRUD
app.use('/api/events', require('./routes/events') );

// eventos



// escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});