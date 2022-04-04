const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();


mongoose.connect('mongodb://localhost:27017/proyectobasesii')
    .then(db => console.log('DB Publicaciones is connect'))
    .catch(err => console.error(err));
//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
//app.use('/chats', require('./routes/chats'));
app.use('/publicas', require('./routes/publicas'));

//Static files
app.use(express.static(__dirname + '/public'));

const http = require('http').createServer(app);
//server is listening
http.listen(app.get('port'), () =>{
    console.log('Server on port 3000')
})

const socket = require('./socket');
socket(http);

module.exports = http;