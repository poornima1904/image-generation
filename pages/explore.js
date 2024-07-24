// pages/explore.js
import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import { getFromKV } from '../src/kvConfig';

const ExplorePage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const allKeys = await getFromKV('allKeys');
      const imageUrls = await Promise.all(allKeys.map(async (key) => await getFromKV(key)));
      setImages(imageUrls);
    };

    fetchImages();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="container mx-auto text-center mt-10">
        <h1 className="text-3xl font-bold">Explore Images</h1>
        <div className="grid grid-cols-3 gap-4 mt-10">
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Generated ${index}`} className="mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
