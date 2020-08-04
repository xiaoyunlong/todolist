import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import TodoListPage from './../components/TodoListPage';
import FinishedTodoListPage from './../components/FinishedTodoListPage';

const Router = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <NavLink exact 
        style={{fontSize: '24px', marginRight: '10px' }}
        to="/"
        activeStyle={{
          textDecoration: 'none',
          color: 'black',
          fontSize: '24px',
          marginRight: '10px'
        }} >TodoList</NavLink>
        |
      <NavLink exact 
        style={{fontSize: '24px', marginLeft: '10px' }}
        to="/finished"
        activeStyle={{
          textDecoration: 'none',
          color: 'black',
          fontSize: '24px'
        }}>Finished TodoList</NavLink>
      <Route exact path="/" component={TodoListPage} />
      <Route exact path="/finished" component={FinishedTodoListPage} />
    </BrowserRouter>
  </Provider>
)

Router.propTypes = {
  store: PropTypes.object.isRequired
}

export default Router