import   { useState, useContext, useMemo } from "react";
import { Container, Nav, Navbar, Offcanvas, Row, Col } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import Select from 'react-select';
import { paths } from "../../utility/nav-link";
import useLanguage from "../../Hooks/useLanguage";
import LanguageContext from "../../contexts/LanguageContext";  
import Timer from "../common/Timer";
import { temp_c, weatherIcon } from "../../features/weather/weatherSelector";
import { useDispatch, useSelector } from "react-redux";
import { emptyState, setCategory } from "../../features/news/newsSlice";
import { fetchNews } from "../../features/news/newsThunk";

const Header = () => { 

  
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false); 
  const dispatch = useDispatch();

  const [options] = useLanguage();
  const { selectedLang, setSelectedLang } = useContext(LanguageContext);
  const temp = useSelector(temp_c);;
  const icon = useSelector(weatherIcon);
  
 
  const languageOptions = useMemo(() => options?.map(option => ({
    // useMemo is to avoid reconverting options on every render
    value: option.code,
    label: option.name,
  })), [options]);

 
 
    const toggleMenu = () => {
        setExpanded(prev => !prev);
       } 
       
  const handleLogoClick = () => {
    navigate('/');
    window.location.reload();
   if(expanded) toggleMenu();
  };

  const handleNavItemClick = (e) => { 
    
    let category = e.target.textContent;
    if(category === 'Home') {
      category = 'General';
    } 

    dispatch(setCategory(category));
     if(expanded) toggleMenu();
    
  };

  const handleLanguageChange = (selectedOption) => { 

     dispatch(emptyState());  
      dispatch(
          fetchNews({
            language: selectedOption.value,
          })
        ); 
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
                onClick={toggleMenu}
              />
              <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
              >
                <Offcanvas.Header closeButton onClick={toggleMenu} />
                <Offcanvas.Body className="d-lg-flex justify-content-lg-center align-items-lg-center gap-1">
                  <Nav className="justify-content-end gap-3 gap-lg-4 flex-grow-1">
                    {paths.map((path) => (
                      <NavLink
                        to={path.to}
                        key={path.to}
                        onClick={(e)=>{handleNavItemClick(e)}}
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
            <Row className="flex-column-reverse flex-md-row justify-content-between  align-items-md-center"> 
              <Col  className="" xs={6}  md={3} lg={2}>  
                  <Select
                  options={languageOptions}
                  value={selectedLang}
                  onChange={handleLanguageChange}
                  className="basic-single"
                  classNamePrefix="select" 
                /> 
              </Col>   

              <Col  xs={12} md={5} lg={4} className="text-center my-auto d-flex justify-content-between justify-content-lg-end align-items-center gap-3"> 
                <span className="text-white "><img src={icon} alt="Weather Icon" /> {temp+" ºC"}</span>
                <Timer />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
