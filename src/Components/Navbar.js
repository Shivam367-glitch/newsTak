import React, { useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap"
import { Link, NavLink, useNavigate } from "react-router-dom"
import "./Navbar.css";
import { paths } from "../utility/nav-link";

const Header = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const handleLogoClick = () => {
    navigate('/');
    setExpanded(false);
  };

  const handleNavItemClick = () => {
    setExpanded(false);
  };
  return (
    <>
        <Navbar key={'lg'} expanded={expanded} expand={'lg'} className=" border-bottom py-3 fixed-top" fixed="top"   >
          <Container fluid={true} className="d-lg-flex flex-lg-row justify-content-lg-between align-items-lg-center my-lg-0 p-lg-0 gap-lg-5 mx-md-5">
            <NavLink to="/"  onClick={handleLogoClick} className="text-decoration-none fw-bold text-dark display-6"> 
              News Tak
            </NavLink>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'lg'}`}   onClick={() => setExpanded(expanded ? false : true)}/>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${'lg'}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${'lg'}`}
              placement="end"
            >
              <Offcanvas.Header closeButton onClick={()=>{setExpanded(false)}}/>
              <Offcanvas.Body className="d-lg-flex flex-lg-row justify-content-lg-center align-items-lg-center">
                <Nav className={`  justify-content-end gap-3 gap-lg-5 flex-grow-1`}>
                  {paths.map((path, index) => (
                    <NavLink to={path.to}  key={index} as={Link} onClick={handleNavItemClick} className={`text-decoration-none`}>{path.name}</NavLink>
                  ))}
                </Nav>
               </Offcanvas.Body>
            </Navbar.Offcanvas>

          </Container>
        </Navbar>
    </>
  )
}

export default Header