import './index.css';
import React from 'react';
import {
  Navbar,
  Sidebar,
  Submenu,
  // Loading,
  Footer,
  NewCollection,
  Sale,
} from './components';
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
  ProductPage,
  CheckoutPage,
  CartPage,
  ProfilePage,
  AdminPage,
} from './pages';
import ScrollToTop from './context/scrollToTop';
import SingleProductPage from './pages/SingleProductPage';

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <Navbar />
        <Sidebar />
        <Submenu />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/new">
            <NewCollection />
          </Route>
          <Route exact path="/sale">
            <Sale />
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
          <Route exact path="/products">
            <ProductPage />
          </Route>
          <Route exact path="/checkout">
            <CheckoutPage />
          </Route>
          <Route exact path="/cart">
            <CartPage />
          </Route>
          <Route exact path="/profile">
            <ProfilePage />
          </Route>
          <Route exact path="/admin">
            <AdminPage />
          </Route>
          <Route
            exact
            path="/products/:id"
            children={<SingleProductPage />}
          ></Route>
        </Switch>
        <Footer />
        {/* <Loading /> */}
      </ScrollToTop>
    </Router>
  );
};

export default App;
