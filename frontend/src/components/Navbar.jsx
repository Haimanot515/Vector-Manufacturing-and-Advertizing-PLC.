import React, { useState, useEffect } from "react";
import Login from "../pages/Login";
import Form from "../pages/Registration/Form";
import Verify from "../pages/Registration/Verify"; 
import { Link, NavLink, useNavigate } from "react-router-dom"; // Swapped Link for NavLink where needed
import { FaTimes, FaBars, FaChevronDown, FaShoppingCart, FaArrowRight } from "react-icons/fa";
import "./Navbar.css"; 

const Navbar = ({ loggedIn, isAdmin, setLoggedIn, setIsAdmin }) => {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showVerify, setShowVerify] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  
  const [openSection, setOpenSection] = useState(null);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isMenuOpen]);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    setIsAdmin(false);
    setIsMenuOpen(false);
    navigate("/"); 
  };

  const closeModals = () => {
    setShowLogin(false);
    setShowRegister(false);
    setShowVerify(false);
  };

  const openRegister = () => { closeModals(); setShowRegister(true); setIsMenuOpen(false); };
  const openLogin = () => { closeModals(); setShowLogin(true); setIsMenuOpen(false); };

  // --- STYLES ---
  const backdropStyle = {
    position: "fixed",
    top: 0, left: 0,
    width: "100vw", height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    backdropFilter: "blur(2px)",
    zIndex: 99999,
    opacity: isMenuOpen ? 1 : 0,
    visibility: isMenuOpen ? "visible" : "hidden",
    transition: "opacity 0.4s ease",
    cursor: "pointer"
  };

  const sidebarStyle = {
    position: "fixed",
    top: 0, right: 0,
    width: "min(380px, 85vw)", 
    height: "100vh",
    backgroundColor: "#ffffff",
    zIndex: 100000,
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    transform: isMenuOpen ? "translateX(0)" : "translateX(100%)",
    overflowY: "auto",
    padding: "90px 25px 50px",
    boxShadow: isMenuOpen ? "-10px 0 30px rgba(0,0,0,0.05)" : "none"
  };

  const parentLinkStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 0",
    fontSize: "13px",
    fontWeight: "700",
    textTransform: "uppercase",
    color: "#0f172a",
    border: "none",
    background: "none",
    cursor: "pointer",
    letterSpacing: "1px",
    borderBottom: "1px solid #f1f5f9",
    fontFamily: "inherit"
  };

  const subLinkStyle = {
    display: "block",
    padding: "10px 20px",
    fontSize: "12px",
    color: "#64748b",
    textDecoration: "none",
    textTransform: "uppercase",
    fontWeight: "500",
    letterSpacing: "0.5px",
    transition: "color 0.2s",
    textAlign: "left"
  };

  return (
    <>
      <nav className="navbar">
        <div className={`nav-content ${isMenuOpen ? "active" : ""}`}>
          <Link to="/home" onClick={() => setIsMenuOpen(false)}>
            <img 
              src="https://res.cloudinary.com/dq3jkpys8/image/upload/v1772386587/vector-logonew_wymrja.png" 
              alt="Logo" 
              style={{ padding:"15px", position:"fixed", width: "150px", height: '40px', mixBlendMode: 'multiply' }} 
            /> 
          </Link>

          {/* NavLinks automatically apply the .active class from your CSS when clicked */}
          <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</NavLink>
          <NavLink to="/projects" onClick={() => setIsMenuOpen(false)}>Services</NavLink>
          <NavLink to="/skill" onClick={() => setIsMenuOpen(false)}>Products</NavLink>
          <NavLink to="/news" onClick={() => setIsMenuOpen(false)}>News</NavLink>
          <NavLink to="/testimonials" onClick={() => setIsMenuOpen(false)}>Team</NavLink>
          <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
          <NavLink to="/help" onClick={() => setIsMenuOpen(false)}>Help</NavLink>
          
          <button 
            className={isMenuOpen ? "active" : ""} // Adds active color to burger when open
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ fontSize: "28px", cursor: "pointer", background: "none", border: "none", marginLeft: "20px", color: "inherit", zIndex: 100001 }}
          >
            {isMenuOpen ? <FaTimes style={{color: "#000"}} /> : <FaBars />}
          </button>
        </div>
      </nav>

      <div style={backdropStyle} onClick={() => setIsMenuOpen(false)} />

      <div style={sidebarStyle}>
        <NavLink to="/home" style={parentLinkStyle} onClick={() => setIsMenuOpen(false)}>
          Home <FaArrowRight size={12} />
        </NavLink>

        <button style={parentLinkStyle} onClick={() => toggleSection('solutions')}>
          Solutions <FaChevronDown size={10} style={{ transform: openSection === 'solutions' ? 'rotate(180deg)' : 'rotate(0)', transition: '0.3s' }}/>
        </button>
        <div style={{ maxHeight: openSection === 'solutions' ? '400px' : '0', overflow: 'hidden', transition: '0.4s' }}>
          <NavLink to="/manufacturing" style={subLinkStyle} onClick={() => setIsMenuOpen(false)}>Manufacturing PLC</NavLink>
          <NavLink to="/automation" style={subLinkStyle} onClick={() => setIsMenuOpen(false)}>Industrial Automation</NavLink>
          <NavLink to="/ai-integration" style={subLinkStyle} onClick={() => setIsMenuOpen(false)}>AI & Robotics</NavLink>
          <NavLink to="/supply-chain" style={subLinkStyle} onClick={() => setIsMenuOpen(false)}>Supply Chain Opt</NavLink>
        </div>

        <button style={parentLinkStyle} onClick={() => toggleSection('market')}>
          Marketplace <FaChevronDown size={10} style={{ transform: openSection === 'market' ? 'rotate(180deg)' : 'rotate(0)', transition: '0.3s' }}/>
        </button>
        <div style={{ maxHeight: openSection === 'market' ? '300px' : '0', overflow: 'hidden', transition: '0.4s' }}>
          <NavLink to="/shop/raw-materials" style={subLinkStyle} onClick={() => setIsMenuOpen(false)}>Structural Steel & Beams</NavLink>
          <NavLink to="/shop/components" style={subLinkStyle} onClick={() => setIsMenuOpen(false)}>Pneumatic Components</NavLink>
          <NavLink to="/shop/automation-kits" style={subLinkStyle} onClick={() => setIsMenuOpen(false)}>PLC & Control Kits</NavLink>
          <NavLink to="/cart" style={{...subLinkStyle, color: '#36d2d3'}} onClick={() => setIsMenuOpen(false)}>
            <FaShoppingCart /> View Cart
          </NavLink>
        </div>

        <button style={parentLinkStyle} onClick={() => toggleSection('company')}>
          Company <FaChevronDown size={10} style={{ transform: openSection === 'company' ? 'rotate(180deg)' : 'rotate(0)', transition: '0.3s' }}/>
        </button>
        <div style={{ maxHeight: openSection === 'company' ? '300px' : '0', overflow: 'hidden', transition: '0.4s' }}>
          <NavLink to="/mission" style={subLinkStyle} onClick={() => setIsMenuOpen(false)}>Our Mission</NavLink>
          <NavLink to="/sustainability" style={subLinkStyle} onClick={() => setIsMenuOpen(false)}>Sustainability</NavLink>
          <NavLink to="/investors" style={subLinkStyle} onClick={() => setIsMenuOpen(false)}>Investor Relations</NavLink>
          <NavLink to="/careers" style={subLinkStyle} onClick={() => setIsMenuOpen(false)}>Join the Team</NavLink>
        </div>

        <button style={parentLinkStyle} onClick={() => toggleSection('account')}>
          Account <FaChevronDown size={10} style={{ transform: openSection === 'account' ? 'rotate(180deg)' : 'rotate(0)', transition: '0.3s' }}/>
        </button>
        <div style={{ maxHeight: openSection === 'account' ? '300px' : '0', overflow: 'hidden', transition: '0.4s' }}>
          {loggedIn ? (
            <>
              {(isAdmin === true || isAdmin === "true") && (
                <NavLink to="/admin/users/view" style={{...subLinkStyle, color: '#0ea5e9'}} onClick={() => setIsMenuOpen(false)}>Admin Dashboard</NavLink>
              )}
              <NavLink to="/settings" style={subLinkStyle} onClick={() => setIsMenuOpen(false)}>Profile Settings</NavLink>
              <button onClick={handleLogout} style={{ ...subLinkStyle, border: 'none', background: 'none', color: "#f43f5e", cursor: "pointer" }}>Logout</button>
            </>
          ) : (
            <>
              <button onClick={openLogin} style={{...subLinkStyle, border: 'none', background: 'none', cursor: 'pointer'}}>Client Login</button>
              <button onClick={openRegister} style={{...subLinkStyle, border: 'none', background: 'none', cursor: 'pointer'}}>Register Business</button>
            </>
          )}
        </div>

        <div style={{ marginTop: 'auto', paddingTop: '40px' }}>
          <div style={{ display: 'flex', gap: '10px', color: '#94a3b8', fontSize: '10px', marginBottom: '15px', justifyContent: 'center' }}>
            <span>ETHIOPIA</span> | <span>KENYA</span> | <span>DJIBOUTI</span>
          </div>
          <button 
            onClick={() => setIsMenuOpen(false)} 
            style={{ 
              width: "100%", padding: "14px", background: "#f8fafc", 
              border: "1px solid #e2e8f0", color: "#64748b", 
              fontSize: "12px", fontWeight: "bold", cursor: "pointer",
              letterSpacing: "1px"
            }}
          >
            CLOSE NAVIGATION
          </button>
        </div>
      </div>

      {(showLogin || showRegister || showVerify) && (
        <div className="overlay" onClick={closeModals}>
          <div className="auth-card" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModals} className="close-btn-style">
              <FaTimes />
            </button>
            {showLogin && <Login setLoggedIn={setLoggedIn} setIsAdmin={setIsAdmin} closeModal={closeModals} switchToRegister={openRegister} />}
            {showRegister && <Form closeModal={closeModals} switchToLogin={openLogin} />}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;