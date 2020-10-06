import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import LandingPage from './components/LandingPage';


function App() {
  console.log("____Rendering app_____")
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/landing" component={LandingPage}></Route>
            {/* <Route exact path="/login" component={Login} /> */}
        </Switch>
    </BrowserRouter>
  );
}

export default App;
