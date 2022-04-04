//importar base de datos
const db = require('../config/mysql.js');

module.exports = {
    //Obtener una lista de todos los usuario registrados
    getUsuarios: (result) => {
        db.query("SELECT * FROM usuario", (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
    },

    //Obtener la contraseña de un usuario especifico por el correo
    obtenerContrasenaPorEmail: (email, result) => {
        var contra = db.query("SELECT usuario_contrasena FROM  usuario WHERE usuario_email = ?", [email], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
    },




    //Obtener la contraseña de un usuario especifico por el correo
    obtenerContrasenaPorEmail: (email, result) => {
        var contra = db.query("SELECT usuario.usuario_contrasena FROM  usuario WHERE usuario_email = ?", [email], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            }
            console.log(contra);

        });
    },

    //Ingresar un nuevo usuario en la base de datos
    insertarUsuario: (data, result) => {
        db.query("INSERT INTO usuario SET ?", [data], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
    },

    //ACTUALIZAR

    //Actualizar nombre de usuario y biografia
    actualizarNombreBio: (data, email, result) => {
        db.query("UPDATE usuario SET usuario_nombre = ?, usuario_biografia = ? WHERE usuario_email = ?", [data.usuario_nombre, data.usuario_biografia, email], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
    },


    //Actualizar contraseña de usuario
    actualizarContraseña: (data, email, result) => {
        db.query("UPDATE usuario SET usuario_contrasena = ? WHERE usuario_email = ?", [data.usuario_contrasena, email], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
    },

    //Eliminar usuario de la base de datos
    borrarUsuarioPorEmail: (email, result) => {
        db.query("DELETE FROM usuario WHERE usuario_email = ?", [email], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
    }
};