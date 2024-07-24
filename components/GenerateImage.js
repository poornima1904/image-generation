// components/GenerateImage.js
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../src/firebaseConfig';
import { canGenerateImage, recordImageGeneration } from '../src/rateLimit';
import { setInKV, getFromKV } from '../src/kvConfig';
import ImageEditor from './ImageEditor';

const GenerateImage = () => {
  const [user] = useAuthState(auth);
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  const generateImage = async () => {
    if (!user) {
      setError('You must be logged in to generate images.');
      return;
    }

    const canGenerate = await canGenerateImage(user.uid);

    if (!canGenerate) {
      setError('You have reached your limit of 3 images per hour.');
      return;
    }

    // Simulate image generation with a random image from a predefined list
    const images = [
      '/images/image1.jpg',
      '/images/image2.jpg',
      '/images/image3.jpg',
    ];
    const randomImage = images[Math.floor(Math.random() * images.length)];

    // Save the image URL to Vercel KV
    const allKeys = (await getFromKV('allKeys')) || [];
    const newKey = `image:${allKeys.length + 1}`;
    await setInKV(newKey, randomImage);
    await setInKV('allKeys', [...allKeys, newKey]);

    setImage(randomImage);
    setError(null);
    await recordImageGeneration(user.uid);
  };

  return (
    <div className="text-center mt-10">
      {error && <p className="text-red-500">{error}</p>}
      {image && (
        <div>
          <ImageEditor imageUrl={image} />
        </div>
      )}
      <button
        onClick={generateImage}
        className="bg-green-500 text-white px-4 py-2 rounded mt-4"
      >
        Generate Image
      </button>
    </div>
  );
};

export default GenerateImage;
