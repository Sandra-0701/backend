// 1.Importing
const express=require('express');
const morgan = require('morgan');
require('dotenv').config();
const routerFile = require('./Routes/BasicRoute');
//2.initialization
const app = new express();
app.use(morgan('dev'));

// 3.Middlewares


//4.db connection

//accessing the port
const PORT=process.env.PORT;

//5.Api

app.use('/api',routerFile);

//6.Listening to the port

app.listen(PORT,(req,res)=>{

    console.log(`Server is up and running ${PORT}`);

})
