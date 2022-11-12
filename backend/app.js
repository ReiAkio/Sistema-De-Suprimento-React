const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require ('mongoose');
const { Console } = require('console');
const suprimentosRoutes = require ('./rotas/Suprimento-router');
const usuariosRoutes = require ('./rotas/Usuario-router');

const { db } = require('./models/suprimento');

require('dotenv').config();



const {
  MONGODB_USER,
  MONGODB_PASSWORD,
  MONGODB_CLUSTER,
  MONGODB_DATABASE
} = process.env


//console.log(process.env)

mongoose.connect(`mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_CLUSTER}.mongodb.net/${MONGODB_DATABASE}?retryWrites=true&w=majority`)
.then(() => {
 console.log ("Conexão OK")
}).catch(() => {
 console.log("Conexão NOK")
});


app.use(bodyParser.json());



app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type,Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH,PUT, DELETE,OPTIONS');
  next();
});







app.use('/suprimentos',suprimentosRoutes);
app.use('/usuario',usuariosRoutes);







app.listen(4000, () => {
  console.log('Porta 4000');
});

