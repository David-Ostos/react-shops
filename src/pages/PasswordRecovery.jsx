import React from 'react';
import logo from '../../public/asset/logos/logo_yard_sale.svg';

const PasswordRecovery = () => {
  return (
    <div className="login">
      <div className="form-container">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="title">Password recovery</h1>
        <p className="subtitle">Inform the email address used to create your account</p>

        <form action className="form">
          <label htmlFor="email" className="label">
          Email address
          </label>

          <input
            type="email"
            id="email"
            placeholder="platzi@example.com"
            className="input input input-email"
          />

          <button className="primary-button login-button">Confirm</button>

          <a href="./">
          Back to log in
          </a>
        </form>
      </div>
    </div>
  );
};

export default PasswordRecovery;
