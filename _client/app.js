// Css dependencies
import 'normalize.css'

// React dependencies
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

// Components
import Landing from './components/Landing'
import Main from './components/Main'

const App = React.createClass({
  render () {
    return (
      <Router history={hashHistory}>
        <div className='app'>
          <Route path='/' component={Landing} />
          <Route path='/main' component={Main} />
        </div>
      </Router>
    )
  }
})

render(<App />, document.getElementById('app'))
