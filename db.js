const mongoose = require('mongoose');
require('dotenv').config();

//define the mongodb connection url
//const mongoURL = process.env.MONGODB_URL_LOCAL //hotel is the name of the database you want to connect to
const mongoURL= process.env.MONGODB_URL;

//setup the mongodb connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

//moongoose maintains the connection object representing the mongodb connection
const db = mongoose.connection;

//define the event listener for database connection
db.on('connected', () => {
    console.log('MongoDB connection successful');
});

db.on('error', (err) => {
    console.log('MongoDB connection error: ', err);
});
 
db.on('disconnected', () => {    
    console.log('MongoDB connection disconnected');
});


//export the  database connection
module.exports = db; 
