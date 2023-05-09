import React from "react";
import "./Product.css";
import { useStateValue } from "../../StateProvider";
// import CTAButton from "../Buttons/CTAButton";
import Button from '@mui/material/Button';

function Product({ id, title, image, size, price }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        size: size,
        price: price,
        
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <h4>{title}</h4>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
          <br></br><em>{size}</em>
        </p>
       
      </div>
      
      <img src={image} className="product__image" alt="" />

      <Button className="pulse" onClick={addToBasket}>Add to Cart</Button>
    </div>
  );
}

export default Product;