import React from "react";
import "./CheckoutProduct.css";

function CheckoutProduct(id, title, img, price, rating) {
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={img}></img>

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>

        <p className="checkoutProduct__price">
          <small>
            $<strong>{price}</strong>
          </small>{" "}
        </p>

        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐️</p>
            ))}
        </div>
        <button className="checkoutProduct__removeButton">
          Remove From Cart
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
