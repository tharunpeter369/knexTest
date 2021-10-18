const express = require('express');
const app = express();


const userrouter= require("./routes/index")






app.use(express.json());




app.use('/user',userrouter),

app.listen(3000,()=>{
    console.log("connected");
})