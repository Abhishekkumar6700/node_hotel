const express = require('express')
const app = express();
app.use(express.json()); // Add this line
const db = require('./db');
require('dotenv').config();
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/about', function (req, res) {
    res.send('About Us')
    })

//import the person routes
const personroute = require('./routes/personroute');
const menuItemRoute = require('./routes/menuItemRoute');
//use the person routes
app.use('/person',personroute);

app.use('/menuitem',menuItemRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log('Server is running on port 3000')
})

