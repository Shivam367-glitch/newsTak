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
                <Link className="nav-link  text-white" aria-current="page" to='/'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-white" aria-current="page" to='/category/business'>Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-white" aria-current="page" to='/category/sports'>Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-white" aria-current="page" to='/category/technology'>Technology</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-white" aria-current="page" to='/category/entertainment'>Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-white" aria-current="page" to='/category/science'>Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-white" aria-current="page" to='/category/life-style'>Lifestyle</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-white" aria-current="page" to='/category/politics'>Politics</Link>
              </li> 
              <li className="nav-item">
                <Link className="nav-link  text-white" aria-current="page" to='/category/world'>World</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

  );
}

export default Navbar

