import React from "react";
import "./Customer.css";
const Customer = ({ element }) => {
  const { name, comment, rating } = element;
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

export default Customer;
