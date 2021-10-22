import './index.css';
import React from 'react';
import { Navbar, Sidebar, Submenu, Loading, Footer } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  MenPage,
  Home,
  WomenPage,
  ChildrenPage,
  LoginPage,
  OurStoresPage,
  FAQPage,
  DeliveryPage,
  PaymentsPage,
  ProductReclaimPage,
  ProductExchangePage,
  ProductHelpPage,
  CustomerCarePage,
} from './pages';

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
        <Route exact path="/stores">
          <OurStoresPage />
        </Route>
        <Route exact path="/faq">
          <FAQPage />
        </Route>
        <Route exact path="/delivery">
          <DeliveryPage />
        </Route>
        <Route exact path="/payments">
          <PaymentsPage />
        </Route>
        <Route exact path="/reclaim">
          <ProductReclaimPage />
        </Route>
        <Route exact path="/exchange">
          <ProductExchangePage />
        </Route>
        <Route exact path="/help">
          <ProductHelpPage />
        </Route>
        <Route exact path="/care">
          <CustomerCarePage />
        </Route>
      </Switch>
      <Footer />
      {/* <Loading /> */}
    </Router>
  );
};

export default App;
