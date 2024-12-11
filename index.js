const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Course = require('./models/course');

const app = express();
app.use(cors());
app.use(bodyParser.json());

//connect to mongoDB
mongoose.connect('mongodb://localhost:27017/courseCatalog',{
useNewUrlParser:true,
useUnifiedTopology:true,
}).then(()=>console.log('connected to MongoDB'))
  .catch(err=>console.log.error('MongoDB connection error:',err))


  


  //fetch all courses
  app.get('/courses', async(req,res)=>{
    try{
        const courses = await Course.find();
        res.json(courses);
    }catch (err){
        res.status(500).json({error:err.message});
    }
  });


  //Enroll and Unenroll
  app.post('/enroll', (req,res)=>{
    res.json({message: 'Enrolled successfully'});
  });

  app.post('/unenroll', (req,res)=>{
    res.json({message: 'Unenrolled successfully'});
  })


const PORT=5000;
app.listen(PORT, ()=>console.log(`server running on http://localhost:${PORT}`));






















