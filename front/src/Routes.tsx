import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import { ProfileForm } from './main/Cadastro';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastro" element={<ProfileForm />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
