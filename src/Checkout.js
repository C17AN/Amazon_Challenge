import React from "react";
import Subtotal from "./Subtotal";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg"
          alt=""
        />
        <div>
          <h3>Hello, {user ? user.email : "guest"}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
        </div>
        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          ></CheckoutProduct>
        ))}
      </div>
      <div className="checkout__right">
        <Subtotal></Subtotal>
      </div>
    </div>
  );
}

export default Checkout;
