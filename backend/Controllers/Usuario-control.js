
const express = require ("express");
const router = express.Router();
const Usuario = require ('../models/usuario')

let usuarios = [];
let contadorUsuario = 0;


getUsuario = async (req, res) => {
    res.send(usuarios);
  };
  
  criarUsuario = async (req, res) => {
    contadorUsuario++;
    const {userName} = req.body;
    const {password} = req.body;
    const u = new Usuario({userName, password})
  
    Usuario.findOne({userName: req.body.userName}, function (err, usuario) {
      if (err) {
        console.error(err)
        res.status(200).send(err);
      }
  
      if (usuario) {
        console.log("Usuario ja cadastrado")
        res.status(200).json({mensagem: 'Usuario ja cadastrado'})
      }
  
      else {
        u.save();
        res.status(201).json({mensagem: 'Usuario inserido'})
      }
    })
  
  
  
  };
  
  login = async (req, res) => {
      const {userName} = req.body;
      const {password} = req.body;
  
      Usuario.findOne({userName: req.body.userName, password: req.body.password }, function (err, usuario) {
        if (err) {
          console.error(err)
          res.status(200).send(err);
        }
  
        if (usuario) {
          console.log("Usuario encontrado,Logando!")
          res.status(200).json({mensagem: 'Logado',data: usuario})
        }
  
        else {
          res.status(200).json({mensagem: 'Usuario não encontrado'})
          console.error("Usuario e/ou senha incorretos")
        }
      })
  }



  module.exports = {
    criarUsuario,
    getUsuario,
    login,
   }