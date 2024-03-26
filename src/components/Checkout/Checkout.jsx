import React from "react";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import Subtotal from "../Subtotal/Subtotal";
import "./Checkout.css";
import { useStateValue } from "../../StateProvider/StateProvider";
import { Navigate } from "react-router-dom";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  if (basket.length < 1) {
    return <Navigate to="/" />;
  }

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout__ad"
        />
        <h2 className="checkout__title">Your Shopping Basket</h2>
        {basket.map((item) => {
          return (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          );
        })}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
