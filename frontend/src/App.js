import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Skill from "./components/Skill";
import Inventory from "./components/Inventory";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Skill />
        <Inventory />
        <Footer />
      </div>
    );
  }
}

export default App;
