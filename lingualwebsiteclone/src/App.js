import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Profile1 from "./components/Profile1/";
import Profile2 from "./components/Profile2/";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <h1>Home Component</h1>} />
        <Route exact path="/1" component={Profile1} />
        <Route exact path="/2" component={Profile2} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
