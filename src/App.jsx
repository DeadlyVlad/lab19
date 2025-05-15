import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage';
import AboutMe from './pages/AboutMe';
import MyCity from './pages/MyCity';
import MyFuture from './pages/MyFuture';
import './App.css';

function App() {
  return (
    <Router basename="/lab19">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/city" element={<MyCity />} />
        <Route path="/future" element={<MyFuture />} />
      </Routes>
    </Router>
  );
}

export default App;
