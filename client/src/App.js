import React from 'react';
import { Switch, Route, Router, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import LandingPage from './components/LandingPage';
import { history } from './helpers/history';
import CategoryPage from './components/CategoryPage';
import ProfilePage from './components/ProfilePage';
// import { userActions } from './actions/userActions';


// const isLoggedIn = () => {
//     return localStorage.getItem()
// }

const protectedRoute = ({ component: Component, loggedIn, ...rest }) => {
    if (loggedIn) return <Route {...rest} component={Component} />;
    else return <Redirect to="/" />;
  };
  const mapStateToProps = (state) => {
    return { loggedIn: !!state.auth.loggedIn || !!state.register.loggedIn};
  };

  const ConnectedProtectedRoute = connect(mapStateToProps, null)(protectedRoute);

function App() {
  // const [loading, setLoading] = useState(true);
  // // const dispatch = useDispatch();
  // // useEffect(() => {
  // //   const loadUser = async () => {
  // //     // enter your back end route to get the current user
  // //     const res = await fetch("/api/users/current");
  // //     if (res.ok) {
  // //       res.data = await res.json(); // current user info - obj with key of user
  // //       dispatch(userActions.setUser(res.data.userId, res.data.username, res.data.email ));
  // //     }
  // //     setLoading(false);
  // //   }
  // //   loadUser();
  // // }, [dispatch]);

  // if(loading) return null;
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
