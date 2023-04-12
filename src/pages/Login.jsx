import React from 'react';
import '../styles/Login.scss';
import logo from '../../public/asset/logos/logo_yard_sale.svg';

const Login = () => {
  return (
    <div className="login">
      <div className="form-container">
        <img src={logo} alt="logo" className="logo" />
        <form action className="form">
          <label htmlFor="email" className="label">Email address</label>
          <input type="email" id="email" placeholder="platzi@example.com" className="input input-email" />
          <label htmlFor="password" className="label">Password</label>
          <input type="password" id="password" placeholder="*********" className="input input-password" />
          <button className="primary-button login-button">
        Log in
          </button>
          <a href="./">
        Forgot my password
          </a>
        </form>
        <button className="secondary-button signup-button">
      Sign up
        </button>
      </div>
    </div>

  );
};

export default Login;
