import React from 'react';

const MoviesInfo = ({ selectedCity }) => {
  return (
    <div className="movie-info-container">
      {selectedCity && (
        <p>Playing in: {selectedCity}</p>
      )}
      <div className="movie-info">
        <img src="/img/catalog/balada-si-roy.jpg" alt="Agak Laen" className="movie-poster" />
        <div className="movie-details">
          <h1 className="movie-title">BALADA SI ROY</h1>
          <div className="movie-meta">
            <span className="age-rating">
              <i className="fas fa-user"></i>17+
            </span>
            <span className="duration">
              <i className="fas fa-clock"></i>120 Menit
            </span>
          </div>
          <div className="buttons">
            <button className="buy-ticket-button">
              <a href='/schedule-studio' className="button-link">BUY TICKET</a>
            </button>
          </div>
          <div className="buttons">
            <button className="trailer-button">
              <a href='https://youtu.be/Kv2rtntu_oQ?si=9iWgPEei0wCu9ZmQ' className="button-link">TRAILER</a>
            </button>
          </div>
          <div className="movie-section">
            <h2>Sinopsis</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
          </div>
          <div className="movie-section">
            <h2>Director</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
          </div>
          <div className="movie-section">
            <h2>Cast</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesInfo;
