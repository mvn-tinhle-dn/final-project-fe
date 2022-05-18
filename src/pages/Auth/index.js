import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from "./Login/index";

export default function Auth() {
  return(
   <Switch>
     <Route path='/auth/login'>
       <LoginPage />
     </Route>
   </Switch>
  )
}
