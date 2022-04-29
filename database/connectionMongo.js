// Conexión a base de datos
const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@pecoracluster.mpc6c.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };

const clientDB = mongoose
    .connect(uri, options)
    .then((m) => {
        console.log("Db conectada 💕");
        return m.connection.getClient();
    })
    .catch( (e) => console.log('Error en base de datos: ' + e) );

module.exports = clientDB


