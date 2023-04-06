import React from 'react';
import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header'
import Gmaps from './components/maps/Gmaps';
import Footer from './components/footer/Footer'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Gmaps />
      <Footer />
    </div>
  );
}

export default App;
