import React from 'react';
import '../styles/cafeteria2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function Cafe() {
  return (
    <>
    <div className="menu-bar">
      <h1 className="logo">Cafe<span>teria.</span></h1>
    </div>
    <div className="container">
      <div className="card middle">
        <div className="front">
          <img src="../styles/images/lipton.jpeg" alt="" />
        </div>
        <div className="back">
          <div className="back-content">
            <h2>LIPTON</h2>
            {/* <span>MENU</span> */}
          </div>
          <div>
            <input type="checkbox" id="switch1" className="checkbox" />
            <label htmlFor="switch1" className="toggle"></label>
          </div>
        </div>
      </div>
      <div className="card middle">
        <div className="front">
          <img src="../styles/images/lipton.jpeg" alt="" />
        </div>
        <div className="back">
          <div className="back-content">
            <h2>SAGAR CANTEEN</h2>
            {/* <span>MENU</span> */}
          </div>
          <div>
            <input type="checkbox" id="switch2" className="checkbox" />
            <label htmlFor="switch2" className="toggle"></label>
          </div>
        </div>
      </div>
    </div>
    <script src="cafeteria.js"></script>
    </>
  );
}

export default Cafe;
