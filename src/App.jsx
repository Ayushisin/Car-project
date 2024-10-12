import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import SingInPage from './SingInPage';
import CarSelection from './CarSelection';  

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<SingInPage />} />
        <Route path="/car-selection" element={<CarSelection  />} /> {/* New route */}
      </Routes>
    </Router>
  );
};

export default App;
