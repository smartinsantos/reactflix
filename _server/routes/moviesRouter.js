const router = require('express').Router()

const db = require('../db/db')
const Movies = require('../db/models/movies')

router.get('/test', (req, res) => {
  res.status(200).json({ test: 'ok!' })
})

// --- GET METHODS
  // GET ONE
router.get('/:id', (req, res) => {
  res.status(200).json({ test: 'ok!' })
})

// GET ALL
router.get('/', (req, res) => {
  res.status(200).json({ test: 'ok!' })
})

// --- PUT METHODS
// EDIT
router.put('/:id', (req, res) => {
  res.status(200).json({ test: 'ok!' })
})

// --- POST METHODS
// CREATE
router.post('/', (req, res) => {
  res.status(200).json({ test: 'ok!' })
})

// --- DELETE METHODS
// DELETE
router.delete('/', (req, res) => {
  res.status(200).json({ test: 'ok!' })
})

module.exports = router
