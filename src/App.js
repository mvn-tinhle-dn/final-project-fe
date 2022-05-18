import { Suspense } from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './assets/scss/styles.scss';
import PrivateRoute from './core/guards/PrivateRoute';
import Auth from './pages/Auth';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/auth">
            <Auth />
          </Route>
          <PrivateRoute path="/">
            <Home />
          </PrivateRoute>

        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
