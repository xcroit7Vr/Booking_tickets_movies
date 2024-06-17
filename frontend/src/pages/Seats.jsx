import React, { useEffect, useState } from 'react';
import Localhost from '../variable';
import axios from 'axios';
import { Link, useSearchParams } from 'react-router-dom';
import NavigationBar from './NavigationBar';

const rows = Array.from({ length: 10 }, (_, i) => String.fromCharCode(65 + i));
const cols = Array.from({ length: 10 }, (_, i) => i + 1);

const initialSeats = rows.reduce((acc, row) => {
  cols.forEach(col => acc.push({ row, col, selected: false, occupied: false }));
  return acc;
}, []);

const Seat = ({ row, col, selected, occupied, onClick }) => (
  <div
    className={`seat ${selected ? 'selected' : ''} ${occupied ? 'occupied' : ''}`}
    onClick={() => !occupied && onClick(row, col)}
  >
    {row}{col}
  </div>
);

function Seats() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [seats, setSeats] = useState(initialSeats);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [ticketState , setTicketState] = useState();

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

  const [studioState, setStudioState] = useState({
    id : "",
    name: "",
    address: "",
  });

  async function initData() {

    const id = searchParams.get("id_jadwal");
    const id_movie = searchParams.get("id_movie");
    const id_studio = searchParams.get("id_studio");

    const dataSchedule = await axios.get(`${Localhost}/ticket/schedule/${id}`);

    const dataMovie = await axios.get(`${Localhost}/movie/${id_movie}`);

    const dataStudio = await axios.get(`${Localhost}/studio/${id_studio}`);

    // const dataSchedule = await axios.get(`${Localhost}/ticket/schedule/${id}`);
    
    setTicketState(dataSchedule.data.tickets);
    setStudioState(dataStudio.data.studio);
    setMovieState(dataMovie.data.movie);
  }

  useEffect(() => {
    initData()
    console.log(seats);
  }, [])

  const handleSeatClick = (row, col) => {
    const newSeats = seats.map(seat =>
      seat.row === row && seat.col === col
        ? { ...seat, selected: !seat.selected }
        : seat
    );
    setSeats(newSeats);

    const newSelectedSeats = newSeats
      .filter(seat => seat.selected)
      .map(seat => `${seat.row}${seat.col}`);
    setSelectedSeats(newSelectedSeats);
  };

  const selectedSeatsCount = selectedSeats.length;

  return (
    <>
    <NavigationBar selectedCity={''} />
    <div className="App">
      <div className="cinema">
        <h2 className="choose-seat">Choose Seat</h2>
        <div className="seats">
          {rows.map(row =>
            cols.map(col => {
              const seat = seats.find(seat => seat.row === row && seat.col === col);
              console.log();
              // if(){
                
              // }
              return (
                <Seat
                  key={`${row}${col}`}
                  row={row}
                  col={col}
                  selected={seat.selected}
                  // occupied={ typeof ticketState[`${row}${col}`] !== 'undefined' ? true : false}
                  occupied={ ticketState ? ticketState[`${row}${col}`] != undefined : false}
                  onClick={handleSeatClick}
                />
              );
            })
          )}
        </div>
        <div className="screen">SCREEN</div>
      </div>
      <div className="booking-info">
        <img src={movieState.img_url} alt="AGAK LAEN" className="movie-poster" />
        <h2>{movieState.name}</h2>
        <p>{studioState.name}</p>
        <p>Fri 17 May 18:45</p>
        <p>Seat Number</p>
        <p className="selected-seats">{selectedSeats.join(', ')}</p>
        <p>{selectedSeatsCount} {selectedSeatsCount === 1 ? 'Seat' : 'Seats'} Selected</p>
        <Link to={`/Payments?id_jadwal=${searchParams.get("id_jadwal")}&seats=${selectedSeats.join(",")}`}>
          <button>Continue</button>
        </Link>
      </div>
    </div>
    </>
  );
}

export default Seats;
