import React from 'react';
import { IoPersonOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg container p-0">
        <div className=" container d-flex align-items-center p-0">
          <div className="col-lg-2 col-md-6">
            <a className="navbar-brand text-dark p-2" href="#">
              <h2 className='d-flex align-items-center ms-2'>FastKart</h2>
            </a>
          </div>

          <div className="col-lg-6 d-none d-lg-flex justify-content-end align-items-center" style={{ height: '100%' }}>
            <div className="nav-drop dropdown">
              <button
                className="btn btn-white dropdown-toggle ps-2"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Category
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Category</a>
                <a className="dropdown-item" href="#">Dairy Product</a>
                <a className="dropdown-item" href="#">Fast Food</a>
                <a className="dropdown-item" href="#">Veg</a>
                <a className="dropdown-item" href="#">Non Veg</a>
              </div>
            </div>

            <div className="search input-group" style={{ height: '40px' }}>
              <input
                type="search"
                className="search-bar form-control"
                placeholder="Search Products..."
                aria-label="Search"
                aria-describedby="search-addon"
                style={{
                  height: '100%',
                  border: '1px solid #ced4da',
                  borderRadius: '0.25rem',
                }}
              />
              <span className="input-group-text bg-white border-0" id="search-addon" style={{ height: '38px' }}>
                <i className="fas fa-search"></i>
              </span>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-6 d-flex justify-content-end justify-content-md-end align-items-center ms-auto">
            <ul className="navbar-nav d-flex flex-row justify-content-sm-end p-3">
              <li className="nav-item d-flex align-items-center mx-2">
                <a className="nav-icon nav-link text-dark d-flex align-items-center" href="#">
                  <IoPersonOutline className="icon-size" />
                  <div className="ms-2 d-flex flex-column align-items-start">
                    <span className="icon-txt1 d-none d-lg-inline">Account</span>
                    <span className="icon-txt2 d-none d-lg-inline">LOGIN</span>
                  </div>
                </a>
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

              <li className="nav-item d-flex align-items-center mx-2">
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
