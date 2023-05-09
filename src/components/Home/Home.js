import React from "react";
import "./Home.css";
import Product from  "../Product/Product"


function Home() {
  return (
    <div className="home">
      <div className="home__container">
        {/* <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        /> */}

        <div className="home__row">
          <Product
            id="12321341"
            title="French Roast"
            price={12.99}
            size="16 oz"
            image="https://i.ibb.co/25y2THc/french.jpg"
          />
          <Product
            id="49538094"
            title="Signature Dark Roast"
            price={12.99}
            size="16 oz"
            image="https://i.ibb.co/fqKwDz2/sigdark.jpg"
          />

<Product
            id="4903850"
            title="Signature Medium Roast"
            price={12.99}
            size="16 oz"
            image="https://i.ibb.co/GcQkS0R/sigmedium.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Signature Light Roast"
            price={12.99}
            size="16 oz"
            image="https://i.ibb.co/bHVLzrF/light.jpg"
          />
          <Product
            id="23445930"
            title="Signature Gold"
            price={12.99}
            size="16 oz"
            image="https://i.ibb.co/bHVLzrF/light.jpg"
          />
          <Product
            id="3254354345"
            title="Italian Roast"
            price={12.99}
            size="16 oz"
            image="https://i.ibb.co/xGfGM7F/italian.jpg"
          />
        </div>
        <div className="home__row">
         
          <Product
            id="23445930"
            title="Spring Blend"
            price={12.99}
            size="16 oz"
            image="https://i.ibb.co/bsJWQQg/spring.jpg"
          />
          <Product
            id="3254354345"
            title="Summer Blend"
            price={12.99}
            size="16 oz"
            image="https://i.ibb.co/Xt8tQf3/summer.jpg"
          />
           <Product
            id="4903850"
            title="Costa Rican"
            price={13.99}
            size="16 oz"
            image="https://i.ibb.co/gdRrBNR/costarican.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Guatemalan"
            price={13.99}
            size="16 oz"
            image="https://i.ibb.co/t3BtpJ0/guatemalan.jpg"
          />
          <Product
            id="23445930"
            title="Colombian"
            price={13.99}
            size="16 oz"
            image="https://i.ibb.co/0r2xyjT/colombian.jpg"
          />
          <Product
            id="3254354345"
            title="Brazillian"
            price={13.99}
            size="16 oz"
            image="https://i.ibb.co/9psSt6W/brazilian.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Sumatra"
            price={13.99}
            size="16 oz"
            image="https://i.ibb.co/7gjcCKk/sumatra.jpg"
          />
          <Product
            id="23445930"
            title="White Coffee"
            price={14.99}
            size="16 oz"
            image="https://i.ibb.co/Rgxz7j8/whitecoffee.jpg"
          />
          <Product
            id="3254354345"
            title="Decaf French Roast"
            price={12.99}
            size="16 oz"
            image="https://i.ibb.co/m5452XM/decaf.jpg"
          />
        </div>

        

      </div>
    </div>
  );
}

export default Home;