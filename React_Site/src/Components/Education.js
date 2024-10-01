import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

// Function to load all images from a specific directory
const loadImages = () => {
  const images = require.context('/public/images/SlideShow', false, /\.(jpg|jpeg|png)$/);
  return images.keys().map((item) => images(item));
};

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const imagePaths = loadImages();
    setImages(imagePaths);
  }, []);

  // Automatically change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  if (images.length === 0) {
    return <div>Loading...</div>; // Loading state while images are being fetched
  }

  return (
    <div {...swipeHandlers} className="slideshow">
      <button onClick={prevImage}>Previous</button>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        style={{ width: '100%', height: 'auto' }}
      />
      <button onClick={nextImage}>Next</button>
    </div>
  );
};

export default Slideshow;
