const express = require('express')

const mongoose = require("mongoose");

const collection1 = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    department: {
        type: String,
        required: false,
        //default: [true, "science"]
    },
    email: {
        type: String,
        required: true,
        unique: [true, "email is picked"]
    }
})
module.exports = mongoose.model("collect1", collection1)
const collection2 = mongoose.Schema({
    shoename: {
        type: String,
        required: true,
    },
    shoesize: {
        type: Number,
        required: true
    },
    shoemaker: {
        type: String,
        required: true,
        default: "NIke"
    }
})
module.exports = mongoose.model('collect2', collection2)
const collection3 = mongoose.Schema({
    shirtname: {
        type: String,
        required: true,
    },
    shirtsize: {
        type: Number,
        required: true,
    },
    shirtmaker:{
        type: String,
        required: true,
        default: "Nike wears"
    }
})
module.exports = mongoose.model('collect3', collection3)
const collection4 = mongoose.Schema({
    Nationality: {
        type: String,
        required: true,
        default: "Nigerian", 
    },
    Occupation: {
        type: String,
        required: true,
        default: "Entrepreneur"
    },
    Interest: {
        type: String,
        required: true,
        default: "Travelling"
    }
})
module.exports = mongoose.model('collect4', collection4)