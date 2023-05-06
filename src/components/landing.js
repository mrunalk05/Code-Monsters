import React from "react";
import '../styles/landing.css';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBook,
  faCubes,
  faCoffee,
  faUserCircle,
//   faLinkedin,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";
// import { faUser } from "@fortawesome/free-regular-svg-icons";

function Landing() {
  const navigate= useNavigate();
  return (
    <>
    <div className="menu-wrap">
      <input type="checkbox" className="toggler" />
      <div className="hamburger">
        <div></div>
      </div>
      <div className="menu">
        <div>
          <div>
            <ul>
              <li>
               
                  <FontAwesomeIcon icon={faHome} onClick={()=>navigate('/')}  /> Home
              </li>
              <li>
                {/* <a href="curriculum.html"> */}
                  <FontAwesomeIcon icon={faBook} onClick={()=>navigate('/ciri')} /> Curriculum
                {/* </a> */}
              </li>
              <li>
                  <FontAwesomeIcon icon={faCubes} onClick={()=>navigate('/non-ciri')} /> Non-Curriculum
              </li>
              <li>
                  <FontAwesomeIcon icon={faCoffee} onClick={()=>navigate('/cafe')} /> Cafeteria
              </li>
              <li>
                  <FontAwesomeIcon icon={faCubes} onClick={()=>navigate('/acm')} /> Clubs
              </li>
              <li>
                  <FontAwesomeIcon icon={faCubes} onClick={()=>navigate('/memo')} /> Memories
              </li>
              <div className="icons">
                <a href="http://uni.wcoeapps.in" target="_blank">
                  <FontAwesomeIcon icon={faUserCircle} />
                </a>
                <a
                  href="https://www.linkedin.com/school/walchandcollegeofengineering"
                  target="_blank"
                >
                  {/* <FontAwesomeIcon icon={faLinkedin} /> */}
                </a>
                <a href="#"><i className="fab fa-user"></i></a>
                <a href="http://www.walchandsangli.ac.in/" target="_blank">
                  <FontAwesomeIcon icon={faDesktop} />
                </a>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <header className="showcase">
      <div className="container showcase-inner">
        <h1 id="head">WCE NEWSLET</h1>
        <p style={{ color: "white" }}>
          <b> ONE STOP SOLUTION FOR ALL WALCHANDITES </b>
        </p>
        <button className="button" onClick={navigate('/login')} style={{ verticalAlign: "middle" }}>
          {/* <a href="login.html"> */}
            <span> Login</span>
          {/* </a> */}
        </button>
      </div>
    </header>
    </>
  );
}

export default Landing;
