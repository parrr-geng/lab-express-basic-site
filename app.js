const express = require('express');
const process = require('node:process');
const app = express();

app.use(express.static('public'));
//app.use('public/assets', express.static('assets'));


app.get('/Home', (req, res, next)=>{
    res.sendFile(__dirname + '/views/home-page.html');
});

app.get('/About', (req, res, next)=>{
    res.sendFile(__dirname + '/views/about-page.html');
});

app.get('/Works', (req, res, next)=>{
    res.sendFile(__dirname + '/views/works-page.html');
});

app.get('/Gallery', (req, res, next)=>{
    res.sendFile(__dirname + '/views/gallery-page.html');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{console.log('The app listening on Port 3000.')});


