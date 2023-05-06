import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/non-curriculum.css'
function NonCurriculum() {
    const navigate= useNavigate();
  return (
<>
        <div className="menu-bar">
          <h1 className="logo">Non<span>-Curriculum.</span></h1>
          <ul>
            <li><a href="#">Clubs <i className="fas fa-caret-down"></i></a>
              <div className="dropdown-menu">
                <ul>
                  <li onClick={navigate('/acm')}>ACM</li>
                  <li><a href="#">ACSES</a></li>
                  <li><a href="#">SAIT</a></li>
                  <li><a href="#">ELESA</a></li>
                  <li><a href="#">EESA</a></li>
                  <li><a href="#">MESA-MESC</a></li>
                  <li><a href="#">CESA</a></li>
                  <li><a href="#">WLUG</a></li>
                  <li><a href="#">PACE</a></li>
                  <li><a href="#">ROTARACT</a></li>
                  <li><a href="#">ART CIRCLE</a></li>
                </ul>
              </div>
            </li>
            <li><a href="mega-events.html">Mega Events</a></li>
            <li><a href="wce-map.html">WCE Map</a></li>
            <li><a href="memory.html">Memories</a></li>
          </ul>
        </div>
        {/* <div className="hero">
         
        </div> */}
        <h1 className="updates" style={{textAlign: 'center', textDecoration: 'underline'}}>UPDATES</h1>  
        <div id="UPDATES" style={{fontSize: '30px', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', opacity: '0.8'}}>
          <p style={{fontSize: '30px'}}>
            WCE HACKATHON 2022
            BY WCE ACM STUDENT CHAPTER
            WCE HACKATHON'22 will be conducted entirely in Virtual mode. Hackathon'22 is a
            developing venture in which participants are expected to complete the product
            development as per the selected problem statements. Here participants will innovate,
            strategize, code, and beat the odds with some ingenious solutions to the most sought
            real-life problems.
            PARTICIPANTS
            A team of UG Engineering students is eligible to participate in the hackathon. A team
            should have a minimum of 2 and a maximum of 4 members.
            Team members can belong to different colleges and different academic years.
            REGISTRATION
            Registration is taken through unstop.com (formerly Dare2Compete).
            Registration link:
            https://unstop.com/p/wce-hackathon-2022-walchand-college-of-engineering-wcesangli-171698
          </p>
        </div> 
        {/* <script src="text1.js"></script> */}
      
    </>
  );
}

export default NonCurriculum;
