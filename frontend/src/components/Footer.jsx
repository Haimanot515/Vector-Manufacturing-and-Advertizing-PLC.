import React from "react";
import { Link } from "react-router-dom";
import { 
  FaFacebook, FaTwitter, FaYoutube, FaEnvelope, 
  FaArrowUp, FaPhone, FaMapMarkerAlt, FaDribbble, 
  FaFlickr, FaShareAlt
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footerWrapper">
      {/* 1. Back to Top Bar */}
      <div onClick={scrollToTop} className="backToTop footer-back-to-top">
        <FaArrowUp style={{ marginRight: "10px", fontSize: "10px" }} /> 
        <span style={{ letterSpacing: "4px" }}>GO TO TOP</span>
      </div>

      {/* 2. Main Content Area */}
      <div className="mainFooter">
        <div className="gridContainer">
          
          {/* Brand/Bio Section */}
          <div className="brandColumn">
            <div className="logoArea">
              <span className="logoText">VECTOR <span className="blueAccent">ADS</span></span>
            </div>
            <p className="brandDesc">
              Innovative solutions for Advertising. We boost quality in manufacturing 
              operations with high-performing, precise, reliable, and high-quality 
              products and services. Where imagination meets strategy.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="column">
            <div className="columnTitle">Services</div>
            <ul className="listStyle">
              <li><Link to="/branding" className="linkStyle footer-link">Branding</Link></li>
              <li><Link to="/digital-printing" className="linkStyle footer-link">Digital Printing</Link></li>
              <li><Link to="/cnc-router" className="linkStyle footer-link">CNC Router</Link></li>
              <li><Link to="/sublimation" className="linkStyle footer-link">Sublimation Print</Link></li>
              <li><Link to="/consulting" className="linkStyle footer-link">Consulting</Link></li>
            </ul>
          </div>

          {/* Tech Presence (Contact Info) */}
          <div className="column">
            <div className="columnTitle">Contact Us</div>
            <ul className="listStyle">
              <li>
                <span className="socialLinkItem footer-link">
                  <FaPhone className="iconBase" style={{ color: "#0077ff" }} /> +251 99 380 2995
                </span>
              </li>
              <li>
                <span className="socialLinkItem footer-link">
                  <FaEnvelope className="iconBase" style={{ color: "#0077ff" }} /> info@vector4engineering.com
                </span>
              </li>
              <li>
                <div className="socialLinkItem footer-link" style={{ alignItems: 'flex-start' }}>
                  <FaMapMarkerAlt className="iconBase" style={{ color: "#0077ff", marginTop: '5px' }} /> 
                  <span>Megenagna, Zefmesh Grand Mall<br/>3rd Floor, Shop No.: 301</span>
                </div>
              </li>
              <li className="socialGroupRow">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="rowIcon"><FaFacebook /></a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="rowIcon"><FaTwitter /></a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="rowIcon"><FaYoutube /></a>
              </li>
            </ul>
          </div>

          {/* Social Network (Support/Widgets) */}
          <div className="column">
            <div className="columnTitle">Support Portal</div>
            <ul className="listStyle">
              <li>
                <a href="#" className="socialLinkItem footer-link">
                   Typography
                </a>
              </li>
              <li>
                <a href="#" className="socialLinkItem footer-link">
                   All Widgets
                </a>
              </li>
              <li>
                <a href="#" className="socialLinkItem footer-link">
                   Custom CSS
                </a>
              </li>
              <li>
                <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="socialLinkItem footer-link">
                  <FaDribbble className="iconBase" style={{ color: "#ea4c89" }} /> Dribbble
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* 3. Bottom Legal Bar */}
      <div className="bottomBar">
        <div className="bottomContainer">
          <div className="copyText">
            © {currentYear} Vector Ads & Engineering. Innovative Solutions for Advertising.
          </div>
          <div className="socialIconsRow">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="bottomIcon"><FaFacebook /></a>
            <a href="https://flickr.com" target="_blank" rel="noreferrer" className="bottomIcon"><FaFlickr /></a>
            <a href="mailto:info@vector4engineering.com" className="bottomIcon"><FaEnvelope /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;