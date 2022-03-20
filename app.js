const express = require('express');
const mongoose = require("mongoose");
const path = require("path");
const app = express();


const port = process.env.PORT||80;
// app.use(express.static(path.join(__dirname,'template')));
//app.set('view engine', 'html');   // html canno

app.use(express.static('template'));
//app.set('views', __dirname + '/template');


app.get("/",(req,res)=>{
      res.sendFile('login.html', { root: 'template' });

})
app.get("/register",(req,res)=>{
      res.sendFile('register.html', { root: 'template' });
})


app.listen(port,(req,res)=>{
  console.log(`app starting at server ${port}`)
})