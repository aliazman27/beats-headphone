import React from 'react';
import Customers from '../../Hook/Customers';
import Reviews from '../Reviews/Reviews';

const Review = () => {
    const [products, setProducts] = Customers();
    return (
        <div>
            {
                products.map(product=><Reviews key={product.id}
                    product={product}></Reviews>)
            }
        </div>
    );
};

export default Review;