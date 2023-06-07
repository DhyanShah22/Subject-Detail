const express = require('express')

const {
    getSingleSubject,
    getSubject,
    addSubject,
    editSingleSubject,
    deleteSingleSubject
} = require('../Controllers/controllerSubject')

const router = express.Router()

// Get request
router.get('/', getSubject)

// Get single request 
router.get('/:id', getSingleSubject)

// Add request 
router.post('id', addSubject)

// Edit request 
router.patch('/:id', editSingleSubject)

// Delete request
router.delete('/:id', deleteSingleSubject)

module.exports = router