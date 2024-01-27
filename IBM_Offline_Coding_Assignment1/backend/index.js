require('dotenv').config();

const express  = require('express');
const { connection } = require('./db');
const { UserRoute } = require('./Routes/user.route');
const app = express();

app.use(express.json());

app.use('/user',UserRoute);

app.listen(4000,async()=>{
    try{
      await connection;
      console.log("Server is running at port 4000");
      console.log("Database is connected");
    }
    catch(err){
        console.log(err);
    }  
})