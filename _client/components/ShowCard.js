import React from 'react'
import { Link } from 'react-router'

// Components
import ReactStars from 'react-stars'

const {string, number, shape} = React.PropTypes
const ShowCard = React.createClass({
  propTypes: {
    movie: shape({
      title: string.isRequired,
      year: string,
      genre: string,
      actors: string,
      rating: number,
      poster_url: string
    })
  },
  render () {
    return (
      <Link to={`/details/${this.props.movie._id}`}>
        <div className='col-sm-4 col-md-3'>
          <div className='thumbnail'>
            <img src={this.props.movie.poster_url} alt='...' />
            <div className='caption'>
              <h3>{this.props.movie.title}</h3>
              <div>
                <ReactStars
                  count={5}
                  size={20}
                  edit={false}
                  half={false}
                  value={this.props.movie.rating}
                  color2={'#ffd700'} />
                <p>Year: {this.props.movie.year}</p>
                <p>Genre: {this.props.movie.genre}</p>
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
