import React from 'react'
import { Link } from 'react-router'
const {string, number, shape} = React.PropTypes

const ShowCard = React.createClass({
  propTypes: {
    movie: shape({
      title: string.isRequired,
      year: string,
      genre: string,
      actors: string,
      rating: number,
      poster: shape({
        url: string
      })
    })
  },
  render () {
    return (
      <Link to={`/details/${this.props.movie._id}`}>
        <div className='col-sm-4 col-md-3'>
          <div className='thumbnail'>
            <img src='/dist/img/default_poster.jpg' alt='...' />
            <div className='caption'>
              <h3>{this.props.movie.title} <small>({(this.props.movie.year)})</small></h3>
              <div>
                <p>Genre: {this.props.movie.genre}</p>
                <p>Rating: {this.props.movie.rating}</p>
                <p>Actors: {this.props.movie.actors}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>    
    )
  }
})

export default ShowCard
