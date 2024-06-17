import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from 'react-router-dom';
import Localhost from "../variable";
import NavigationBar from "./NavigationBar";

const Schedule = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  
  const [movieState, setMovieState] = useState({
    name : "",
    cast : "",
    img_url : "",
    sinopsis : "",
    director : "",
    age : 0,
    duration : 0,
    trailer_url : "",
    price: 0,
  });
  
  const [listScheduleState, setListScheduleState] = useState([]);

  async function getMovieData() {

    const id = searchParams.get("id");

    const data = await axios.get(`${Localhost}/movie/${id}`);
    const dataSchedule = await axios.get(`${Localhost}/schedule/movie/${id}`);

    setMovieState(data.data.movie);
    setListScheduleState(dataSchedule.data.studios_schedule);
  }

  useEffect(() => {
    getMovieData()
  }, [])

  return (
    <>
    <NavigationBar selectedCity={''} />
    <div>
      <div className="movie-info-container">
        <div className="movie-info">
          <img
             src={movieState.img_url ? movieState.img_url : ''} 
            alt="BALADA SI ROY"
            className="movie-poster"
          />
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
            <div className="movie-section">
              <h2>Sinopsis</h2>
              <p>
              {movieState.sinopsis}
              </p>
            </div>
            <div className="movie-section">
              <h2>Director</h2>
              <p>
              {movieState.director}
              </p>
            </div>
            <div className="movie-section">
              <h2>Cast</h2>
              <p>
              {movieState.cast}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="schedule-container">
        <h2>Jadwal dan Studio</h2>
        <div className="schedule">
          {
            listScheduleState.map( studio => (
              <div className="schedule-item">
                <h3>{studio.name}</h3>
                <p>03-06-2024</p>
                <p>Rp {movieState.price.toLocaleString()}</p>
                <div className="showtimes">
                  {
                    studio.schedule.map(({jadwal, id, id_movie,id_studio}) => (
                  <Link to={`/Seats?id_jadwal=${id}&id_movie=${id_movie}&id_studio=${id_studio}`} className="showtime-link">
                    <button className="showtime-button">{jadwal}</button>
                  </Link>
                    ))
                  }
                  
                </div>
                <Link to="/fnb">
                <i className="fas fa-utensils fnb-icon"></i>
                </Link>
              </div>
            ))
          }
          
        </div>
      </div>
    </div>
    </>
  );
};

export default Schedule;
