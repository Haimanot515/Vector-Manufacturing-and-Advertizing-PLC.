import React, { useEffect, useState, useRef } from "react";
import { 
  FaArrowUp, FaLinkedin, FaTelegram, FaInstagram, FaTwitter,
  FaCogs, FaHandshake, FaMicrochip, FaTools, FaLightbulb, FaUserTie 
} from "react-icons/fa";

const Contact = () => {
  // --- 1. STATE & REFS ---
  const [status, setStatus] = useState("idle"); 
  const [activeFaq, setActiveFaq] = useState(null);
  const canvasRef = useRef(null);
  
  const heroBg = "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2000"; 
  const teamPhoto = "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1200";

  // --- 2. CORE LOGIC (Particles & Reveal) ---
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.ghost-unit');
    elements.forEach(t => observer.observe(t));
    
    initParticles(); 
    
    return () => { 
      observer.disconnect(); 
      window.removeEventListener("resize", () => {});
    };
  }, []);

  const initParticles = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let particles = [];
    const colors = ["#36d2d3", "#ffffff", "#36d2d3"];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = Math.random() * 0.5 + 0.2;
      }
      update() {
        this.y += this.speedY;
        this.x += this.speedX;
        if (this.y > canvas.height) this.y = -10;
      }
      draw() {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = 0.2;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    window.addEventListener("resize", resize);
    resize();
    for (let i = 0; i < 50; i++) particles.push(new Particle());
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      requestAnimationFrame(animate);
    };
    animate();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("success"), 2000);
  };

  // --- 3. RENDER ---
  return (
    <div style={styles.pageWrapper}>
      <canvas ref={canvasRef} style={styles.canvas} />
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&family=Space+Grotesk:wght@700;800;900&family=Dancing+Script:wght@600&display=swap');
        
        .hero-title { font-size: clamp(35px, 5.5vw, 50px); font-weight: 800; line-height: 1.1; text-transform: uppercase; font-family: 'Space Grotesk', sans-serif; margin: 0; }
        .ghost-unit { opacity: 0; transform: translateY(40px); transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1); }
        .ghost-unit.revealed { opacity: 1; transform: translateY(0); }
        
        .contact-form-input {
          width: 100%; background: transparent; border: none; border-bottom: 2px solid #e2e8f0;
          padding: 20px 0; font-family: 'Inter', sans-serif; font-size: 16px; font-weight: 500; outline: none; transition: 0.4s;
        }
        .contact-form-input:focus { border-bottom-color: #36d2d3; }
        
        .btn-send {
          background: #36d2d3; color: #fff; border: none; padding: 25px 60px; font-family: 'Space Grotesk', sans-serif;
          font-weight: 900; font-size: 16px; cursor: pointer; transition: 0.4s; margin-top: 40px; text-transform: uppercase; letter-spacing: 1px;
        }
        .btn-send:hover { background: #000; transform: translateY(-3px); box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3); }
        
        .social-link { color: #000; font-size: 24px; transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); text-decoration: none; }
        .social-link:hover { color: #36d2d3; transform: scale(1.2) translateY(-5px); }

        .why-box { border: 1px solid #f1f5f9; padding: 40px; transition: 0.4s; background: #fff; }
        .why-box:hover { border-color: #36d2d3; background: #f8fbff; transform: translateY(-5px); }
        .signature { font-family: 'Dancing Script', cursive; font-size: 32px; color: #36d2d3; margin-top: 15px; }

        .faq-item { border-bottom: 1px solid #f1f5f9; padding: 30px 0; cursor: pointer; transition: 0.3s; }
        .faq-item:hover .faq-q { color: #36d2d3; }
      `}</style>

      {/* 1. HERO SECTION */}
      <section style={styles.heroLayout}>
        <div style={styles.heroMainGrid}>
          <div className="ghost-unit" style={{ display: 'flex', flexDirection: 'column' }}>
            <h1 className="hero-title" style={styles.heroTitleOverride}>
              GET IN<br />
              <span style={{ color: '#36d2d3' }}>TOUCH</span>
            </h1>
            <p style={styles.heroSubText}>
              Connect with our structural engineering division for custom fabrication, 
              industrial automation, and large-scale infrastructure projects.
            </p>
            <div style={{ marginTop: '40px' }}>
              <button onClick={() => window.scrollTo({ top: 1200, behavior: 'smooth' })} style={styles.heroCta}>
                Send us a message
              </button>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <div style={styles.blueprintAccent}></div>
            <div style={{ ...styles.heroImageContainer, backgroundImage: `url(${heroBg})` }}>
              <div style={styles.heroOverlayFade}></div>
            </div>
          </div>
        </div>
      </section>

      <main style={styles.container}>
        {/* SECTION: TECHNICAL FAQ */}
        <section className="ghost-unit" style={styles.sectionPadding}>
          <div style={styles.responsiveGrid}>
            <div>
              <span style={styles.tacticalLabel}>HELP CENTER</span>
              <h2 style={styles.sectionHeading}>COMMON <br/><span style={{color: '#36d2d3'}}>INQUIRIES</span></h2>
              <p style={styles.bodyText}>
                Instant architectural and logistical clarity for prospective partners and existing clients.
              </p>
            </div>
            <div>
              {[
                { q: "What is the typical lead time for custom steel fabrication?", a: "Standard structural projects move from design approval to delivery in 4-6 weeks." },
                { q: "Does Vector provide on-site installation across East Africa?", a: "Yes. Our mobile engineering units provide full-scale integration across Ethiopia, Kenya, and Djibouti." },
                { q: "Are your industrial systems ISO certified?", a: "Every automated system meets international safety standards, backed by full ISO-9001 documentation." }
              ].map((item, index) => (
                <div key={index} className="faq-item" onClick={() => setActiveFaq(activeFaq === index ? null : index)}>
                  <h4 className="faq-q" style={styles.faqQuestion}>
                    {item.q}
                    <span style={{ color: '#36d2d3', transform: activeFaq === index ? 'rotate(45deg)' : 'rotate(0deg)', transition: '0.3s' }}>+</span>
                  </h4>
                  <div style={{ maxHeight: activeFaq === index ? '200px' : '0', overflow: 'hidden', transition: '0.5s ease-in-out' }}>
                    <p style={{ ...styles.bodyText, padding: '20px 0 0' }}>{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: IMAGE GRID */}
        <section style={styles.gridContainer}>
          <div style={styles.masonryGrid}>
            {[...Array(12)].map((_, i) => (
              <div key={i} style={styles.gridItem}>
                <img src={`https://picsum.photos/600/400?random=${i + 800}`} alt={`Notice ${i + 1}`} style={styles.gridImg} />
                <div style={styles.gridOverlay}>
                  <span style={styles.gridLabel}>Item 0{i + 1}</span>
                  <h3 style={styles.gridTitle}>Announcement Title</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: WHY REACH OUT */}
        <section className="ghost-unit" style={{padding: '100px 0'}}>
          <h2 style={styles.sectionHeading}>WHY <span style={{color: '#36d2d3'}}>REACH OUT</span></h2>
          <div style={styles.serviceGrid}>
            <ServiceBox icon={<FaLightbulb />} title="Custom Engineering" desc="Tailored structural solutions for extreme environmental demands." />
            <ServiceBox icon={<FaCogs />} title="Technical Audit" desc="Expert analysis on steel fabrication and industrial automation." />
            <ServiceBox icon={<FaHandshake />} title="Partnership" desc="Collaboration on large-scale infrastructure across East Africa." />
            <ServiceBox icon={<FaMicrochip />} title="Systems Integration" desc="Merging hardware fabrication with automated digital control." />
          </div>
        </section>

        {/* SECTION: HUMAN ELEMENT */}
        <section className="ghost-unit" style={styles.humanSection}>
           <div style={styles.humanTextSide}>
              <h2 style={styles.sectionHeading}>ENGINEERING<br/><span style={{color: '#36d2d3'}}>DESK</span></h2>
              <p style={styles.humanDesc}>
                Behind every structure is a team of dedicated project coordinators and structural engineers.
              </p>
              <div style={styles.commitmentBox}>
                <span style={styles.tacticalLabel}>OUR PROMISE</span>
                <p style={styles.commitmentText}>All technical inquiries are reviewed within <strong>24 hours</strong>.</p>
                <div className="signature">The Vector Team</div>
              </div>
           </div>
           <div style={styles.humanImageSide}>
              <img src={teamPhoto} alt="Engineering Team" style={styles.teamImg} />
              <div style={styles.imageBadge}><FaUserTie /> LIVE PROJECT COORDINATION</div>
           </div>
        </section>

        {/* SECTION: FORM & INFO */}
        <section className="ghost-unit" style={styles.mainGrid}>
          <div style={styles.formSection}>
            <h2 style={styles.sectionHeading}>PROJECT <span style={{color: '#36d2d3'}}>INQUIRY</span></h2>
            {status === "success" ? (
              <div style={styles.successMsg}>
                <h3 style={{fontFamily: "'Space Grotesk', sans-serif", fontSize: '32px'}}>MESSAGE DISPATCHED</h3>
                <button onClick={() => setStatus("idle")} style={styles.btnSmall}>SEND ANOTHER</button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div style={styles.inputRow}>
                  <input className="contact-form-input" placeholder="FULL NAME *" required />
                  <input className="contact-form-input" placeholder="WORK EMAIL *" required type="email" />
                </div>
                <textarea className="contact-form-input" placeholder="PROJECT SPECIFICATIONS *" rows="4" style={{resize:'none'}} required />
                <button className="btn-send" type="submit">
                  {status === "loading" ? "PROCESSING..." : "DISPATCH MESSAGE"}
                </button>
              </form>
            )}
          </div>

          <div style={styles.sideInfo}>
            <InfoBlock label="📍 LOCATION" text="Bole Road, Addis Ababa, Ethiopia" />
            <InfoBlock label="📞 PHONE" text="+251 943 257 078" />
            <InfoBlock label="📧 EMAIL" text="INFO@VECTORADTECH.COM" />
            <div style={{marginTop: '50px'}}>
              <span style={styles.tacticalLabel}>SOCIAL HUB</span>
              <div style={{display:'flex', gap: '25px', marginTop: '20px'}}>
                <SocialIcon link="#" icon={<FaLinkedin />} />
                <SocialIcon link="#" icon={<FaTelegram />} />
                <SocialIcon link="#" icon={<FaInstagram />} />
                <SocialIcon link="#" icon={<FaTwitter />} />
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={styles.footer}>
          <h2 style={styles.footerBrand}>VECTOR <span style={{color: '#36d2d3'}}>PLC</span></h2>
         
        </footer>
      </main>
    </div>
  );
};

// --- Sub-Components ---
const ServiceBox = ({ icon, title, desc }) => (
  <div className="why-box">
    <div style={{color: '#36d2d3', fontSize: '28px', marginBottom: '20px'}}>{icon}</div>
    <h4 style={styles.whyTitle}>{title}</h4>
    <p style={styles.bodyText}>{desc}</p>
  </div>
);

const InfoBlock = ({ label, text }) => (
  <div style={{marginBottom: '40px'}}>
    <span style={styles.tacticalLabel}>{label}</span>
    <p style={styles.infoText}>{text}</p>
  </div>
);

const SocialIcon = ({ link, icon }) => (
  <a href={link} className="social-link">{icon}</a>
);

// --- Style Object ---
const styles = {
  pageWrapper: { background: '#fff', position: 'relative', overflowX: 'hidden' },
  canvas: { position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 5 },
  container: { maxWidth: "1300px", margin: "0 auto", padding: '0 5%' },
  
  heroLayout: { position: 'relative', height: '100vh', width: '100%', background: '#ffffff', display: 'flex', alignItems: 'center', overflow: 'hidden', borderBottom: '1px solid #f1f5f9' },
  heroMainGrid: { width: '100%', maxWidth: '1400px', margin: '0 auto', padding: '0 5%', display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: '60px', alignItems: 'center', zIndex: 10 },
  // REDUCED FONT SIZE HERE
  heroTitleOverride: { color: '#000', fontSize: 'clamp(45px, 6.5vw, 60px)', margin: 0, lineHeight: '0.9', letterSpacing: '-3px' },
  heroSubText: { fontSize: '18px', color: '#475569', marginTop: '30px', fontWeight: '400', fontFamily: "'Inter', sans-serif", lineHeight: '1.8', maxWidth: '450px' },
  heroCta: { background: '#36d2d3', color: '#fff', border: 'none', padding: '20px 40px', fontFamily: "'Space Grotesk', sans-serif", fontWeight: '900', fontSize: '14px', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '1px' },
  blueprintAccent: { position: 'absolute', top: '-15px', right: '-15px', width: '100px', height: '100px', borderTop: '3px solid #36d2d3', borderRight: '3px solid #36d2d3', zIndex: 1 },
  heroImageContainer: { position: 'relative', height: '75vh', width: '100%', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '2px', boxShadow: '0 40px 80px rgba(0,0,0,0.08)', zIndex: 2 },
  heroOverlayFade: { position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(255,255,255,0.05), transparent)', zIndex: 3 },

  sectionPadding: { padding: '120px 0', borderTop: '1px solid #eee' },
  sectionHeading: { fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: '900', marginBottom: '40px', letterSpacing: '-2px', lineHeight: 1 },
  tacticalLabel: { fontFamily: "'Space Grotesk', sans-serif", fontSize: '12px', fontWeight: '800', letterSpacing: '3px', color: '#3b82f6', marginBottom: '15px', display: 'block' },
  bodyText: { fontSize: '15px', color: '#64748b', lineHeight: '1.7', fontFamily: "'Inter', sans-serif" },
  
  responsiveGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px' },
  gridContainer: { width: '100%', padding: '40px 5px', boxSizing: 'border-box', backgroundColor: '#fff' },
  masonryGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gridAutoRows: '150px', gap: '4px', width: '100%' },
  gridItem: { position: 'relative', backgroundColor: '#f5f5f5', overflow: 'hidden' },
  gridImg: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' },
  gridOverlay: { position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 80%)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '15px' },
  gridLabel: { color: '#36d2d3', fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' },
  gridTitle: { fontFamily: 'Space Grotesk, sans-serif', fontSize: '15px', fontWeight: '700', margin: '0', color: '#fff', textTransform: 'uppercase', lineHeight: '1.1' },

  serviceGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1px', background: '#f1f5f9', border: '1px solid #f1f5f9' },
  whyTitle: { fontFamily: "'Space Grotesk', sans-serif", fontSize: '20px', fontWeight: '800', marginBottom: '15px' },

  humanSection: { display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '80px', padding: '120px 0', alignItems: 'center', borderTop: '1px solid #f1f5f9' },
  humanTextSide: { position: 'relative' },
  humanDesc: { fontSize: '18px', color: '#334155', lineHeight: '1.6', marginBottom: '40px' },
  commitmentBox: { background: '#f8fbff', padding: '40px', borderLeft: '5px solid #36d2d3' },
  commitmentText: { fontSize: '16px', color: '#1e293b', marginBottom: '10px' },
  humanImageSide: { position: 'relative' },
  teamImg: { width: '100%', height: '500px', objectFit: 'cover', borderRadius: '2px' },
  imageBadge: { position: 'absolute', bottom: '30px', right: '-20px', background: '#000', color: '#fff', padding: '15px 25px', fontSize: '11px', fontWeight: '800', letterSpacing: '2px', display: 'flex', alignItems: 'center', gap: '12px' },

  mainGrid: { display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '120px', padding: '120px 0' },
  inputRow: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '20px' },
  sideInfo: { paddingLeft: '60px', borderLeft: '1px solid #f1f5f9' },
  infoText: { fontSize: '22px', fontWeight: '700', margin: 0, fontFamily: "'Inter', sans-serif", color: '#000' },

  faqQuestion: { fontFamily: "'Space Grotesk', sans-serif", fontSize: '18px', fontWeight: '800', margin: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  footer: { padding: '100px 0', borderTop: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  footerBrand: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: '900', fontSize: '36px', letterSpacing: '-2px' },
  backToTop: { background: '#000', color: '#fff', border: 'none', padding: '15px 30px', fontFamily: "'Space Grotesk', sans-serif", fontWeight: '900', cursor: 'pointer', display: 'flex', alignItems: 'center' },
  successMsg: { padding: '80px', background: '#f8fbff', border: '1px solid #36d2d3', textAlign: 'center' },
  btnSmall: { background: '#000', color: '#fff', border: 'none', padding: '15px 30px', marginTop: '25px', cursor: 'pointer', fontWeight: '900', fontFamily: "'Space Grotesk', sans-serif" }
};

export default Contact;