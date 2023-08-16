import React from "react";
import '../css/Home.css'

function Home() {
  return (
    <div className='home_page'>
      <h1 className='home_title'>Shaggy's Shoes</h1>
      <img src='https://cdn.shopify.com/s/files/1/0255/9429/8467/products/air-jordan-4-retro-fire-red-2020-dc7770-160_2_cem8qi.jpg?v=1658262341&width=1024' alt='Placeholder' className='home_image' />
      <p className='home_description'>Shaggy's Shoes is a one-stop shop for all your shoe needs. We offer a wide range of shoes in a variety of styles and sizes.</p>
    </div>
  );
}

export default Home;