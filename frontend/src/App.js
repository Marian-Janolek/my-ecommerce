import './index.css';
import React from 'react';
import {
  Navbar,
  Sidebar,
  Footer,
  Submenu,
  Loading,
  Featured,
  Card,
  NewCollection,
  OurSortiment,
} from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Submenu />
      <Switch>
        <Route exact path="/"></Route>
      </Switch>
      {/* <Loading /> */}
      <Featured />
      <NewCollection />
      <OurSortiment />
      <Footer />
    </Router>
  );
};

export default App;
