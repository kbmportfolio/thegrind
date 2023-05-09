import React from "react";
import "./Checkout.css";
import Subtotal from "../Subtotal/Subtotal";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../CheckOutProduct/CheckOutProduct";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'; 
function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
   
    
   
   
   
   
   <div className="checkout">
     <Grid  alignItems="center" justify="center" container spacing={1}>
     <Grid sm={6}>
     <div>
          
          <h2 className="checkout__title">Your shopping Cart</h2>

          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              size={item.size}
              price={item.price}
              
            />
          ))}

        </div>
        </Grid>
        <Grid sm={6}>

        <Subtotal />
        </Grid>

    </Grid>
      
    </div>
    
  );
}

export default Checkout;