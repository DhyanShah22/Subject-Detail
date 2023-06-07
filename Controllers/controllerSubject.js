const {default: mongoose} = require('mongoose')
const Subject = require('../Models/schemaSubject')

// Get Subject details

const getSubject = async (req,res) => {
    const subject = await Subject.find({}).sort({createdAt: -1})

    res.status(200).json(subject)
}

// Get Single Subject Details

const getSingleSubject = async (req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No subject details available'})
    }
    const subject = await Subject.findById({id})

    if(!subject) {
        return res.status(404).json({error: 'No subject details available'})
    }

    res.status(200).json(subject)
}

// Add Subject Details

const addSubject = async (req,res) => {
    const {title, SubCode , Marks} = req.body
    //Add to DB 
    try{
        const subject = await Subject.create({title, SubCode, Marks})
        res.status(200).json(subject)
    } catch(error) {
        res.status(400).json({error: 'Could not add details'})
    }
}

const editSingleSubject = async (req,res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No subject details available'})
    }
    const subject = await Subject.findByIdAndUpdate({_id: id})
    if(!subject) {
        return res.status(404).json({error: 'No subject details available'})
    }

    res.status(200).json(subject)
}

const deleteSingleSubject = async (req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No subject details available'})
    }
    
    const subject = await Subject.findByIdAndDelete({_id: id})
    if(!subject) {
        return res.status(404).json({error: 'No subject details available'})
    }

    res.status(200).json(subject)
}

module.exports = {
    getSingleSubject,
    getSubject,
    addSubject,
    editSingleSubject,
    deleteSingleSubject
}