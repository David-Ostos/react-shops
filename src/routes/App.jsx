import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../styles/global.scss';
import Layout from '../containers/Layout';
import CreatePassword from '../containers/CreatePassword';
import RecoveryPassword from '../containers/RecoveryPassword';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={< Home />} />
          <Route path='/create-password' element={ <CreatePassword />} />
          <Route path='/recovery-password' element={ <RecoveryPassword />} />
          <Route path='*' element={< NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
