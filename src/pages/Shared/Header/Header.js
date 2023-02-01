import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import './Header.css';

function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark" className="header-mobile-view-none">
        <Container>
          <Nav>
              <Nav.Link href="tel:+918000161161" className="phone-number">
                  <img src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/ind-flag.svg" alt="" />
                  &nbsp;+918000161161
              </Nav.Link>
             
              <Nav.Link href="tel:+1 309 791 4105" className="phone-number">
                <img src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/us-flag.svg" alt="" />
                &nbsp;+1 309 791 4105
              </Nav.Link>

              <Nav.Link href="tel:+44 20 8133 8639" className="phone-number">
                <img src="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/uk-flag.svg" alt="" />
                &nbsp;+44 20 8133 8639
              </Nav.Link>
          </Nav>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
                <button className="header-top-btn">Press Release</button>
                <button className="header-top-btn">Our Fresh Work</button>
                <button className="header-top-btn" style={{ background: "var(--main-color)", color: "var(--color1)"}}>Schedule Call</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top" className="header-bottom">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="Logo" width="100"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">

                <div className="menu-dropdown">
                  <button className="dropdown-btn">Company</button>
                  <div className="dropdown-content">
                    <h1>Design are coming soon!</h1>
                  </div>
                </div>

                <div className="menu-dropdown">
                  <button className="dropdown-btn">Services</button>
                  <div className="dropdown-content">
                    <h1>Design are coming soon!</h1>
                  </div>
                </div>

                <div className="menu-dropdown">
                  <button className="dropdown-btn">Hire Developers</button>
                  <div className="dropdown-content">
                    <h1>Design are coming soon!</h1>
                  </div>
                </div>

                <button className="without-dropdown-btn">Case Study</button>

                <div className="menu-dropdown">
                  <button className="dropdown-btn">Resources</button>
                  <div className="dropdown-content">
                    <h1>Design are coming soon!</h1>
                  </div>
                </div>

                <button className="without-dropdown-btn">Contact Us</button>

                <button className="header-free-quote-btn">Get A Free Quote</button>
               
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;