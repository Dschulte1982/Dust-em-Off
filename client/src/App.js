import React from 'react';
import { BrowserRouter, Switch, Route, Router, Redirect, NavLink } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
import UsersList from './components/UsersList';
import { history } from './helpers/history';
import CategoryPage from './components/CategoryPage';


// const isLoggedIn = () => {
//     return localStorage.getItem()
// }

const protectedRoute = ({ component: Component, loggedIn, ...rest }) => {
    console.log(loggedIn)
    if (loggedIn) return <Route {...rest} component={Component} />;
    else return <Redirect to="/landing" />;
  };
  const mapStateToProps = (state) => {
    return { loggedIn: !!state.auth.loggedIn || !!state.register.loggedIn};
  };

  const ConnectedProtectedRoute = connect(mapStateToProps, null)(protectedRoute);

function App() {
  return (
    <Router history={history}>
        <Switch>
            <ConnectedProtectedRoute
                exact path="/home"
                component={HomePage}
            ></ConnectedProtectedRoute>
            <Route
                exact path="/"
                render={(props) => <LandingPage {...props}></LandingPage>}>
            </Route>
            <Route path="/category"
            render={(props) => <CategoryPage {...props}></CategoryPage>} />
        </Switch>
    </Router>
  );
}

export default App;
