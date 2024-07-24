// pages/index.js
import React from 'react';
import NavBar from '../components/NavBar';

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div className="container mx-auto text-center mt-10">
        <h1 className="text-3xl font-bold">Welcome to AI Image Generation</h1>
      </div>
    </div>
  );
};

export default HomePage;
