import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import ProductsList from "../ProductsList/ProductsList";
import ProductDetails from "../ProductDetails/ProductDetails";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={ProductsList} />
        <Route path="/product/:productId" exact component={ProductDetails} />
      </Switch>
    </Router>
  );
}

export default App;
