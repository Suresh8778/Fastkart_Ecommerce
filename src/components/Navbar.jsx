import React from 'react';
import { IoPersonOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import './Navbar.css';

function Navbar() {
  const navLinks = [ 
    { label: "Category", value: "#" }, 
    { label: "Dairy Products", value: "#" }, 
    { label: "Fast Food", value: "#" }, 
    { label: "Bakery", value: "#" }, 
    { label: "Veg", value: "#" }, 
    { label: "Non-Veg", value: "#" } 
  ];
  return (
    <>
      <nav className="navbar navbar-expand-lg container p-0">
        <div className=" container d-flex justify-content-start align-items-center p-0">
          <div className="col-lg-2 col-md-6 col-6">
            <a className="navbar-brand text-dark p-2" href="#">
              <h2 className='d-flex align-items-center mx-3'>FastKart</h2>
            </a>
          </div>

          <div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center">
          <div className="cat-dropdown"> 
            <button className="btn cat-btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
              Category <div className='dropdown-toggle' style={{ marginLeft: '85px' }} /> 
            </button> 
          <div className="dropdown-menu dropdown-width" aria-labelledby="dropdownMenuButton"> 
            {navLinks.map((link, index) => ( <a key={index} className="dropdown-item p-2" href={link.value}> {link.label} </a> ))} 
          </div> 
          </div>


    <div className="search input-group" style={{ position: 'relative', width: '100%' }}>
    <input
    type="search"
    className="search-bar"
    placeholder="Search Products..."
    aria-label="Search"
    style={{
      height: '38px',
      width: '100%',
      outline: 'none',
      padding: '8px 32px 8px 8px',
      borderRadius: '4px',
    }}
  />
  <i
    className="fas fa-search"
    style={{
      position: 'absolute',
      right: '10px',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none', 
      color: '#888', 
    }}
  ></i>
</div>


          </div>

          <div className="col-lg-4 col-md-6 col-6 d-flex justify-content-end justify-content-md-end align-items-center">
  <ul className="navbar-nav d-flex flex-row justify-content-sm-end p-3">
    <li className="nav-item d-flex align-items-center mx-2 dropdown">
      <a 
        className="nav-icon nav-link text-dark d-flex align-items-center" 
        id="categoriesDropdown" 
        href="#" 
        role="button" 
      >
        <IoPersonOutline className="icon-size" />
        <div className="ms-2 d-flex flex-column align-items-start">
          <span className="icon-txt1 d-none d-lg-inline">Account</span>
          <span className="icon-txt2 d-none d-lg-inline">LOGIN</span>
        </div>
      </a>
      <ul className="dropdown-menu" aria-labelledby="categoriesDropdown" style={{marginTop:'150px', fontSize:'smaller'}}>
        <li><a className="dropdown-item" href="#">Register</a></li>
        <li><a className="dropdown-item" href="#">Checkout</a></li>
        <li><a className="dropdown-item" href="#">Login</a></li>
      </ul>
    </li>


              <li className="nav-item d-flex align-items-center mx-2">
                <a className="nav-icon nav-link text-dark d-flex align-items-center" href="#">
                  <IoMdHeartEmpty className="icon-size" />
                  <div className="ms-2 d-flex flex-column align-items-start">
                    <span className="icon-txt1 d-none d-lg-inline">Wishlist</span>
                    <span className="icon-txt2 d-none d-lg-inline">3-ITEMS</span>
                  </div>
                </a>
              </li>

              <li className="nav-item d-flex align-items-center ms-2">
                <a className="nav-icon nav-link text-dark d-flex align-items-center" href="#">
                  <HiOutlineShoppingBag className="icon-size" />
                  <div className="ms-2 d-flex flex-column align-items-start">
                    <span className="icon-txt1 d-none d-lg-inline">Cart</span>
                    <span className="icon-txt2 d-none d-lg-inline">3-ITEMS</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


    </>
  );
}

export default Navbar;

