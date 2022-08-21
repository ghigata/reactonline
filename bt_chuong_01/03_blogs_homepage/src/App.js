import React from "react";
import Header from './components/Header/index.js';
import Footer from './components/Footer/index.js';
import HomePage from './pages/HomePage.js';

function App() {
  return (
    <div className="wrapper-content">
      <Header />
      <HomePage />
      <div className="spacing" />
      <Footer />
    </div>
  );
}

export default App;
