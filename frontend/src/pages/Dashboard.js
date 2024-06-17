import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Localhost from '../variable';

const Dashboard = () => {
  const [moviesState, setMoviesState] = useState([]);

  const fnbItems = [
    { id: 1, fnb: 'aqua', category: 'Drink', price: 'Rp. 20.000' },
    { id: 2, fnb: 'snack', category: 'Food', price: 'Rp. 20.000' },
    { id: 3, fnb: 'Popcorn', category: 'Popcorn', price: 'Rp. 65.000' },
    { id: 4, fnb: 'Popcorn', category: 'Popcorn', price: 'Rp. 65.000' },
    { id: 5, fnb: 'aqua', category: 'Drink', price: 'Rp. 20.000' },
    { id: 6, fnb: 'Orenge just', category: 'Drink', price: 'Rp. 40.000' },
    { id: 7, fnb: 'Orenge just', category: 'Drink', price: 'Rp. 40.000' },
    { id: 8, fnb: 'Favourite Combo 1 with 2 Lychee Tea', category: 'Combo', price: 'Rp. 90.000' },
  ];

  const [showAllFilms, setShowAllFilms] = useState(false);
  const [showAllFnB, setShowAllFnB] = useState(false);

  const toggleShowAllFilms = () => {
    setShowAllFilms(!showAllFilms);
    setShowAllFnB(false); // Close FnB card if open
  };

  const toggleShowAllFnB = () => {
    setShowAllFnB(!showAllFnB);
    setShowAllFilms(false); // Close film card if open
  };

  async function  initData () {
    const data = await axios.get(`${Localhost}/movie`);
    
    setMoviesState(data.data.movies);
  }

  useEffect( () => {

    initData();

  }, [])

  return (
    <div className="App">
      <div className="layout-container">
        <div className="film-card card">
          <div className="card-header">
            <h2>Top Films</h2>
            <button onClick={toggleShowAllFilms}>
              {showAllFilms ? 'Show Less' : 'View All'}
            </button>
          </div>
          <table>
            <thead>
              <tr>
                <th>ID Film</th>
                <th>Film</th>
                <th>Director</th>
                <th>Ticket</th>
                
              </tr>
            </thead>
            <tbody>
              {(showAllFilms ? moviesState : moviesState.slice(0, 5)).map((film) => (
                <tr key={"movie"+film.id}>
                  <td>{film.id}</td>
                  <td>{film.name}</td>
                  <td>{film.director}</td>
                  <td>Rp. {film.price.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="fnb-card card">
          <div className="card-header">
            <h2>Product FnB</h2>
            <button onClick={toggleShowAllFnB}>
              {showAllFnB ? 'Show Less' : 'View All'}
            </button>
          </div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>FnB</th>
                <th>Category</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {(showAllFnB ? fnbItems : fnbItems.slice(0, 5)).map((item, idx) => (
                <tr key={"FnB"+idx}>
                  <td>{item.id}</td>
                  <td>{item.fnb}</td>
                  <td>{item.category}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
