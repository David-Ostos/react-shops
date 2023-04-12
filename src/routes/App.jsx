import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../styles/global.scss';
import Layout from '../containers/Layout';
import CreatePassword from '../pages/CreatePassword';
import SendPassword from '../pages/SendPassword';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import CreateAccount from '../pages/CreateAccount';
import Login from '../pages/Login';
import MyAccount from '../pages/MyAccount';
import MyOrder from '../pages/MyOrder';
import MyOrders from '../containers/MyOrders';
import PasswordRecovery from '../pages/PasswordRecovery';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={< Home />} />
          <Route path='/login' element={< Login />} />
          <Route path='/password-recovery' element={< PasswordRecovery />} />
          <Route path='/send-password' element={ < SendPassword />} />
          <Route path='/new-password' element={ < CreatePassword />} />
          <Route path='/my-account' element={ < MyAccount /> } />
          <Route path='/sign-up' element={ < CreateAccount />} />
          <Route path='/my-order' element={ < MyOrder /> } />
          <Route path='/my-order' element={ < MyOrders /> } />
          <Route path='*' element={< NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
