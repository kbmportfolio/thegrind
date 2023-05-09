import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../StateProvider";
import { getBasketTotal } from "../../reducer";
import { useNavigate } from "react-router-dom";
import StripeCheckout from 'react-stripe-checkout';

function Subtotal() {
  const history = useNavigate();
  const [{ basket }, dispatch] = useStateValue();




  const onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  }


  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>

         
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>

             
            </p>
            
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      {/* <button onClick={e => history('/payment')}>Proceed to Checkout</button> */}

      <StripeCheckout
        token={onToken}
        stripeKey="pk_test_51N0ZaJKvRA4OlxkliQTPXZn77U2ALXuanRCs0daPEXdhiItw7c2NT1TmgwBAGDBFBzKZHIeq0sHEn3yM48moYCkh00cQgz8uST"
        amount={basket * 100} // cents
     />

    </div>
  );
}

export default Subtotal;