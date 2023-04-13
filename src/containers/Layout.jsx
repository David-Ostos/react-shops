import React from 'react';
import Header from '@components/Header';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <Header/>
      {children}
    </div>
  );
};

export default Layout;
