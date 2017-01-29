const router = require('express').Router()
const Movies = require('../db/models/movies')

router.get('/test', (req, res) => {
  res.status(200).json({ test: 'ok!' })
})

// --- GET METHODS
  // GET ONE
router.get('/:id', (req, res) => {
  Movies.findOne({_id: req.params.id})
  .exec()
  .then((movie) => {
    if (!movie) {
      res.status(400).json({ error: true, message: 'Bad Request', data: null })
    } else {
      res.status(200).json({ error: false, data: movie })
    }
  })
  .catch((err) => {
    console.log('DB Error', err)
    res.status(500).json({ error: true, message: 'DB Error', data: null })
  })
})

// GET ALL
router.get('/', (req, res) => {
  Movies.find({})
  .exec()
  .then((movies) => {
    res.status(200).json({ error: false, data: movies })
  })
  .catch((err) => {
    console.log('DB Error', err)
    res.status(500).json({ error: true, message: 'DB Error', data: null })
  })
})

// --- PUT METHODS
// EDIT
router.put('/:id', (req, res) => {
  let editedMovie = req.body  
  Movies.findOne({_id: req.params.id})
  .exec()
  .then((movie) => {
    if (!movie) {
      res.status(400).json({ error: true, message: 'Bad Request', data: null })
    } else {
      movie.update(editedMovie, (err) => {
        if (err) {
          throw err
        } else {
          res.status(200).json({ error: false, data: movie })
        }
      })
    }
  })
  .catch((err) => {
    console.log('DB Error', err)
    res.status(500).json({ error: true, message: 'DB Error', data: null })
  })
})

// --- POST METHODS
// CREATE
router.post('/', (req, res) => {
  let newMovie = req.body
  let movie = new Movies(newMovie)
  movie.save((err) => {
    if (err) {
      console.log('DB Error', err)
      res.status(500).json({ error: true, message: 'DB Error', data: null })
    } else {
      res.status(200).json({ error: false, data: movie })
    }
  })
})

// --- DELETE METHODS
// DELETE
router.delete('/:id', (req, res) => {
  Movies.findOne({_id: req.params.id})
  .exec()
  .then((movie) => {
    if (!movie) {
      res.status(400).json({ error: true, message: 'Bad Request', data: null })
    } else {
      movie.remove((err) => {
        if (err) {
          throw err
        } else {
          res.status(200).json({ error: false, data: movie })
        }
      })
    }
  })
  .catch((err) => {
    console.log('DB Error', err)
    res.status(500).json({ error: true, message: 'DB Error', data: null })
  })
})

module.exports = router
