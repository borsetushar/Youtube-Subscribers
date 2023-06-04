
const express = require('express');
const app = express()
const subscriberModel = require('./src/models/subscribers');
const path = require('path');



// Your code goes here

 // 01. "/ " route which displays hello world
 app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

 // 02. "/subscribers" route which shows the list of subscribers with a details
 app.get('/subscribers', async (req, res) => {
     try {
      const subscribers = await subscriberModel.find();
       res.status(200).json(subscribers);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });
  
    
  // 03. "/subscribers/names" route which shows name and the subsribed channel of the user 
   app.get('/subscribers/names', async (req, res) => {
     try {
       const subscribers = await subscriberModel.find({}, { name: 1, subscribedChannel: 1, _id: 0 });
       res.json(subscribers);
     } catch (error) {
       res.status(500).json({ message: error.message });
     }
  });
  
// 04. "subscribers/:id" route which enables you to find a data with the specific id
  app.get("/subscribers/:id",async (req,res)=>{
    try{
      let id = req.params.id;
      let subscriber = await subscriberModel.findById(id);
      res.status(200).json(subscriber);
    }
    catch(error){
      res.status(400).json({message :"The Id You are looking for does not exist"});
    }
  });

module.exports = app;
