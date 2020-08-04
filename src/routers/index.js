import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import App from './../App'

const Router = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>
)

Router.propTypes = {
  store: PropTypes.object.isRequired
}

export default Router