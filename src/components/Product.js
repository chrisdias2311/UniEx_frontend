import React from 'react'
import './Product.css'
import { Button } from 'react-bootstrap';

function Product({id, title, image, price}) {
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>₹</small>
                    <strong>{price}</strong>


                </p>
            </div>
            <img src={image}></img>
            <button className="addToBasket">Add to Basket</button>
        </div>
    )
}

export default Product
