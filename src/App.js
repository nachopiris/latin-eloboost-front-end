import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Index from "./components/Index";
import Checkout from "./components/Checkout";
import PaymentRedirect from "./components/PaymentRedirect";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route path="/comprar" component={Index} />
      <Route path="/contacto" component={Contact} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/payment" component={PaymentRedirect} />
      <Footer />
    </Router>
  );
}

export default App;
