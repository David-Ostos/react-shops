import React from 'react';
import '@styles/MyAccount.scss';

const MyAccount = () => {
  return (
    <div className="login">
      <div className="form-container account">
        <h1 className="title">My account</h1>
        <form action="" className="form">
          <label htmlFor="name" className="label">Name</label>
          <p className="value">
        Del Valle
          </p>
          <label htmlFor="email" className="label">Email address</label>
          <p className="value">
        Platzi@example.com
          </p>
          <label htmlFor="password" className="label">Password</label>
          <p className="value">
        ************
          </p>
          <button className="secondary-button edit-button">Edit</button>
        </form>
      </div>
    </div>

  );
};

export default MyAccount;
