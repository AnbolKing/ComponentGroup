import React from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import App from './App';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path='/'>
        <App />
      </Route>
    </BrowserRouter>
  )
}

export default Routes;