const contatosCollection = require("../model/contatoSchema");


//DESAFIO: implementar o metodo getAll usando o mongodb
const getAll = (request, response) => {
  // response.status(200).send(model.agenda);
  contatosCollection.find((error,contatos) => {
    if(error){
      return response.status(500).send(error)
    }else {
      return response.status(200).send(contatos)
    }
  })
};

// Salvar apenas contatos diferentes. Não queremos salvar contatos repetidos na nossa base de dados;

const add = (request, response) => {
 //novo objeto pra nossa coleção
 const contatoDoBody = request.body 
 const contato = new contatosCollection(contatoDoBody)
 
 contato.save((error) => {
   //if(error !==null && error !== undefined)

   if(error) {
     return response.status(400).send(error)
   }else {
     return response.status(201).send(contato)
   }
 })
  //let contato = request.body
 


  // if (!contato.nome || !contato.dataNascimento || contato.celular) {
  //   response.status(400).send("Informações incorretas")
  // }

  // else {
  //   if (baseDados.find(dado => dado.nome === contato.nome)) {
  //     response.status(400).send("Contato já cadastrado")
  //   }
  //   else {
  //     model.agenda.contatos.push(contato)
  //     response.status(201).send(contato) //serve para colocar algo dentro do contatos.js
  //   }
  // }

}


  module.exports = {
    getAll,
    // getById
    add
  }



