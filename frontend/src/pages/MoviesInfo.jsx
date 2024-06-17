import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Localhost from '../variable';
import NavigationBar from './NavigationBar';

const MoviesInfo = ({ selectedCity }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const [movieState, setMovieState] = useState({
    name : "",
    cast : "",
    img_url : "",
    sinopsis : "",
    director : "",
    age : 0,
    duration : 0,
    trailer_url : ""
  });

  async function getMovieData() {

    const id = searchParams.get("id");

    const data = await axios.get(`${Localhost}/movie/${id}`);

    setMovieState(data.data.movie);
  }

  useEffect(() => {
    getMovieData()
  }, [])


  return (
    <>
      <NavigationBar selectedCity={''} />
      <div className="movie-info-container">
        {selectedCity && (
          <p>Playing in: {selectedCity}</p>
        )}
        <div className="movie-info">
          <img  src={movieState.img_url ? movieState.img_url : ''} alt="Agak Laen" className="movie-poster" />
          <div className="movie-details">
            <h1 className="movie-title">{movieState.name}</h1>
            <div className="movie-meta">
              <span className="age-rating">
                <i className="fas fa-user"></i>{movieState.age}+
              </span>
              <span className="duration">
                <i className="fas fa-clock"></i>{movieState.duration} Menit
              </span>
            </div>
            <div className="buttons">
              <button className="buy-ticket-button">
                <Link to={`/schedule-studio?id=${searchParams.get("id")}`} className="button-link">BUY TICKET</Link>
              </button>
            </div>
            <div className="buttons">
              <button className="trailer-button">
                <a href={movieState.trailer_url} target="_blank" className="button-link">TRAILER</a>
              </button>
            </div>
            <div className="movie-section">
              <h2>Sinopsis</h2>
              <p>{movieState.sinopsis}</p>
            </div>
            <div className="movie-section">
              <h2>Director</h2>
              <p>{movieState.director}</p>
            </div>
            <div className="movie-section">
              <h2>Cast</h2>
              <p>{movieState.cast}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviesInfo;
