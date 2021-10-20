import React from 'react';
import { Link } from 'react-router-dom';

const CartCategory = ({ id, title, image }) => {
  return (
    <div className="sortiment-card" key={id}>
      <img src={image} alt={title} className="sortiment-img" />
      <Link to="/" alt={title} className="sortiment-btn btn">
        {title}
      </Link>
    </div>
  );
};

export default CartCategory;
