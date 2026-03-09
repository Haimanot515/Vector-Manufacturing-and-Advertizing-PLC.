import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  X, ArrowRight, Instagram, Linkedin, Globe, Settings, HelpCircle, 
  ShieldCheck, Zap, Hammer, FileText, Cpu, Target, Boxes, Trophy, 
  Mail, Monitor, Wrench, Layers, Microscope 
} from 'lucide-react';

const LandingSidebar = ({ isOpen, onClose, openLogin, openRegister }) => {
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleAuthClick = (type) => {
    onClose(); 
    setTimeout(() => {
      if (type === 'login') openLogin();
      if (type === 'register') openRegister();
    }, 500);
  };

  // Font Size Constants from Landing Page
  const heroTitleSize = 'clamp(40px, 8vw, 65px)';
  const heroDescSize = '20px';

  const styles = {
    overlay: {
      position: 'fixed',
      inset: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: '#ffffff',
      zIndex: 30000,
      overflowY: 'auto',
      overflowX: 'hidden',
      transition: 'all 0.6s cubic-bezier(0.85, 0, 0.15, 1)',
      opacity: isOpen ? 1 : 0,
      visibility: isOpen ? 'visible' : 'hidden',
      transform: isOpen ? 'translateY(0)' : 'translateY(-100%)',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    },
    container: {
      display: 'flex',
      width: '100%',
      minHeight: '500vh', 
      flexDirection: window.innerWidth < 1024 ? 'column' : 'row',
    },
    leftColumn: {
      flex: 1.8, 
      backgroundColor: '#ffffff',
      borderRight: '1px solid #f1f5f9',
    },
    rightColumn: {
      flex: 1, 
      backgroundColor: '#050505',
      padding: '0 5%',
    },
    storySection: {
      height: '100vh',
      padding: '10% 10%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      boxSizing: 'border-box',
    },
    imgFrame: {
      width: '100%',
      maxWidth: '900px',
      height: '450px',
      backgroundColor: '#000',
      borderRadius: '16px',
      marginBottom: '40px',
      overflow: 'hidden',
      boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.15)',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    navLink: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#ffffff',
      textDecoration: 'none',
      margin: '5px 0',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '15px 0',
      borderBottom: '1px solid #111',
      transition: 'all 0.3s ease'
    },
    promoTag: {
      color: '#36d2d3',
      fontSize: '11px',
      fontWeight: '900',
      letterSpacing: '5px',
      marginBottom: '20px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    },
    // Consistent Typography Styles
    titleStyle: {
      fontSize: heroTitleSize,
      fontWeight: '800',
      fontFamily: 'Space Grotesk, sans-serif',
      color: '#0f172a',
      margin: '0 0 20px 0',
      lineHeight: 1,
      textTransform: 'uppercase',
    },
    descriptionStyle: {
      color: '#64748b',
      fontSize: heroDescSize,
      maxWidth: '600px',
      lineHeight: 1.6,
      opacity: 0.9
    }
  };

  return (
    <div style={styles.overlay}>
      <button 
        onClick={onClose} 
        style={{ 
          position: 'fixed', top: '10px', right: '10px', 
          background: 'none', border: 'none', color: '#eff6f6', 
          cursor: 'pointer', zIndex: 30005 
        }}
      >
        <X size={40} strokeWidth={0.9} />
      </button>

      <div style={styles.container}>
        
        <div style={styles.leftColumn}>
          {/* VISION */}
          <div style={styles.storySection}>
            <div style={styles.imgFrame}>
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200" alt="Vision" style={styles.image} />
            </div>
            <div style={styles.promoTag}><Target size={18}/> 01. VISION</div>
            <h2 style={styles.titleStyle}>THE FUTURE IS <span style={{color: '#36d2d3'}}>VECTOR.</span></h2>
            <p style={styles.descriptionStyle}>Leading Ethiopia's industrial charge with unparalleled precision and digital manufacturing workflows.</p>
          </div>

          {/* CNC LAB */}
          <div style={styles.storySection}>
            <div style={styles.imgFrame}>
              <img src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=1200" alt="CNC" style={styles.image} />
            </div>
            <div style={styles.promoTag}><Hammer size={18}/> 02. CNC LAB</div>
            <h2 style={styles.titleStyle}>SURGICAL <span style={{color: '#36d2d3'}}>CUTS.</span></h2>
            <p style={styles.descriptionStyle}>Automated 5-axis routing for the most demanding tolerances in aerospace and architecture.</p>
          </div>

          {/* ADDITIVE */}
          <div style={styles.storySection}>
            <div style={styles.imgFrame}>
              <img src="https://images.unsplash.com/photo-1631281558245-1b228b75b6e8?q=80&w=1200" alt="3D Print" style={styles.image} />
            </div>
            <div style={styles.promoTag}><Boxes size={18}/> 03. ADDITIVE</div>
            <h2 style={styles.titleStyle}>RAPID <span style={{color: '#36d2d3'}}>BUILDS.</span></h2>
            <p style={styles.descriptionStyle}>Our industrial 3D printing lab reduces lead times from weeks to hours.</p>
          </div>

          {/* LOGIC */}
          <div style={styles.storySection}>
            <div style={styles.imgFrame}>
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200" alt="Engineer" style={styles.image} />
            </div>
            <div style={styles.promoTag}><Cpu size={18}/> 04. LOGIC</div>
            <h2 style={styles.titleStyle}>EXPERT <span style={{color: '#36d2d3'}}>CAD.</span></h2>
            <p style={styles.descriptionStyle}>Advanced design optimization to ensure your parts are production-ready on the first run.</p>
          </div>

          {/* SCALE */}
          <div style={styles.storySection}>
            <div style={styles.imgFrame}>
              <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200" alt="Team" style={styles.image} />
            </div>
            <div style={styles.promoTag}><Trophy size={18}/> 05. SCALE</div>
            <h2 style={styles.titleStyle}>GROW <span style={{color: '#36d2d3'}}>WITH US.</span></h2>
            <p style={styles.descriptionStyle}>Join the Vector network and gain instant access to world-class manufacturing capacity.</p>
          </div>
        </div>

        <div style={styles.rightColumn}>
          <div style={styles.storySection}>
            <span style={{ color: '#222', fontSize: '10px', fontWeight: '900', letterSpacing: '4px' }}>NAVIGATION</span>
            <div style={styles.navLink} onClick={onClose}>CATALOG <ArrowRight size={18} color="#36d2d3"/></div>
            <div style={styles.navLink} onClick={onClose}>SERVICES <ArrowRight size={18} color="#36d2d3"/></div>
            <div style={styles.navLink} onClick={onClose}>GALLERY <ArrowRight size={18} color="#36d2d3"/></div>
          </div>

          <div style={styles.storySection}>
            <span style={{ color: '#222', fontSize: '10px', fontWeight: '900', letterSpacing: '4px' }}>SECTORS</span>
            <div style={styles.navLink}>AEROSPACE</div>
            <div style={styles.navLink}>ARCHITECTURE</div>
            <div style={styles.navLink}>MEDICAL</div>
            <div style={styles.navLink}>AUTOMOTIVE</div>
          </div>

          <div style={styles.storySection}>
            <span style={{ color: '#222', fontSize: '10px', fontWeight: '900', letterSpacing: '4px' }}>SYSTEMS</span>
            <div style={styles.navLink}><Monitor size={18} color="#36d2d3"/> GUIDELINES</div>
            <div style={styles.navLink}><Wrench size={18} color="#36d2d3"/> MATERIALS</div>
            <div style={styles.navLink}><Microscope size={18} color="#36d2d3"/> QUALITY</div>
          </div>

          <div style={styles.storySection}>
            <span style={{ color: '#222', fontSize: '10px', fontWeight: '900', letterSpacing: '4px' }}>PORTAL</span>
            <Link to="/dashboard" style={styles.navLink} onClick={onClose}>DASHBOARD</Link>
            <Link to="/help" style={styles.navLink} onClick={onClose}>SUPPORT</Link>
            <Link to="/contact" style={styles.navLink} onClick={onClose}>CONTACT</Link>
          </div>

          <div style={styles.storySection}>
            <span style={{ color: '#36d2d3', fontSize: '10px', fontWeight: '900', letterSpacing: '4px' }}>ACTION</span>
            <button onClick={() => handleAuthClick('login')} style={{ width: '100%', padding: '18px', margin: '12px 0', background: 'transparent', border: '1px solid #36d2d3', color: '#36d2d3', fontWeight: '800', cursor: 'pointer', borderRadius: '4px' }}>LOGIN</button>
            <button onClick={() => handleAuthClick('register')} style={{ width: '100%', padding: '18px', margin: '0', background: '#36d2d3', border: 'none', color: '#000', fontWeight: '800', cursor: 'pointer', borderRadius: '4px' }}>SIGN UP</button>
            <div style={{ marginTop: '40px', display: 'flex', gap: '25px', color: '#111' }}>
                <Instagram size={20} /><Linkedin size={20} /><Mail size={20} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LandingSidebar;