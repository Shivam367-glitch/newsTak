import React, { useState, useContext, useEffect, useMemo } from "react";
import { Container, Nav, Navbar, Offcanvas, Row, Col } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import Select from 'react-select';
import { paths } from "../utility/nav-link";
import useLanguage from "../Hooks/useLanguage";
import { LanguageContext } from "../contexts/LanguageContext";

const Header = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [options] = useLanguage();
  const { selectedLang, setSelectedLang } = useContext(LanguageContext);

 
  const languageOptions = useMemo(() => options.map(option => ({
    // useMemo is to avoid reconverting options on every render
    value: option.code,
    label: option.name,
  })), [options]);

  useEffect(() => {
    
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer); 
  }, []);

  const handleLogoClick = () => {
    navigate('/');
    setExpanded(false);
  };

  const handleNavItemClick = () => {
    setExpanded(false);
  };

  const handleLanguageChange = (selectedOption) => {
    setSelectedLang(selectedOption);
  };

  return (
    <Container fluid={true}  className="nav_container fixed-top">
      <Row >
         
          <Navbar as={Col} expanded={expanded} expand="lg" className="border-bottom py-3  d-flex align-items-center justify-content-between">
            <Container fluid className="d-lg-flex justify-content-lg-between align-items-lg-center"> 
            <NavLink
            to="/"
            onClick={handleLogoClick}
            className="text-decoration-none fw-bold text-dark display-6"
          >
            News Tak
          </NavLink> 
              <Navbar.Toggle
                aria-controls="offcanvasNavbar"
                onClick={() => setExpanded(!expanded)}
              />
              <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
              >
                <Offcanvas.Header closeButton onClick={() => setExpanded(false)} />
                <Offcanvas.Body className="d-lg-flex justify-content-lg-center align-items-lg-center gap-1">
                  <Nav className="justify-content-end gap-3 gap-lg-4 flex-grow-1">
                    {paths.map((path, index) => (
                      <NavLink
                        to={path.to}
                        key={index}
                        onClick={handleNavItemClick}
                        className="text-decoration-none"
                      >
                        {path.name}
                      </NavLink>
                    ))}
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
      </Row>

      <Row className="border-top">
        <Col xs={12} className="d-flex flex-row  justify-content-between py-2">
       
         
          <Container fluid={true} className="m-0 p-0">
          <Row className="justify-content-between"> 
            <Col xs={6} sm={4} md={3} lg={3} xl={2}>  
            <Select
            options={languageOptions}
            value={selectedLang}
            onChange={handleLanguageChange}
            className="basic-single"
            classNamePrefix="select" 
          />
 
            </Col>  
            <Col  xs={4} md={2} lg={2} className="text-center"> 

            <span className="text-white fw-bolder" >{currentTime.toLocaleTimeString()}</span> 
            </Col>


          </Row>
        </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
