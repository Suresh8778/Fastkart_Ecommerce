import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

function Header() {
  return (
    <>
      <div className='head-01 d-none d-lg-block'>
        <div className="header container">
          <ul className="nav-left">
            <li className='me-2'><MdPhone />+91 877 808 7504</li>
            <li><FaWhatsapp />+91 877 808 7504</li>
          </ul>
          <p className="header-text">World's Fastest Online Shopping Destination</p>
          <ul className="nav-right">
            <li className="nav-item dropdown drop-01">
              <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                English<FontAwesomeIcon icon={faAngleDown} size="sm" style={{marginLeft :'3px'}}/>
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">English</a></li>
                <hr className='mx-3 p-0 m-0'></hr>
                <li><a className="dropdown-item" href="#">Tamil</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dollar<FontAwesomeIcon icon={faAngleDown} size="sm" style={{marginLeft :'3px'}}/>
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
