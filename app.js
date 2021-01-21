const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv/config');
const cors = require ('cors');
const uri = process.env.DB_CONNECTION;
const mongoose = require('mongoose');
const AnimesSch = require('./models/Animes');
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
//middlewares
app.use(cors());

/*
const Aot = new AnimesSch({ name: '' ,author:''});
Aot.save().then(() => console.log('AOT'));
*/
// YOU HAVE THE ABILITY TO CREATE Routes *_* !
app.use(bodyParser.json() );
//Import Routes
const postsRoute = require ('./routes/posts');
app.use('/posts',postsRoute);
//ROUTES
app.get('/',(req,res)=>{
    res.send('We are home');
});
//HOW TO LISTEN TO THE SERVER
app.listen(3000);
