import React, { useState, useEffect } from "react";
import { FaArrowUp, FaArrowRight } from "react-icons/fa";

const Projects = () => {
  // --- 1. STATE & DATA ---
  const [filter, setFilter] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "ALL", "BRANDING", "DIGITAL PRINTING", "PROMOTIONAL MATERIALS", 
    "CNC & LASER", "SCREEN & SUBLIMATION", "3D PRINTING", 
    "UV PRINTING", "NEON SIGNAGE", "LIGHT BOX", "BENDING", "LED DISPLAY"
  ];

  const allServices = [
    { 
      name: "BRANDING SOLUTIONS", 
      cat: "BRANDING", 
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1200", 
      description: "Comprehensive corporate identity implementation. We engineer structural branding assets.Our state-of-the-art machines deliver unmatched precision on a variety of materials, including acrylic, wood, leather, glass, and MDF. Whether you’re looking to create eye-catching custom signs, unique personalized gifts, decorative panels, or durable industrial parts, we can turn your vision into reality.Experience the beauty of intricate designs with flawlessly smooth edges and deep engravings that elevate your projects to the next level" 
    },
    { 
      name: "DIGITAL PRINTING", 
      cat: "DIGITAL PRINTING", 
      image: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772174316/book3_jwy7ub.jpg", 
      description: "Ultra-wide format printing using eco-solvent and UV-curable inks for industrial use.Our state-of-the-art machines deliver unmatched precision on a variety of materials, including acrylic, wood, leather, glass, and MDF. Whether you’re looking to create eye-catching custom signs, unique personalized gifts, decorative panels, or durable industrial parts, we can turn your vision into reality.Experience the beauty of intricate designs with flawlessly smooth edges and deep engravings that elevate your projects to the next level." 
    },
    { 
      name: "PROMOTIONAL MATERIALS", 
      cat: "PROMOTIONAL MATERIALS", 
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1200", 
      description: "Precision-branded merchandise designed to provide a premium tactile experience.Our state-of-the-art machines deliver unmatched precision on a variety of materials, including acrylic, wood, leather, glass, and MDF. Whether you’re looking to create eye-catching custom signs, unique personalized gifts, decorative panels, or durable industrial parts, we can turn your vision into reality.Experience the beauty of intricate designs with flawlessly smooth edges and deep engravings that elevate your projects to the next level." 
    },
    { 
      name: "CNC ROUTER & LASER", 
      cat: "CNC & LASER", 
      image: "https://images.unsplash.com/photo-1614235951971-54e47be1d120?auto=format&fit=crop&q=80&w=1200", 
      description: "Industrial-grade engraving and cutting services utilizing high-precision robotics.Our state-of-the-art machines deliver unmatched precision on a variety of materials, including acrylic, wood, leather, glass, and MDF. Whether you’re looking to create eye-catching custom signs, unique personalized gifts, decorative panels, or durable industrial parts, we can turn your vision into reality.Experience the beauty of intricate designs with flawlessly smooth edges and deep engravings that elevate your projects to the next level." 
    },
    { 
      name: "3D MODELING & PRINTING", 
      cat: "3D PRINTING", 
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200", 
      description: "Rapid prototyping and manufacturing of precision engineering components.Our state-of-the-art machines deliver unmatched precision on a variety of materials, including acrylic, wood, leather, glass, and MDF. Whether you’re looking to create eye-catching custom signs, unique personalized gifts, decorative panels, or durable industrial parts, we can turn your vision into reality.Experience the beauty of intricate designs with flawlessly smooth edges and deep engravings that elevate your projects to the next level." 
    },
    { 
      name: "NEON SIGNAGE SERVICE", 
      cat: "NEON SIGNAGE", 
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200", 
      description: "Custom LED-neon solutions that blend traditional aesthetics with modern technology." 
    },
    { 
      name: "UV PRINTING", 
      cat: "UV PRINTING", 
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200", 
      description: "Direct-to-surface printing with instant UV curing for rigid materials." 
    },
    { 
      name: "BENDING SERVICE", 
      cat: "BENDING", 
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200", 
      description: "Professional metal and acrylic bending for structural signage and 3D lettering." 
    }
  ];

  // --- 2. LOGIC ---
  const filteredServices = allServices.filter(service => {
    const matchesCategory = filter === "ALL" || service.cat === filter;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // --- 3. RENDER ---
  return (
    <div style={styles.pageWrapper}>
      <style>{`
        body { margin: 0; background-color: #ffff; font-family: 'Segoe UI', Roboto, sans-serif; }
        
        .hide-scrollbar { 
          background-color: #145b5b; 
          padding: 12px 20px; 
          display: flex; 
          gap: 28px; 
          overflow-x: auto; 
          white-space: nowrap; 
          position: sticky; 
          top: 0; 
          z-index: 1000; 
          scrollbar-width: none; 
        }
        .hide-scrollbar::-webkit-scrollbar { display: none; }

        .cat-link { 
          color: #ffffff; 
          font-size: 12px; 
          font-weight: bold; 
          cursor: pointer; 
          text-transform: uppercase; 
          letter-spacing: 0.5px;
        }
        .cat-link.active { color: #36d2d3; }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
          padding: 50px 0;
          max-width: 1200px;
          margin: 0 auto;
        }

        @media (max-width: 950px) {
          .services-grid { grid-template-columns: 1fr; padding: 30px 20px; }
        }

        .card-unit {
          background: #fff;
          border-radius: 4px;
          overflow: hidden;
       
          transition: 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          display: flex;
          flex-direction: column;
        }
        .card-unit:hover { transform: translateY(-8px); box-shadow: 0 15px 35px rgba(0,0,0,0.12); }

        .card-image-box { width: 105%; height: 320px; overflow: hidden; position: relative; }
        .card-img { width: 100%; height: 100%; object-fit: cover; transition: 0.6s; }
        .card-unit:hover .card-img { transform: scale(1.05); }
        
        .card-body { background: #e0ece1; padding: 35px; flex-grow: 1; display: flex; flex-direction: column; }
        .card-title { font-size: 24px; font-weight: 800; margin-bottom: 15px; color: #111; letter-spacing: -0.5px; }
        
        .card-text { 
          color: black; 
          line-height: 1.7; 
          font-size: 18px; 
          margin-bottom: 25px; 
          flex-grow: 1; 
          padding: 15px; 
          border-radius: 4px;
        }
        
        .learn-more-btn { 
          color: #15cfe4; 
          text-decoration: none; 
          font-weight: 700; 
          font-size: 18px; 
          display: flex; 
          align-items: center; 
          justify-content: center;
          gap: 10px; 
          transition: 0.3s;
          border-radius: 4px;
        }

        .no-results { text-align: center; padding: 100px 0; color: #999; grid-column: span 2; }
      `}</style>

      {/* STICKY NAV */}
      <nav className="hide-scrollbar">
        {categories.map((cat, idx) => (
          <span 
            key={idx} 
            className={`cat-link ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </span>
        ))}
      </nav>

      {/* ABOUT SECTION */}
      <section style={styles.aboutContainer}>
        <div style={{ marginBottom: "80px" }}>
          <div style={styles.aboutGrid}>
            <div>
              <h2 style={styles.mainTitle}>
                What We <br />
                <span style={{ color: "#36d2d3" }}>Do ?</span>
              </h2>
              <div style={styles.accentLine}></div>
            </div>

            <div style={styles.quoteBox}>
              <p style={styles.quoteText}>
                "Dominating the East African landscape through unrivaled precision and industrial-grade innovation, 
                Vector Advert & Manufacturing PLC stands as the definitive authority in high-precision advertising 
                infrastructure. <strong style={{ color: "#36d2d3" }}>We represent the pinnacle of engineering synergy,</strong> where the raw, structural integrity of heavy architectural metal fabrication meets the sophisticated intelligence of advanced digital systems."
              </p>
            </div>
          </div>
        </div>

      
      </section>

      {/* SERVICES DISPLAY */}
      <div style={styles.container}>
        <div className="services-grid">
          {filteredServices.length > 0 ? (
            filteredServices.map((service, i) => (
              <div key={i} className="card-unit">
                <div className="card-image-box">
                  <img src={service.image} alt={service.name} className="card-img" />
                </div>
                <div className="card-body">
                  <h3 className="card-title">{service.name}</h3>
                  <p className="card-text">{service.description}</p>
                  <a href="#" className="learn-more-btn">
                    VIEW DETAILS
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <h3 style={{ color: "#111" }}>No services found.</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// --- STYLES OBJECT ---
const styles = {
  pageWrapper: { minHeight: "100vh" },
  container: { maxWidth: "1240px", margin: "0 auto", padding: "0 20px" },
  aboutContainer: { padding: "100px 8%", backgroundColor: "#ffffff", color: "#000", overflowX: "hidden" },
  aboutGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px", alignItems: "center" },
  mainTitle: { fontSize: "clamp(32px, 4vw, 52px)", fontWeight: "900", lineHeight: "1.1", margin: 0, textTransform: "uppercase" },
  accentLine: { width: "60px", height: "4px", backgroundColor: "#36d2d3", marginTop: "20px" },
  quoteBox: { backgroundColor: "#606a42", padding: "40px", borderRadius: "4px", borderLeft: "6px solid #36d2d3" },
  quoteText: { margin: 0, color: "#fff", lineHeight: "1.8", fontSize: "17px" },
  videoWrapper: { width: "100vw", position: "relative", left: "50%", right: "50%", marginLeft: "-50vw", marginRight: "-50vw", backgroundColor: "#000" },
  videoTrack: { display: "flex", overflowX: "auto", scrollbarWidth: "none", scrollBehavior: "smooth" }
};

export default Projects;