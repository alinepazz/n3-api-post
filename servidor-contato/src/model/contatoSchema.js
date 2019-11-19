const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ContatoSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId, // tipo dos dados
        auto: true, // é autogerado
        required: true // é obrigatório
    },
    nome: {
        type: String,
        required: true,
        unique: true,
    },
    celular: {
        type: String,
        required: true,
    },
    avatar: {
        type: Buffer,
        contentType: String,
        required: false,
    }
})

const contatosCollection = mongoose.model('contato', ContatoSchema)

module.exports = contatosCollection     