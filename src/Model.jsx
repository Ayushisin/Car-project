import React from 'react';
import './Global.css'; 

const Model = ({ isOpen, onClose, brand }) => {
  if (!isOpen) return null; // Don't render anything if not open

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{brand.name} Car Details</h2>
        <img src={brand.imgSrc} alt={brand.name} className="modal-image" />
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eaque commodi nesciunt, blanditiis laborum distinctio placeat itaque, cum eius nulla, optio aut consectetur cumque minima quos sunt possimus quibusdam ipsum!
          The {brand.name} is known for its quality and performance.
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas porro maiores nesciunt minima consequatur debitis. Ratione atque nobis dolores autem. Totam deserunt sit pariatur magnam facere. Neque delectus est voluptatibus.
        </p>
        <button className="close-modal" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Model;