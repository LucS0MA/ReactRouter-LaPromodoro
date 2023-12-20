// Button.js

import React from 'react';
import './Button.css';

const Button = ({ children, onClick }) => (
  <div className="box" onClick={onClick}>
    <button className="button">{children}</button>
    <div className="space">
      <span style={{ '--i': 31 }} className="star"></span>
      <span style={{ '--i': 12 }} className="star"></span>
      <span style={{ '--i': 57 }} className="star"></span>
      <span style={{ '--i': 93 }} className="star"></span>
      <span style={{ '--i': 23 }} className="star"></span>
      <span style={{ '--i': 70 }} className="star"></span>
      <span style={{ '--i': 6 }} className="star"></span>
    </div>
  </div>
);

export default Button;
