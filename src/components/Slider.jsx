import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Card } from 'react-bootstrap';
import { GiFruitBowl, GiHoneyJar, GiTomato, GiMilkCarton } from "react-icons/gi";
import { IoFastFoodSharp, IoIceCream } from "react-icons/io5"; 
import { Carousel } from 'react-bootstrap';

function Slider() {
  const products = [
    { id: 1, name: "Fruits", item: 163 },
    { id: 2, name: "Honey", item: 4 },
    { id: 3, name: "Vegetable", item: 50 },
    { id: 4, name: "Fast Food", item: 23 },
    { id: 5, name: "Ice Cream", item: 15 },
    { id: 6, name: "Dairy", item: 38 },
    { id: 7, name: "Fruits", item: 63 },
    { id: 8, name: "Honey", item: 11 },
    { id: 9, name: "Vegetable", item: 50 },
    { id: 10, name: "Fast Food", item: 37 },
    { id: 11, name: "Ice Cream", item: 20 },
    { id: 12, name: "Dairy", item: 38 }
  ];

  const chunkSize = 6;
  const productChunks = [];
  for (let i = 0; i < products.length; i += chunkSize) {
    productChunks.push(products.slice(i, i + chunkSize));
  }

  return (
    <>
    <div className="container col-12 mb-3" id="03">
      <Carousel indicators={true} interval={3000} pause={false} className='img-slider'> 
        {productChunks.map((chunk, idx) => (
          <Carousel.Item key={idx}>
            <div className="d-flex justify-content-between m-2">
              {chunk.map((product) => (
                <Card
                  key={product.id}
                  style={{
                    width: '16%', // Adjust width to fit 6 cards in a row
                    margin: '10px', // Space between the cards
                    backgroundColor: 'rgba(245, 244, 245, 0.7)', // Transparent background (70% opacity)
                    textAlign: 'center',
                    border: 'none', // Optional: removes card border for a cleaner look
                    transition: 'transform 0.3s ease, opacity 0.3s ease', // Add smooth transition
                    opacity: 0.8, // Slightly transparent cards by default
                  }}
                  className="card-hover" 
                >
                  <div style={{
                    width: '60px',
                    height: '50px',
                    display: 'flex',
                    textAlign: 'center',
                    margin: 'auto',
                    padding: '8px',
                  }}>
                    {product.id === 1 && <GiFruitBowl size={50} /> }
                    {product.id === 2 && <GiHoneyJar size={50} />}
                    {product.id === 3 && <GiTomato size={50} />}
                    {product.id === 4 && <IoFastFoodSharp size={50} />}
                    {product.id === 5 && <IoIceCream size={50} />}
                    {product.id === 6 && <GiMilkCarton size={50} />}
                    {product.id === 11 && <GiFruitBowl size={50} />}
                    {product.id === 9 && <GiHoneyJar size={50} />}
                    {product.id === 10 && <GiTomato size={50} />}
                    {product.id === 7 && <IoFastFoodSharp size={50} />}
                    {product.id === 12 && <IoIceCream size={50} />}
                    {product.id === 8 && <GiMilkCarton size={50} />}
                  </div>
                  <Card.Body>
                    <Card.Text>
                      <h6><b>{product.name}</b></h6>
                      <span>{product.item} items</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
    </>
  );
}

export default Slider;
