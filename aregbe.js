const express = require("express");
const PORT = 1229;
const mongoose  = require("mongoose");
const url = 'mongodb://localhost/Visualdb'

const {collect1, collect2, collect3, collect4} = require('../mongo_stuff/schemafolder/schema')

// const collect1 = require('../mongo_stuff/schemafolder/schema')
// const collect2 = require('../mongo_stuff/schemafolder/schema')
// const collect3 = require('../mongo_stuff/schemafolder/schema')
// const collect4 = require('../mongo_stuff/schemafolder/schema')
const app = express();

mongoose.connect(url, {useNewUrlParser: true})


const way = mongoose.connection

way.on("open", ()=>{
    console.log("Database is ready for consumption")
})


app.use(express.json)
app.use('/', ()=>{
    collect1, collect2, collect3, collect4
})

app.listen(PORT, ()=>{
    console.log(`${PORT} is doing well`)
})