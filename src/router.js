// import React, { Suspense } from 'react';
import React from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import App from './App';
// import SlidePage from './components/Lazy/slideLoad/index';
// const App = React.lazy(() => import('./App'));

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path='/'>
        {/* <Suspense fallback={<SlidePage />}> */}
          <App />
        {/* </Suspense> */}
      </Route>
    </BrowserRouter>
  )
}

export default Routes;