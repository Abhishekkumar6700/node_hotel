const express = require('express');
const router = express.Router();    //import the express router
const Person = require('./../MODELS/PERSON');//import the person model
// post request to add a new person
router.post('/', async (req, res) => {
    try{
      const data = req.body; //get the data from the request
      const newperson = new Person(data); //create a new instance of the model
      //save the data to the database
      const response = await newperson.save();
      console.log('data saved to the database');
      res.status(200).json(response);
    }
    catch(err){
      console.log(err.message);
      res.status(500).json('Internal Server Error');
    }
  
  })

  //get all the persons
router.get('/', async (req, res) => {
    try{
      const persons = await Person.find();
      console.log('data retrieved from the database');
      res.status(200).json(persons);
    }
    catch(err){
      console.log(err);
      res.status(500).json('Internal Server Error');
    }
  })

  
router.get('/:workType', async (req, res) => {
    try{
      const workType = req.params.workType; //get the workType from the request
      if(workType === 'chef' || workType === 'waiter' || workType === 'manager'){
        const response = await Person.find({work: workType});
        console.log('data retrieved from the database');
        res.status(200).json(response);
        
      }else{
        console.log('Invalid work type');
        res.status(400).json('Invalid work type');
      }
      
    }
    catch(err){
      console.log(err);
      res.status(500).json('Internal Server Error');
    }
  } )


  //update a person
router.put('/:id', async (req, res) => {
    try{
      const id = req.params.id; //get the id from the request
      const data = req.body; //get the data from the request
      const response = await Person.findByIdAndUpdate(id, data, {new: true});
      console.log('data updated in the database');
      res.status(200).json(response);
    }
    catch(err){
      console.log(err);
      res.status(500).json('Internal Server Error');
    }
  })
  //delete a person
router.delete('/:id', async (req, res) => {
    try{
      const id = req.params.id; //get the id from the request
      const response = await Person.findByIdAndDelete(id);
      console.log('data deleted from the database');
      res.status(200).json(response);
    }
    catch(err){
      console.log(err);
      res.status(500).json('Internal Server Error');
    }
  })
  
  //export the router
  module.exports = router;