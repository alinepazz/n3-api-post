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
}

 const getByName = (request, response) => {
   const nomeParam = request.params.nome 
   //const filtro = { nome: nomeParam
  const regex = new RegExp(nomeParam, "i")
// const filtro = {nome: /^t/i}}
   const filtro = {nome: regex} 
   contatosCollection.find(filtro, (error, contatos) => {
     if(error){
       return response.status(500).send(error)
     } else {
       if(contatos.length > 0){
        return response.status(200).send(contatos)
       }else {
         return response.status(404).send("Usuario nao encontrado")
       }
       //contato é um array
       //const contatosFiltrados = contatos.filter(contato =>
       //contato.nome === nomeParam)
       //return response.status(200).send(contatosFiltrados)
       
     }
   })
 }

 const getById = (request, response) => {
   const idParam = request.params.id 
   contatosCollection.findById(idParam, (error, contato) => {
    if(error) {
      return response.status(500).send(error)
    } else{
      //if(contato !== null && contato!== undefined)
      if(contato) {
        return response.status(200).send(contato)
      } else {
        return response.status(404).send('Contato nao encontrado')
      }
      
    }
   })
 }

 const deleteById = (request, response) =>{
   const idParame = request.params.id 
   contatosCollection.findByIdAndRemove(idParame,(error, contato) => {
     if(error) {
       return response.status(500).send(error)
     } else {
       return response.sendStatus(200)
     }
   })
   
 }
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




  module.exports = {
    getAll,
    add,
    getByName,
    getById,
    deleteById
    
    
    
  }



