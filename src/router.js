import React, { Suspense } from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import PageLoad from './components/Lazy/pageLoad/index';
const App = React.lazy(() => import('./App'));

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path='/'>
        <Suspense fallback={<PageLoad />}>
          <App />
        </Suspense>
      </Route>
    </BrowserRouter>
  )
}

export default Routes;