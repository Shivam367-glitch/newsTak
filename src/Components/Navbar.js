import React from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
  console.log("navbar")
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-white">News Tak</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to='/'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to='/business'>Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-white" aria-current="page" to='/sports'>Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to='/technology'>Technology</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to='/entertainment'>Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to='/science'>Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to='/life-style'>Lifestyle</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to='/politics'>Politics</Link>
              </li> 
              <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to='/world'>World</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

  );
}

export default Navbar

