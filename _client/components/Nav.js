import React from 'react'
import { Link } from 'react-router'

const { func, bool, string } = React.PropTypes

const Nav = React.createClass({
  propTypes: {
    handleSearchTermChange: func,
    showSearch: bool,
    searchTerm: string
  },
  render () {
    let utilSpace
    if (this.props.showSearch) {
      utilSpace = <input
                    type='text'
                    placeholder='Search'
                    value={this.props.searchTerm}
                    onChange={this.props.handleSearchTermChange}
                  />
    } else {
      utilSpace = <button><Link to='/search'>Back</Link></button>
    }
    return (
      <nav className='navbar navbar-default'>
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to='/'>
              <span className="navbar-brand">
                ReactFlix
              </span>
            </Link>
          </div>
          <div>
            <form className="navbar-form navbar-right" role="search">
              <div className="form-group">
                {utilSpace}
              </div>
            </form>
          </div>
        </div>
      </nav>
    )
  }
})

export default Nav

