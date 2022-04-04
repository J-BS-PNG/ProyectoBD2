const mongoose = require('mongoose');
const { Schema } = mongoose;

const Publicacion = new Schema({
    _id : String,
    usuario: String, 
    fecha: String,
    descripcion: String,
    comentario : String,
    reacciones: Number,
    publico: Number,
    imagen: String
   // publicaciones: [{usuario: String, id: String, comentario : String, fecha: String, reacciones: String, imagen: String }]
});

module.exports = mongoose.model('Publicaciones', Publicacion);