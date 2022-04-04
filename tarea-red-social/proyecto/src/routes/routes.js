//importar express
const express = require ('express');

//importar metodos del controller
const { mostrarUsuarios, mostrarUsuarioPorEmail, mostrarConstrasenaPorEmail, crearUsuario, cambiarNombreBiografia, cambiarContrasena, eliminarUsuario } = require('../controllers/usuario.js');

//init express router
const router = express.Router();


//obtener todos los usuarios 
router.get('/usuarios', mostrarUsuarios);

//obtener un solo usuario por el email
router.get('/usuarios/especifico/:email', mostrarUsuarioPorEmail);

//obtener contraseña por email
router.get('/usuarios/contrasena/:email', mostrarConstrasenaPorEmail);

// crear un nuevo usuario
router.post('/usuarios', crearUsuario);

//actualizar nombre y bio
router.put('/usuarios/:email', cambiarNombreBiografia);


//actualizar contraseña
router.put('/usuarios/:email', cambiarContrasena);

//borrar usuario
router.delete('/usuarios/:email', eliminarUsuario);

//export default router;
module.exports = router;