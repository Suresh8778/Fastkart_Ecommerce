import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { MdPhone } from "react-icons/md";

function Header() {
  return (
    <>
      <div className='head-01'>
        <div className="header container">
          <ul className="nav-left">
            <li><MdPhone /> +91 8778087504</li>
            <li><FaWhatsapp /> +91 8778087504</li>
          </ul>
          <p className="header-text">World's Fastest Online Shopping Destination</p>
          <ul className="nav-right">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                English
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">English</a></li>
                <hr className='mx-3 p-0 m-0'></hr>
                <li><a className="dropdown-item" href="#">Tamil</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dollar
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">USD $</a></li>
                <hr className='mx-3 p-0 m-0'></hr>
                <li><a className="dropdown-item" href="#">INR ₹</a></li>
              </ul>
            </li>

            <li className="nav-item">Help?</li>
            <li className="nav-item">Track Orders?</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header;
