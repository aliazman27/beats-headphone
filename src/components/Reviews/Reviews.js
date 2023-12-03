import React from 'react';
import './Reviews.css'
const Reviews = ({product}) => {
    const { name, comment, rating } = product;
    return (
        <div>
            <div className="customer-container">
          <h4>Name: {name}</h4>
          <p>Comment: {comment}</p>
          <h5>Ratings: {rating}</h5>
      </div>
        </div>
    );
};

export default Reviews;