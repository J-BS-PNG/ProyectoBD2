// import express
const express  = require('express'); 
// import cors
const cors = require('cors');
// import routes

 
// init express
const app = express();

// use express json
app.use(express.json());
 
// use cors
app.use(cors());
 
// use router
//app.use(Router);
app.use('/friends', require('./routes/friends.js'))
 
app.listen(5000, () => console.log('Server running at http://localhost:5000'));