import React from "react";
import { Link } from 'react-router-dom';

const Schedule = () => {
  return (
    <div>
      <div className="movie-info-container">
        <div className="movie-info">
          <img
            src="/img/catalog/balada-si-roy.jpg"
            alt="BALADA SI ROY"
            className="movie-poster"
          />
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
            <div className="movie-section">
              <h2>Sinopsis</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua...
              </p>
            </div>
            <div className="movie-section">
              <h2>Director</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua...
              </p>
            </div>
            <div className="movie-section">
              <h2>Cast</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua...
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="schedule-container">
        <h2>Jadwal dan Studio</h2>
        <div className="schedule">
          <div className="schedule-item">
            <h3>BOEMI KEDATON XXI</h3>
            <p>03-06-2024</p>
            <p>Rp 40,000</p>
            <div className="showtimes">
              <Link to="/Seats" className="showtime-link">
                <button className="showtime-button">13:30</button>
              </Link>
              <Link to="/Seats" className="showtime-link">
                <button className="showtime-button">15:10</button>
              </Link>
              <Link to="/Seats" className="showtime-link">
                <button className="showtime-button">16:50</button>
              </Link>
              <Link to="/Seats" className="showtime-link">
                <button className="showtime-button">18:30</button>
              </Link>
            </div>
            <Link to="/fnb">
            <i className="fas fa-utensils fnb-icon"></i>
            </Link>
          </div>
          <div className="schedule-item">
            <h3>CENTRAL LAMPUNG XXI</h3>
            <p>03-06-2024</p>
            <p>Rp 40,000</p>
            <div className="showtimes">
              <Link to="/Seats" className="showtime-link">
                <button className="showtime-button">13:05</button>
              </Link>
              <Link to="/Seats" className="showtime-link">
                <button className="showtime-button">14:45</button>
              </Link>
              <Link to="/Seats" className="showtime-link">
                <button className="showtime-button">18:40</button>
              </Link>
            </div>
            <Link to="/fnb">
            <i className="fas fa-utensils fnb-icon"></i>
            </Link>
          </div>
          <div className="schedule-item">
            <h3>CIPLAZ LAMPUNG XXI</h3>
            <p>03-06-2024</p>
            <p>Rp 40,000</p>
            <div className="showtimes">
              <Link to="/Seats" className="showtime-link">
                <button className="showtime-button">13:35</button>
              </Link>
              <Link to="/Seats" className="showtime-link">
                <button className="showtime-button">15:15</button>
              </Link>
              <Link to="/Seats" className="showtime-link">
                <button className="showtime-button">16:55</button>
              </Link>
            </div>
            <Link to="/fnb">
            <i className="fas fa-utensils fnb-icon"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
