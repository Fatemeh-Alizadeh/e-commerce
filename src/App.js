import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Kids from './pages/Kids'
import Mens from './pages/Mens'
import Womens from './pages/Womens'
import New from './pages/New'
import Sale from './pages/Sale'
import Best from './pages/Best'
import Cart from './pages/Cart';
import WishList from './pages/WishList'


import NavBar from './components/NavBar';
import Footer from './components/Footer';



function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route  path="/WishList">
          <WishList />
        </Route>
         <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Kids">
          <Kids />
        </Route>
        <Route path="/Mens">
          <Mens />
        </Route>
        <Route  path="/Womens">
          <Womens />
        </Route>
         <Route path="/Cart">
          <Cart />
        </Route>
         <Route path="/New">
          <New />
        </Route>
           <Route path="/Best">
            <Best />
        </Route>
             <Route path="/Sale">
          <Sale />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
