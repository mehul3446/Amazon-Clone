import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2020/RedHood/Launch/GW/US-EN_080320_RedHood_ACQ_GW_Hero_D_1500x600_CV2._CB406776645_.jpg"
        ></img>
      </div>

      <div className="home__row">
        <Product 
        id = {101}
        title = "The Compound Effect: Jumpstart Your Income, Your Life, Your Success Anniversary Edition" 
        image = "https://images-na.ssl-images-amazon.com/images/I/51Bz60iDotL._SX359_BO1,204,203,200_.jpg" 
        price = {29.99} 
        rating = {4}/>
        
        <Product 
        id = {102}
        title = "Start with Why: How Great Leaders Inspire Everyone to Take Action" 
        image = "https://images-na.ssl-images-amazon.com/images/I/51BlNddi+NL._SX330_BO1,204,203,200_.jpg" 
        price = {8.79} 
        rating = {4}/>
      </div>

      <div className="home__row">
      <Product
      id = {103}
      title = "Amazon Essentials Men's Long-Sleeve Crewneck Fleece Sweatshirt" 
      image = "https://images-na.ssl-images-amazon.com/images/I/91L0u1oZxBL._AC_UX425_.jpg" 
      price = {17.99} 
      rating = {5}/>

      <Product
      id = {104}
      title = "New Apple Watch SE (GPS, 44mm) - Space Gray Aluminum Case with Black Sport Band" 
      image = "https://images-na.ssl-images-amazon.com/images/I/71aO2uCFiHL._AC_SX425_.jpg" 
      price = {129.99} 
      rating = {5}/>

      <Product
      id = {105}
      title = "Adidas Yeezy 700 V3" 
      image = "https://images-na.ssl-images-amazon.com/images/I/61KJBr2hN3L._AC_UX575_.jpg" 
      price = {784.99} 
      rating = {5}/>
      </div>

      <div className="home__row">
      <Product
      id = {106}
      title = "Samsung QN65Q60RAFXZA Flat 65 QLED 4K Q60 Series (2019) Ultra HD Smart TV with HDR and Alexa Compatibility" 
      image = "https://images-na.ssl-images-amazon.com/images/I/61xU%2BHbHJyL._AC_SX679_.jpg" 
      price = {299.99} 
      rating = {4}/>
      
      
      </div>
      
    </div>
  );
}

export default Home;
