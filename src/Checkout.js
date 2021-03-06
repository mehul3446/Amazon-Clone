import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, dispatch }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout_img"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2020/PD/recips/pd_ilm1_recip_desktop_2x.jpg"
        />

        <div>
          <h2 className="checkout__title">Your Shopping Cart</h2>

          {basket.map((item, i) => (
            <CheckoutProduct
              key={i}
              id={item.id}
              title={item.title}
              image={item.image}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
