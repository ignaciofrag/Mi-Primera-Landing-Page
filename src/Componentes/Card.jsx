import React from 'react';

const Card = ({ title, text, imageUrl, buttonText }) => (
  <div className="card">
    <img src={imageUrl} className="card-img-top" alt="..." />
    <div className="card-body text-centery">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
      <a href="/#" className="btn btn-primary">{buttonText}</a>
    </div>
  </div>
);

export default Card;