// components/ImageEditor.js
import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';

const ImageEditor = ({ imageUrl }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current);

    // Load the image onto the canvas
    fabric.Image.fromURL(imageUrl, (img) => {
      canvas.setWidth(img.width);
      canvas.setHeight(img.height);
      canvas.add(img);
    });

    // Add brush tool
    canvas.isDrawingMode = true;

    return () => {
      canvas.dispose();
    };
  }, [imageUrl]);

  const handleBrushMode = () => {
    const canvas = canvasRef.current.__canvas;
    canvas.isDrawingMode = true;
  };

  const handleEraseMode = () => {
    const canvas = canvasRef.current.__canvas;
    canvas.isDrawingMode = false;

    canvas.forEachObject((obj) => {
      if (obj.get('type') === 'path') {
        canvas.remove(obj);
      }
    });
  };

  return (
    <div className="text-center mt-10">
      <button onClick={handleBrushMode} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
        Brush
      </button>
      <button onClick={handleEraseMode} className="bg-red-500 text-white px-4 py-2 rounded">
        Erase
      </button>
      <canvas ref={canvasRef} className="border mt-4"></canvas>
    </div>
  );
};

export default ImageEditor;
