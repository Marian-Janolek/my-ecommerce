import './index.css';
import React from 'react';
import { Navbar, Sidebar, Submenu, Loading, Footer } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MenPage, Home, WomenPage, ChildrenPage, LoginPage } from './pages';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Submenu />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/men">
          <MenPage />
        </Route>
        <Route exact path="/women">
          <WomenPage />
        </Route>
        <Route exact path="/children">
          <ChildrenPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
      </Switch>
      <Footer />
      {/* <Loading /> */}
    </Router>
  );
};

export default App;
