import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { CiGrid41 } from "react-icons/ci";

function Category() {
  return (
    <>
      <nav className="navbar navbar-expand-lg container col-12 mb-2">
            <a className="navbar-brand text-dark ms-2" href="#">
              <CiGrid41 size={30}/>
            </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#Navbar02" 
            aria-controls="Navbar02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse d-flex justify-content-center" id="Navbar02">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-cat nav-link text-dark" href="#">
                  Home
                </a>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-cat nav-link active" href="#" id="categoriesDropdown" role="button">
                  Categories<FontAwesomeIcon icon={faAngleDown} size="sm" style={{ marginLeft: '5px' }} />
                </a>
                <ul className="dropdown-menu" aria-labelledby="categoriesDropdown">
                  <li><a className="dropdown-item" href="#">Fruits</a></li>
                  <li><a className="dropdown-item" href="#">Vegetables</a></li>
                  <li><a className="dropdown-item" href="#">Dairy Products</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-cat nav-link active" href="#" id="productsDropdown" role="button">
                  Products<FontAwesomeIcon icon={faAngleDown} size="sm" style={{ marginLeft: '5px' }} />
                </a>
                <ul className="dropdown-menu" aria-labelledby="productsDropdown">
                  <li><a className="dropdown-item" href="#">Product Left Sidebar</a></li>
                  <li><a className="dropdown-item" href="#">Product Right Sidebar</a></li>
                  <li><a className="dropdown-item" href="#">Product Full Width</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-cat nav-link active" href="#" id="blogsDropdown" role="button">
                  Blog<FontAwesomeIcon icon={faAngleDown} size="sm" style={{ marginLeft: '5px' }} />
                </a>
                <ul className="dropdown-menu" aria-labelledby="blogsDropdown">
                  <li><a className="dropdown-item" href="#">Blog Left Sidebar</a></li>
                  <li><a className="dropdown-item" href="#">Blog Right Sidebar</a></li>
                  <li><a className="dropdown-item" href="#">Blog Detail Left Sidebar</a></li>
                  <li><a className="dropdown-item" href="#">Blog Detail Right Sidebar</a></li>
                  <li><a className="dropdown-item" href="#">Blog Full Width</a></li>
                  <li><a className="dropdown-item" href="#">Blog Detail Full Width</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-cat nav-link active" href="#" id="othersDropdown" role="button">
                  Others<FontAwesomeIcon icon={faAngleDown} size="sm" style={{ marginLeft: '5px' }} />
                </a>
                <ul className="dropdown-menu" aria-labelledby="othersDropdown">
                  <li><a className="dropdown-item" href="#">About Us</a></li>
                  <li><a className="dropdown-item" href="#">Contact Us</a></li>
                  <li><a className="dropdown-item" href="#">Cart</a></li>
                  <li><a className="dropdown-item" href="#">Checkout</a></li>
                  <li><a className="dropdown-item" href="#">Compare</a></li>
                  <li><a className="dropdown-item" href="#">FAQ</a></li>
                  <li><a className="dropdown-item" href="#">Login</a></li>
                  <li><a className="dropdown-item" href="#">Register</a></li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-cat nav-link text-dark" href="#">
                  Discover
                </a>
              </li>
            </ul>
          </div>
      </nav>
    </>
  );
}

export default Category;
