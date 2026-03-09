import React, { useEffect, useState } from "react";
import { FaArrowUp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const AboutPage = () => {
  // --- STATE & ASSETS ---
  const [loading, setLoading] = useState(false);

  const globalBg = "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772368662/branding_gvm383.png";
  const images = {
    mission: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772371621/abut_us_rjdcuw.jpg",
    vision: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600",
    hub: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1600",
  };

  // --- EFFECTS ---
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (!loading) {
      const elements = document.querySelectorAll(".ghost-unit");
      elements.forEach((t) => observer.observe(t));
    }

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [loading]);

  // --- LOADER RENDER ---
  if (loading) {
    return (
      <div style={styles.loader}>
        <style>{`
          @keyframes vectorVerticalSpin {
            0% { transform: rotateY(-90deg); opacity: 0; }
            50% { opacity: 1; transform: rotateY(0deg); }
            100% { transform: rotateY(90deg); opacity: 0; }
          }
          .spinning-vector {
            display: inline-block;
            animation: vectorVerticalSpin 5s infinite ease-in-out;
            font-family: 'Inter', sans-serif;
            font-weight: 900;
            color: #36d2d3;
            font-size: clamp(20px, 10vw, 10px);
            letter-spacing: -0.05em;
            text-transform: uppercase;
          }
        `}</style>
        <div className="spinning-vector">VECTOR</div>
      </div>
    );
  }

  // --- MAIN RENDER ---
  return (
    <div style={styles.pageWrapper}>
      {/* GLOBAL STYLES */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900&family=Space+Grotesk:wght@700;800;900&display=swap');
        
        body { 
          margin: 0; 
          background: #231717; 
          font-family: 'Inter', sans-serif; 
          color: #e9e6e6; 
          overflow-x: hidden; 
        }

        .hero-title-cloned { 
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(35px, 6vw, 50px); 
          font-weight: 600; 
          line-height: 1.1; 
          text-transform: uppercase; 
          margin-top: 0; 
          letter-spacing: -2px;
          color: #ffff;
        }

        .brand-blue-glow { 
          color: #36d2d3; 
          text-shadow: 0 0 30px rgba(59, 130, 246, 0.4); 
        }

        .hero-viewport {
          position: relative;
          height: 100vh;
          width: 100%;
          background: #000;
          overflow: hidden;
        }

        .hero-bg-image {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background-image: url('${globalBg}');
          background-size: cover;
          background-position: center;
          filter: brightness(0.7);
          animation: subtleZoom 20s infinite alternate ease-in-out;
        }

        @keyframes subtleZoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }

        .ghost-unit { 
          opacity: 0; 
          transform: translateY(40px); 
          transition: all 1s cubic-bezier(0.2, 1, 0.3, 1);
        }
        
        .ghost-unit.revealed { 
          opacity: 1; 
          transform: translateY(0); 
        }

        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-thumb { background: #36d2d3; }

        @keyframes followCorrectPath {
            0% { transform: translate(0, 0); opacity: 0; }
            5% { opacity: 1; }
            30% { transform: translate(5vw, -5vh); }
            50% { transform: translate(15vw, -5vh); }
            70% { transform: translate(25vw, -15vh); }
            80% { transform: translate(32vw, -25vh); opacity: 1; }
            100% { transform: translate(32vw, -25vh); opacity: 1; }
        }

        .page-section {
          padding: 60px 0;
          border-bottom: 1px solid #f1f5f9;
        }

        .section-grid {
          display: flex;
          gap: 60px;
          align-items: center;
          flex-wrap: wrap;
        }

        .standard-heading {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(32px, 5vw, 56px); 
          font-weight: 800;
          line-height: 1.1;
          color: #000;
          text-transform: uppercase;
          margin: 0 0 20px 0;
        }
      `}</style>

      {/* 1. HERO SECTION */}
      <section className="hero-viewport">
        <div className="hero-bg-image"></div>
        <div style={styles.heroOverlay}>
          <header className="ghost-unit" style={styles.heroTextContent}>
            <h1 style={{ padding: "10px", textAlign: "center" }} className="hero-title-cloned">
              Know <br />
              <span className="brand-blue-glow">About US</span>
            </h1>
            <p style={styles.heroSub}>
              Vector Advert PLC is a premier industrial manufacturing and advertising technology firm based in Addis Ababa, Ethiopia. We specialize in the convergence of heavy structural engineering and high-impact visual communication.
              <br /><br />
              Founded on the principle of "Precision Without Compromise," we have evolved from a specialized fabrication workshop into East Africa’s most sophisticated hub for advertising infrastructure.
            </p>
          </header>
        </div>
      </section>

      <main style={styles.container}>
        {/* 2. SLOGAN SECTION */}
        <section className="ghost-unit page-section" style={{ marginTop: "15px", width: "100%", background: "#36d2d3", textAlign: "center" }}>
          <h2 className="standard-heading" style={{ margin: 0 }}>
            PRECISION<br />
            <span style={{ color: "#e1e8e8" }}>WITHOUT</span><br />
            COMPROMISE
          </h2>
        </section>

        {/* 3. CEO SECTION */}
        <section className="ghost-unit page-section" id="ceo">
          <div className="section-grid">
            <div style={{ flex: 1, minWidth: "350px" }}>
              <img
                src="https://res.cloudinary.com/dq3jkpys8/image/upload/v1771586481/portfolio/oavvnjsg39v9wyunnur4.jpg"
                alt="CEO"
                style={{ width: "100%", height: "500px", objectFit: "cover", borderRadius: "2px" }}
              />
              <h3 style={{ fontFamily: "'Space Grotesk'", fontWeight: 900, fontSize: "24px", marginTop: "20px" }}>Mr. Habtom</h3>
            </div>

            <div style={{ flex: 1.2 }}>
              <h2 className="standard-heading">
                Visionary <br /> <span style={{ color: "#36d2d3" }}>Direction</span>
              </h2>
              <div style={{ position: "relative", padding: "15px 0" }}>
                <p style={{ fontFamily: "Times New Roman, serif", fontSize: "22px", color: "#585b5a", lineHeight: "1.4", margin: 0 }}>
                  "Innovation in manufacturing isn't just about the machines we use, but the <span style={{ color: "#36d2d3" }}>precision</span> with which we execute the dreams of our clients."
                </p>
              </div>
              <p style={{ fontFamily: "Times New Roman, serif", fontSize: "20px", color: "#585b5a", lineHeight: "1.6", marginTop: "20px" }}>
                With over two decades of industrial expertise, Mr. Mikael Tesema leads Vector with a steadfast focus on structural integrity and the evolution of East African advertising infrastructure.
              </p>
            </div>
          </div>
        </section>

        {/* 4. TEAM SECTION */}
        <section className="ghost-unit page-section" id="team">
          <div className="section-grid" style={{ flexWrap: "wrap-reverse" }}>
            <div style={{ flex: 1.2 }}>
              <h2 className="standard-heading">
                Our <span style={{ color: "#36d2d3" }}>Team</span>
              </h2>
              <p style={{ fontSize: "20px", fontFamily: "Times New Roman, serif", color: "#585b5a", lineHeight: "1.6", marginBottom: "30px" }}>
                Our strength lies in our multidisciplinary approach. Specialized engineers, master welders, and creative designers work in synergy to architect technical solutions.
              </p>
              <div className="ghost-unit" style={styles.statsStrip}>
                <div style={styles.statBox}><span style={styles.statVal}>150+</span> STRUCTURES</div>
                <div style={styles.statBox}><span style={styles.statVal}>45+</span> ENGINEERS</div>
                <div style={styles.statBox}><span style={styles.statVal}>24/7</span> OPERATIONS</div>
              </div>
            </div>
            <div style={{ flex: 1, minWidth: "350px" }}>
              <img
                src="https://res.cloudinary.com/dq3jkpys8/image/upload/v1771588001/portfolio/zrfurdv3pc0bagmkkaos.jpg"
                alt="Engineering Team"
                style={{ width: "100%", height: "500px", objectFit: "cover", borderRadius: "2px" }}
              />
            </div>
          </div>
        </section>

        {/* 5. MISSION & VISION */}
        <section className="ghost-unit page-section" id="mission">
          <div className="section-grid" style={{ marginBottom: "60px", flexWrap: "wrap-reverse" }}>
            <div style={{ flex: 1.2 }}>
              <h2 className="standard-heading">Our <span style={{ color: "#36d2d3" }}>Mission</span></h2>
              <p style={styles.bodyText}>To deliver high-precision advertising infrastructure that bridges the gap between digital vision and physical reality.</p>
            </div>
            <div style={{ flex: 1, minWidth: "350px" }}>
              <img src="https://res.cloudinary.com/dq3jkpys8/image/upload/v1772371621/abut_us_rjdcuw.jpg" style={{ width: "100%", height: "350px", objectFit: "cover" }} alt="Mission" />
            </div>
          </div>

          <div className="section-grid ghost-unit" id="vision">
            <div style={{ flex: 1, minWidth: "350px" }}>
              <img src="https://res.cloudinary.com/dq3jkpys8/image/upload/v1772371621/abut_us_rjdcuw.jpg" style={{ width: "100%", height: "350px", objectFit: "cover", boxShadow: "-15px 15px 0px #36d2d3" }} alt="Vision" />
            </div>
            <div style={{ flex: 1.2 }}>
              <h2 className="standard-heading">Our <span style={{ color: "#36d2d3" }}>Vision</span></h2>
              <p style={styles.bodyText}>To become the premier architectural advertising node in East Africa by integrating smart technology with structural excellence.</p>
            </div>
          </div>
        </section>

        
        {/* 6. JOURNEY SECTION */}
        <section className="ghost-unit page-section" id="journey" style={{ borderBottom: "none" }}>
          <h2 className="standard-heading">Our <span style={{ color: "#36d2d3" }}>Journey</span></h2>
          <div style={{ marginTop: "30px" }}>
            {[
              { year: "2018", phase: "PHASE_01", title: "Inception", desc: "Founded with a vision to redefine the structural advertising landscape in Ethiopia.", img: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772372650/cnc_kjjx5d.png" },
              { year: "2021", phase: "PHASE_02", title: "Expansion", desc: "Integrated advanced CNC machinery and automated fabrication workflows.", img: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772380129/logo_nqfvho.jpg" },
              { year: "2026", phase: "PHASE_03", title: "The Future", desc: "Launching East Africa's most advanced 3D industrial printing hub.", img:"https://res.cloudinary.com/dq3jkpys8/image/upload/v1771889877/WH_ukodvn.avif" }
            ].map((phase, i) => (
              <div key={i} className="section-grid" style={{ marginBottom: "60px", flexWrap: "nowrap" }}>
                <div style={{ flex: 1, position: "relative", minWidth: "350px" }}>
                  <img src={phase.img} alt={phase.title} style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "2px" }} />
                  <div style={styles.yearTag}>{phase.year}</div>
                </div>
                <div style={{ flex: 1.2 }}>
                  <div style={styles.phaseLabel}>{phase.phase}</div>
                  <h3 style={styles.journeyPhaseTitle}>{phase.title}</h3>
                  <p style={styles.journeyPhaseDesc}>{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. STATS GRID */}
        <section className="ghost-unit page-section" style={{ ...styles.statsGrid, background: "#000000", padding: "80px 5%", borderBottom: "none", marginTop: "40px" }}>
          <div style={{ textAlign: "center" }}>
            <span style={{ ...styles.statNumber, color: "#36d2d3" }}>150+</span>
            <span style={styles.statLabelAlt}>STRUCTURES</span>
          </div>
          <div style={{ textAlign: "center" }}>
            <span style={{ ...styles.statNumber, color: "#36d2d3" }}>1.5k m²</span>
            <span style={styles.statLabelAlt}>FACILITY</span>
          </div>
          <div style={{ textAlign: "center" }}>
            <span style={{ ...styles.statNumber, color: "#36d2d3" }}>ISO</span>
            <span style={styles.statLabelAlt}>CERTIFIED</span>
          </div>
        </section>

        {/* 8. NAVIGATION HUB */}
        <section className="ghost-unit page-section">
          <div style={styles.mapHeaderRow}>
            <h2 className="standard-heading" style={{ margin: 0 }}>Live Navigation Hub</h2>
          </div>
          <p style={styles.mapDesc}>We have mapped the most efficient route to our Kality facility.</p>
          <div style={styles.mapContainer}>
            <div style={styles.mapOverlay}>
              <div style={{ position: "absolute", bottom: "15%", left: "20%", textAlign: "center", animation: "followCorrectPath 15s infinite linear" }}>
                <div style={styles.userLabel}>YOU</div>
                <div style={{ fontSize: "32px" }}>🚶‍♂️</div>
              </div>
              <div style={{ position: "absolute", top: "40%", left: "52%", textAlign: "center" }}>
                <div style={{ fontSize: "45px" }}>📍</div>
                <div style={styles.hqLabel}>VECTOR HQ</div>
              </div>
            </div>
            <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d15764.717154569567!2d38.7408794828691!3d9.001646219468925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x164b85cef5eb852d%3A0x11419c7dc13c8742!2sAddis%20Ababa!3m2!1d9.0191942!2d38.7525016!4m5!1s0x164b85742410a021%3A0xe0459c7dc3cc8742!2sVector%20Four%20Engineering!3m2!1d8.9856!2d38.7492!5e0!3m2!1sen!2set!4v1700000000000!5m2!1sen!2set" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
          </div>
          <div style={styles.estimateGrid}>
            <div style={styles.estimateBox}>
              <span style={styles.smallLabel}>TRAVEL ESTIMATES</span>
              <div style={styles.estimateRow}><span style={styles.modeText}>🚕 TAXI</span><span style={styles.timeText}>12 MIN</span></div>
              <div style={styles.estimateRow}><span style={styles.modeText}>🚗 CAR</span><span style={styles.timeText}>14 MIN</span></div>
            </div>
            <div style={styles.trafficBox}>
              <span style={styles.smallLabel}>TRAFFIC</span>
              <div style={styles.trafficStatus}>LIGHT / CLEAR</div>
            </div>
            <div style={styles.ctaBox}>
              <button onClick={() => window.open("https://maps.google.com", "_blank")} style={styles.gpsButton}>GPS GUIDANCE</button>
            </div>
          </div>
        </section>

        {/* 9. CONTACT CONNECT */}
        <section className="ghost-unit page-section" id="contact" style={styles.contactSection}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <h2 className="standard-heading" style={{ color: "#fff", marginBottom: "40px" }}>
              Connect <span style={{ color: "#36d2d3" }}>With Us</span>
            </h2>
            <div style={styles.contactRow}>
              <div style={styles.contactCard}>
                <div style={{ marginBottom: "15px" }}><FaPhoneAlt size={24} color="#36d2d3" /></div>
                <span style={styles.contactSubLabel}>DIRECT LINE</span>
                <div style={styles.contactValue}>+251 911 000 000</div>
              </div>
              <div style={styles.contactCard}>
                <div style={{ marginBottom: "15px" }}><FaEnvelope size={24} color="#36d2d3" /></div>
                <span style={styles.contactSubLabel}>OFFICIAL INQUIRIES</span>
                <div style={styles.contactValue}>INFO@VECTORADTECH.COM</div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. FOOTER */}
        <footer className="ghost-unit page-section" style={{ borderBottom: "none", paddingBottom: "40px" }}>
          <h2 style={styles.footerBuildText}>LET'S BUILD</h2>
        </footer>
      </main>
    </div>
  );
};

// --- STYLES OBJECT ---
const styles = {
  pageWrapper: { background: "#fff" },
  loader: { 
    height: "100vh", width: "100vw", display: "flex", justifyContent: "center", 
    alignItems: "center", background: "#000", perspective: "2000px" 
  },
  heroOverlay: { 
    position: "absolute", inset: 0, 
    background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(255,255,255,0.95) 90%, #fff 100%)", 
    display: "flex", alignItems: "center", zIndex: 2 
  },
  heroTextContent: { maxWidth: "1200px", margin: "0 auto", padding: "0 5%", width: "100%" },
  heroSub: { 
    fontSize: "clamp(1.1rem, 2vw, 1.5rem)", fontWeight: "500", color: "#010715", 
    marginTop: "25px", maxWidth: "600px", lineHeight: "1.4", textAlign: "center", marginInline: "auto" 
  },
  container: { maxWidth: "1100px", margin: "0 auto", padding: "0 5%" },
  bodyText: { fontSize: "19px", fontWeight: "300", lineHeight: "1.6", color: "#334155", margin: 0 },
  
  // Gallery
  galleryGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gridAutoRows: "150px", gap: "4px", width: "100%", boxSizing: "border-box" },
  galleryItem: { position: "relative", backgroundColor: "#f5f5f5", overflow: "hidden", boxSizing: "border-box" },
  galleryImage: { width: "100%", height: "100%", objectFit: "cover", display: "block" },
  galleryOverlay: { position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 80%)", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "15px", boxSizing: "border-box" },
  galleryLabel: { color: "#36d2d3", fontSize: "10px", fontWeight: "900", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" },
  galleryTitle: { fontFamily: "Space Grotesk, sans-serif", fontSize: "15px", fontWeight: "700", margin: "0", color: "#fff", textTransform: "uppercase", lineHeight: "1.1" },

  // Journey
  yearTag: { position: "absolute", top: "15px", left: "15px", background: "#36d2d3", color: "#fff", padding: "8px 15px", fontWeight: "900" },
  phaseLabel: { color: "#36d2d3", fontWeight: "900", letterSpacing: "2px", marginBottom: "8px", fontSize: "11px" },
  journeyPhaseTitle: { fontSize: "28px", fontWeight: "900", marginBottom: "15px", textTransform: "uppercase", fontFamily: "'Space Grotesk', sans-serif" },
  journeyPhaseDesc: { fontSize: "18px", lineHeight: "1.6", color: "#475569", fontWeight: "400", margin: 0, fontFamily: "Inter, sans-serif" },

  // Stats
  statsStrip: { display: "flex", justifyContent: "space-around", padding: "30px 0", background: "#000", color: "#fff", marginTop: "20px" },
  statBox: { textAlign: "center", fontSize: "10px", fontWeight: "900", letterSpacing: "1px" },
  statVal: { display: "block", fontSize: "28px", color: "#36d2d3", marginBottom: "5px" },
  statsGrid: { display: "flex", justifyContent: "space-around", gap: "20px", flexWrap: "wrap" },
  statNumber: { fontSize: "40px", fontWeight: "900", display: "block", letterSpacing: "-1px" },
  statLabelAlt: { color: "#36d2d3", fontWeight: "800", letterSpacing: "2px", fontSize: "12px" },

  // Map
  mapHeaderRow: { display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px", marginBottom: "25px" },
  mapDesc: { fontSize: "18px", color: "#475569", marginBottom: "30px" },
  mapContainer: { position: "relative", width: "100%", height: "450px", background: "#e5e3df", borderRadius: "2px", overflow: "hidden", border: "1px solid #d1d5db" },
  mapOverlay: { position: "absolute", inset: 0, pointerEvents: "none" },
  userLabel: { background: "#36d2d3", color: "#fff", padding: "3px 10px", borderRadius: "15px", fontSize: "10px", fontWeight: "800" },
  hqLabel: { background: "#000", color: "#fff", padding: "5px 10px", fontSize: "11px", fontWeight: "800" },
  estimateGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1px", marginTop: "20px", background: "#d1d5db", border: "1px solid #d1d5db" },
  estimateBox: { padding: "20px", background: "#fff", display: "flex", flexDirection: "column", gap: "10px" },
  smallLabel: { fontSize: "10px", fontWeight: "700", color: "#64748b", letterSpacing: "1px" },
  estimateRow: { display: "flex", justifyContent: "space-between" },
  modeText: { fontSize: "13px", fontWeight: "700" },
  timeText: { fontWeight: "900", color: "#36d2d3" },
  trafficBox: { padding: "20px", background: "#fff", display: "flex", flexDirection: "column", justifyContent: "center" },
  trafficStatus: { fontSize: "18px", fontWeight: "900", color: "#22c55e" },
  ctaBox: { padding: "20px", background: "#000", display: "flex", alignItems: "center" },
  gpsButton: { background: "#36d2d3", color: "#fff", border: "none", width: "100%", padding: "12px", fontWeight: "800", cursor: "pointer" },

  // Contact
  contactSection: { background: "#0a0a0a", padding: "100px 5%", margin: "60px -5%", borderBottom: "none" },
  contactRow: { display: "flex", gap: "40px", flexWrap: "wrap", justifyContent: "flex-start" },
  contactCard: { flex: "1", minWidth: "280px", padding: "30px", border: "1px solid #1e293b", borderRadius: "2px" },
  contactSubLabel: { display: "block", fontSize: "12px", fontWeight: "800", color: "#64748b", letterSpacing: "2px", marginBottom: "10px" },
  contactValue: { fontSize: "22px", fontWeight: "900", color: "#36d2d3", fontFamily: "'Space Grotesk', sans-serif" },
  
  footerBuildText: { fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800, lineHeight: 1, color: "#000", textTransform: "uppercase", margin: "15px 0", textAlign: "center" }
};

export default AboutPage;