import React from "react";
import { useNavigate } from "react-router-dom";

function Payments() {
  const navigate = useNavigate();

  const handlePayNowClick = () => {
    navigate('/PaymentConfirmation'); 
  };

  return (
    <div className="payment-container"> 
      <div className="left-section">
        <div className="header">
        </div>
        <div className="payment-methods">
          <h3>Choose Payment Method</h3>
          <div className="method-card">
            <input type="radio" name="payment-method" id="credit-card" />
            <label htmlFor="credit-card">
              Credit Card / Debit Card
              <img src="/img/payment/visa_mastercard.png" alt="Credit Card" />
            </label>
          </div>
          <div className="method-card">
            <input type="radio" name="payment-method" id="gopay" />
            <label htmlFor="gopay">
              GoPay
              <img src="/img/payment/gopay.jpeg" alt="GoPay logo" />
            </label>
          </div>
          <div className="method-card">
            <input type="radio" name="payment-method" id="bca" />
            <label htmlFor="bca">
              BCA Virtual Account
              <img src="/img/payment/bca.png" alt="BCA logo" />
            </label>
          </div>
          <div className="method-card">
            <input type="radio" name="payment-method" id="permata" />
            <label htmlFor="permata">
              Permata Virtual Account
              <img src="/img/payment/permata.png" alt="Permata logo" />
            </label>
          </div>
        </div>
      </div>
      <div className="right-section">
        <div className="film-card">
          <h3>Payments Detail</h3>
          <div className="film-detail">
            <div className="film-poster">
              <img src="/img/catalog/balada-si-roy.jpg" alt="Movie poster" />
            </div>
            <div className="film-info">
              <h4>BALADA SI ROY</h4>
              <div className="info-item">
                <span>Cinema</span>
                <span>KOTACINEMA - Jati Asih</span>
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
                <span>F5|3</span>
              </div>
            </div>
          </div>
          <div className="separator-below-poster"></div>
          <div className="payment-details">
            <h4>Payment Detail</h4>
            <div className="detail-item">
              <span>Ticket price</span>
              <span>Rp25.000</span>
            </div>
            <div className="detail-item">
              <span>Convenience fee</span>
              <span>Rp3.000</span>
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
              <span>Rp28.000</span>
            </div>
          </div>
          <button className="pay-now-button" onClick={handlePayNowClick}>Pay Now</button>
        </div>
      </div>
    </div>
  );
}

export default Payments;
