const express = require('express');
const router = express.Router(); 

const MenuItem = require('./../MODELS/menuItem');


//menuitem post request
router.post('/', async (req, res) => {
    try{
      const data = req.body; //get the data from the request
      const newmenuitem = new MenuItem(data); //create a new instance of the model
      //save the data to the database
      const response = await newmenuitem.save();
      console.log('data saved to the menuitem');
      res.status(200).json(response);
    }
    catch(err){
      console.log(err.message);
      res.status(500).json('Internal Server Error');
    }
  
  })

  //get menuitem
router.get('/', async (req, res) => {
    try{
      const menuitems = await MenuItem.find();
      console.log('data retrieved from the menuitem');
      res.status(200).json(menuitems);
    }
    catch(err){
      console.log(err);
      res.status(500).json('Internal Server Error');
    }
  })
  
  module.exports = router; //export the app for testing