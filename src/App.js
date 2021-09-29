import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Kids from './pages/Kids'
import Mens from './pages/Mens'
import Womens from './pages/Womens'
import New from './pages/New'
import Sale from './pages/Sale'
import Best from './pages/Best'
import cart from './pages/Cart';
import WishList from './pages/WishList'
import Cart from './pages/Cart';

import NavBar from './components/NavBar';


function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/WishList">
          <WishList />
        </Route>
         <Route exact path="/Home">
          <Home />
        </Route>
        <Route path="/Kids">
          <Kids />
        </Route>
        <Route path="/Mens">
          <Mens />
        </Route>
        <Route exact path="/Womens">
          <Womens />
        </Route>
         <Route exact path="/Cart">
          <Cart />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
