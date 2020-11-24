import React, { useEffect, useState } from 'react';
import { Switch, Route, Router, Redirect } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import LandingPage from './components/LandingPage';
import { history } from './helpers/history';
import CategoryPage from './components/CategoryPage';
import ProfilePage from './components/ProfilePage';
import { itemActions } from './actions/itemActions';


const protectedRoute = ({ component: Component, loggedIn, ...rest }) => {
    if (loggedIn) return <Route {...rest} component={Component} />;
    else return <Redirect to="/" />;
  };
  const mapStateToProps = (state) => {
    return { loggedIn: !!state.auth.loggedIn || !!state.register.loggedIn};
  };

  const ConnectedProtectedRoute = connect(mapStateToProps, null)(protectedRoute);

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadItems = () => {
      dispatch(itemActions.getAllItems()); // Enter the back-end and add all items to the store.
      setLoading(false); // Change loading status so that the application renders.
    }
    loadItems();
  }, [dispatch]);

  if(loading) return null;
  return (
      <Router history={history}>
        <Switch>
            <ConnectedProtectedRoute
                exact path="/users/:userId"
                component={ProfilePage} />
            <Route
                exact path="/"
                render={(props) => <LandingPage {...props}></LandingPage>}>
            </Route>
            {/* <Route exact path="/users/:userId"
            render={(props) => <ProfilePage {...props}></ProfilePage>} /> */}
            <Route exact path="/category/:categoryId"
            render={(props) => <CategoryPage {...props}></CategoryPage>} />
        </Switch>
      </Router>
  );
}

export default App;
