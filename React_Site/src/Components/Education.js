import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable'; // Import swipeable hook

const TOTAL_IMAGES = 5; // Number of images in your folder (adjust this)

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === TOTAL_IMAGES - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3 seconds interval

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === TOTAL_IMAGES - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? TOTAL_IMAGES - 1 : prevIndex - 1
    );
  };

  const getImagePath = (index) => `images/SlideShow/${index}.jpg`;

  // Swipe handlers using useSwipeable hook
  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextImage,  // Swipe left to go to the next image
    onSwipedRight: prevImage, // Swipe right to go to the previous image
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // Enables swipe with a mouse for testing on desktop
  });

  return (
    <div {...swipeHandlers} className="slideshow">
      <button onClick={prevImage}>Previous</button>
      <img
        src={getImagePath(currentIndex)}
        alt={`Slide ${currentIndex}`}
        style={{ width: '100%', height: 'auto' }}
      />
      <button onClick={nextImage}>Next</button>
    </div>
  );
};

export default Slideshow;
