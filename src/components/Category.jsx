import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { CiGrid41 } from "react-icons/ci";
import { GrLocation } from "react-icons/gr";
import './Category.css';

const Category = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="container cat-nav"> {/* Ensures the entire navbar structure is aligned within a Bootstrap container */}
      <nav className="navbar navbar-expand-lg mb-2"> {/* Main Navbar */}
        
        {/* Brand/Icon */}
        <a className="navbar-brand text-dark ms-2" href="#">
          <CiGrid41 size={30} /> {/* Icon representing the brand or a menu icon */}
        </a>
        
        {/* Mobile Menu Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#NavbarEcomm" 
          aria-controls="NavbarEcomm"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Navbar Links */}
        <div className="collapse navbar-collapse d-flex justify-content-lg-center justify-content-start" id="NavbarEcomm">
          <ul className="navbar-nav">
            
            {/* Home Link */}
            <li className="nav-item">
              <a className="nav-cat mx-2 nav-link text-dark" href="#">
                Home
              </a>
            </li>

            {/* Mega Menu Dropdown */}
            <li className="nav-item dropdown dropdown-hover position-static">
    <a className="nav-link mx-2 active" href="#" id="navbarDropdown" role="button"
        data-bs-toggle="dropdown" aria-expanded="false">
        Category <FontAwesomeIcon icon={faAngleDown} size="sm" style={{ marginLeft: '5px' }} />
    </a>
    <div className="dropdown-menu mt-0" aria-labelledby="navbarDropdown">
        <div className="container">
            <div className="row my-3">
                {/* Mega Menu Column 1 */}
                <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
                <ul className="mega" aria-labelledby="blogsDropdown">
                <h6 className='ps-3' style={{color:'green'}}>Classic</h6>
                <hr className='m-0 p-0'></hr>
                <li><a className="dropdown-item" href="#">Blog Left Sidebar</a></li>
                <li><a className="dropdown-item" href="#">Blog Right Sidebar</a></li>
                <li><a className="dropdown-item" href="#">Blog Detail Left</a></li>
                <li><a className="dropdown-item" href="#">Blog Detail Right</a></li>
                <li><a className="dropdown-item" href="#">Blog Full Width</a></li>
              </ul>
                </div>
                {/* Mega Menu Column 2 */}
                <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
                <ul className="mega" aria-labelledby="blogsDropdown">
                <h6 className='ps-3' style={{color:'green'}}>Banner</h6>
                <hr className='m-0 p-0'></hr>
                <li><a className="dropdown-item" href="#">Blog Left Sidebar</a></li>
                <li><a className="dropdown-item" href="#">Blog Right Sidebar</a></li>
                <li><a className="dropdown-item" href="#">Blog Detail Left</a></li>
                <li><a className="dropdown-item" href="#">Blog Detail Right</a></li>
                <li><a className="dropdown-item" href="#">Blog Full Width</a></li>
              </ul>
                </div>
                {/* Mega Menu Column 3 */}
                <div className="col-md-6 col-lg-3 mb-3 mb-md-0">
                <ul className="mega" aria-labelledby="blogsDropdown">
                <h6 className='ps-3' style={{color:'green'}}>Columns</h6>
                <hr className='m-0 p-0'></hr>
                <li><a className="dropdown-item" href="#">Blog Left Sidebar</a></li>
                <li><a className="dropdown-item" href="#">Blog Right Sidebar</a></li>
                <li><a className="dropdown-item" href="#">Blog Detail Left</a></li>
                <li><a className="dropdown-item" href="#">Blog Detail Right</a></li>
                <li><a className="dropdown-item" href="#">Blog Full Width</a></li>
              </ul>
                </div>
                {/* Mega Menu Column 4 */}
                <div className="col-md-6 col-lg-3">
                <ul className="mega" aria-labelledby="blogsDropdown">
                  <h6 className='ps-3' style={{color:'green'}}>List</h6>
                  <hr className='m-0 p-0'></hr>
                <li><a className="dropdown-item" href="#">Blog Left Sidebar</a></li>
                <li><a className="dropdown-item" href="#">Blog Right Sidebar</a></li>
                <li><a className="dropdown-item" href="#">Blog Detail Left</a></li>
                <li><a className="dropdown-item" href="#">Blog Detail Right</a></li>
                <li><a className="dropdown-item" href="#">Blog Full Width</a></li>
              </ul>
                </div>
            </div>
        </div>
    </div>
</li>
            {/* Other Dropdown Menus (Products, Blog, Others) */}
            {/* Products Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-cat nav-link active mx-2" href="#" id="productsDropdown" role="button">
                Products <FontAwesomeIcon icon={faAngleDown} size="sm" style={{ marginLeft: '5px' }} />
              </a>
              <ul className="dropdown-menu" aria-labelledby="productsDropdown">
                <li><a className="dropdown-item" href="#">Product Left Sidebar</a></li>
                <li><a className="dropdown-item" href="#">Product Right Sidebar</a></li>
                <li><a className="dropdown-item" href="#">Product Full Width</a></li>
              </ul>
            </li>

            {/* Blog Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-cat nav-link active mx-2" href="#" id="blogsDropdown" role="button">
                Blog <FontAwesomeIcon icon={faAngleDown} size="sm" style={{ marginLeft: '5px' }} />
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

            {/* Others Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-cat nav-link active mx-2" href="#" id="othersDropdown" role="button">
                Others <FontAwesomeIcon icon={faAngleDown} size="sm" style={{ marginLeft: '5px' }} />
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

            {/* Discover Link */}
            <li className="nav-item">
              <a className="nav-cat nav-link text-dark mx-2" href="#">
                Discover
              </a>
            </li>
          </ul>
        </div>

        {/* Location Dropdown */}
        <div className="location-dropdown d-none d-lg-block" ref={dropdownRef}>
          <button className="location-button" onClick={toggleDropdown} aria-haspopup="true" aria-expanded={isOpen}>
            <GrLocation style={{ textAlign: 'center', padding: "2px" }} size={30}/> Coimbatore, IN
            <FontAwesomeIcon icon={faAngleDown} size="sm" style={{ marginLeft: '5px' }} />
          </button>
          {isOpen && (
          <div className="dropdown-content location-width" tabIndex="0">
            <a href="#"><GrLocation size={20} className='me-1'/> Current Location</a>
            <a href="#"><GrLocation size={20} className='me-1'/> Rajkot, IN</a>
            <a href="#"><GrLocation size={20} className='me-1'/> Mountain, US</a>
            <a href="#"><GrLocation size={20} className='me-1'/> Birmingham, UK</a>
            <a href="#"><GrLocation size={20} className='me-1'/> Jakarta, ID</a>
            <a href="#"><GrLocation size={20} className='me-1'/> Lima, PE</a>
          </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Category;
