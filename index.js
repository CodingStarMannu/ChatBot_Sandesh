const express = require ('express');
const app = express();
const port = 8000 ;


app.listen(port,(error)=>{
    if(error){
        console.log("Error in creating server: " , error);
    }
    console.log(`Server is up and running on ${port}`);
})