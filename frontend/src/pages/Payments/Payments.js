import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import Localhost from "../../variable";
import NavigationBar from "../NavigationBar";

function Payments() {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const [tokenState, setTokenState] = useState('');
  const [paymenState, setPaymenState] = useState(false);
  const [scheduleState, setScheduleState] = useState({});

  const [studioState, setStudioState] = useState({
    id: "",
    name: "",
    address: "",
  });

  const [movieState, setMovieState] = useState({
    name: "",
    cast: "",
    img_url: "",
    sinopsis: "",
    director: "",
    age: 0,
    duration: 0,
    trailer_url: "",
    price: 0,
  });

  async function initData() {

    const scheduleId = searchParams.get("id_jadwal");

    const scheduleData = await axios.get(`${Localhost}/schedule/${scheduleId}`);

    setScheduleState(scheduleData.data.schedule);

    const movieData = await axios.get(`${Localhost}/movie/${scheduleData.data.schedule.id_movie}`);

    const studioData = await axios.get(`${Localhost}/studio/${scheduleData.data.schedule.id_studio}`);


    // const dataSchedule = await axios.get(`${Localhost}/schedule/movie/${id}`);

    setMovieState(movieData.data.movie);
    setStudioState(studioData.data.studio)
    // setListScheduleState(dataSchedule.data.studios_schedule);
  }

  useEffect(() => {
    initData()
  }, [])

  const handlePayNowClick = async () => {
    // console.log("test");
    try {

      const seatLength = searchParams.get("seats").split(",").length;

      const data = await axios.post(`${Localhost}/ticket/payment`, {
        "amount": seatLength * movieState.price + 3000,
      });



      setTokenState(data.data.transactionToken)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (tokenState) {
      window.snap.pay(tokenState, {
        onSuccess: () => {

          searchParams.get("seats").split(",").map(seat => {
            axios.post(`${Localhost}/ticket`, {
              "seat_no": seat,
              "id_schedule": scheduleState.id,
              "price": movieState.price
              // "amount" : seatLength * movieState.price + 3000,                    
            });
          })

          setTokenState("")
          setPaymenState(true);
        }
      })
    }
  }, [tokenState])

  useEffect(() => {
    const midtransUrl = "https://app.sandbox.midtrans.com/snap/snap.js";

    let scriptTag = document.createElement("script")
    scriptTag.src = midtransUrl;

    const clientKey = "SB-Mid-client-11JFG0Njs_EKt7u6";
    scriptTag.setAttribute("data-client-key", clientKey);

    document.body.appendChild(scriptTag)

    return () => {
      document.body.removeChild(scriptTag)
    }
  }, [])

  if (paymenState) {
    const { id, id_movie, id_studio } = scheduleState;
    return <Navigate to={`/Seats?id_jadwal=${id}&id_movie=${id_movie}&id_studio=${id_studio}`} />
  }

  return (
    <>
    <NavigationBar selectedCity={''} />
      <div className="payment-container">
        <script type="text/javascript"
          src="https://app.stg.midtrans.com/snap/snap.js"
          data-client-key="Mid-client-Nuq0nZ0HQDJWqU5o"></script>
        <div className="right-section">
          <div className="film-card">
            <h3>Payments Detail</h3>
            <div className="film-detail">
              <div className="film-poster">
                <img src={movieState.img_url} alt="Movie poster" />
              </div>
              <div className="film-info">
                <h4>{movieState.name}</h4>
                <div className="info-item">
                  <span>Cinema</span>
                  <span>{studioState.name}</span>
                </div>
                <div className="info-item">
                  <span>Date & Time</span>
                  <span>Monday, 3 Jun 2024 - 22:10</span>
                </div>
                <div className="info-item">
                  <span>Studio</span>
                  <span>REGULAR 2D</span>
                </div>
                <div className="info-item">
                  <span>Seats</span>
                  <span>{searchParams.get("seats").split(",").join("|")}</span>
                </div>
              </div>
            </div>
            <div className="separator-below-poster"></div>
            <div className="payment-details">
              <h4>Payment Detail</h4>
              <div className="detail-item">
                <span>Ticket price</span>
                <span>Rp{movieState.price.toLocaleString()}</span>
              </div>
              <div className="detail-item">
                <span>Convenience fee</span>
                <span>Rp{(3000).toLocaleString()}</span>
              </div>
              <div className="detail-item">
                <span>Admin Fee</span>
                <p>Free</p>
              </div>
            </div>
            <div className="separator-below-admin-fee"></div>
            <div className="payment-details">
              <div className="detail-item total">
                <span>Total</span>
                <span>Rp{((searchParams.get("seats").split(",").length * movieState.price) + 3000).toLocaleString()}</span>
              </div>
            </div>
            {/* <button className="pay-now-button" onClick={handlePayNowClick}>Pay Now</button> */}
            <button className="pay-now-button" onClick={handlePayNowClick}>Pay Now</button>
          </div>
        </div>

      </div>
    </>
  );
}

export default Payments;
