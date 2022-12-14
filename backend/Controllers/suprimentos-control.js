const { json } = require("express");
const express = require ("express");
const Suprimento = require ('../models/suprimento')


let suprimentosAux = [];
let contadorSuprimento = 0;

// getSuprimento = async (req, res,next) => {

//   Suprimento.find().then(suprimentos => {
//     SuprimentosEncontrados = suprimentos;
//     res.status(201).json({ success: true, data: suprimentos})
//     console.log(suprimentos)
//   })

// };



getSuprimento = async (req, res) => {
  await Suprimento.find({}, (err, suprimentos) => {
      if (err) {
          return res.status(400).json({ success: false, error: err })
      }
      if (!suprimentos.length) {
          return res
              .status(404)
              .json({ success: false, error: `Suprimento nao encontrado` })
      }
      return res.status(200).json({ success: true, data: suprimentos })
  }).clone().catch(err => console.log(err))
};

 criarSuprimento = async (req, res) => {
  const {nameSupply} = req.body;
  let {qttSupply} = req.body;
  const {typeSupply} = req.body;
  let sum = 0;
  const s = new Suprimento ({nameSupply, qttSupply, typeSupply})

  Suprimento.findOne({nameSupply: req.body.nameSupply, typeSupply: req.body.typeSupply }, function (err, suprimento) {
    if (err) {
      console.error(err)
      res.status(200).json(err)
    }

    if (suprimento) {
      //console.log ("Entrei if")
      suprimento.qttSupply += parseFloat(req.body.qttSupply)
      suprimento.save();
      res.status(200).json(suprimento)
    }

    else {
      s.save();
      //console.log ("else")
      res.status(201).json(s)
    }
  })




};


 updateSuprimento = async (req, res, next) => {
  const suprimento = new Suprimento({
  _id: req.params.id,
  nameSupply: req.body.nameSupply,
  qttSupply: req.body.qttSupply,
  typeSupply: req.body.typeSupply
  });
  Suprimento.updateOne({_id: req.params.id}, suprimento)
  .then ((resultado) => {
  console.log (resultado)
  console.log("Atualização realizada com sucesso")
  });
  res.status(200).json({mensagem: 'Atualização realizada com sucesso'})
 };






 getSuprimentoPorId =  (req, res, next) => {
  Suprimento.findById(req.params.id).then(sup => {
  if (sup){
  res.status(200).json(sup);
  }
  else
  res.status(404).json({mensagem: "Suprimento não encontrado!"})
  })
 };



 deletarSuprimento = async	 (req, res, next) => {
  console.log("id: ", req.params.id);
  Suprimento.deleteOne({ _id: req.params.id }).then((resultado) => {
    console.log("Suprimento removido")
    console.log(resultado);
  
  res.status(200).json({ mensagem: "Suprimento removido" })
  });
 };

//  router.get('/:id', (req, res, next) => {
//   Suprimento.findById(req.params.id).then(cli => {
//   if (cli) {
//   res.status(200).json(cli);
//   }
//   else
//   res.status(404).json({ mensagem: "Suprimento não encontrado!" })
//   })
//  });

 module.exports = {
  criarSuprimento,
  updateSuprimento,
  deletarSuprimento,
  getSuprimento,
  getSuprimentoPorId,
 }
