import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutMe from './AboutMe';
import MyCity from './MyCity';
import MyFuture from './MyFuture';
import HomePage from './HomePage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/city" element={<MyCity />} />
      <Route path="/future" element={<MyFuture />} />
    </Routes>
  );
}

export default AppRoutes;
