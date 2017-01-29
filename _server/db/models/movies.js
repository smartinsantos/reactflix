const db = require('mongoose')
const Schema = db.Schema

const MovieSchema = new Schema({
  genre: { type: String },
  actors: [{ type: String }],
  title: { type: String },
  year: { type: Number },
  rating: { type: Number },
  poster: {
    url: { type: String }
  }
},
{
  timestamps: { createdAt: 'created_on', updatedAt: 'modified_on' }
})

const Movies = db.model('Movies', MovieSchema)

module.exports = Movies
