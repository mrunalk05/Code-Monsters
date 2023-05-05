import React from 'react';
import '../styles/ciriculum.css';

function Curriculum() {
  return (
    <>
    <div className="menu-bar">
      <h1 className="logo">Curri<span>Culum.</span></h1>
      <ul>
        <li>
          <a href="#">COMPUTER SCIENCE<i className="fas fa-caret-down"></i></a>
          <div className="dropdown-menu">
            <ul>
              <li><a href="#">FY</a></li>
              <li><a href="SY-CSE.html">SY</a></li>
              <li>
                <a href="#">TY</a>
              </li>
              <li><a href="#">FINAL</a></li>
            </ul>
          </div>
        </li>
        <li>
          <a href="#">INFORMATION TECHNOLOGY<i className="fas fa-caret-down"></i></a>
          <div className="dropdown-menu">
            <ul>
              <li><a href="#">FY</a></li>
              <li><a href="#">SY</a></li>
              <li>
                <a href="#">TY</a>
              </li>
              <li><a href="#">FINAL</a></li>
            </ul>
          </div>
        </li>
        <li>
          <a href="#">ELECTRONICS<i className="fas fa-caret-down"></i></a>
          <div className="dropdown-menu">
            <ul>
              <li><a href="#">FY</a></li>
              <li><a href="#">SY</a></li>
              <li>
                <a href="#">TY</a>
              </li>
              <li><a href="#">FINAL</a></li>
            </ul>
          </div>
        </li>
        <li>
          <a href="#">ELECTRICAL<i className="fas fa-caret-down"></i></a>
          <div className="dropdown-menu">
            <ul>
              <li><a href="#">FY</a></li>
              <li><a href="#">SY</a></li>
              <li>
                <a href="#">TY</a>
              </li>
              <li><a href="#">FINAL</a></li>
            </ul>
          </div>
        </li>
        <li>
          <a href="#">MECHANICAL<i className="fas fa-caret-down"></i></a>
          <div className="dropdown-menu">
            <ul>
              <li><a href="#">FY</a></li>
              <li><a href="#">SY</a></li>
              <li>
                <a href="#">TY</a>
              </li>
              <li><a href="#">FINAL</a></li>
            </ul>
          </div>
        </li>
        <li>
          <a href="#">CIVIL<i className="fas fa-caret-down"></i></a>
          <div className="dropdown-menu">
            <ul>
              <li><a href="#">FY</a></li>
              <li><a href="#">SY</a></li>
              <li>
                <a href="#">TY</a>
              </li>
              <li><a href="#">FINAL</a></li>
            </ul>
          </div>
        </li>
      </ul>
      <p style={{textAlign: 'center'}}>
        Exams are postponed to 15th of June and 17th of June <br />
        In the next week, there will be an online presentation of a company Fresh express.
        It is compulsory to attend, further they will also give a chance for an internship based on interview/resume.
<br />
</p>
</div>
</>
  )}

  export default Curriculum;
  