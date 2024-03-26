import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { useStateValue } from "../../StateProvider/StateProvider";
function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  const getTotalPrice = (basket) => {
    return basket?.reduce((sum, item) => sum + item.price, 0);
  };
  console.log("basket", basket);
  console.log("totalPrice", getTotalPrice(basket));
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items) : <strong>${value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" name="" id="" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getTotalPrice(basket)}
        displayType={"text"}
        thousandSeparator={true}
        // prefix={$}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
