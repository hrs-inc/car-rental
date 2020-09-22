import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Skill from './components/Skill';
import Inventory from './components/Inventory';
import Footer from './components/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Header />
        <Skill />
        <Inventory />
        <Footer />
      </Router>
    );
  }
}

export default App;
