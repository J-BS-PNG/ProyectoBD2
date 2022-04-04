//importar funciones del usuarioModel.js

const { getUsuarios,  obtenerUsuarioPorEmail, obtenerContrasenaPorEmail, insertarUsuario, actualizarNombreBio, actualizarContraseña, borrarUsuarioPorEmail} = require('../models/usuarioModel.js');

module.exports = {
//obtener todos los usuarios 
 mostrarUsuarios : (req, res) => {
    getUsuarios((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
},

//obtener un solo usuario por el email
 mostrarUsuarioPorEmail : (req, res) => {
    obtenerUsuarioPorEmail(req.params.email, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
},

//obtener contraseña por email
 mostrarConstrasenaPorEmail : (req, res) => {
    obtenerContrasenaPorEmail(req.params.email, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
},

// crear un nuevo usuario
 crearUsuario : (req, res) => {
    const data = req.body;
    insertarUsuario(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
},

//actualizar nombre y bio
 cambiarNombreBiografia : (req, res) => {
    const data  = req.body;
    const email    = req.params.email;
    actualizarNombreBio(data, email, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
},

//actualizar contraseña
 cambiarContrasena : (req, res) => {
    const data  = req.body;
    const email    = req.params.email;
    actualizarContraseña(data, email, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
},

//borrar usuario
 eliminarUsuario : (req, res) => {
    const email = req.params.email;
    borrarUsuarioPorEmail(email, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}};