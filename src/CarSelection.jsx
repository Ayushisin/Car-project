import React, { useState } from 'react';
import './Global.css'; // Assuming your styles are defined here
import Model from './Model';
 
import img1 from "./image/Tata.jpeg";
import img2 from "./image/suzuki.jpeg";
import img3 from "./image/hyundai.jpeg";
import img4 from "./image/bmw.jpeg";
import img5 from "./image/audi.jpeg";

const CarSelection = () => {
  // Array of car brands with corresponding images
  const carBrands = [
    { name: 'Tata', imgSrc: img1 },
    { name: 'Suzuki', imgSrc: img2 },
    { name: 'Hyundai', imgSrc: img3 },
    { name: 'BMW', imgSrc: img4 },
    { name: 'Audi', imgSrc: img5 }
  ];

  // State to track the selected brand and current index for sliding
  const [selectedBrand, setSelectedBrand] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  // Function to handle brand selection
  const handleSelect = (brand) => {
    setSelectedBrand(brand); // Update selected brand state
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : carBrands.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < carBrands.length - 1 ? prevIndex + 1 : 0));
  };

  const handleProceed = () => {
    if (selectedBrand) {
      setIsModalOpen(true); // Open modal when proceed is clicked
    } else {
      alert('Please select a brand first!'); // Alert if no brand is selected
    }
  };

  return (
    <div className="car-selection-container">
      <h2>Select a Car Brand</h2>
      <div className="car-card-wrapper">
        <button className="arrow-btn left" onClick={handlePrev}>&lt;</button> {/* Left arrow */}
        {carBrands.slice(currentIndex, currentIndex + 3).map((brand, index) => ( // Show 3 brands at a time
          <div
            key={index}
            className={`car-card ${selectedBrand.name === brand.name ? 'selected' : ''}`}
            onClick={() => handleSelect(brand)}
          >
            <img src={brand.imgSrc} alt={brand.name} />
            <p>{brand.name}</p>
          </div>
        ))}
        <button className="arrow-btn right" onClick={handleNext}>&gt;</button> {/* Right arrow */}
      </div>
      <button className="proceed-btn" onClick={handleProceed}>Proceed Next</button>

      {/* Modal for displaying car brand details */}
      <Model
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        brand={selectedBrand}
      />
    </div>
  );
};

export default CarSelection;
