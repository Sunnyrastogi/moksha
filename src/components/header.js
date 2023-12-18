import React, { useState, Fragment } from "react";
import {
  Nav,
  Navbar,
  Container,
  NavDropdown,
  Row,
  Col
} from "react-bootstrap";
import "./navbar.css";
import rus from "../images/Russia.jpg";
import { Link } from "react-router-dom";
import logo from "../images/logo65.jpg";
import pogo from "../images/fa-custom-icon-playstore.png";
function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Fragment>
      <section className="navbar-top pt-0 pb-0 nav-bg sticky canvass desktop-view">
        <Container fluid >
          <Row>
            <Col lg={7} className="p-0">
              <ul className="Navbar-nav">
                <li className="nav-item">
                  <a href="/universities" title="Apply Online" class="nav-link">
                    <i className="bi bi-send head-color"></i> Apply Online
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://app.moksh16.in/login/student-login.aspx"
                    title="Student Login"
                    className="nav-link"
                  >
                    <i className="bi bi-box-arrow-in-right head-color"></i> Student Login{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <p className="nav-link cursor-pointer text-secondary-hover mb-0">
                    <i className="bi bi-telephone-inbound text-secondary me-1"></i>{" "}
                    Request a call back
                  </p>
                </li>
              </ul>
            </Col>
            <Col lg={5} className="p-0">
              <ul className="social-list nova">
                <li>
                  <a
                    data-toggle="tooltip"
                    className="facebook"
                    href="https://www.facebook.com/MOKSHOverseasEducationConsultants"
                    title="facebook"
                  >
                    <i className="bi bi-facebook fa-facebook fab"></i>
                  </a>
                </li>
                <li>
                  <a
                    data-toggle="tooltip"
                    className="twitter"
                    href="https://twitter.com/Moksh_Overseas"
                    title="twitter"
                  >
                    <i className="bi bi-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    data-toggle="tooltip"
                    className="linkedin"
                    href="https://in.linkedin.com/company/moxsh-overseas-educom-pvt-ltd"
                    title="linkedin"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    data-toggle="tooltip"
                    class="instagram"
                    href="https://www.instagram.com/mokshoverseas/"
                    title="instagram"
                  >
                    <i class="bi bi-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    data-toggle="tooltip"
                    className="youtube"
                    href="https://www.youtube.com/@MokshCareerPlanner"
                    title="youtube"
                  >
                    <i className="bi bi-youtube"></i>
                  </a>
                </li>
                <li>
                  <a
                    data-toggle="tooltip"
                    className="telegram"
                    href="https://t.me/mokshoverseas"
                    title="telegram"
                  >
                    <i className="bi bi-telegram"></i>
                  </a>
                </li>
                <li>
                  <a
                    data-toggle="tooltip"
                    class="mail"
                    href="mailto:support@moksh16.com"
                    title="mail"
                  >
                    <i class="bi bi-envelope-fill"></i>
                  </a>
                </li>
                <li>
                  <a
                    data-toggle="tooltip"
                    className="whatsapp"
                    href="https://wa.me/+918269900555?text=Hi,"
                    title="whatsapp"
                  >
                    <i className="bi bi-whatsapp fa fa-whatsapp"></i>
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
        <div className="header" id="header-id">
          <div className="logo-section">
            <Container>
              <Row className="nav-label">
                <Col className="col-lg-2  header-right">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="logo-cont">
                      {" "}
                      <a href="https://www.moksh16.com/">
                        <img src={logo} alt="" className="mok" />
                      </a>
                    </div>
                    {/* <div className="navbar-toggle--btn d-block d-lg-none">
                    <button
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarNavDropdown"
                      aria-label="toggle navigation"
                      className="navbar-toggler"
                    >
                      <span className="navbar-toggler-icon">
                        <span>

                        </span>
                      </span>
                    </button>
                  </div> */}
                  </div>
                </Col>
                <Col className="col-lg-10 order-1 order-lg-2 header-right">
                  <ul className="border-list widget-list">
                    <li className="live-btn">
                      <a href="/webinar" className="pulse">
                        <i className="bi bi-headset text-primary shake"></i>
                        <div>
                          <h5 className="text-red">Live Counselling</h5>
                        </div>
                      </a>
                    </li>

                    <li>
                      <a href="#" className="">
                        <i className="bi bi-telephone text-red"></i>
                        <div>
                          <span className="header-txt">call us Now</span>

                          <h5 className="text-red">+91 9699360370</h5>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        rel="noreferrrer"
                        title="Whatsapp us"
                        href="https://wa.me/+918269900555?text=Hi,"
                      >
                        <i className="bi bi-whatsapp clr-whatsapp shake text-green"></i>
                        <div>
                          <span className="header-txt">Whatsapp us</span>
                          <h5 className="clr-whatsapp text-green">
                            8269900555
                          </h5>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        rel="noreferrrer"
                        title="Download now"
                        href="https://play.google.com/store/apps/details?id=com.moksh16.mobility"
                      >
                        <figure className="shake">
                          <img
                            src={pogo}
                            decoding="async"
                            alt="Download MOKSH App"
                            className="store-icon"
                          />
                        </figure>

                        <div>
                          <span className="header-txt">Download App</span>
                          <h5 className="text-blue">Carrer Planner</h5>
                        </div>
                      </a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Container>
          </div>
          <div>  
            <Navbar
          collapseOnSelect
          expand="lg"
          className="bg-color desktop-view top-marg"
          style={{ height: "80px" }}
        >
          <Container className="container-md-fluid">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="navtags">
              <Nav className=" drop-style navtag mt-1">
                <Link to="www.moksha16.com">Home</Link>
                <ul className="navbar-nav">
                  <li className="nav-item dropdown nav-margn">
                    <span
                      id="menu"
                      data-bs-toggle="dropdown"
                      className="nav-link dropdown-toggle m-0 "
                      data-bs-display="static"
                    >
                      About Moksha
                    </span>
                    <ul class="dropdown-menu">
                      <li class="dropdown-submenu">
                        <span
                          data-bs-toggle="dropdown"
                          className="dropdown-item dropdown-toggle"
                        >
                          {" "}
                          Investor Relation
                        </span>
                      </li>
                      <NavDropdown.Divider />
                      <li class="dropdown-submenu">
                        <span
                          data-bs-toggle="dropdown"
                          className="dropdown-item dropdown-toggle"
                        >
                          {" "}
                          About Moksha
                        </span>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown nav-margn">
                    <span
                      id="menu"
                      data-bs-toggle="dropdown"
                      className="nav-link dropdown-toggle m-0 "
                      data-bs-display="static"
                    >
                      Countries
                    </span>
                    <ul class="dropdown-menu">
                      <li class="dropdown-submenu">
                        <span
                          data-bs-toggle="dropdown"
                          className="dropdown-item dropdown-toggle"
                        >
                          {" "}
                          <div className="flag">
                            <a
                              href="/universities/study-abroad-in-russia"
                              title="Russia"
                            >
                              <img
                                width="150"
                                height="150"
                                decoding="async"
                                className="country-menu-logo"
                                src={rus}
                                alt="Study in Russia"
                              />

                              <span>Russia</span>
                            </a>
                            <a
                              href="/universities/study-abroad-in-georgia"
                              title="Georgia"
                            >
                              <img
                                width="150"
                                height="150"
                                decoding="async"
                                className="country-menu-logo"
                                src="https://app.moksh16.in/application-centre/assets/coutry/flag/4/Georgia.jpg"
                                alt="Study in Georgia"
                              />

                              <span>Georgia</span>
                            </a>
                            <a
                              href="/universities/study-abroad-in-serbia"
                              title="Serbia"
                            >
                              <img
                                width="150"
                                height="150"
                                decoding="async"
                                className="country-menu-logo"
                                src="https://app.moksh16.in/application-centre/assets/coutry/flag/59/download_png.png"
                                alt="Study in Serbia"
                              />

                              <span>Serbia</span>
                            </a>
                            <a
                              href="/universities/study-abroad-in-romania"
                              title="Romania"
                            >
                              <img
                                width="150"
                                height="150"
                                decoding="async"
                                className="country-menu-logo"
                                src="https://app.moksh16.in/application-centre/assets/coutry/flag/55/Romainia_png.png"
                                alt="Study in Romania"
                              />

                              <span>Romania</span>
                            </a>
                            <a
                              href="/universities/study-abroad-in-china"
                              title="China"
                            >
                              <img
                                width="150"
                                height="150"
                                decoding="async"
                                className="country-menu-logo"
                                src="https://app.moksh16.in/application-centre/assets/coutry/flag/1/China.jpg"
                                alt="Study in China"
                              />

                              <span>China</span>
                            </a>
                            <a
                              href="/universities/study-abroad-in-poland"
                              title="Poland"
                            >
                              <img
                                width="150"
                                height="150"
                                decoding="async"
                                className="country-menu-logo"
                                src="https://app.moksh16.in/application-centre/assets/coutry/flag/18/Flag-of-Poland.jpg"
                                alt="Study in Poland"
                              />

                              <span>Poland</span>
                            </a>
                            <a>
                              <img
                                width="150"
                                height="150"
                                decoding="async"
                                className="country-menu-logo"
                                src="https://app.moksh16.in/application-centre/assets/coutry/flag/11/Belarus.jpg"
                                alt="Study in Belarus"
                              />
                              <span>Belarus</span>
                            </a>
                            <a
                              href="/universities/study-abroad-in-croatia"
                              title="Croatia"
                            >
                              <img
                                width="150"
                                height="150"
                                decoding="async"
                                className="country-menu-logo"
                                src="https://app.moksh16.in/application-centre/assets/coutry/flag/62/croatia_jpg.jpg"
                                alt="Study in Croatia"
                              />

                              <span>Croatia</span>
                            </a>
                            <a
                              href="/universities/study-abroad-in-egypt"
                              title="Egypt"
                            >
                              <img
                                width="150"
                                height="150"
                                decoding="async"
                                className="country-menu-logo"
                                src="https://app.moksh16.in/application-centre/assets/coutry/flag/63/Egypt_png.png"
                                alt="Study in Egypt"
                              />

                              <span>Egypt</span>
                            </a>
                            <a
                              href="/universities/study-abroad-in-uzbekistan"
                              title="Uzbekistan"
                            >
                              <img
                                width="150"
                                height="150"
                                decoding="async"
                                className="country-menu-logo"
                                src="https://app.moksh16.in/application-centre/assets/coutry/flag/65/uzbekistan_png.png"
                                alt="Study in Uzbekistan"
                              />

                              <span>Uzbekistan</span>
                            </a>
                            <a
                              href="/universities/study-abroad-in-slovakia"
                              title="Slovakia"
                            >
                              <img
                                width="150"
                                height="150"
                                decoding="async"
                                className="country-menu-logo"
                                src="https://app.moksh16.in/application-centre/assets/coutry/flag/49/Slovakia_png.png"
                                alt="Study in Slovakia"
                              />

                              <span>Slovakia</span>
                            </a>
                            <a
                              href="/universities/study-abroad-in-bangladesh"
                              title="Bangladesh"
                            >
                              <img
                                width="150"
                                height="150"
                                decoding="async"
                                className="country-menu-logo"
                                src="https://app.moksh16.in/application-centre/assets/coutry/flag/38/Bangladesh-Flag.jpg"
                                alt="Study in Bangladesh"
                              />

                              <span>Bangladesh</span>
                            </a>
                            <a
                              href="/universities/study-abroad-in-nepal"
                              title="Nepal"
                            >
                              <img
                                width="150"
                                height="150"
                                decoding="async"
                                className="country-menu-logo"
                                src="https://app.moksh16.in/application-centre/assets/coutry/flag/37/Nepal-Flag.jpg"
                                alt="Study in Nepal"
                              />

                              <span>Nepal</span>
                            </a>
                            <a
                              href="/universities/study-abroad-in-lithuania"
                              title="Lithuania"
                            >
                              <img
                                width="150"
                                height="150"
                                decoding="async"
                                className="country-menu-logo"
                                src="https://app.moksh16.in/application-centre/assets/coutry/flag/53/Lithuania_png.png"
                                alt="Study in Lithuania"
                              />

                              <span>Lithuania</span>
                            </a>
                            <a
                              href="/universities/study-abroad-in-latvia"
                              title="Latvia"
                            >
                              <img
                                width="150"
                                height="150"
                                decoding="async"
                                className="country-menu-logo"
                                src="https://app.moksh16.in/application-centre/assets/coutry/flag/51/Latvia_png.png"
                                alt="Study in Latvia"
                              />

                              <span>Latvia</span>
                            </a>{" "}
                            <div className=" country-menu-link text-lg-center">
                              <a
                                href="/study-abroad-countries"
                                title="Explore More"
                                className="btn btn-outline-solid-primary d-inline-block mb-3"
                              >
                                <span>Explore More</span>
                              </a>
                            </div>
                          </div>
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown nav-margn">
                    <span
                      id="menu"
                      data-bs-toggle="dropdown"
                      className="nav-link dropdown-toggle m-0 "
                      data-bs-display="static"
                    >
                      Study in India
                    </span>
                    <ul class="dropdown-menu">
                      <li class="dropdown-submenu">
                        <span
                          data-bs-toggle="dropdown"
                          className="dropdown-item dropdown-toggle"
                        >
                          {" "}
                          <ul className="list-ind">
                            <li className="active">
                              <div className="d-flex justify-content-between drop-link">
                                <a href="/mbbs-in-india">MBBS in India</a>
                                <span className="d-block d-lg-none text-end flex-grow-1">
                                  <i className="bi bi-chevron-down"></i>
                                </span>
                              </div>
                              <div className="sub-menu">
                                <div>
                                  <a
                                    className="subnav-link"
                                    href="/mbbs-in-maharashtra"
                                    title="MBBS in Maharashtra"
                                  >
                                    MBBS in Maharashtra
                                  </a>
                                  <a
                                    className="subnav-link"
                                    href="/mbbs-in-andhra-pradesh"
                                    title="MBBS in Andhra Pradesh"
                                  >
                                    MBBS in Andhra Pradesh
                                  </a>
                                  <a
                                    className="subnav-link"
                                    href="/mbbs-in-karnataka"
                                    title="MBBS in Karnataka"
                                  >
                                    MBBS in Karnataka
                                  </a>
                                  <a
                                    className="subnav-link"
                                    href="/mbbs-in-rajasthan"
                                    title="MBBS in Rajasthan"
                                  >
                                    MBBS in Rajasthan
                                  </a>
                                  <a
                                    className="subnav-link"
                                    href="/mbbs-in-telangana"
                                    title="MBBS in Telangana"
                                  >
                                    MBBS in Telangana
                                  </a>
                                  <a
                                    className="subnav-link"
                                    href="/mbbs-in-madhya-pradesh"
                                    title="MBBS in Madhya Pradesh"
                                  >
                                    MBBS in Madhya Pradesh
                                  </a>
                                  <a
                                    className="subnav-link"
                                    href="/mbbs-in-uttar-pradesh"
                                    title="MBBS in Uttar Pradesh"
                                  >
                                    MBBS in Uttar Pradesh
                                  </a>
                                  <a
                                    className="subnav-link"
                                    href="/mbbs-in-tamil-nadu"
                                    title="MBBS in Tamil Nadu"
                                  >
                                    MBBS in Tamil Nadu
                                  </a>
                                  <a
                                    className="subnav-link"
                                    href="/mbbs-in-andaman-and-nicobar-islands"
                                    title="MBBS in Andaman And Nicobar Islands"
                                  >
                                    MBBS in Andaman And Nicobar Islands
                                  </a>
                                  <a
                                    className="subnav-link"
                                    href="/mbbs-in-dadra-and-nagar-haveli"
                                    title="MBBS in Dadra And Nagar Haveli"
                                  >
                                    MBBS in Dadra And Nagar Haveli
                                  </a>
                                  <a
                                    className="subnav-link"
                                    href="/mbbs-in-punjab"
                                    title="MBBS in Punjab"
                                  >
                                    MBBS in Punjab
                                  </a>
                                  <a
                                    className="subnav-link"
                                    href="/mbbs-in-mizoram"
                                    title="MBBS in Mizoram"
                                  >
                                    MBBS in Mizoram
                                  </a>
                                  <a
                                    className="subnav-link"
                                    href="/mbbs-in-manipur"
                                    title="MBBS in Manipur"
                                  >
                                    MBBS in Manipur
                                  </a>
                                  <a
                                    className="subnav-link"
                                    href="/mbbs-in-meghalaya"
                                    title="MBBS in Meghalaya"
                                  >
                                    MBBS in Meghalaya
                                  </a>
                                  <a
                                    className="subnav-link"
                                    href="/mbbs-in-bihar"
                                    title="MBBS in Bihar"
                                  >
                                    MBBS in Bihar
                                  </a>
                                  <a
                                    className="subnav-link"
                                    href="/mbbs-in-delhi"
                                    title="MBBS in Delhi"
                                  >
                                    MBBS in Delhi
                                  </a>
                                  <a
                                    className="subnav-link"
                                    href="/mbbs-in-himachal-pradesh"
                                    title="MBBS in Himachal Pradesh"
                                  >
                                    MBBS in Himachal Pradesh
                                  </a>
                                  <a
                                    className="subnav-link"
                                    href="/mbbs-in-jammu-and-kashmir"
                                    title="MBBS in Jammu And Kashmir"
                                  >
                                    MBBS in Jammu And Kashmir
                                  </a>
                                  <a
                                    className="subnav-link"
                                    href="/mbbs-in-jharkhand"
                                    title="MBBS in Jharkhand"
                                  >
                                    MBBS in Jharkhand
                                  </a>
                                  <a
                                    className="subnav-link"
                                    href="/mbbs-in-kerala"
                                    title="MBBS in Kerala"
                                  >
                                    MBBS in Kerala
                                  </a>
                                  <a
                                    className="subnav-link"
                                    href="/mbbs-in-odisha"
                                    title="MBBS in Odisha"
                                  >
                                    MBBS in Odisha
                                  </a>
                                  <a
                                    className="subnav-link"
                                    href="/mbbs-in-uttarakhand"
                                    title="MBBS in Uttarakhand"
                                  >
                                    MBBS in Uttarakhand
                                  </a>
                                  <a
                                    className="subnav-link"
                                    href="/mbbs-in-west-bengal"
                                    title="MBBS in West Bengal"
                                  >
                                    MBBS in West Bengal
                                  </a>
                                  <a
                                    className="subnav-link"
                                    href="/mbbs-in-arunachal-pradesh"
                                    title="MBBS in Arunachal pradesh"
                                  >
                                    MBBS in Arunachal pradesh
                                  </a>
                                  <a
                                    className="subnav-link"
                                    href="/mbbs-in-assam"
                                    title="MBBS in Assam"
                                  >
                                    MBBS in Assam
                                  </a>
                                  <a
                                    className="subnav-link"
                                    href="/mbbs-in-haryana"
                                    title="MBBS in Haryana"
                                  >
                                    MBBS in Haryana
                                  </a>
                                  <a
                                    className="subnav-link"
                                    href="/mbbs-in-sikkim"
                                    title="MBBS in Sikkim"
                                  >
                                    MBBS in Sikkim
                                  </a>
                                  <a
                                    className="subnav-link"
                                    href="/mbbs-in-tripura"
                                    title="MBBS in Tripura"
                                  >
                                    MBBS in Tripura
                                  </a>
                                  <a
                                    className="subnav-link"
                                    href="/mbbs-in-chandigarh"
                                    title="MBBS in Chandigarh"
                                  >
                                    MBBS in Chandigarh
                                  </a>
                                  <a
                                    className="subnav-link"
                                    href="/mbbs-in-gujarat"
                                    title="MBBS in Gujarat"
                                  >
                                    MBBS in Gujarat
                                  </a>
                                  <a
                                    className="subnav-link"
                                    href="/mbbs-in-pondicherry"
                                    title="MBBS in Pondicherry"
                                  >
                                    MBBS in Pondicherry
                                  </a>
                                  <a
                                    className="subnav-link"
                                    href="/mbbs-in-chhattisgarh"
                                    title="MBBS in Chhattisgarh"
                                  >
                                    MBBS in Chhattisgarh
                                  </a>
                                  <a
                                    className="subnav-link"
                                    href="/mbbs-in-goa"
                                    title="MBBS in Goa"
                                  >
                                    MBBS in Goa
                                  </a>{" "}
                                </div>
                              </div>
                            </li>{" "}
                          </ul>
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown nav-margn">
                    <span
                      id="menu"
                      data-bs-toggle="dropdown"
                      className="nav-link dropdown-toggle m-0 "
                      data-bs-display="static"
                    >
                      Study in Abroad
                    </span>
                    <ul class="dropdown-menu">
                      <li class="dropdown-submenu">
                        <span
                          data-bs-toggle="dropdown"
                          className="dropdown-item dropdown-toggle"
                        >
                          {" "}
                          study in russia
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown nav-margn">
                    <span
                      id="menu"
                      data-bs-toggle="dropdown"
                      className="nav-link dropdown-toggle m-0 "
                      data-bs-display="static"
                    >
                      Coaching
                    </span>
                    <ul class="dropdown-menu">
                      <li class="dropdown-submenu">
                        <span
                          data-bs-toggle="dropdown"
                          className="dropdown-item dropdown-toggle"
                        >
                          {" "}
                          study in russia
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown nav-margn">
                    <span
                      id="menu"
                      data-bs-toggle="dropdown"
                      className="nav-link dropdown-toggle m-0 "
                      data-bs-display="static"
                    >
                      Studium
                    </span>
                    <ul class="dropdown-menu">
                      <li class="dropdown-submenu">
                        <span
                          data-bs-toggle="dropdown"
                          className="dropdown-item dropdown-toggle"
                        >
                          {" "}
                          study in russia
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown nav-margn">
                    <span
                      id="menu"
                      data-bs-toggle="dropdown"
                      className="nav-link dropdown-toggle m-0 "
                      data-bs-display="static"
                    >
                      Contact us
                    </span>
                    <ul class="dropdown-menu">
                      <li class="dropdown-submenu">
                        <span
                          data-bs-toggle="dropdown"
                          className="dropdown-item dropdown-toggle"
                        >
                          {" "}
                          study in russia
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown nav-margn">
                    <span
                      id="menu"
                      data-bs-toggle="dropdown"
                      className="nav-link dropdown-toggle m-0 "
                      data-bs-display="static"
                    >
                      Gallery
                    </span>
                    <ul class="dropdown-menu">
                      <li class="dropdown-submenu">
                        <span
                          data-bs-toggle="dropdown"
                          className="dropdown-item dropdown-toggle"
                        >
                          {" "}
                          study in russia
                        </span>
                      </li>
                    </ul>
                  </li>
                </ul>
                <Link to="/blog">Blog</Link>
                <a href="/blog" target="_blank"></a>
                <Link to="/search">
                  <i className="bi bi-search"></i>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar> 
         </div>
        
        </div>
      </section>
      {/* mobile and tab view */}
      <section className="navbar-top pt-0 pb-0 mobile-view">
        <div className="header">
          <div className="logo-section">
            <Container fluid className="p-0">
              <Navbar expand="lg" className="bg-body-tertiary">
                <div className="container-fluid">
                  <Row>
                    <Col sm={2} md={2} lg={2}  className="col-2">
                      <div className="logo-cont">
                        {" "}
                        <a href="https://www.moksh16.com/">
                          <img src={logo} alt="" className="mok" />
                        </a>
                      </div>
                    </Col>
                    <Col sm={10} md={10} lg={10} className="col-10">
                      <Row>
                        <Col sm={3} md={3}  className="col-5 ">
                          <div className="live-btn d-flex">
                            <a href="/webinar" className="pulse">
                              <div>
                                <h5 className="text-red">Live Counselling</h5>
                              </div>
                            </a>
                          </div>
                        </Col>
                        <Col sm={3} md={3}  className="col-2">
                          <a href="#" className="sok">
                            <i className="bi bi-telephone text-red"></i>
                          </a>
                        </Col>
                        <Col sm={3} md={3} className="col-2">
                          <a
                            rel="noreferrrer"
                            title="Whatsapp us"
                            href="https://wa.me/+918269900555?text=Hi,"
                            className="sok"
                          >
                            <i className="bi bi-whatsapp clr-whatsapp shake text-green"></i>
                          </a>
                        </Col>
                        <Col sm={3} md={3} className="col-3">
                          <a
                            rel="noreferrrer"
                            title="Download now"
                            href="https://play.google.com/store/apps/details?id=com.moksh16.mobility"
                            className="sok"
                          >
                            <figure className="shake">
                              <img
                                src={pogo}
                                decoding="async"
                                alt="Download MOKSH App"
                                className="store-icon"
                              />
                            </figure>
                          </a>
                        </Col>
                      </Row>
                    </Col>
                    <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    className="toggle-menu"
                  />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className=" drop-style navtag mt-1">
                      <Link to="www.moksha16.com">Home</Link>
                      <ul className="navbar-nav">
                        <li className="nav-item dropdown nav-margn">
                          <span
                            id="menu"
                            data-bs-toggle="dropdown"
                            className="nav-link dropdown-toggle m-0 "
                            data-bs-display="static"
                          >
                            About Moksha
                          </span>
                          <ul class="dropdown-menu">
                            <li class="dropdown-submenu">
                              <span
                                data-bs-toggle="dropdown"
                                className="dropdown-item dropdown-toggle"
                              >
                                {" "}
                                Investor Relation
                              </span>
                            </li>
                            <NavDropdown.Divider />
                            <li class="dropdown-submenu">
                              <span
                                data-bs-toggle="dropdown"
                                className="dropdown-item dropdown-toggle"
                              >
                                {" "}
                                About Moksha
                              </span>
                            </li>
                          </ul>
                        </li>

                        <li className="nav-item dropdown nav-margn">
                          <span
                            id="menu"
                            data-bs-toggle="dropdown"
                            className="nav-link dropdown-toggle m-0 "
                            data-bs-display="static"
                          >
                            Countries
                          </span>
                          <ul class="dropdown-menu">
                            <li class="dropdown-submenu">
                              <span
                                data-bs-toggle="dropdown"
                                className="dropdown-item dropdown-toggle"
                              >
                                {" "}
                                <div className="flag">
                                  <a
                                    href="/universities/study-abroad-in-russia"
                                    title="Russia"
                                  >
                                    <img
                                      width="150"
                                      height="150"
                                      decoding="async"
                                      className="country-menu-logo"
                                      src={rus}
                                      alt="Study in Russia"
                                    />

                                    <span>Russia</span>
                                  </a>
                                  <a
                                    href="/universities/study-abroad-in-georgia"
                                    title="Georgia"
                                  >
                                    <img
                                      width="150"
                                      height="150"
                                      decoding="async"
                                      className="country-menu-logo"
                                      src="https://app.moksh16.in/application-centre/assets/coutry/flag/4/Georgia.jpg"
                                      alt="Study in Georgia"
                                    />

                                    <span>Georgia</span>
                                  </a>
                                  <a
                                    href="/universities/study-abroad-in-serbia"
                                    title="Serbia"
                                  >
                                    <img
                                      width="150"
                                      height="150"
                                      decoding="async"
                                      className="country-menu-logo"
                                      src="https://app.moksh16.in/application-centre/assets/coutry/flag/59/download_png.png"
                                      alt="Study in Serbia"
                                    />

                                    <span>Serbia</span>
                                  </a>
                                  <a
                                    href="/universities/study-abroad-in-romania"
                                    title="Romania"
                                  >
                                    <img
                                      width="150"
                                      height="150"
                                      decoding="async"
                                      className="country-menu-logo"
                                      src="https://app.moksh16.in/application-centre/assets/coutry/flag/55/Romainia_png.png"
                                      alt="Study in Romania"
                                    />

                                    <span>Romania</span>
                                  </a>
                                  <a
                                    href="/universities/study-abroad-in-china"
                                    title="China"
                                  >
                                    <img
                                      width="150"
                                      height="150"
                                      decoding="async"
                                      className="country-menu-logo"
                                      src="https://app.moksh16.in/application-centre/assets/coutry/flag/1/China.jpg"
                                      alt="Study in China"
                                    />

                                    <span>China</span>
                                  </a>
                                  <a
                                    href="/universities/study-abroad-in-poland"
                                    title="Poland"
                                  >
                                    <img
                                      width="150"
                                      height="150"
                                      decoding="async"
                                      className="country-menu-logo"
                                      src="https://app.moksh16.in/application-centre/assets/coutry/flag/18/Flag-of-Poland.jpg"
                                      alt="Study in Poland"
                                    />

                                    <span>Poland</span>
                                  </a>
                                  <a>
                                    <img
                                      width="150"
                                      height="150"
                                      decoding="async"
                                      className="country-menu-logo"
                                      src="https://app.moksh16.in/application-centre/assets/coutry/flag/11/Belarus.jpg"
                                      alt="Study in Belarus"
                                    />
                                    <span>Belarus</span>
                                  </a>
                                  <a
                                    href="/universities/study-abroad-in-croatia"
                                    title="Croatia"
                                  >
                                    <img
                                      width="150"
                                      height="150"
                                      decoding="async"
                                      className="country-menu-logo"
                                      src="https://app.moksh16.in/application-centre/assets/coutry/flag/62/croatia_jpg.jpg"
                                      alt="Study in Croatia"
                                    />

                                    <span>Croatia</span>
                                  </a>
                                  <a
                                    href="/universities/study-abroad-in-egypt"
                                    title="Egypt"
                                  >
                                    <img
                                      width="150"
                                      height="150"
                                      decoding="async"
                                      className="country-menu-logo"
                                      src="https://app.moksh16.in/application-centre/assets/coutry/flag/63/Egypt_png.png"
                                      alt="Study in Egypt"
                                    />

                                    <span>Egypt</span>
                                  </a>
                                  <a
                                    href="/universities/study-abroad-in-uzbekistan"
                                    title="Uzbekistan"
                                  >
                                    <img
                                      width="150"
                                      height="150"
                                      decoding="async"
                                      className="country-menu-logo"
                                      src="https://app.moksh16.in/application-centre/assets/coutry/flag/65/uzbekistan_png.png"
                                      alt="Study in Uzbekistan"
                                    />

                                    <span>Uzbekistan</span>
                                  </a>
                                  <a
                                    href="/universities/study-abroad-in-slovakia"
                                    title="Slovakia"
                                  >
                                    <img
                                      width="150"
                                      height="150"
                                      decoding="async"
                                      className="country-menu-logo"
                                      src="https://app.moksh16.in/application-centre/assets/coutry/flag/49/Slovakia_png.png"
                                      alt="Study in Slovakia"
                                    />

                                    <span>Slovakia</span>
                                  </a>
                                  <a
                                    href="/universities/study-abroad-in-bangladesh"
                                    title="Bangladesh"
                                  >
                                    <img
                                      width="150"
                                      height="150"
                                      decoding="async"
                                      className="country-menu-logo"
                                      src="https://app.moksh16.in/application-centre/assets/coutry/flag/38/Bangladesh-Flag.jpg"
                                      alt="Study in Bangladesh"
                                    />

                                    <span>Bangladesh</span>
                                  </a>
                                  <a
                                    href="/universities/study-abroad-in-nepal"
                                    title="Nepal"
                                  >
                                    <img
                                      width="150"
                                      height="150"
                                      decoding="async"
                                      className="country-menu-logo"
                                      src="https://app.moksh16.in/application-centre/assets/coutry/flag/37/Nepal-Flag.jpg"
                                      alt="Study in Nepal"
                                    />

                                    <span>Nepal</span>
                                  </a>
                                  <a
                                    href="/universities/study-abroad-in-lithuania"
                                    title="Lithuania"
                                  >
                                    <img
                                      width="150"
                                      height="150"
                                      decoding="async"
                                      className="country-menu-logo"
                                      src="https://app.moksh16.in/application-centre/assets/coutry/flag/53/Lithuania_png.png"
                                      alt="Study in Lithuania"
                                    />

                                    <span>Lithuania</span>
                                  </a>
                                  <a
                                    href="/universities/study-abroad-in-latvia"
                                    title="Latvia"
                                  >
                                    <img
                                      width="150"
                                      height="150"
                                      decoding="async"
                                      className="country-menu-logo"
                                      src="https://app.moksh16.in/application-centre/assets/coutry/flag/51/Latvia_png.png"
                                      alt="Study in Latvia"
                                    />

                                    <span>Latvia</span>
                                  </a>{" "}
                                  <div className=" country-menu-link text-lg-center">
                                    <a
                                      href="/study-abroad-countries"
                                      title="Explore More"
                                      className="btn btn-outline-solid-primary d-inline-block mb-3"
                                    >
                                      <span>Explore More</span>
                                    </a>
                                  </div>
                                </div>
                              </span>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item dropdown nav-margn">
                          <span
                            id="menu"
                            data-bs-toggle="dropdown"
                            className="nav-link dropdown-toggle m-0 "
                            data-bs-display="static"
                          >
                            Study in India
                          </span>
                          <ul class="dropdown-menu">
                            <li class="dropdown-submenu">
                              <span
                                data-bs-toggle="dropdown"
                                className="dropdown-item dropdown-toggle"
                              >
                                {" "}
                                <ul className="list-ind">
                                  <li className="active">
                                    <div className="d-flex justify-content-between drop-link">
                                      <a href="/mbbs-in-india">MBBS in India</a>
                                      <span className="d-block d-lg-none text-end flex-grow-1">
                                        <i className="bi bi-chevron-down"></i>
                                      </span>
                                    </div>
                                    <div className="sub-menu">
                                      <div>
                                        <a
                                          className="subnav-link"
                                          href="/mbbs-in-maharashtra"
                                          title="MBBS in Maharashtra"
                                        >
                                          MBBS in Maharashtra
                                        </a>
                                        <a
                                          className="subnav-link"
                                          href="/mbbs-in-andhra-pradesh"
                                          title="MBBS in Andhra Pradesh"
                                        >
                                          MBBS in Andhra Pradesh
                                        </a>
                                        <a
                                          className="subnav-link"
                                          href="/mbbs-in-karnataka"
                                          title="MBBS in Karnataka"
                                        >
                                          MBBS in Karnataka
                                        </a>
                                        <a
                                          className="subnav-link"
                                          href="/mbbs-in-rajasthan"
                                          title="MBBS in Rajasthan"
                                        >
                                          MBBS in Rajasthan
                                        </a>
                                        <a
                                          className="subnav-link"
                                          href="/mbbs-in-telangana"
                                          title="MBBS in Telangana"
                                        >
                                          MBBS in Telangana
                                        </a>
                                        <a
                                          className="subnav-link"
                                          href="/mbbs-in-madhya-pradesh"
                                          title="MBBS in Madhya Pradesh"
                                        >
                                          MBBS in Madhya Pradesh
                                        </a>
                                        <a
                                          className="subnav-link"
                                          href="/mbbs-in-uttar-pradesh"
                                          title="MBBS in Uttar Pradesh"
                                        >
                                          MBBS in Uttar Pradesh
                                        </a>
                                        <a
                                          className="subnav-link"
                                          href="/mbbs-in-tamil-nadu"
                                          title="MBBS in Tamil Nadu"
                                        >
                                          MBBS in Tamil Nadu
                                        </a>
                                        <a
                                          className="subnav-link"
                                          href="/mbbs-in-andaman-and-nicobar-islands"
                                          title="MBBS in Andaman And Nicobar Islands"
                                        >
                                          MBBS in Andaman And Nicobar Islands
                                        </a>
                                        <a
                                          className="subnav-link"
                                          href="/mbbs-in-dadra-and-nagar-haveli"
                                          title="MBBS in Dadra And Nagar Haveli"
                                        >
                                          MBBS in Dadra And Nagar Haveli
                                        </a>
                                        <a
                                          className="subnav-link"
                                          href="/mbbs-in-punjab"
                                          title="MBBS in Punjab"
                                        >
                                          MBBS in Punjab
                                        </a>
                                        <a
                                          className="subnav-link"
                                          href="/mbbs-in-mizoram"
                                          title="MBBS in Mizoram"
                                        >
                                          MBBS in Mizoram
                                        </a>
                                        <a
                                          className="subnav-link"
                                          href="/mbbs-in-manipur"
                                          title="MBBS in Manipur"
                                        >
                                          MBBS in Manipur
                                        </a>
                                        <a
                                          className="subnav-link"
                                          href="/mbbs-in-meghalaya"
                                          title="MBBS in Meghalaya"
                                        >
                                          MBBS in Meghalaya
                                        </a>
                                        <a
                                          className="subnav-link"
                                          href="/mbbs-in-bihar"
                                          title="MBBS in Bihar"
                                        >
                                          MBBS in Bihar
                                        </a>
                                        <a
                                          className="subnav-link"
                                          href="/mbbs-in-delhi"
                                          title="MBBS in Delhi"
                                        >
                                          MBBS in Delhi
                                        </a>
                                        <a
                                          className="subnav-link"
                                          href="/mbbs-in-himachal-pradesh"
                                          title="MBBS in Himachal Pradesh"
                                        >
                                          MBBS in Himachal Pradesh
                                        </a>
                                        <a
                                          className="subnav-link"
                                          href="/mbbs-in-jammu-and-kashmir"
                                          title="MBBS in Jammu And Kashmir"
                                        >
                                          MBBS in Jammu And Kashmir
                                        </a>
                                        <a
                                          className="subnav-link"
                                          href="/mbbs-in-jharkhand"
                                          title="MBBS in Jharkhand"
                                        >
                                          MBBS in Jharkhand
                                        </a>
                                        <a
                                          className="subnav-link"
                                          href="/mbbs-in-kerala"
                                          title="MBBS in Kerala"
                                        >
                                          MBBS in Kerala
                                        </a>
                                        <a
                                          className="subnav-link"
                                          href="/mbbs-in-odisha"
                                          title="MBBS in Odisha"
                                        >
                                          MBBS in Odisha
                                        </a>
                                        <a
                                          className="subnav-link"
                                          href="/mbbs-in-uttarakhand"
                                          title="MBBS in Uttarakhand"
                                        >
                                          MBBS in Uttarakhand
                                        </a>
                                        <a
                                          className="subnav-link"
                                          href="/mbbs-in-west-bengal"
                                          title="MBBS in West Bengal"
                                        >
                                          MBBS in West Bengal
                                        </a>
                                        <a
                                          className="subnav-link"
                                          href="/mbbs-in-arunachal-pradesh"
                                          title="MBBS in Arunachal pradesh"
                                        >
                                          MBBS in Arunachal pradesh
                                        </a>
                                        <a
                                          className="subnav-link"
                                          href="/mbbs-in-assam"
                                          title="MBBS in Assam"
                                        >
                                          MBBS in Assam
                                        </a>
                                        <a
                                          className="subnav-link"
                                          href="/mbbs-in-haryana"
                                          title="MBBS in Haryana"
                                        >
                                          MBBS in Haryana
                                        </a>
                                        <a
                                          className="subnav-link"
                                          href="/mbbs-in-sikkim"
                                          title="MBBS in Sikkim"
                                        >
                                          MBBS in Sikkim
                                        </a>
                                        <a
                                          className="subnav-link"
                                          href="/mbbs-in-tripura"
                                          title="MBBS in Tripura"
                                        >
                                          MBBS in Tripura
                                        </a>
                                        <a
                                          className="subnav-link"
                                          href="/mbbs-in-chandigarh"
                                          title="MBBS in Chandigarh"
                                        >
                                          MBBS in Chandigarh
                                        </a>
                                        <a
                                          className="subnav-link"
                                          href="/mbbs-in-gujarat"
                                          title="MBBS in Gujarat"
                                        >
                                          MBBS in Gujarat
                                        </a>
                                        <a
                                          className="subnav-link"
                                          href="/mbbs-in-pondicherry"
                                          title="MBBS in Pondicherry"
                                        >
                                          MBBS in Pondicherry
                                        </a>
                                        <a
                                          className="subnav-link"
                                          href="/mbbs-in-chhattisgarh"
                                          title="MBBS in Chhattisgarh"
                                        >
                                          MBBS in Chhattisgarh
                                        </a>
                                        <a
                                          className="subnav-link"
                                          href="/mbbs-in-goa"
                                          title="MBBS in Goa"
                                        >
                                          MBBS in Goa
                                        </a>{" "}
                                      </div>
                                    </div>
                                  </li>{" "}
                                </ul>
                              </span>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item dropdown nav-margn">
                          <span
                            id="menu"
                            data-bs-toggle="dropdown"
                            className="nav-link dropdown-toggle m-0 "
                            data-bs-display="static"
                          >
                            Study in Abroad
                          </span>
                          <ul class="dropdown-menu">
                            <li class="dropdown-submenu">
                              <span
                                data-bs-toggle="dropdown"
                                className="dropdown-item dropdown-toggle"
                              >
                                {" "}
                                study in russia
                              </span>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item dropdown nav-margn">
                          <span
                            id="menu"
                            data-bs-toggle="dropdown"
                            className="nav-link dropdown-toggle m-0 "
                            data-bs-display="static"
                          >
                            Coaching
                          </span>
                          <ul class="dropdown-menu">
                            <li class="dropdown-submenu">
                              <span
                                data-bs-toggle="dropdown"
                                className="dropdown-item dropdown-toggle"
                              >
                                {" "}
                                study in russia
                              </span>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item dropdown nav-margn">
                          <span
                            id="menu"
                            data-bs-toggle="dropdown"
                            className="nav-link dropdown-toggle m-0 "
                            data-bs-display="static"
                          >
                            Studium
                          </span>
                          <ul class="dropdown-menu">
                            <li class="dropdown-submenu">
                              <span
                                data-bs-toggle="dropdown"
                                className="dropdown-item dropdown-toggle"
                              >
                                {" "}
                                study in russia
                              </span>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item dropdown nav-margn">
                          <span
                            id="menu"
                            data-bs-toggle="dropdown"
                            className="nav-link dropdown-toggle m-0 "
                            data-bs-display="static"
                          >
                            Contact us
                          </span>
                          <ul class="dropdown-menu">
                            <li class="dropdown-submenu">
                              <span
                                data-bs-toggle="dropdown"
                                className="dropdown-item dropdown-toggle"
                              >
                                {" "}
                                study in russia
                              </span>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item dropdown nav-margn">
                          <span
                            id="menu"
                            data-bs-toggle="dropdown"
                            className="nav-link dropdown-toggle m-0 "
                            data-bs-display="static"
                          >
                            Gallery
                          </span>
                          <ul class="dropdown-menu">
                            <li class="dropdown-submenu">
                              <span
                                data-bs-toggle="dropdown"
                                className="dropdown-item dropdown-toggle"
                              >
                                {" "}
                                study in russia
                              </span>
                            </li>
                          </ul>
                        </li>
                      </ul>

                      <Link to="/blog">Blog</Link>
                      <a href="/blog" target="_blank"></a>
                      <Link to="/search">
                        <i class="bi bi-search"></i>
                      </Link>
                    </Nav>
                  </Navbar.Collapse>
                  </Row>
                </div>
              </Navbar>
            </Container>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Header;
