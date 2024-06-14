import React, { useState } from 'react';

const Dashboard = () => {
  const films = [
    { id: 1, film: 'AGAK LAEN', category: 'Comedy', ticket: 'Rp. 20.000' },
    { id: 2, film: 'AGAK LAEN', category: 'Comedy', ticket: 'Rp. 20.000' },
    { id: 3, film: 'Waktu Magrib', category: 'Horror', ticket: 'Rp. 20.000' },
    { id: 4, film: 'Waktu Magrib', category: 'Horror', ticket: 'Rp. 20.000' },
    { id: 5, film: '172 Days', category: 'Romansa/Drama', ticket: 'Rp. 20.000' },
    { id: 6, film: '172 Days', category: 'Romansa/Drama', ticket: 'Rp. 20.000' },
    { id: 7, film: 'AGAK LAEN', category: 'Comedy', ticket: 'Rp. 20.000' },
    { id: 8, film: 'AGAK LAEN', category: 'Comedy', ticket: 'Rp. 20.000' },
  ];

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

  return (
    <div className="dashboard-app">
      <div className="dashboard-layout-container">
        <div className="dashboard-film-card dashboard-card">
          <div className="dashboard-card-header">
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
                <th>Category</th>
                <th>Ticket</th>
              </tr>
            </thead>
            <tbody>
              {(showAllFilms ? films : films.slice(0, 5)).map((film) => (
                <tr key={film.id}>
                  <td>{film.id}</td>
                  <td>{film.film}</td>
                  <td>{film.category}</td>
                  <td>{film.ticket}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="dashboard-fnb-card dashboard-card">
          <div className="dashboard-card-header">
            <h2>Product FnB</h2>
            <button onClick={toggleShowAllFnB}>
              {showAllFnB ? 'Show Less' : 'View All'}
            </button>
          </div>
          <table>
            <thead>
              <tr>
                <th>ID Fnb</th>
                <th>FnB</th>
                <th>Category</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {(showAllFnB ? fnbItems : fnbItems.slice(0, 5)).map((item) => (
                <tr key={item.id}>
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
