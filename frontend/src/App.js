import './index.css';
import React from 'react';
import { Navbar, Sidebar, Footer } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path="/"></Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
