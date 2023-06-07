const mongoose = require('mongoose')

const Schema = mongoose.Schema

const subjectSchema = new Schema ({
    title: {
        type: String, 
        required: true
    },
    SubCode: {
        type: String,
        required: true
    },
    Marks: {
        type: Number,
        required: true
    }
},  {timestamps: true})

module.exports = mongoose.model('Subject', subjectSchema)

