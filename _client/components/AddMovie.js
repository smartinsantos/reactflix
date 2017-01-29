import React from 'react'
import { Link } from 'react-router'


const Nav = React.createClass({
  getInitialState () {
    return {
      showForm: false
    }
  },
  toggleMovieForm () {
    this.setState({ showForm: !this.state.showForm })
  },
  render () {
    let renderedChild
      if (!this.state.showForm) {
        renderedChild = <button onClick={this.toggleMovieForm}>Add Movie</button>
      } else {
        renderedChild = <p>form</p>
      }
    return (
      <div className='add-btn-form'>
        {renderedChild}
      </div>
    )
  }
})

export default Nav

