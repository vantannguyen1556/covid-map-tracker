import './App.scss';
import React, { Suspense, lazy } from 'react';
import {
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";
import PrivateRoute from './core/guard/PrivateRoute';

const Login = lazy(() => import('./pages/Auth/Login'));
const Home = lazy(() => import('./pages/Features/Home'));


function App() {
  return (
    <main className="page-main">
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <PrivateRoute path="/" exact>
              <Home />
            </PrivateRoute>
            <Route path="/login" component={Login}></Route>
          </Switch>
        </Suspense>
      </BrowserRouter>
    </main>
  );
}

export default App;
