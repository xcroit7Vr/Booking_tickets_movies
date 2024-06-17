import React from 'react';
import NavigationBar from '../NavigationBar';

const PaymentConfirmation = () => {
  return (
    <>
      <NavigationBar selectedCity={''} />
      <div className="confirm-payment-container">
        <div className="confirm-payment-header">
          <div className="confirm-payment-gopay-logo">GoPay</div>
          <div className="confirm-payment-total-tagihan">Total Tagihan</div>
          <div className="confirm-payment-amount">Rp. 58.000</div>
        </div>
        <div className="confirm-payment-divider"></div>
        <div className="confirm-payment-qr-section">
          <img src="/img/code/qr-code.png" alt="QR Code" className="confirm-payment-qr-code" />
        </div>
        <div className="confirm-payment-divider"></div>
        <div className="confirm-payment-instructions">
          <h2>How to pay via GoPay</h2>
          <ol>
            <li>Buka aplikasi Gojek dan tekan tombol Scan QR</li>
            <li>Scan kode QR yang muncul pada halaman pembayaran</li>
            <li>Lihat detail pembayaran dan tekan Pay</li>
            <li>Masukkan pin Gopay anda</li>
            <li>Pembayaran selesai</li>
          </ol>
        </div>
        <div className="confirm-payment-divider"></div>
        <div className="confirm-payment-confirmation">
          <p>Sudah menyelesaikan pembayaran?</p>
          <button className="confirm-payment-confirmation-button">Konfirmasi Pembayaran</button>
        </div>
      </div>
    </>
  );
};

export default PaymentConfirmation;
