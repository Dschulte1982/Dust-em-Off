import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import UsersList from './components/UsersList';


function App() {
  console.log("____Rendering app_____")
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/landing" component={LandingPage}></Route>
            {/* <Route exact path="/login" component={Login} /> */}
            <Route exact path="/text" component={UsersList} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
