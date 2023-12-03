import React from "react";
import "./Shop.css";
import img from "./beats1.jpg";
import Customer from "../Customer/Customer";
import Customers from "../../Hook/Customers";
import { Link } from "react-router-dom";
const Shop = () => {
  const [products, setProducts] = Customers();
  // to show only three review in home page
const prod = products.slice(0,3);
  return (
    <div>
      <div className="headline-design">
        <div>
          <h1 id="headline-1">Beats Headphone is Yours</h1>
          <h2 id="headline-2">Get amazing music experience</h2>
          <p>
            Beats' original product line were Beats by Dre headphones. In
            promotional materials, Dre outlined the line's advantages by
            alleging that listeners were not able to hear "all" of the music
            with most headphones, and that Beats would allow people to "hear
            what the artists hear, and listen to the music the way they should:
            the way I do".
          </p>
        </div>
        <div id="image">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="customer-style">
      <h1>Customer review(3)</h1>
      {
        prod.map(element => 
          <Customer
          key={element.id}
          element={element}
          ></Customer>
        )
      }
     
      
      </div>
{/* directed to review option with button */}
      <Link   className="review-button" to='/review'>See All Reviews</Link>
    </div>
  );
};

export default Shop;
