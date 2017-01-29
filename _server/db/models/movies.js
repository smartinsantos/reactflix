const db = require('mongoose')
const Schema = db.Schema

const MovieSchema = new Schema({
  genre: { type: String, required: true },
  actors: { type: String },
  title: { type: String },
  year: { type: String },
  rating: { type: Number },
  poster: {
    url: { type: String, default: 'dist/img/default_poster.jpg' }
  }
},
{
  timestamps: { createdAt: 'created_on', updatedAt: 'modified_on' }
})

const Movies = db.model('Movies', MovieSchema)

module.exports = Movies
