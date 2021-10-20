import './App.css';
import AuthProvider from './contexts/AuthProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import ServiceDetails from './Pages/Home/ServiceDetails/ServiceDetails';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import ScrollToTop from './Pages/ScrollToTop/ScrollToTop';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <ScrollToTop></ScrollToTop>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <PrivateRoute exact path="/:serviceCategory/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
