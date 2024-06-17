import React from 'react';
import MainContent from './MainContent';
import { Link } from 'react-router-dom';
import NavigationBar from '../pages/NavigationBar';

const Home = ({ selectedCity }) => {
  return (
    <>
    <NavigationBar selectedCity={selectedCity} />
    <div>
      <h1>Welcome to TICKETBioskop</h1>
      {selectedCity && (
        <p>Playing in: {selectedCity}</p>
      )}
      <Link to="/cityMenu"></Link>
      <MainContent />
    </div>
    </>
  );
}

export default Home;
