import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import LandingSidebar from '../components/LandingSidebar'; 

import { FaTimes } from "react-icons/fa"; 

const LandingPage = ({ loggedIn, setLoggedIn, isAdmin, setIsAdmin }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // AUTH POPUP STATES (From the first code)
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showVerify, setShowVerify] = useState(false);

  const allSlides = [


    {
      type: "brand",
      title: "Vector Advert and manufacturing",
      desc: "Delivering high-performance CNC and 3D printing solutions tailored for modern industrial needs.",
      sub: "Vector Ads Precision Infrastructure.",
      bg: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772380129/logo_nqfvho.jpg"
    },
    {
      type: "brand",
      title: "Vector Advert and manufacturing",
      desc: "Delivering high-performance CNC and 3D printing solutions tailored for modern industrial needs.",
      sub: "Vector Ads Precision Infrastructure.",
      bg: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772371611/brandig3_fl7wqy.png"
    },
    {
      type: "brand",
      title: "Promotion",
      desc: "Delivering high-performance CNC and 3D printing solutions tailored for modern industrial needs.",
      sub: "Vector Ads Precision Infrastructure.",
      bg: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772368662/branding_gvm383.png"
    },
    {
      type: "brand",
      title: "3d modeling printing",
      desc: "4-Axis high torque milling for aerospace aluminum and industrial steel.",
      price: "240,000 ETB",
      sub: "PRECISION MACHINES",
      accent: "#fbbf24",
      bg: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772372187/3d_modeling_printing_mxmidb.png"
    },
    {
      type: "brand",
      title: "SCREEN AND SUBLIMATION PRINT",
      desc: "Delivering high-performance CNC and 3D printing solutions tailored for modern industrial needs.",
      sub: "Vector Ads Precision Infrastructure.",
      bg: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772372442/screenign_mnegti.jpg"
    },
    {
      type: "brand",
      title: "CNC Router Engraving and Cutting",
      desc: "Delivering high-performance CNC and 3D printing solutions tailored for modern industrial needs.",
      sub: "Vector Ads Precision Infrastructure.",
      bg: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772372650/cnc_kjjx5d.png"
    },
    {
      type: "brand",
      title: "  Graphics and Design",
      desc: "Delivering high-performance CNC and 3D printing solutions tailored for modern industrial needs.",
      sub: "Vector Ads Precision Infrastructure.",
      bg: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772365795/graphics2_tzrz3g.avif"
    },
    {
      type: "brand",
      title: "Graphics and design",
      desc: "Delivering high-performance CNC and 3D printing solutions tailored for modern industrial needs.",
      sub: "Vector Ads Precision Infrastructure.",
      bg: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772365750/graphics1_ywjemn.avif"
    },

     {
      type: "brand",
      title: "3D PRINTING",
      desc: "Delivering high-performance CNC and 3D printing solutions tailored for modern industrial needs.",
      sub: "Vector Ads Precision Infrastructure.",
      bg: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772366385/3d_printing_bzt96r.avif"
    },

    
     {
      type: "brand",
      title: "UV PRINTING",
      desc: "Delivering high-performance CNC and 3D printing solutions tailored for modern industrial needs.",
      sub: "Vector Ads Precision Infrastructure.",
      bg: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772366369/uv_printing_mgbljb.jpg"
    },

    
     {
      type: "brand",
      title: "Light Box signages",
      desc: "Delivering high-performance CNC and 3D printing solutions tailored for modern industrial needs.",
      sub: "Vector Ads Precision Infrastructure.",
      bg: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772366369/uv_printing_mgbljb.jpg"
    },

    {
      type: "brand",
      title: "Lead Display screen",
      desc: "Delivering high-performance CNC and 3D printing solutions tailored for modern industrial needs.",
      sub: "Vector Ads Precision Infrastructure.",
      bg: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772367236/lead_diplay_screen_yhp0q3.jpg"
    },

    {
      type: "brand",
      title: "BENDING SERVICE",
      desc: "Delivering high-performance CNC and 3D printing solutions tailored for modern industrial needs.",
      sub: "Vector Ads Precision Infrastructure.",
      bg: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772367236/lead_diplay_screen_yhp0q3.jpg"
    },




    {
      type: "brand",
      title: "NEON SIGNAGE SERVICEG",
      desc: "From conceptual design to final production, we empower brands through superior manufacturing technology.",
      sub: "Vector Ads Precision Infrastructure.",
      bg: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772372902/neon_jqhts6.jpg"
    }
  ];

  // MODAL CONTROL LOGIC (From the first code)
  const closeModals = () => {
    setShowLogin(false);
    setShowRegister(false);
    setShowVerify(false);
    document.body.style.overflow = "unset";
  };

  const openRegister = () => { closeModals(); setShowRegister(true); document.body.style.overflow = "hidden"; };
  const openLogin = () => { closeModals(); setShowLogin(true); document.body.style.overflow = "hidden"; };
  const openVerify = () => { closeModals(); setShowVerify(true); document.body.style.overflow = "hidden"; };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % allSlides.length);
    }, 8000);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [allSlides.length]);

  const active = allSlides[currentSlide];

  return (
    <div style={{ backgroundColor: "#000", color: "#fff", minHeight: "200vh", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      
      {/* AUTH OVERLAY LAYER (Integrated Modal logic) */}
      {(showLogin || showRegister || showVerify) && (
        <div className="overlay" onClick={closeModals} style={{
          position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
          backgroundColor: "rgba(0,0,0,0.9)", zIndex: 10000, display: "flex", justifyContent: "center", alignItems: "center", backdropFilter: "blur(10px)"
        }}>
          <div onClick={(e) => e.stopPropagation()} style={{ position: "relative" }}>
            <button onClick={closeModals} style={{
              position: "absolute", top: "-50px", right: "0", background: "none", border: "none", color: "#fff", fontSize: "28px", cursor: "pointer"
            }}>
              <FaTimes />
            </button>
            {showLogin && <LoginPage setLoggedIn={setLoggedIn} setIsAdmin={setIsAdmin} closeModal={closeModals} switchToRegister={openRegister} />}
            {showRegister && <RegistrationForm closeModal={closeModals} switchToLogin={openLogin} switchToVerify={openVerify} />}
            {showVerify && <Verify setLoggedIn={setLoggedIn} setIsAdmin={setIsAdmin} closeModal={closeModals} />}
          </div>
        </div>
      )}

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700;800&family=Space+Grotesk:wght@700&display=swap');
          
          .nav-fixed { 
            position: fixed; top: 0; width: 100%; z-index: 4000; padding: 0 5%; 
            display: flex; justify-content: space-between; align-items: center; 
            height: 80px; box-sizing: border-box; transition: all 0.4s ease-in-out;
            background: ${scrolled ? '#ffffff' : 'transparent'};
            box-shadow: ${scrolled ? '0 4px 20px rgba(0,0,0,0.1)' : 'none'};
          }

          .nav-item-color {
            color: ${scrolled ? '#000000' : '#ffffff'} !important;
            transition: color 0.4s ease;
          }

          .nav-burger-line {
            background: ${scrolled ? '#000000' : '#ffffff'} !important;
          }

          .hero-section {
            position: relative; width: 100%; height: 100vh;
            overflow: hidden; display: flex; align-items: center; justify-content: center;
          }

          .hero-bg-image {
            position: absolute; inset: 0; width: 100%; height: 100%;
            background-image: url('${active.bg}');
            background-size: cover; background-position: center; z-index: 1;
            transition: background-image 1.2s ease-in-out;
          }

          .hero-dark-overlay { position: absolute; inset: 0; background: rgba(0, 0, 0, 0.4); z-index: 2; }

          .glass-card {
            position: relative; z-index: 10; display: flex; width: 100%; height: 100vh;
            background: transparent; overflow: hidden; animation: cardEnter 0.8s ease-out;
          }

          .image-pane { flex: 1.5; background: url('${active.bg}') center/cover no-repeat; position: relative; }

          .content-pane { 
            flex: 1; padding: 5% 8%; display: flex; flex-direction: column; 
            justify-content: center; background: #0a0a0a; 
          }

          @keyframes cardEnter { from { opacity: 0; } to { opacity: 1; } }

          .brand-title { 
            font-size:
            
            clamp(35px, 5.5vw, 65px); font-weight: 800; line-height: 1.1; 
            text-transform: uppercase; font-family: 'Space Grotesk'; margin-bottom: 20px;
          }
        `}
      </style>

      {/* NAVIGATION */}
      <nav className="nav-fixed">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img 
            src="https://res.cloudinary.com/dq3jkpys8/image/upload/v1772386587/vector-logonew_wymrja.png" 
            alt="Logo" 
            style={{ position:"fixed",left:"15px",width: "200px", height: '50px', mixBlendMode: 'multiply' }} 
          /> 
      
        </div>

        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          {/* LOGIN/SIGNUP Buttons triggered popups as per code 1 */}
          <Link to="/login" className="nav-item-color" style={{  textDecoration: "none", background: 'transparent', border: scrolled ? '1px solid #000' : '1px solid #fff', padding: '15px 30px', fontWeight: '600', cursor: 'pointer', borderRadius: '4px' }}>LOGIN</Link>
          <Link to="/register" style={{textDecoration: "none", background: '#36d2d3', color: '#fff', border: 'none', padding: '15px 30px', fontWeight: '600', cursor: 'pointer', borderRadius: '4px' }} >SIGN UP</Link>
          
          {/* HAMBURGER Logic (From code 1) */}
          <div style={{ cursor: 'pointer',position:"fixed", right:"15px", marginLeft: '15px', zIndex: 6000 }} onClick={() => setMenuOpen(!menuOpen)}>
              {[1, 2, 3].map((i) => (
                <div key={i} className="nav-burger-line" style={{ 
                  width: '32px', height: '5px', margin: '5px 0',
                  backgroundColor: menuOpen ? '#36d2d3' : (scrolled ? '#000' : '#fff'),
                  transition: '0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }} />
              ))}
          </div>
        </div>
      </nav>

      <section className="hero-section">
        {active.type === "brand" ? (
          <>
            <div className="hero-bg-image" key={`bg-${currentSlide}`} />
            <div className="hero-dark-overlay" />
            <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '900px' }} key={`brand-${currentSlide}`}>
              <h1 className="brand-title">
                {active.title.split(" ")[0]} <br />
                <span style={{ color: '#36d2d3' }}>{active.title.split(" ")[1]}</span> <br />
                {active.title.split(" ").slice(2).join(" ")}
              </h1>
              <p style={{ fontSize: '25px', opacity: 0.9, marginBottom: '40px' }}>{active.desc}</p>
              <button 
                onClick={() => setCurrentSlide((prev) => (prev + 1) % allSlides.length)}
                style={{ background: '#36d2d3', border: 'none', color: '#fff', padding: '13px 45px', cursor: 'pointer', fontWeight: '800', borderRadius: '4px', marginBottom: "15px", letterSpacing: '2px' }}
              >
                ORDER YOUR CHOICE➔
              </button>
            </div>
          </>
        ) : (
          <div className="glass-card" key={`prod-${currentSlide}`}>
            <div className="image-pane" />
            <div className="content-pane">
              <span style={{ fontSize: '11px', fontWeight: '800', color: active.accent, letterSpacing: '4px' }}>{active.sub}</span>
              <h2 style={{ fontFamily: 'Space Grotesk', fontSize: '42px', fontWeight: '800', margin: '15px 0', lineHeight: 1 }}>{active.title}</h2>
              <p style={{ color: '#aaa', marginBottom: '30px', fontSize: '16px' }}>{active.desc}</p>
              <div style={{ marginBottom: '30px', padding: '20px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }}>
                <span style={{ fontSize: '10px', color: '#666' }}>ESTIMATED UNIT PRICE</span>
                <div style={{ fontSize: '32px', fontWeight: '800', color: '#fff' }}>{active.price}</div>
              </div>
              <div style={{ display: 'flex', gap: '15px' }}>
                <button style={{ flex: 1, background: active.accent, color: '#000', padding: '15px', border: 'none', borderRadius: '4px', fontWeight: '800', cursor: 'pointer' }}>
                  ORDER NOW
                </button>
                <button onClick={() => setCurrentSlide((prev) => (prev + 1) % allSlides.length)} style={{ width: '60px', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '4px', cursor: 'pointer', color: '#fff' }}>➔</button>
              </div>
            </div>
          </div>
        )}
      </section>

      

  {/* COMPACT BRAND INTRODUCTION */}
<section style={{ 
  padding: '60px 8%', /* Reduced from 120px */
  background: '#ffffff', 
  display: 'flex', 
  flexDirection: 'column', 
  alignItems: 'center', 
  textAlign: 'center',
  borderBottom: '1px solid #f0f0f0'
}}>
  <style>
    {`
      .vector-title-compact {
        font-family: 'Space Grotesk', sans-serif;
        font-size:  clamp(35px, 5vw, 50px); /* Slightly smaller than hero */
        font-weight: 800;
        line-height: 1;
        color: #000;
        text-transform: uppercase;
        margin: 15px 0; /* Tight margins */
      }

      .vector-accent { color: #36d2d3; }

      .vector-paragraph-compact {
        font-family:'Times New Roman', serif;
        font-size: 20px;
        color: #585b5a;
        max-width: 700px;
        line-height: 1.4;
        margin-bottom: 20px;
      }

      .compact-stats {
        display: flex;
        gap: 50px;
        justify-content: center;
        flex-wrap: wrap;
      }

      .stat-box {
        text-align: left;
        border-left: 3px solid #36d2d3;
        padding-left: 15px;
      }

      .stat-num {
        display: block;
        font-family: 'Space Grotesk', sans-serif;
        font-size: 24px;
        font-weight: 800;
        color: #000;
      }

      .stat-lab {
        font-size: 10px;
        letter-spacing: 2px;
        font-weight: 700;
        color: #888;
        text-transform: uppercase;
      }
    `}
  </style>

  

  <h2 className="vector-title-compact">
    VECTOR <span className="vector-accent">ADS</span> & MANUFACTURING <span className="vector-accent">PLC</span>
  </h2>

  <p className="vector-paragraph-compact">
    VECTOR ADS & MANUFACTURING PLC
Vector Ads & Manufacturing PLC stands at the intersection of
 industrial precision and creative infrastructure, delivering
  high-performance solutions tailored for Ethiopia's evolving market. 
  We specialize in the design and production of heavy-duty CNC milling 
  systems, fiber laser cutters, and additive manufacturing technologies 
  that empower local industries to produce with world-class accuracy.
   
  </p>
    <img 
  src="https://res.cloudinary.com/dq3jkpys8/image/upload/v1772380811/ChatGPT_Image_Mar_1_2026_06_59_24_PM_hg0xkx.png" 
  alt="vector" 
  style={{ 
    width: 'calc(100% + 18%)', // Counters the 8% + 8% parent padding
    marginLeft: '-8%',         // Pulls it flush to the left edge
    marginRight: '-8%',        // Pulls it flush to the right edge
    height: '500px',           // Fixed sleek height (Adjust this number to your liking)
    objectFit: 'cover',        // Prevents the image from looking squashed
    objectPosition: 'center',  // Keeps the focus on the middle of the photo
    display: 'block',
    marginVertical: '40px',
    mixBlendMode: 'multiply',
    opacity: '0.9'             // Optional: makes it blend even smoother
  }}
/>


<section/>
{/* CORE PILLARS SECTION - CLEAN STATIC VERSION */}
<section style={{ padding: '100px 5px', background: '#fff', fontFamily: 'sans-serif' }}>
  <div>
    <h2 style={{ 
      fontFamily: 'Space Grotesk, sans-serif', 
      fontSize: 'clamp(35px, 5vw, 50px)', 
      fontWeight: '800', 
      margin: '15px 0', 
      letterSpacing: '-0.05em', 
      color: '#000', 
      lineHeight: '1', 
      textAlign: "left", 
      paddingLeft: "0px", 
      marginBottom:"150px",
      textAlign:"center",
      whiteSpace: 'nowrap' 
    }}> 
      WHAT THE COMPANY <span style={{ color: '#36d2d3' }}>DOES</span>
    </h2>
    
  </div>

  <style>
    {`
      .core-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 60px;
        margin-top: 80px;
      }

      @media (max-width: 900px) {
        .core-grid { 
          grid-template-columns: 1fr; 
          gap: 40px; 
        }
      }

      .core-card-static {
        background: #ffffff;
        display: flex;
        flex-direction: column;
      }

      .core-img-box-static {
        height: 400px;
        width: 100%;
        background: #f5f5f5;
        border-radius: 4px;
        overflow: hidden;
      }

      .core-img-box-static img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .core-content-static {
        padding: 30px 0;
      }

      .core-label {
        color: #36d2d3;
        font-weight: 800;
        font-size: 11px;
        letter-spacing: 3px;
        text-transform: uppercase;
        display: block;
        margin-bottom: 12px;
      }

      .core-title-static {
        font-family: 'Space Grotesk', sans-serif;
        font-size: 32px;
        font-weight: 800;
        color: #000;
        text-transform: uppercase;
        margin: 0 0 20px 0;
        line-height: 1.1;
      }

      .capability-tag {
        display: inline-block;
        padding: 8px 18px;
        border: 1px solid #eee;
        color: #111;
        font-size: 10px;
        font-weight: 700;
        margin: 0 10px 10px 0;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
    `}
  </style>

  <div className="core-grid">
    {/* PILLAR 1: ADVERTISING */}
    <div className="core-card-static">
      <div className="core-img-box-static">
        <img src="https://res.cloudinary.com/dq3jkpys8/image/upload/v1772364291/advrtizinsing_yzlaxh.jpg" alt="Advertising Infrastructure" />
      </div>
      <div className="core-content-static">
        <span className="core-label">Visibility Solutions</span>
        <h3 className="core-title-static">Vector Advertisement</h3>
        <p style={{ color: '#444', marginBottom: '25px', lineHeight: '1.7', fontSize: '16px', maxWidth: '90%' }}>
          Delivering high-impact physical branding through innovative pylon designs, 3D channel letters, and urban advertising infrastructure.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <span className="capability-tag">3D Signage</span>
          <span className="capability-tag">LED Displays</span>
          <span className="capability-tag">Pylon Hubs</span>
        </div>
      </div>
    </div>

    {/* PILLAR 2: MANUFACTURING */}
    <div className="core-card-static">
      <div className="core-img-box-static">
        <img src="https://res.cloudinary.com/dq3jkpys8/image/upload/v1772364599/manufacturing_mnnv5n.jpg" alt="Precision Manufacturing" />
      </div>
      <div className="core-content-static">
        <span className="core-label">Industrial Production</span>
        <h3 className="core-title-static">Vector Manufacturing</h3>
        <p style={{ color: '#444', marginBottom: '25px', lineHeight: '1.7', fontSize: '16px', maxWidth: '90%' }}>
          Utilizing precision CNC milling and additive manufacturing to produce high-tolerance components for industrial and commercial use.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <span className="capability-tag">CNC Milling</span>
          <span className="capability-tag">3D Printing</span>
          <span className="capability-tag">Fabrication</span>
        </div>
      </div>
    </div>
  </div>

</section>





      {/* NOTICE BOARD SECTION - CENTERED & MAX SCALE */}
<section style={{ padding: '0px 8%', background: '#fcfcfc', borderTop: '1px solid #f0f0f0' }}>
  <style>
    {`
      .notice-container {
        max-width: 1400px; 
        margin: 0 auto;
      }

      .notice-header-centered {
        text-align: center;
        margin-bottom: 80px;
      }

      .notice-list {
        display: flex;
        flex-direction: column;
        gap: 30px;
      }

      .notice-card {
        display: grid;
        grid-template-columns: 250px 1fr auto; 
        align-items: center;
        background: #ffffff;
        padding: 50px; /* Maximum breathing room */
        border-radius: 24px;
        border: 1px solid #e2e8f0;
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }

      

      .notice-meta {
        border-right: 3px solid #f1f5f9;
        padding-right: 40px;
      }

      .notice-type {
        display: inline-block;
        font-family: 'Space Grotesk', sans-serif;
        font-size: 1rem; /* Scaled up */
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: 3px;
        color: #36d2d3;
        margin-bottom: 10px;
      }

      .notice-date {
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-size: 1.15rem; /* Scaled up */
        color: #94a3b8;
        display: block;
      }

      .notice-body {
        padding: 0 60px;
      }

      .notice-sub {
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-size: 1.2rem; /* Scaled up */
        font-weight: 800;
        color: #36d2d3;
        margin-bottom: 12px;
        display: block;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      .notice-title {
        font-family: 'Space Grotesk', sans-serif;
        font-size: 2.2rem; /* Massive Heading */
        font-weight: 900;
        color: #0f172a;
        margin: 0 0 12px 0;
        letter-spacing: -1px;
        line-height: 1.1;
      }

      .notice-desc {
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-size: 1.25rem; /* Large Body Text */
        color: #36d2d3;
        line-height: 1.7;
        margin: 0;
      }

      .notice-btn {
        padding: 15px 20px;
        background: #36d2d3;
        color: white;
        border: none;
        border-radius: 14px;
        font-family: 'Space Grotesk', sans-serif;
        font-weight: 800;
        font-size: 1rem;
        text-transform: uppercase;
        letter-spacing: 2px;
        transition: 0.3s;
        cursor: pointer;
      }

      .notice-btn:hover {
        background: #022020;
        box-shadow: 0 10px 20px rgba(60, 204, 204, 0.3);
      }

      @media (max-width: 1100px) {
        .notice-card { grid-template-columns: 1fr; gap: 30px; padding: 40px; text-align: center; }
        .notice-meta { border-right: none; border-bottom: 3px solid #f1f5f9; padding: 0 0 20px 0; }
        .notice-body { padding: 0; }
      }
    `}
  </style>

  <div className="notice-container">
    {/* CENTERED HEADER */}
    <div className="notice-header-centered">
    

<h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(35px, 5vw, 50px)', fontWeight: '800', margin: '15px 0', letterSpacing: '-0.05em', color: '#000', lineHeight: '1', textAlign: "left", paddingLeft: "0px", whiteSpace: 'nowrap' }}>WELCOME TO THE NOTICE <span style={{ color: '#36d2d3' }}>BOARD</span></h2>
     
    </div>

    <div className="notice-list">
      
      {/* ITEM 1: JOB VACANCY */}
      <div className="notice-card">
        <div className="notice-meta">
          <span className="notice-type">Hiring</span>
          <span className="notice-date">Feb 24, 2026</span>
        </div>
        <div className="notice-body">
          <span className="notice-sub">Engineering</span>
          <h4 className="notice-title">Senior Robotics Systems Lead</h4>
          <p className="notice-desc">We are looking for a visionary engineer to spearhead our autonomous navigation division.</p>
        </div>
        <button className="notice-btn">View The Details</button>
      </div>

      {/* ITEM 2: EVENT */}
      <div className="notice-card">
        <div className="notice-meta">
          <span className="notice-type" style={{ color: '#22c55e' }}>Event</span>
          <span className="notice-date">Mar 12, 2026</span>
        </div>
        <div className="notice-body">
          <span className="notice-sub">Workshop</span>
          <h4 className="notice-title">Advanced SLA Printing Seminar</h4>
          <p className="notice-desc">Deep-dive into high-precision resin printing for medical and aerospace prototyping.</p>
        </div>
        <button className="notice-btn">Register</button>
      </div>

    </div>

    {/* OVERALL SEE MORE BUTTON */}
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <button style={{
        background: '#36d2d3', color: '#fff', 
        fontFamily: 'Space Grotesk', fontWeight: '900', fontSize: '0.7rem',
        textTransform: 'uppercase', letterSpacing: '3px', cursor: 'pointer',
        padding: '20px 30px', borderRadius: '50px', border: 'none',
        
        
      }}
      onMouseOver={(e) => e.target.style.background = '#36d2d3'}
      onMouseOut={(e) => e.target.style.background = '#36d2d3'}>
        View All Announcements
      </button>
    </div>
  </div>
 
</section>



</section>


{/* ABOUT VECTOR PLC - SPLIT SECTION */}
<section style={{ 
  background: '#fff', 
  padding: '60px 0', 
  overflow: 'hidden',
  borderBottom: '1px solid #f0f0f0'
}}>
  <style>
    {`
      .about-container {
        max-width: 1400px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        gap: 60px;
        padding: 0 8%;
      }

      @media (max-width: 968px) {
        .about-container { grid-template-columns: 1fr; gap: 40px; }
      }

      .about-image-wrapper {
        position: relative;
        height: 500px;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 20px 40px rgba(0,0,0,0.1);
      }

      .about-image-wrapper img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .about-tag {
        font-size: 10px;
        letter-spacing: 4px;
        font-weight: 800;
        color: #36d2d3;
        text-transform: uppercase;
        display: block;
        margin-bottom: 12px;
      }

      .about-title {
        font-family: 'Space Grotesk', sans-serif;
        font-size: clamp(35px, 5vw, 50px);
        font-weight: 800;
        line-height: 1.1;
        color: #000;
        text-transform: uppercase;
        margin-bottom: 25px;
      }

      .about-desc {
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-size: 18px;
        line-height: 1.6;
        color: #444;
        margin-bottom: 30px;
      }

      .blue-line {
        width: 50px;
        height: 4px;
        background: #36d2d3;
        margin-bottom: 25px;
      }

      .feature-list {
        list-style: none;
        padding: 0;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 15px;
      }

      .feature-item {
        font-size: 13px;
        font-weight: 700;
        color: #000;
        display: flex;
        align-items: center;
        gap: 8px;
        text-transform: uppercase;
      }

      .feature-dot {
        width: 6px;
        height: 6px;
        background: #36d2d3;
        border-radius: 50%;
      }
    `}
  </style>

  <div className="about-container">
    {/* LEFT: IMAGE */}
    <div className="about-image-wrapper">
      <img 
        src="https://res.cloudinary.com/dq3jkpys8/image/upload/v1772371621/abut_us_rjdcuw.jpg" 
        alt="Vector PLC Facility" 
      />
      {/* Decorative floating badge */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        right: '20px',
        background: '#36d2d3',
        color: '#fff',
        padding: '15px 25px',
        borderRadius: '4px',
        fontFamily: 'Space Grotesk',
        fontWeight: '700'
      }}>
        SINCE 2026
      </div>
    </div>

    {/* RIGHT: CONTENT */}
    <div style={{ textAlign: 'left' }}>
     
      <h2 className="about-title">
        The Future of <span style={{ color: '#36d2d3' }}>Precision</span> <br /> 
        Manufacturing
      </h2>
      
      
      <p className="about-desc">
        Vector PLC is Addis Ababa’s premier destination for advanced industrial solutions. 
        We specialize in bridging the gap between digital design and physical reality, 
        utilizing high-performance CNC machinery and professional-grade 3D printing 
        to empower local industries and international partners.
      </p>

      <ul className="feature-list">
        <li className="feature-item"><div className="feature-dot" /> CNC Milling</li>
        <li className="feature-item"><div className="feature-dot" /> 3D Prototyping</li>
        <li className="feature-item"><div className="feature-dot" /> Signage Infrastructure</li>
        <li className="feature-item"><div className="feature-dot" /> Industrial Design</li>
      </ul>

      <button style={{
        marginTop: '40px',
        background: 'transparent',
        border: '2px solid #000',
        padding: '12px 30px',
        fontWeight: '800',
        fontSize: '12px',
        letterSpacing: '2px',
        cursor: 'pointer',
        transition: '0.3s'
      }}
      onMouseOver={(e) => { e.target.style.background = '#000'; e.target.style.color = '#fff'; }}
      onMouseOut={(e) => { e.target.style.background = 'transparent'; e.target.style.color = '#000'; }}
      >
        VIEW PORTFOLIO
      </button>
    </div>
  </div>
</section>



 <section>


  {/* SINGLE COLUMN SPECIAL SERVICES - FIXED IMAGES */}
<section style={{ padding: '60px 8%', background: '#ffffff' }}>
  <style>
    {`
      .service-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 60px;
        align-items: center;
        margin-bottom: 20px;
      }

      @media (max-width: 850px) {
        .service-row {
          grid-template-columns: 1fr;
          gap: 30px;
          margin-bottom: 60px;
        }
        .service-row:nth-child(even) .service-text {
          order: 2;
        }
      }

      .service-img-wrap {
        width: 100%;
        height: 400px;
        background: #f9f9f9;
        border-radius: 4px;
        overflow: hidden;
      }

      .service-img-wrap img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .service-title {
        font-family: 'Space Grotesk', sans-serif;
        font-size: clamp(28px, 3vw, 42px);
        font-weight: 800;
        text-transform: uppercase;
        color: #000;
        margin-bottom: 20px;
        line-height: 1.1;
      }

      .service-description {
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-size: 18px;
        color: #444;
        line-height: 1.6;
        margin-bottom: 30px;
      }

      .service-btn {
        display: inline-block;
        font-family: 'Space Grotesk', sans-serif;
        font-weight: 800;
        font-size: 13px;
        letter-spacing: 2px;
        color: #fff;
        background: #36d2d3;
        padding: 15px 35px;
        text-decoration: none;
        text-transform: uppercase;
        border-radius: 4px;
      }
    `}
  </style>
  {/* ROW 1: ROBOTICS */}
  <div className="service-row">
    <div className="service-text" style={{ textAlign: 'right' }}>
    
      <h2 className="service-title">Robotics <br />Classes</h2>
      <p className="service-description">
        Join our Robotics Classes to dive into hands-on learning with Arduino! Explore the fundamentals of robotics, build your projects, and gain practical skills in a fun and engaging environment.
      </p>
      <a href="#" className="service-btn">Learn more</a>
    </div>
    <div className="service-img-wrap">
      <img src="https://res.cloudinary.com/dq3jkpys8/image/upload/v1772380129/logo_nqfvho.jpg" alt="Robotics" />
    </div>
  </div>


  {/* ROW 2: 3D PRINTING */}
  <div className="service-row">
    <div className="service-img-wrap">
      <img src="https://res.cloudinary.com/dq3jkpys8/image/upload/v1772365750/graphics1_ywjemn.avif" alt="3D Printing" />
    </div>
    <div className="service-text">
      <h2 className="service-title">3D Printing <br />Service</h2>
      <p className="service-description">
        Turn Your Ideas into Reality with Precision and Flexibility. Explore our range of 3D printing solutions to create custom prototypes, models, and parts for your projects with ease.
      </p>
      <a href="#" className="service-btn">Order a 3D print</a>
    </div>
  </div>

  
  {/* ROW 3: CUSTOM ORDER */}
  <div className="service-row">
   
    <div className="service-text">
      <h2 className="service-title">Custom Product <br />Order</h2>
      <p className="service-description">
        Order custom Arduino and robotics components, sourced directly from China, the US, and Europe. We ensure high-quality products tailored to your needs with reliable global delivery.
      </p>
      <a href="#" className="service-btn">Order now</a>
    </div>
    <div className="service-img-wrap">
      <img src="https://res.cloudinary.com/dq3jkpys8/image/upload/v1772368662/branding_gvm383.png" alt="Custom Orders" />
    </div>
  </div>
</section>
</section>

  {/* FEATURED PRODUCTS SECTION */}
<section style={{ padding: '60px 20px', background: '#ffffff' }}>
  <style>
    {`
      .product-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr); 
        gap: 37px;
        margin-top: 40px;
      }

      .product-card {
        background: #fff;
        display: flex;
        flex-direction: column;
        transition: transform 0.3s ease;
        cursor: pointer;
        border-bottom: 3px solid transparent;
      }
      
      .product-card:hover {
        transform: translateY(-5px);
        border-bottom: 3px solid #36d2d3;
      }

      .product-image-container {
        aspect-ratio: 1 / 1;
        width: 100%;
        position: relative;
        background: #ffffff;
        border: 4px solid #ffffff;
        border-radius: 20px;
        box-sizing: border-box;
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        box-shadow: 0 2px 15px rgba(0,0,0,0.05);
        margin-bottom: 15px;
      }

      .product-image-container img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 6px;
      }

      .product-category {
        font-size: 10px;
        letter-spacing: 1px;
        font-weight: 800;
        color: #36d2d3;
        text-transform: uppercase;
        margin-bottom: 5px;
        padding: 0 10px;
      }

      .product-name {
        font-family: 'Segoe UI', Roboto, sans-serif;
        font-size: 18px;
        font-weight: 700;
        color: #111;
        margin-bottom: 5px;
        line-height: 1.4;
        padding: 0 10px;
      }

      .product-description {
        font-family: 'Segoe UI', Roboto, sans-serif;
        font-size: 14px;
        color: #666;
        line-height: 1.4;
        margin-bottom: 10px;
        padding: 0 10px;
        min-height: 40px;
      }

      .price-tag {
        font-size: 20px;
        font-weight: 800;
        color: #36d2d3;
        padding: 0 10px;
      }

      .unit-text {
        font-size: 12px;
        color: #565959;
        font-weight: 400;
      }

      .btn-container {
        padding: 10px;
        margin-top: 10px;
      }

      .action-btn {
        width: 100%;
        padding: 14px;
        border-radius: 8px;
        font-size: 15px;
        cursor: pointer;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
        box-sizing: border-box;
        margin-bottom: 10px;
        border: none;
      }

      .buy-now-btn {
        background: linear-gradient(135deg, #36d2d3 0%, #36d2d3 100%);
        color: #ffffff;
      }

      .details-btn {
        background: #ffffff;
        border: 1.5px solid #ddd;
        color: #333;
      }

      @media (max-width: 992px) {
        .product-grid { grid-template-columns: repeat(2, 1fr); }
      }
      @media (max-width: 600px) {
        .product-grid { grid-template-columns: 1fr; }
      }
    `}
  </style>

  {/* SECTION TITLE */}
  <div style={{ textAlign: 'left', marginBottom: '20px' }}>
   
    <h2 style={{ 
      fontFamily: "'Segoe UI', sans-serif", 
      fontSize: 'clamp(35px, 5vw, 50px)', 
      fontWeight: '800', 
      lineHeight: '1.1',
      marginBottom: '80px', 
      letterSpacing: '-1px', 
      color: '#000',
      textAlign:"center",
      textTransform: 'uppercase'
    }}>
      our brand   <span style={{ color: '#36d2d3' }}>Products</span>
    </h2>
  </div>

  <div className="product-grid">
    {/* PRODUCT ITEM 1 */}
    <div className="product-card">
      <div className="product-image-container">
        <img src="https://res.cloudinary.com/dq3jkpys8/image/upload/v1772175224/ardino_cpsy9g.avif" alt="Laser Machine" />
      </div>
      <span className="product-category">Hardware</span>
      <h3 className="product-name">Laser Engraver DJ6 Pro</h3>
      <p className="product-description">Compact high-precision laser engraver for industrial marking.</p>
      <div className="price-tag">ETB 115,000.00 <span className="unit-text">/Unit</span></div>
      <div className="btn-container">
        <button className="action-btn buy-now-btn">Add to Cart</button>
        <button className="action-btn details-btn">View Details</button>
      </div>
    </div>

    {/* PRODUCT ITEM 2 */}
    <div className="product-card">
      <div className="product-image-container">
        <img src="https://res.cloudinary.com/dq3jkpys8/image/upload/v1772174011/cooker2_o65reo.avif" alt="Stepper Motor" />
      </div>
      <span className="product-category">Components</span>
      <h3 className="product-name">Nema 34 Stepper Motor</h3>
      <p className="product-description">High-torque motor solution for precision CNC and automation.</p>
      <div className="price-tag">ETB 29,500.00 <span className="unit-text">/Pcs</span></div>
      <div className="btn-container">
        <button className="action-btn buy-now-btn">Add to Cart </button>
        <button className="action-btn details-btn">View Details</button>
      </div>
    </div>

    {/* PRODUCT ITEM 3 */}
    <div className="product-card">
      <div className="product-image-container">
        <img src="https://res.cloudinary.com/dq3jkpys8/image/upload/v1772175070/ardino_mre3nk.jpg" alt="Active Cooler" />
      </div>
      <span className="product-category">Electronics</span>
      <h3 className="product-name">Raspberry Pi 5 Cooler</h3>
      <p className="product-description">Official Active Cooler designed specifically for thermal management.</p>
      <div className="price-tag">ETB 1,350.00 <span className="unit-text">/Unit</span></div>
      <div className="btn-container">
        <button className="action-btn buy-now-btn">Add to Cart </button>
        <button className="action-btn details-btn">View Details</button>
      </div>
    </div>
  </div>


  
  <div className="product-grid">
    {/* PRODUCT ITEM 1 */}
    <div className="product-card">
      <div className="product-image-container">
        <img src="https://res.cloudinary.com/dq3jkpys8/image/upload/v1772175224/ardino_cpsy9g.avif" alt="Laser Machine" />
      </div>
      <span className="product-category">Hardware</span>
      <h3 className="product-name">Laser Engraver DJ6 Pro</h3>
      <p className="product-description">Compact high-precision laser engraver for industrial marking.</p>
      <div className="price-tag">ETB 115,000.00 <span className="unit-text">/Unit</span></div>
      <div className="btn-container">
        <button className="action-btn buy-now-btn">Add to Cart</button>
        <button className="action-btn details-btn">View Details</button>
      </div>
    </div>

    {/* PRODUCT ITEM 2 */}
    <div className="product-card">
      <div className="product-image-container">
        <img src="https://res.cloudinary.com/dq3jkpys8/image/upload/v1772174011/cooker2_o65reo.avif" alt="Stepper Motor" />
      </div>
      <span className="product-category">Components</span>
      <h3 className="product-name">Nema 34 Stepper Motor</h3>
      <p className="product-description">High-torque motor solution for precision CNC and automation.</p>
      <div className="price-tag">ETB 29,500.00 <span className="unit-text">/Pcs</span></div>
      <div className="btn-container">
        <button className="action-btn buy-now-btn">Add to Cart</button>
        <button className="action-btn details-btn">View Details</button>
      </div>
    </div>

    {/* PRODUCT ITEM 3 */}
    <div className="product-card">
      <div className="product-image-container">
        <img src="https://res.cloudinary.com/dq3jkpys8/image/upload/v1772175070/ardino_mre3nk.jpg" alt="Active Cooler" />
      </div>
      <span className="product-category">Electronics</span>
      <h3 className="product-name">Raspberry Pi 5 Cooler</h3>
      <p className="product-description">Official Active Cooler designed specifically for thermal management.</p>
      <div className="price-tag">ETB 1,350.00 <span className="unit-text">/Unit</span></div>
      <div className="btn-container">
        <button className="action-btn buy-now-btn">Add to Cart</button>
        <button className="action-btn details-btn">View Details</button>
      </div>
    </div>
  </div>


  {/* PAGINATION */}
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: '60px' }}>
    <button style={{ border: '1px solid #ddd', background: 'none', padding: '10px 15px', fontWeight: '700', cursor: 'pointer', borderRadius: '4px' }}>Back</button>
    {[1, 2, 3].map((num) => (
      <div key={num} style={{ 
        width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', 
        borderRadius: '4px', border: '1px solid #ddd', fontWeight: '700', 
        backgroundColor: num === 1 ? '#36d2d3' : 'transparent',
        color: num === 1 ? '#fff' : '#000', cursor: 'pointer'
      }}>
        {num}
      </div>
    ))}
    <button style={{ border: '1px solid #ddd', background: 'none', padding: '10px 15px', fontWeight: '700', cursor: 'pointer', borderRadius: '4px' }}>Next</button>
  </div>
</section>

      {/* 9. OUR CORE VALUES SECTION */}
      <section id="values" style={{ padding: "120px 8%", backgroundColor: "#ffff", borderTop: "1px solid #eee" }}>
        <style>
          {`
            .value-card {
              padding: 60px 40px;
              border-top: 1px solid #eee;
              border-right: 1px solid #eee;
              transition: all 0.4s ease;
              background: #36d2d3;
            }
            .value-card:hover {
              background: #f8faff;
            }
            .value-card:hover h3 {
              color: #36d2d3;
            }
          `}
        </style>

        <div style={{ marginBottom: "60px" }}>
          <h2  style={{ 
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 'clamp(35px, 5vw, 50px)', 
    fontWeight: 800,
    lineHeight: 1,
    textAlign:"center",
    color: '#000',
    textTransform: 'uppercase',
    margin: '15px 0' 
}} >
            Our Core <span style={{color: "#36d2d3"}}>Values</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", borderLeft: "1px solid #eee", borderBottom: "1px solid #eee" }}>
          {[
            { title: "Precision", detail: "Micron-level accuracy in every weld, cut, and digital pixel." },
            { title: "Integrity", detail: "Structural and professional honesty that forms the bedrock of our builds." },
            { title: "Innovation", detail: "Constantly evolving our manufacturing stack with the latest global tech." },
            { title: "Dominance", detail: "Leading the market through superior quality and industrial scale." },
            { title: "Innovation", detail: "Constantly evolving our manufacturing stack with the latest global tech." },
            { title: "Dominance", detail: "Leading the market through superior quality and industrial scale." }
          ].map((v, i) => (
            <div key={i} className="value-card">
              <div style={{ fontSize: "12px", fontWeight: "900", color: "#36d2d3", marginBottom: "25px", letterSpacing: "3px" }}>
                VALUE_0{i + 1}
              </div>
              <h3 style={{ fontSize: "32px", fontWeight: "900", marginBottom: "20px", textTransform: "uppercase", transition: "0.3s" }}>
                {v.title}
              </h3>
              <p style={{ 
                color: "#1a1a1a", 
                lineHeight: "1.4", 
                fontSize: "22px", // Large description text
                fontWeight: "600",
                letterSpacing: "-0.5px" 
              }}>
                {v.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

{/* EXCLUSIVE BENEFITS SECTION - LEFT ALIGNED */}
<section style={{ padding: '60px 8%', background: '#ffffff', borderTop: '1px solid #f0f0f0' }}>
  <style>
    {`
      .benefits-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 30px;
        margin-top: 40px;
      }

      .benefit-card {
        padding: 40px;
        background: #ffffff;
        border: 1px solid #f0f0f0;
        border-radius: 4px;
        text-align: left; /* Aligned text inside cards to the left too */
        transition: border 0.3s ease;
      }

      .benefit-card:hover {
        border-color: #36d2d3;
      }

      .benefit-icon {
        font-family: 'Space Grotesk', sans-serif;
        font-size: 42px;
        font-weight: 800;
        color: #36d2d3;
        margin-bottom: 20px;
        display: block;
      }

      .benefit-title {
        font-family: 'Space Grotesk', sans-serif;
        font-size: 22px;
        font-weight: 800;
        color: #000;
        text-transform: uppercase;
        margin-bottom: 12px;
      }

      .benefit-text {
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-size: 15px;
        color: #555;
        line-height: 1.6;
        margin: 0;
      }

      .location-tag {
        display: inline-block;
        margin-top: 15px;
        font-size: 10px;
        font-weight: 800;
        color: #36d2d3;
        letter-spacing: 1px;
        text-transform: uppercase;
      }
    `}
  </style>

  {/* SECTION HEADER - NOW LEFT ALIGNED */}
  <div style={{ textAlign: 'left' }}>
   
    <h2 style={{ 
  fontFamily: "'Space Grotesk', sans-serif", 
  fontSize: 'clamp(35px, 5vw, 50px)', 
  fontWeight: '800', 
  lineHeight: '1',
  margin: '15px 0', 
  letterSpacing: '-1.5px', 
  color: '#000',
  textAlign:"center",
  textTransform: 'uppercase'
}}>
  Advantages YOU  <span style={{ color: '#36d2d3' }}>Get</span>
</h2>
  </div>

  <div className="benefits-grid">
    
    {/* BENEFIT 1: DISCOUNT */}
    <div className="benefit-card">
      <span className="benefit-icon">5%</span>
      <h3 className="benefit-title">Online Discount</h3>
      <p className="benefit-text">
        Get a 5% discount when you shop online. Enjoy savings on every order, available exclusively through our convenient online store.
      </p>
    </div>

    {/* BENEFIT 2: WORKSPACE */}
    <div className="benefit-card">
      <span className="benefit-icon">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      </span>
      <h3 className="benefit-title">Free Work Space</h3>
      <p className="benefit-text">
        Enjoy access to a free workspace with all essential amenities at no cost at our Mexico, Sengatera Shop location.
      </p>
      <span className="location-tag">Mexico, Sengatera Shop</span>
    </div>

    {/* BENEFIT 3: DELIVERY */}
    <div className="benefit-card">
      <span className="benefit-icon">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13"></rect>
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
          <circle cx="5.5" cy="18.5" r="2.5"></circle>
          <circle cx="18.5" cy="18.5" r="2.5"></circle>
        </svg>
      </span>
      <h3 className="benefit-title">Free Delivery</h3>
      <p className="benefit-text">
        Enjoy free delivery when you spend over 5,000 Birr on any of our products. Shop more and save on shipping costs.
      </p>
    </div>

  </div>
</section>
{/* CUSTOMER TRUST & SUPPORT SECTION */}
<section style={{ padding: '60px 8%', background: '#ffffff', borderTop: '1px solid #f0f0f0' }}>
  <style>
    {`
      .trust-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 30px;
        margin-bottom: 50px;
      }

      .trust-item {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }

      .trust-icon-box {
        color: #36d2d3;
        margin-bottom: 15px;
      }

      .trust-title {
        font-family: 'Space Grotesk', sans-serif;
        font-size: 18px;
        font-weight: 800;
        color: #000;
        text-transform: uppercase;
        margin-bottom: 8px;
      }

      .trust-text {
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-size: 14px;
        color: #666;
        line-height: 1.5;
        margin: 0;
      }

      .refund-banner {
        background: #f8f9fa;
        border-radius: 4px;
        padding: 25px 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
      }

      @media (max-width: 768px) {
        .refund-banner {
          flex-direction: column;
          text-align: center;
        }
      }
    `}
  </style>

  <div className="trust-grid">
    
    {/* SECURE PAYMENT */}
    <div className="trust-item">
      <div className="trust-icon-box">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      </div>
      <h4 className="trust-title">Secure payment</h4>
      <p className="trust-text">Safe and Reliable Transactions for Peace of Mind.</p>
    </div>

    {/* QUALITY PRODUCTS */}
    <div className="trust-item">
      <div className="trust-icon-box">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      </div>
      <h4 className="trust-title">Quality Products</h4>
      <p className="trust-text">Superior Craftsmanship for Unmatched Performance.</p>
    </div>

    {/* DELIVERY SERVICE */}
    <div className="trust-item">
      <div className="trust-icon-box">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
          <path d="M2 12h20"></path>
        </svg>
      </div>
      <h4 className="trust-title">Delivery Service</h4>
      <p className="trust-text">We Deliver to all Regional Cities across the country.</p>
    </div>

    {/* PRODUCT CONSULTANCY */}
    <div className="trust-item">
      <div className="trust-icon-box">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </div>
      <h4 className="trust-title">Consultancy</h4>
      <p className="trust-text">Expert Guidance for Your Arduino and Robotics Projects.</p>
    </div>

  </div>

  {/* REFUND POLICY BANNER */}

</section>
{/* TESTIMONIALS SECTION - 6 ITEMS */}
<section style={{ padding: '120px 8%', background: '#ffffff', borderTop: '1px solid #f0f0f0' }}>
  <style>
    {`
      .testimonial-grid {
        display: grid; 
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); 
        gap: 80px 40px; 
        max-width: 1500px; 
        margin: 0 auto;
      }

      .testimonial-item {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        animation: fadeInUp 1s ease-out forwards;
      }

      @keyframes fadeInUp { 
        from { opacity: 0; transform: translateY(30px); } 
        to { opacity: 1; transform: translateY(0); } 
      }

      .profile-circle {
        /* Increased size by 2px (182px) */
        width: 182px; 
        height: 182px; 
        margin-bottom: 25px; 
        border-radius: 50%; 
        overflow: hidden; 
        border: 7px solid white; /* Adjusted border slightly for the new scale */
        box-shadow: 0 20px 45px rgba(0,0,0,0.12);
      }

      .profile-circle img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .testimonial-quote {
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-size: 1rem;
        color: #444;
        line-height: 1.6;
        margin-bottom: 20px;
        font-style: italic;
        max-width: 320px;
        flex-grow: 1;
      }

      .testimonial-name {
        font-family: 'Space Grotesk', sans-serif;
        font-size: 1.6rem; 
        margin: 0 0 5px 0; 
        color: #111;
      }

      .testimonial-tag {
        font-family: 'Space Grotesk', sans-serif;
        color: #36d2d3; 
        font-weight: 800; 
        font-size: 0.85rem; 
        text-transform: uppercase; 
        letter-spacing: 2px;
      }

      .see-more-btn {
        display: block;
        margin: 80px auto 0;
        padding: 18px 45px;
        background: #0f172a;
        color: white;
        font-family: 'Space Grotesk', sans-serif;
        font-weight: 700;
        font-size: 0.9rem;
        text-transform: uppercase;
        letter-spacing: 2px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.3s ease;
      }

      .see-more-btn:hover {
        background: #36d2d3;
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(0, 123, 255, 0.2);
      }
    `}
  </style>

  {/* SECTION HEADER */}
  <div style={{ textAlign: 'left', marginBottom: '80px' }}>
 
    <h2 style={{ 
      fontFamily: 'Space Grotesk', 
      fontSize: 'clamp(35px, 5vw, 50px)', 
      fontWeight: '900', 
      color: '#111', 
      letterSpacing: '-2px',
      marginTop: '10px',
      textAlign:"center"
    }}>
      WHAT PEOPLE <span style={{ color: '#36d2d3' }}>SAY</span>
    </h2>
  </div>

  <div className="testimonial-grid">
    
    {/* REVIEW 1: SARAH */}
    <article className="testimonial-item">
      <div className="profile-circle">
        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&h=800&q=80" alt="Sarah" />
      </div>
      <p className="testimonial-quote">
        "Vector's integration of high-performance components with architectural prototypes is world-class."
      </p>
      <h4 className="testimonial-name">Sarah Jenkins</h4>
      <p className="testimonial-tag">Executive Director</p>
    </article>

    {/* REVIEW 2: MARCUS */}
    <article className="testimonial-item">
      <div className="profile-circle">
        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&h=600&q=80" alt="Marcus" />
      </div>
      <p className="testimonial-quote">
        "I've sourced industrial prints globally, but the precision Vector provides locally is outstanding."
      </p>
      <h4 className="testimonial-name">Marcus Thorne</h4>
      <p className="testimonial-tag">Operations Manager</p>
    </article>

    {/* REVIEW 3: ELENA */}
    <article className="testimonial-item">
      <div className="profile-circle">
        <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&h=600&q=80" alt="Elena" />
      </div>
      <p className="testimonial-quote">
        "The project management and reliability are top-tier. They ensure 98% on-time delivery for complex parts."
      </p>
      <h4 className="testimonial-name">Elena Rodriguez</h4>
      <p className="testimonial-tag">Project Lead</p>
    </article>

    {/* REVIEW 4: JAMES */}
    <article className="testimonial-item">
      <div className="profile-circle">
        <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&h=600&q=80" alt="James" />
      </div>
      <p className="testimonial-quote">
        "Their intuitive approach to custom robotics hardware makes development a breeze."
      </p>
      <h4 className="testimonial-name">James Wilson</h4>
      <p className="testimonial-tag">Technical UX Lead</p>
    </article>

    {/* REVIEW 5: AMARA */}
    <article className="testimonial-item">
      <div className="profile-circle">
        <img src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=600&h=600&q=80" alt="Amara" />
      </div>
      <p className="testimonial-quote">
        "Expertise in material science is evident. They are our go-to for earthquake-resistant component testing."
      </p>
      <h4 className="testimonial-name">Amara Okafor</h4>
      <p className="testimonial-tag">Structural Engineer</p>
    </article>

    {/* REVIEW 6: DAVID */}
    <article className="testimonial-item">
      <div className="profile-circle">
        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&h=600&q=80" alt="David" />
      </div>
      <p className="testimonial-quote">
        "Vector provides high-performance precision that is essential for our web-connected hardware applications."
      </p>
      <h4 className="testimonial-name">David Park</h4>
      <p className="testimonial-tag">Full Stack Developer</p>
    </article>

  </div>

  <button className="see-more-btn">
    See All Stories
  </button>
</section>
{/* COMPACT NAVIGABLE BRANDS SECTION */}
<section id="brands-nav-section" style={{ padding: '80px 0', background: '#ffffff' }}>
  <style>
    {`
      .brand-outer-wrapper { position: relative; max-width: 1200px; margin: 0 auto; padding: 0 50px; }
      
      .brand-scroller {
        display: flex; gap: 20px; overflow-x: auto;
        scroll-snap-type: x mandatory; scrollbar-width: none;
        padding: 15px 0; scroll-behavior: smooth;
      }
      .brand-scroller::-webkit-scrollbar { display: none; }

      .brand-card {
        flex: 0 0 280px; scroll-snap-align: start;
        background: #f8fafc; border-radius: 16px;
        padding: 30px; border: 1px solid #e2e8f0; 
        text-align: center;
      }

      .brand-logo-placeholder {
        width: 100%; height: 60px; 
        display: flex; align-items: center; justify-content: center;
        margin-bottom: 20px; filter: grayscale(100%); opacity: 0.6;
      }

      .brand-name-text {
        font-family: 'Space Grotesk', sans-serif; font-size: 1.2rem; 
        font-weight: 800; color: #0f172a; margin-bottom: 5px;
      }

      .brand-sub-text {
        font-family: 'Plus Jakarta Sans', sans-serif; font-size: 0.8rem;
        color: #64748b; font-weight: 600; line-height: 1.4;
      }

      .nav-arrow-btn {
        position: absolute; top: 60%; transform: translateY(-50%);
        width: 38px; height: 38px; border-radius: 50%;
        background: #0f172a; color: white; border: none;
        cursor: pointer; z-index: 10; display: flex;
        align-items: center; justify-content: center;
        font-size: 1rem; transition: 0.2s;
      }
      .nav-arrow-btn:hover { background: #36d2d3; }
      .nav-arrow-btn.left { left: 0; }
      .nav-arrow-btn.right { right: 0; }
    `}
  </style>

  {/* SECTION HEADER WITH YOUR TEXT */}
  <div style={{ maxWidth: '800px', margin: '0 auto 40px', textAlign: 'center', padding: '0 20px' }}>
    
    <h2 style={{ 
  fontFamily: "'Space Grotesk', sans-serif", 
  fontSize: 'clamp(35px, 5vw, 50px)', 
  fontWeight: '800', 
  lineHeight: '1',
  margin: '30px 0', 
  letterSpacing: '-1.5px', 
  color: '#000',
  textTransform: 'uppercase'
}}>
  Industry Leading <span style={{ color: '#36d2d3' }}>Brands</span>
</h2>
    <p style={{ margin:"60px 0",fontFamily: 'Plus Jakarta Sans', fontSize: '1rem', color: '#64748b', fontWeight: '500', lineHeight: '1.6' }}>
      Discover top-quality products from industry-leading brands. Our curated selection of trusted manufacturers ensures you get the best tools, components, and innovations for your projects, backed by reliability and performance.
    </p>
  </div>

  <div className="brand-outer-wrapper">
  

    <div className="brand-scroller" id="vector-brand-row">
      
      {/* BRAND 1 */}
      <div className="brand-card">
        <div className="brand-logo-placeholder">
          <span style={{ fontWeight: '900', fontSize: '1.5rem', color: '#cbd5e1' }}>BRAND 01</span>
        </div>
        <h3 className="brand-name-text">Premium Tool Co.</h3>
        <p className="brand-sub-text">Precision engineering and heavy-duty industrial tools.</p>
      </div>

      {/* BRAND 2 */}
      <div className="brand-card">
        <div className="brand-logo-placeholder">
          <span style={{ fontWeight: '900', fontSize: '1.5rem', color: '#cbd5e1' }}>BRAND 02</span>
        </div>
        <h3 className="brand-name-text">Global Systems</h3>
        <p className="brand-sub-text">Smart automation components and reliable hardware.</p>
      </div>

      {/* BRAND 3 */}
      <div className="brand-card">
        <div className="brand-logo-placeholder">
          <span style={{ fontWeight: '900', fontSize: '1.5rem', color: '#cbd5e1' }}>BRAND 03</span>
        </div>
        <h3 className="brand-name-text">Innovate Tech</h3>
        <p className="brand-sub-text">Cutting-edge electronics and sustainable solutions.</p>
      </div>

      {/* BRAND 4 */}
      <div className="brand-card">
        <div className="brand-logo-placeholder">
          <span style={{ fontWeight: '900', fontSize: '1.5rem', color: '#cbd5e1' }}>BRAND 04</span>
        </div>
        <h3 className="brand-name-text">Apex Industry</h3>
        <p className="brand-sub-text">Leading manufacturer of high-performance materials.</p>
      </div>

      {/* BRAND 5 */}
      <div className="brand-card">
        <div className="brand-logo-placeholder">
          <span style={{ fontWeight: '900', fontSize: '1.5rem', color: '#cbd5e1' }}>BRAND 05</span>
        </div>
        <h3 className="brand-name-text">Vector Flow</h3>
        <p className="brand-sub-text">Specialized components for large-scale projects.</p>
      </div>

    </div>
  </div>
</section>
{/* COMPACT NAVIGABLE LOCATIONS SECTION - SELF-CONTAINED CODE */}
<section id="locations-compact-nav" style={{ padding: '60px 0', background: '#ffffff' }}>
  <style>
    {`
      .loc-wrapper { position: relative; max-width: 1200px; margin: 0 auto; padding: 0 50px; }
      
      .location-scroller {
        display: flex; gap: 20px; overflow-x: auto;
        scroll-snap-type: x mandatory; scrollbar-width: none;
        padding: 10px 0; scroll-behavior: smooth;
      }
      .location-scroller::-webkit-scrollbar { display: none; }

      .location-card {
        flex: 0 0 320px; scroll-snap-align: start;
        background: #f8fafc; border-radius: 16px;
        padding: 20px; border: 1px solid #e2e8f0; white-space: normal;
      }

      .map-mini {
        width: 100%; height: 160px; border-radius: 10px;
        overflow: hidden; margin-bottom: 15px; background: #cbd5e1;
      }

      .loc-tag-tiny {
        font-family: 'Space Grotesk', sans-serif; font-size: 0.65rem;
        font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px;
        color: #36d2d3; margin-bottom: 5px; display: block;
      }

      .loc-title-small {
        font-family: 'Space Grotesk', sans-serif; font-size: 1.3rem; 
        font-weight: 800; color: #0f172a; margin: 0 0 8px 0; letter-spacing: -0.5px;
      }

      .loc-addr-small {
        font-family: 'Plus Jakarta Sans', sans-serif; font-size: 0.85rem;
        color: #64748b; font-weight: 600; margin-bottom: 0;
      }

      .nav-arrow {
        position: absolute; top: 50%; transform: translateY(-50%);
        width: 36px; height: 36px; border-radius: 50%;
        background: #0f172a; color: white; border: none;
        cursor: pointer; z-index: 10; display: flex;
        align-items: center; justify-content: center;
        font-size: 1rem; transition: 0.2s;
      }
      .nav-arrow:hover { background: #36d2d3; }
      .nav-arrow.left { left: 5px; }
      .nav-arrow.right { right: 5px; }

      .btn-compact {
        margin-top: 15px; width: 100%; padding: 10px;
        background: #0f172a; color: white; border: none;
        border-radius: 6px; font-family: 'Space Grotesk', sans-serif;
        font-weight: 700; font-size: 0.8rem; text-transform: uppercase;
        letter-spacing: 1px; cursor: pointer;
      }
    `}
  </style>

  {/* SECTION HEADER */}
  <div style={{ textAlign: 'center', marginBottom: '30px' }}>
    <h2 style={{ 
  fontFamily: "'Space Grotesk', sans-serif", 
  fontSize: 'clamp(35px, 5vw, 50px)', 
  fontWeight: '800', 
  lineHeight: '1',
  margin: '15px 0', 
  letterSpacing: '-1.5px', 
  color: '#000',
  textTransform: 'uppercase'
}}>
  Our <span style={{ color: '#36d2d3' }}>Location</span>
</h2>
  </div>

  <div className="loc-wrapper">
  
    {/* SCROLLABLE ROW */}
    <div className="location-scroller" id="vector-loc-scroller">
      
      {/* ADDIS ABABA */}
      <div className="location-card">
        <div className="map-mini">
          <iframe title="Addis" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.547146440263!2d38.8000!3d9.0167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDEnMDAuMCJOIDM4wrA0OCcwMC4wIkU!5e0!3m2!1sen!2set!4v1620000000000!5m2!1sen!2set" width="100%" height="100%" style={{ border: 0 }} loading="lazy"></iframe>
        </div>
        <span className="loc-tag-tiny">Headquarters</span>
        <h3 className="loc-title-small">Addis Ababa</h3>
        <p className="loc-addr-small">📍 Megenagna, Vector Bldg</p>
      </div>

      {/* ADAMA */}
      <div className="location-card">
        <div className="map-mini">
           <iframe title="Adama" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.1!2d39.2!3d8.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMzAnMDAuMCJOIDM5wrAxMicwMC4wIkU!5e0!3m2!1sen!2set!4v1620000000000!5m2!1sen!2set" width="100%" height="100%" style={{ border: 0 }} loading="lazy"></iframe>
        </div>
        <span className="loc-tag-tiny">Manufacturing</span>
        <h3 className="loc-title-small">Adama</h3>
        <p className="loc-addr-small">📍 Industrial Park, Zone 4</p>
      </div>

      {/* BAHIR DAR */}
      <div className="location-card">
        <div className="map-mini">
           <iframe title="Bahir Dar" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.1!2d37.3!3d11.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDM2JzAwLjAiTiAzN8KwMTgnMDAuMCJF!5e0!3m2!1sen!2set!4v1620000000000!5m2!1sen!2set" width="100%" height="100%" style={{ border: 0 }} loading="lazy"></iframe>
        </div>
        <span className="loc-tag-tiny">Innovation Lab</span>
        <h3 className="loc-title-small">Bahir Dar</h3>
        <p className="loc-addr-small">📍 Kebele 14 Industrial</p>
        
      </div>

      {/* MEKELLE */}
      <div className="location-card">
        <div className="map-mini">
           <iframe title="Mekelle" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.1!2d39.4!3d13.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDMwJzAwLjAiTiAzOcKwMjQnMDAuMCJF!5e0!3m2!1sen!2set!4v1620000000000!5m2!1sen!2set" width="100%" height="100%" style={{ border: 0 }} loading="lazy"></iframe>
        </div>
        <span className="loc-tag-tiny">Support</span>
        <h3 className="loc-title-small">Mekelle</h3>
        <p className="loc-addr-small">📍 Industrial Zone, Bldg 12</p>
       
      </div>

    </div>
  </div>
</section>

 
{/* MINIMALIST SUBSCRIBE SECTION */}
<section style={{ padding: '100px 8%', background: '#ffffff', borderTop: '1px solid #f0f0f0' }}>
  <style>
    {`
      .sub-wrapper {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
      }

      .sub-input-group {
        display: flex;
        width: 100%;
        max-width: 600px;
        gap: 12px;
        margin-top: 40px;
      }

      .sub-input-field {
        flex: 1;
        padding: 20px 25px;
        background: #f8fafc;
        border: 1.5px solid #edf2f7;
        border-radius: 12px;
        color: #1e293b;
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-size: 1rem;
        outline: none;
        transition: all 0.3s ease;
      }

      .sub-input-field:focus {
        border-color: #36d2d3;
        background: #ffffff;
        box-shadow: 0 0 0 4px rgba(0, 123, 255, 0.1);
      }

      .sub-btn-standard {
        padding: 0 40px;
        background: #0f172a;
        color: white;
        border: none;
        border-radius: 12px;
        font-family: 'Space Grotesk', sans-serif;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 0.9rem;
        cursor: pointer;
        transition: all 0.3s ease;
        white-space: nowrap;
      }

      .sub-btn-standard:hover {
        background: #36d2d3;
        transform: translateY(-2px);
        box-shadow: 0 10px 20px rgba(0, 123, 255, 0.2);
      }

      @media (max-width: 600px) {
        .sub-input-group { flex-direction: column; }
        .sub-btn-standard { padding: 20px; }
      }
    `}
  </style>

  <div className="sub-wrapper">
   
   <h2 style={{ 
  fontFamily: "'Space Grotesk', sans-serif", 
  fontSize: 'clamp(35px, 5vw, 50px)', 
  fontWeight: '800', 
  lineHeight: '1',
  margin: '15px 0', 
  letterSpacing: '-1.5px', 
  color: '#000',
  textTransform: 'uppercase'
}}>
  Join our <span style={{ color: '#36d2d3' }}>Mailing List</span>
</h2>
    
    <p style={{ 
      fontFamily: 'Plus Jakarta Sans', fontSize: '1.1rem', 
      color: '#64748b', maxWidth: '600px', margin: '0 auto' 
    }}>
      Get the latest updates on robotics, 3D printing, and industrial components delivered to your inbox.
    </p>

    {/* SINGLE INPUT FORM */}
    <form className="sub-input-group" onSubmit={(e) => e.preventDefault()}>
      <input 
        type="email" 
        placeholder="Enter your email address" 
        className="sub-input-field" 
        required 
      />
      <button type="submit" className="sub-btn-standard">
        Subscribe
      </button>
    </form>
    
  
  </div>
</section>
<section style={{ padding: '80px 0', background: '#ffffff', overflow: 'hidden' }}>
  <style>
    {`
      @keyframes scrollLeft {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      @keyframes scrollRight {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0); }
      }

      .marquee-wrapper {
        display: flex;
        flex-direction: column;
        gap: 30px;
      }

      .marquee-container {
        display: flex;
        width: max-content; 
        gap: 10px;
      }

      /* Animation stays constant even on hover now */
      .animate-left { animation: scrollLeft 60s linear infinite; }
      .animate-right { animation: scrollRight 60s linear infinite; }

      .service-card {
        flex: 0 0 350px;
        height: 250px;
        position: relative;
        border-radius: 8px;
        overflow: hidden;
        background: #f1f2f2;
        border: 1px solid #eee;
      }

      .service-img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 2.8;
        transition: transform 0.5s ease;
      }

      .service-card:hover .service-img {
        transform: scale(1.1);
      }

      .service-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 50%);
        z-index: 1;
      }

      .service-info {
        position: relative;
        z-index: 2;
        padding: 20px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
      }

      .service-tag {
        color: #36d2d3;
        font-size: 10px;
        font-weight: 800;
        letter-spacing: 2px;
        text-transform: uppercase;
      }

      .service-name {
        font-family: 'Space Grotesk', sans-serif;
        font-size: 18px;
        font-weight: 700;
        color: #fff;
        margin: 5px 0 0 0;
      }
    `}
  </style>

  {/* Logic for Different Content */}
  {(() => {
    const row1 = [
      { tag: "Production", name: "CNC Machining", img: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772183998/arrr_zxjndb.jpg" },
      { tag: "Additive", name: "SLA 3D Printing", img: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772174304/book2_kbanmk.jpg" },
      { tag: "Design", name: "CAD Engineering", img: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772173998/watch2_tqxqmd.avif" },
      { tag: "Testing", name: "Quality Control", img: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772174284/ishirt_xwiglp.avif" },
    ];

    const row2 = [
      { tag: "Assembly", name: "Robotic Integration", img: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=600&q=80" },
      { tag: "Material", name: "Metal Casting", img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80" },
      { tag: "Finish", name: "Laser Engraving", img: "https://images.unsplash.com/photo-1612690669207-fed642192c40?auto=format&fit=crop&w=600&q=80" },
      { tag: "Logistics", name: "Supply Chain", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80" },
    ];

    return (
      <div className="marquee-wrapper">
        {/* ROW 1: LEFT */}
        <div className="marquee-container animate-left">
          {[...row1, ...row1].map((item, i) => (
            <div key={i} className="service-card">
              <img src={item.img} className="service-img" alt={item.name} />
              <div className="service-overlay" />
              <div className="service-info">
                <span className="service-tag">{item.tag}</span>
                <h3 className="service-name">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* ROW 2: RIGHT */}
        <div className="marquee-container animate-right">
          {[...row2, ...row2].map((item, i) => (
            <div key={i} className="service-card">
              <img src={item.img} className="service-img" alt={item.name} />
              <div className="service-overlay" />
              <div className="service-info">
                <span className="service-tag">{item.tag}</span>
                <h3 className="service-name">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  })()}
</section>

      {/* FOOTER */}
      <footer style={{ padding: '30px 8%', background: '#050505', textAlign: 'center' }}>
        <p style={{ fontSize: '11px', color: '#444', letterSpacing: '2px' }}>© 2026 VECTOR PRECISION MANUFACTURING | ADDIS ABABA</p>
      </footer>

      {/* SIDEBAR COMPONENT (Integrated logic) */}
      <LandingSidebar 
        isOpen={menuOpen} 
        onClose={() => setMenuOpen(false)} 
        openLogin={openLogin}
        openRegister={openRegister}
      />
    </div>
  );
};

export default LandingPage;