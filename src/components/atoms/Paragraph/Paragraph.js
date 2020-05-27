import React from 'react';
import './paragraph.css';

const Paragraph = ({ text }) => {
  return (
    <div className="paragraph--container">
      <p>{text}</p>
    </div>
  );
};

export default Paragraph;
