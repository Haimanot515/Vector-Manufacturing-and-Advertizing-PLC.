import React, { useEffect, useState } from "react";
import { FaSearch, FaTools, FaShieldAlt, FaFilePdf, FaHeadset, FaCogs, FaChevronDown, FaChevronUp, FaWhatsapp, FaPhoneAlt, FaEnvelope, FaCheckCircle, FaExclamationTriangle, FaRobot } from "react-icons/fa";

const HelpCenter = () => {
  const [loading, setLoading] = useState(true);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("revealed");
        });
      },
      { threshold: 0.1 }
    );

    if (!loading) {
      document.querySelectorAll(".ghost-unit").forEach((t) => observer.observe(t));
    }
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [loading]);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      category: "FABRICATION & DELIVERY",
      q: "What is the typical lead time for large-scale structural nodes?",
      a: "Standard fabrication for heavy-duty advertising infrastructure takes 4–8 weeks. This includes architectural design approval, precision welding at our Kality plant, and stress-testing."
    },
    {
      category: "WARRANTY & SERVICE",
      q: "What does the Vector 5-year structural warranty cover?",
      a: "Our warranty covers structural integrity, weld durability, and corrosion resistance. It includes bi-annual safety inspections by our engineering team to ensure zero-compromise performance."
    },
    {
      category: "TECHNICAL / LED",
      q: "How do you handle power fluctuations for digital billboards?",
      a: "Every Vector LED installation includes integrated industrial surge protection and voltage regulators specifically calibrated for the local power grid to prevent component burnout."
    },
    {
      category: "MAINTENANCE",
      q: "How often should structural bolts and tension cables be inspected?",
      a: "We recommend a professional maintenance audit every 6 months. For structures located in high-wind areas, we provide a priority quarterly inspection schedule."
    },
    {
      category: "COMPLIANCE",
      q: "Are your installations compliant with city administration regulations?",
      a: "Yes. We handle the technical documentation required for safety compliance, ensuring all structures meet or exceed local building codes and wind-load mandates."
    }
  ];

  if (loading) return <div style={styles.loader}><div className="spinning-vector">VECTOR</div></div>;

  return (
    <div style={styles.pageWrapper}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;900&family=Space+Grotesk:wght@700;800;900&display=swap');
        .ghost-unit { opacity: 0; transform: translateY(20px); transition: all 0.6s ease-out; }
        .ghost-unit.revealed { opacity: 1; transform: translateY(0); }
        .article-card:hover h4 { color: #36d2d3; }
        .status-pulse { width: 10px; height: 10px; background: #22c55e; border-radius: 50%; display: inline-block; margin-right: 8px; box-shadow: 0 0 8px #22c55e; }
        .faq-card { border: 1px solid #eee; margin-bottom: 10px; border-radius: 4px; overflow: hidden; transition: 0.3s; }
        .faq-card:hover { border-color: #36d2d3; }
        .faq-header { background: #fff; padding: 20px 25px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; }
        .faq-answer { background: #fafafa; padding: 0 25px; max-height: 0; overflow: hidden; transition: all 0.4s ease-in-out; opacity: 0; }
        .faq-answer.open { padding: 20px 25px; max-height: 200px; opacity: 1; border-top: 1px solid #f0f0f0; }
      `}</style>

      {/* --- HERO --- */}
      <section style={styles.hero}>
        <div className="ghost-unit" style={styles.heroContent}>
          
          <h1 style={styles.mainTitle}>HELP <span style={{ color: "#36d2d3" }}>CENTER</span></h1>
          <p style={styles.subTitle}>Vector Advert PLC: Engineering liaison and infrastructure management portal.</p>
        </div>
      </section>

      <main style={styles.container}>
        {/* --- FAQ SECTION --- */}
        <section className="ghost-unit" style={styles.sectionMargin}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionHeading}>FREQUENTLY ASKED <span style={{ color: "#36d2d3" }}>QUESTIONS</span></h2>
            <p style={{color: "#64748b"}}>Find immediate answers to common technical and operational queries.</p>
          </div>
          <div style={styles.faqList}>
            {faqData.map((faq, index) => (
              <div key={index} className="faq-card">
                <div className="faq-header" onClick={() => toggleFaq(index)}>
                  <div style={{textAlign: "left"}}>
                    <span style={styles.faqCategory}>{faq.category}</span>
                    <h4 style={styles.faqQuestion}>{faq.q}</h4>
                  </div>
                  {openFaq === index ? <FaChevronUp color="#36d2d3" /> : <FaChevronDown color="#cbd5e1" />}
                </div>
                <div className={`faq-answer ${openFaq === index ? 'open' : ''}`}>
                  <p style={styles.faqText}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- DOWNLOAD CENTER SECTION --- */}
        <section className="ghost-unit" style={styles.downloadSection}>
          <h2 style={styles.sectionHeading}>DOWNLOAD <span style={{ color: "#36d2d3" }}>CENTER</span></h2>
          <div style={styles.downloadGrid}>
            {[
              { title: "Company Profile 2026", size: "4.2 MB", type: "PDF" },
              { title: "Structural Safety Standards", size: "1.8 MB", type: "PDF" },
              { title: "ISO Certification 9001", size: "0.9 MB", type: "PDF" },
              { title: "Maintenance Manual v2.0", size: "3.5 MB", type: "PDF" }
            ].map((doc, i) => (
              <div key={i} style={styles.downloadCard}>
                <FaFilePdf size={30} color="#36d2d3" />
                <div style={{flex: 1}}>
                  <h4 style={{margin: "0 0 5px 0"}}>{doc.title}</h4>
                  <span style={{fontSize: "12px", color: "#94a3b8"}}>{doc.type} • {doc.size}</span>
                </div>
                <button style={styles.downloadBtn}>DOWNLOAD</button>
              </div>
            ))}
          </div>
        </section>

        {/* --- KNOWLEDGE BASE --- */}
        <section className="ghost-unit" style={styles.sectionMargin}>
          <h2 style={styles.sectionHeading}>TECHNICAL <span style={{ color: "#36d2d3" }}>KNOWLEDGE BASE</span></h2>
          <div style={styles.articleGrid}>
            {[
              { title: "How to Install 12m Steel Billboard Units", cat: "Engineering" },
              { title: "LED Pixel Failure: Diagnostic & Troubleshooting", cat: "Digital" },
              { title: "Wind Load Calculation Guidelines", cat: "Compliance" },
              { title: "Emergency Power Cutover Procedures", cat: "Maintenance" }
            ].map((art, i) => (
              <div key={i} style={styles.articleCard} className="article-card">
                <span style={styles.articleCat}>{art.cat}</span>
                <h4 style={styles.articleTitle}>{art.title}</h4>
                <a href="#" style={styles.readMore}>READ DOCUMENTATION →</a>
              </div>
            ))}
          </div>
        </section>

        {/* --- CONTACT & SLA --- */}
        <div style={styles.dualGrid}>
          <section className="ghost-unit">
            <h2 style={styles.sectionHeading}>CONTACT <span style={{ color: "#36d2d3" }}>METHODS</span></h2>
            <div style={styles.contactGrid}>
              <div style={styles.contactItem}><FaPhoneAlt color="#36d2d3" /> <span>+251 911 000 000 (HQ)</span></div>
              <div style={styles.contactItem}><FaWhatsapp color="#36d2d3" /> <span>+251 911 000 001 (WhatsApp)</span></div>
              <div style={styles.contactItem}><FaEnvelope color="#36d2d3" /> <span>support@vectoradtech.com</span></div>
              <div style={styles.contactItem}><FaExclamationTriangle color="#ef4444" /> <span>24/7 EMERGENCY HOTLINE</span></div>
            </div>
          </section>
          <section className="ghost-unit">
            <h2 style={styles.sectionHeading}>SERVICE LEVEL <span style={{ color: "#36d2d3" }}>AGREEMENT</span></h2>
            <div style={styles.slaBox}>
              <div style={styles.slaRow}><strong>CRITICAL:</strong> <span>4 Hour Response</span></div>
              <div style={styles.slaRow}><strong>STRUCTURAL:</strong> <span>Immediate Dispatch</span></div>
              <div style={styles.slaRow}><strong>ROUTINE:</strong> <span>48 Hour Resolution</span></div>
            </div>
          </section>
        </div>

      

        {/* --- MAINTENANCE PLANS --- */}
        <section className="ghost-unit" style={styles.sectionMargin}>
            <div style={styles.maintenanceGrid}>
               <div style={styles.mCard}>
                  <FaCheckCircle color="#36d2d3" size={30} />
                  <h3>BASIC PLAN</h3>
                  <p>Annual Structural Audit</p>
               </div>
               <div style={{...styles.mCard, border: '2px solid #36d2d3'}}>
                  <FaCheckCircle color="#36d2d3" size={30} />
                  <h3>PREMIUM PLAN</h3>
                  <p>Quarterly Calibration</p>
               </div>
               <div style={styles.mCard}>
                  <FaShieldAlt color="#36d2d3" size={30} />
                  <h3>WIND-LOAD RATING</h3>
                  <p>Certified Resistance</p>
               </div>
            </div>
        </section>

        {/* --- CASE STUDIES --- */}
        <section className="ghost-unit" style={styles.sectionMargin}>
           <h2 style={styles.sectionHeading}>PORTFOLIO <span style={{ color: "#36d2d3" }}>VALIDATION</span></h2>
           <div style={styles.caseGrid}>
              <div style={styles.caseItem}><strong>BOLE DIGITAL TOWER:</strong> 99.9% Uptime recorded since 2024.</div>
              <div style={styles.caseItem}><strong>MEGENAGNA NETWORK:</strong> Custom anti-vibration structural nodes.</div>
           </div>
        </section>

        {/* --- CONTACT CTA --- */}
        <section className="ghost-unit" style={styles.contactFooter}>
          <div style={{maxWidth: "700px"}}>
            <h2 style={{fontFamily: "'Space Grotesk'", fontSize: "32px", margin: "0 0 10px 0"}}>STILL NEED ASSISTANCE?</h2>
            <p style={{opacity: 0.8}}>Our Kality-based engineering team is available 24/7 for support.</p>
          </div>
          <button style={styles.ctaButton}>Send us Message</button>
        </section>

        {/* --- AI ASSISTANT --- */}
        <div style={styles.aiButton}>
          <FaRobot size={24} />
          <span>ASK VECTOR AI</span>
        </div>
      </main>
    </div>
  );
};

const styles = {
  pageWrapper: { background: "#fff", minHeight: "100vh", fontFamily: "'Inter', sans-serif", color: "#000" },
  loader: { height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center", background: "#000", color: "#36d2d3", fontSize: "2rem", fontWeight: "900" },
  hero: { background: "#000", padding: "100px 20px", textAlign: "center", color: "#fff" },
  heroContent: { maxWidth: "900px", margin: "0 auto" },
  systemStatus: { fontSize: "12px", fontWeight: "900", color: "#22c55e", marginBottom: "20px", letterSpacing: "1px" },
  mainTitle: { fontFamily: "'Space Grotesk'", fontSize: "clamp(40px, 8vw, 70px)", fontWeight: "900", margin: 0 },
  subTitle: { opacity: 0.6, marginTop: "15px", fontSize: "1.1rem" },
  container: { maxWidth: "1200px", margin: "0 auto", padding: "80px 20px" },
  sectionMargin: { marginBottom: "100px" },
  sectionHeader: { marginBottom: "40px", borderLeft: "4px solid #36d2d3", paddingLeft: "20px" },
  sectionHeading: { fontFamily: "'Space Grotesk'", fontSize: "28px", fontWeight: "900", marginBottom: "30px", textTransform: "uppercase" },
  faqList: { marginBottom: "80px" },
  faqCategory: { fontSize: "10px", fontWeight: "900", color: "#36d2d3", letterSpacing: "1.5px", textTransform: "uppercase" },
  faqQuestion: { margin: "5px 0 0 0", fontSize: "18px", fontWeight: "700" },
  faqText: { fontSize: "16px", color: "#475569", lineHeight: "1.6", margin: 0 },
  articleGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" },
  articleCard: { padding: "30px", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "2px" },
  articleCat: { fontSize: "10px", fontWeight: "900", color: "#36d2d3", textTransform: "uppercase" },
  articleTitle: { margin: "10px 0 20px 0", fontSize: "18px", lineHeight: "1.3" },
  readMore: { fontSize: "12px", fontWeight: "900", textDecoration: "none", color: "#000" },
  dualGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "60px", marginBottom: "100px" },
  contactGrid: { display: "flex", flexDirection: "column", gap: "15px" },
  contactItem: { display: "flex", alignItems: "center", gap: "15px", fontWeight: "600" },
  slaBox: { background: "#f1f5f9", padding: "30px", borderLeft: "4px solid #36d2d3" },
  slaRow: { display: "flex", justifyContent: "space-between", marginBottom: "10px", borderBottom: "1px solid #e2e8f0", paddingBottom: "10px" },
  infoStrip: { background: "#000", color: "#fff", padding: "40px", marginBottom: "100px", textAlign: "center" },
  maintenanceGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" },
  mCard: { padding: "40px", textAlign: "center", background: "#fff", border: "1px solid #eee" },
  caseGrid: { marginTop: "20px", display: "grid", gap: "10px" },
  caseItem: { padding: "15px", background: "#f8fafc", borderLeft: "4px solid #36d2d3" },
  downloadSection: { marginBottom: "100px" },
  downloadGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))", gap: "20px" },
  downloadCard: { display: "flex", alignItems: "center", gap: "20px", padding: "20px", background: "#f8fafc", border: "1px solid #e2e8f0" },
  downloadBtn: { background: "transparent", border: "1px solid #000", padding: "8px 15px", fontWeight: "700", fontSize: "12px", cursor: "pointer" },
  contactFooter: { background: "#36d2d3", padding: "60px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "30px", borderRadius: "2px" },
  ctaButton: { background: "#000", color: "#fff", border: "none", padding: "18px 40px", fontWeight: "900", cursor: "pointer", textTransform: "uppercase", letterSpacing: "1px" },
  aiButton: { position: "fixed", bottom: "30px", right: "30px", background: "#36d2d3", color: "#000", padding: "15px 25px", borderRadius: "50px", display: "flex", alignItems: "center", gap: "10px", fontWeight: "900", boxShadow: "0 10px 30px rgba(54, 210, 211, 0.4)", cursor: "pointer", zIndex: 100 }
};

export default HelpCenter;