import React from 'react';
import '../styles/RecoveryPassword.scss';

const RecoveryPassword = () => {
  return (
    <div className="login">
      <div className="form-container">
        <img src="asset/logos/logo_yard_sale.svg" alt="logo" className="logo" />
        <h1 className="title">Email has been sent</h1>
        <p className="subtitle">
          Please check your inbox for instructions on how to reset the password
        </p>
        <div className="email-image">
          <img
            src="./asset/icons/email.svg"
            alt="imagen de carta referente al email"
          />
        </div>
        <button className="primary-button login-button">Login</button>
        <p className="resend">
          <span>Didn&#39t receive the email?</span>
          <a href="./">Resend</a>
        </p>
      </div>
    </div>
  );
};

export default RecoveryPassword;
