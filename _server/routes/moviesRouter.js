const router = require('express').Router()

router.get('/test', (req,res) => {
  res.status(200).json({ test: 'ok!' })
})

module.exports = router