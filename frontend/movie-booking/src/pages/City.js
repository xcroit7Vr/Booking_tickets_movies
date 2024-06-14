import React from 'react';
import { Link } from 'react-router-dom';

const cities = [
  'AMBON',
  'BALIKPAPAN',
  'BANDUNG',
  'BANJARMASIN',
  'BATAM',
  'BEKASI',
  'BENGKULU',
  'BOGOR',
  'BONDOWOSO',
  'DENPASAR',
  'JAKARTA',
  'MEDAN',
  'PALEMBANG',
  'SURABAYA',
  'YOGYAKARTA'
];

const City = ({ setSelectedCity }) => {
  const handleCityClick = (city) => {
    setSelectedCity(city);
  };

  return (
    <div className="container">
      <h1 className="title">Set City</h1>
      <div className="city-container">
        {cities.map((city, index) => (
          <Link key={index} to="/" className={`city-item`} onClick={() => handleCityClick(city)}>
            {city}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default City;