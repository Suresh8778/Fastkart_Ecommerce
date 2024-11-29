import React from "react";
import slider1 from "./images/slider1.jpeg";
import slider2 from "./images/slider2.jpeg";
import slider3 from "./images/slider3.jpeg";
import slider4 from "./images/slider4.jpeg";
import "./HomeImage.css";

const HomeImage = () => {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-lg-8 col-12">
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>

            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={slider1} alt="Slider 1" className="slider-img d-block w-100" />
                <div className="carousel-caption d-none d-md-block">
                  <h3>Fresh</h3>
                  <p>Fruits and Vegetables</p>
                  <button className=" bg-dark text-white">Shop Now</button>
                </div>
              </div>

              <div className="carousel-item">
                <img src={slider2} alt="Slider 2" className="slider-img d-block w-100" />
                <div className="carousel-caption d-none d-md-block">
                  <h3>Orangic</h3>
                  <p>Fruits and Vegetables</p>
                  <button className=" bg-dark text-white">Shop Now</button>
                </div>
              </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="col-lg-4 d-flex flex-column align-items-center justify-content-between">
          <div className="image-container ms-lg-3 col-md-6">
            <img src={slider4} alt="Slider Cart" className="sld-img " />
            <div class="overlay-text">
              <p className="text-success">Fresh</p>
              <p className="text-dark">Fruits</p>
              <button className=" bg-dark text-white">Shop Now</button>
            </div>
          </div>
          <div className="image-container ms-lg-3 col-md-6">
            <img src={slider3} alt="Slider Cart" className="sld-img" />
            <div class="overlay-text">
              <p className="text-success">Organic</p>
              <p className="text-dark">Vegetables</p>
              <button className=" bg-dark text-white">Shop Now</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HomeImage;
