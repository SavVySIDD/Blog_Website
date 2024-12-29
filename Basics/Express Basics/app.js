const express = require('express')
const app = express();

//listen for requests
app.listen(3000);


app.get('/',(req,res)=>{
    // res.send('<p>Home Page</p>')
    res.sendFile('./views/index.html',{root: __dirname})
    //Absolute path required so we are adding the root
})

app.get('/about',(req,res)=>{
    // res.send('<p>About Page</p>')
    res.sendFile('./views/about.html',{root: __dirname})
})

//redirects
app.get('/about-us',(req,res)=>{
    res.redirect('/about')
})

//Error 404
app.use((req,res)=>{
    res.sendFile('./views/404.html',{root: __dirname})
})