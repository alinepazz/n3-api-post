const model = require("../model/contatos");

const getAll = (request, response) => {
  console.log(request.url);
  response.status(200).send(model.agenda);
};

// 

const add = (request, response) => {
  model.agenda.contatos.push(request.body)
  response.status(200).send() //serve para colocar algo dentro do contatos.js
}


module.exports = {
  getAll,
 // getById
  add
}

