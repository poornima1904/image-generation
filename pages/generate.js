// pages/generate.js
import React from 'react';
import NavBar from '../components/NavBar';
import GenerateImage from '../components/GenerateImage';

const GeneratePage = () => {
  return (
    <div>
      <NavBar />
      <GenerateImage />
      <div className="container mx-auto text-center mt-10">
        <h1 className="text-3xl font-bold">Generate Images</h1>
      </div>
    </div>
  );
};

export default GeneratePage;
