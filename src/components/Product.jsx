import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Card, CardImg } from 'react-bootstrap';
import fru1 from './images/fru1.jpeg';
import fru2 from './images/fru2.jpeg';
import fru3 from './images/fru3.jpeg';
import fru4 from './images/fru4.jpeg';
import fru5 from './images/fru5.jpeg';
import veg1 from './images/veg1.jpeg';
import veg2 from './images/veg2.jpeg';
import veg3 from './images/veg3.jpeg';
import veg4 from './images/veg4.jpeg';
import veg5 from './images/veg5.jpeg';
import './Product.css';
import adv from './images/adv.jpeg';

function Product({ addToCart }) {
  const products = [
    { id: 1, name: "Kashmir Apple", subname: "Fresh", price: "280-kg", image: fru1, rating: 4.5 },
    { id: 2, name: "Dragon Fruit", subname: "Exotic", price: "320-kg", image: fru2, rating: 4.0 },
    { id: 3, name: "Cherry", subname: "Sweet", price: "350-kg", image: fru3, rating: 4.7 },
    { id: 4, name: "Graphes", subname: "Juicy", price: "150-kg", image: fru4, rating: 3.8 },
    { id: 5, name: "Strawberry", subname: "Fresh", price: "80-kg", image: fru5, rating: 5.0 },
    { id: 6, name: "Chilli", subname: "Spicy", price: "110-kg", image: veg1, rating: 3.5 },
    { id: 7, name: "Garlic", subname: "Aromatic", price: "140-kg", image: veg2, rating: 4.2 },
    { id: 8, name: "Tomato", subname: "Tangy", price: "60-kg", image: veg3, rating: 4.3 },
    { id: 9, name: "Cucumber", subname: "Crisp", price: "50-kg", image: veg4, rating: 4.1 },
    { id: 10, name: "Mushroom", subname: "Earthy", price: "80-kg", image: veg5, rating: 4.6 }
  ];

  return (
    <div className="container col-12 mt-5" id='03'>
      <div className='d-flex justify-content-between'>
        <h3 className='mb-3'>New <span className="text-success">Products</span></h3>
        <nav className="nav">
          <a className="nav-link disabled" href="#">ALL</a>
          <a className="nav-link disabled" href="#">FRUITS</a>
          <a className="nav-link disabled" href="#">VEGETABLES</a>
          <a className="nav-link disabled" href="#">SNACKS & OTHERS</a>
        </nav>
      </div>
      <div className='row d-flex justify-content-between h-100'>
        {products.map((product) => (
          <Card key={product.id} style={{ width: '15rem', margin: '10px' }}>
            <div className="product-image-container">
              <CardImg src={product.image} style={{ marginTop: '10px' }} />
              <div className="icon-container">
                <i className="bi bi-heart" onClick={() => console.log('Add to Wishlist')}></i>
                <i className="bi bi-arrow-left-right" onClick={() => console.log('Compare the Product')}></i>
                <i className="bi bi-eye" onClick={() => console.log('Visit the Product')}></i>
                <i className="bi bi-bag" onClick={() => addToCart(product)}></i><br></br>
              </div>
            </div>
            <Card.Body>
              <Card.Text>
                <h5>{product.name}</h5>
                <div><small>{product.subname}</small></div>
                <div>
                  <span>{'⭐ '.repeat(Math.floor(product.rating))}</span>
                </div>
                <div>Rs. {product.price}</div>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>


      <div>
        <div className="col-12 my-4 adv-container">
            <img src={adv} alt='advImage1' className='adv-img w-100'></img>
            <div class="overAdv-text">
              <h2 className="text-success">Organic & Fresh Products</h2>
              <p className="text-dark">30% Offer</p>
              <button className=" bg-dark text-white">Shop Now</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
