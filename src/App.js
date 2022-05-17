import './assets/scss/styles.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Suspense } from 'react';
import Home from './pages/Home';
import PrivateRoute from './core/guards/PrivateRoute';
import Auth from './pages/Auth';

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <PrivateRoute path="/home">
            <Home />
          </PrivateRoute>
          <Route path="/">
            <Auth />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
