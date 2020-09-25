import React from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import Test from './components/Test';
import Header from './components/Header'

import App from './App';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path='/'>
        <App>
          <Header></Header>
          <Test></Test>
        </App>
      </Route>
    </BrowserRouter>
  )
}

export default Routes;