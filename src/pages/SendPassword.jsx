import React from 'react';
import '@styles/SendPassword.scss';
import logo from '@logos/logo_yard_sale.svg';
import iconEmail from '@icons/email.svg';

const SendPassword = () => {
  return (
    <div className="login">
      <div className="form-container container-recovery">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="title">Email has been sent</h1>
        <p className="subtitle">
          Please check your inbox for instructions on how to reset the password
        </p>
        <div className="email-image">
          <img
            src={iconEmail}
            alt="imagen de carta referente al email"
          />
        </div>
        <button className="primary-button login-button">Login</button>
        <p className="resend">
          <span>Didn&#39;t receive the email?</span>
          <a href="./">Resend</a>
        </p>
      </div>
    </div>
  );
};

export default SendPassword;
