import React from 'react';
import '../styles/acm.css';

function Acm() {
  return (
    <>
      <div className="menu-bar">
        <h1 className="logo">
          Clu<span>bs.</span>
        </h1>
        <ul>
          <li>
            <a href="#Club Info">Club Info</a>
          </li>
          <li>
            <a href="#UPDATES">Updates</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
      <marquee>
        <h2 style={{ marginTop: '10px', opacity: 0.75 }}>
          WCE Association For Computing Machinery
        </h2>
      </marquee>
      <section id="Club Info" />
        <div className="box" />
          <h2 style={{ textAlign: 'center', textDecoration: 'underline' }}>
            Club Information
          </h2>
          <p style={{ marginTop: '20px' }}>
            WCE ACM Student Chapter was formed to introduce students to an
            educational & scientific Association and develop the habit of
            professional growth achieved through participation in local
            chapters. WCE ACM Student Chapter is a group of ignited minds
            boosted by technology & computer science who have come together to
            contribute towards the development of the computer community. <br />
            WCE ACM Student chapter was formed by the Department of Computer
            Science & Engineering, WCE Sangli. The chapter mainly consists of
            students from UG & PG with Computer Science / IT as major. The
            chapter officially represents the ACM & ACM India in the Sangli-
            Kolhapur region. We are the only ACM Student Chapter formed in
            western Maharashtra.
          </p>
          <div className="members" />
            <div className="chair">
              <h3 style={{ textAlign: 'center' }}>CHAIR</h3>
              <div className="namebox">
                <img
                  src="Vaishnavi-Mahajan.jpeg"
                  alt=""
                  style={{ height: '200px', width: '200px', boxShadow: '0 0 4px 3px' }}
                />
                <h4 style={{ textAlign: 'center', marginTop: '20px' }}>
                  Vaishnavi Mahajan
                </h4>
                <div className="icons">
                  <a
                    href="https://wce.acm.org/board.php?ref_id=3#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-address-card"></i>
                  </a>
                  <a
                    href="mailto:mvaishnavi411@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-envelope"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/vaishnavi-v-mahajan/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="cochair" />
              <h3 style={{ textAlign: 'center' }}>CO-CHAIR</h3>
              <div className="namebox">
  <img
    src="Piyush Mhaske.jpg"
    alt=""
    style={{
      alignItems: 'center',
      height: '200px',
      width: '200px',
      boxShadow: '0 0 4px 3px',
    }}
  />
  <h4 style={{ textAlign: 'center', marginTop: '20px' }}>Piyush Mhaske</h4>
  <div className="icons">
    <a href="https://wce.acm.org/board.php?ref_id=3" target="_blank">
      <i className="fa fa-address-card"></i>
    </a>
    <a href="mailto:piyushdalal@wec.edu.in">
      <i className="fa fa-envelope"></i>
    </a>
    <a href="https://www.linkedin.com/in/piyush-dalal-177492195/" target="_blank">
      <i className="fa fa-linkedin"></i>
    </a>
    <a href="https://github.com/PiyushDalal15" target="_blank">
      <i className="fa fa-github"></i>
    </a>
    <a href="https://piyushdalal15.github.io/PiyushDalal/" target="_blank">
      <i className="fa fa-file"></i>
    </a>
  </div>
</div>
</>
  );
}


export default Acm;