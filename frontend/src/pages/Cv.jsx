import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const AdvancedCV= () => {
  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: "Haimanot_Beka_Cover_Letter",
  });

  const styles = {
    page: { 
      background: '#f4f4f4', 
      padding: '60px 20px', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      fontFamily: "'Inter', 'Segoe UI', sans-serif",
      color: '#1e293b'
    },
    letterCard: { 
      background: '#ffffff', 
      width: '100%', 
      maxWidth: '850px', 
      padding: '80px 70px',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
      borderRadius: '2px',
      position: 'relative',
      lineHeight: '1.6'
    },
    headerLine: {
      width: '60px',
      height: '4px',
      background: '#D71920',
      marginBottom: '30px'
    },
    sectionTitle: {
      fontSize: '0.75rem',
      fontWeight: '900',
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
      color: '#D71920',
      marginTop: '30px',
      marginBottom: '10px'
    },
    bodyText: {
      fontSize: '0.95rem',
      color: '#334155',
      marginBottom: '20px',
      textAlign: 'justify'
    },
    contactInfo: {
      fontSize: '0.85rem',
      color: '#64748b',
      marginBottom: '40px'
    },
    downloadBtn: {
      marginTop: '40px',
      background: '#D71920', 
      color: '#ffffff', 
      padding: '18px 35px', 
      border: 'none', 
      borderRadius: '4px', 
      fontSize: '0.8rem', 
      fontWeight: '800', 
      letterSpacing: '0.2em', 
      cursor: 'pointer',
      boxShadow: '0 4px 14px 0 rgba(215, 25, 32, 0.39)',
      transition: 'all 0.3s ease'
    }
  };

  return (
    <div style={styles.page}>
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; }
          .letter-card { box-shadow: none !important; width: 100% !important; border: none !important; padding: 40px !important; }
        }
      `}</style>

      <article ref={componentRef} className="letter-card" style={styles.letterCard}>
        <div style={styles.headerLine}></div>
        
        <div style={{ marginBottom: '50px' }}>
          <h1 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#0f172a', margin: '0 0 5px 0' }}>
            HAIMANOT BEKA MEKONNEN
          </h1>
          <div style={styles.contactInfo}>
            Addis Ababa, Ethiopia | +251 943 257 078 | haimanotbeka@gmail.com
          </div>
          <div style={{ fontWeight: '700', color: '#1e293b' }}>February 18, 2026</div>
        </div>

        <div style={{ marginBottom: '40px' }}>
          <div style={{ fontWeight: '700', color: '#1e293b' }}>To: Emirates Cabin Crew Recruitment Team</div>
          <div style={{ fontWeight: '700', color: '#D71920' }}>RE: Cabin Crew Application - Professional, Empathetic, and Progressive Candidate</div>
        </div>

        <p style={styles.bodyText}>Dear Emirates Recruitment Team,</p>

        <p style={styles.bodyText}>
          With over two years of high-volume customer service experience and a rigorous academic background in Software Engineering, I bring a unique combination of multicultural communication skills, procedural discipline, and a safety-first mindset—perfectly aligned with Emirates Cabin Crew standards.
        </p>

        <h3 style={styles.sectionTitle}>Hospitality & Service Excellence</h3>
        <p style={styles.bodyText}>
          I exceed the minimum hospitality requirement through my role as Lead Customer Service Receptionist at Addis Ababa University, where I coordinated welcoming ceremonies for more than 5,000 students. This experience strengthened my ability to create comfort, reassurance, and positive first impressions in dynamic, multicultural environments.
        </p>

        <h3 style={styles.sectionTitle}>Safety, Responsibility & Leadership</h3>
        <p style={styles.bodyText}>
          My engineering education instilled precision, analytical thinking, and strict procedural compliance. I am confident in applying these strengths to onboard safety protocols, emergency readiness, and calm leadership under pressure — ensuring passenger wellbeing remains the highest priority at all times.
        </p>

        <h3 style={styles.sectionTitle}>Communication & Cultural Intelligence</h3>
        <p style={styles.bodyText}>
          Fluent in English and a native speaker of Amharic, I communicate clearly and confidently across cultures. I am skilled in de-escalating conflicts, resolving concerns diplomatically, and maintaining composure in high-stress situations.
        </p>

        <h3 style={styles.sectionTitle}>Physical & Professional Readiness</h3>
        <p style={styles.bodyText}>
          I fully meet Emirates physical requirements, standing 160 cm tall with an arm reach exceeding 212 cm on tiptoes. I maintain impeccable grooming standards, have no visible tattoos, and am prepared to uphold the polished presentation expected of an international cabin crew professional.
        </p>

        <p style={{ ...styles.bodyText, marginTop: '30px' }}>
          Emirates represents the gold standard of global aviation — synonymous with excellence, innovation, and cultural diversity. I am physically resilient, emotionally intelligent, and fully prepared to relocate to Dubai to serve as a dedicated ambassador of your distinguished airline.
        </p>

        <p style={styles.bodyText}>
          I look forward to demonstrating my professionalism, teamwork, and commitment to safety at your upcoming recruitment event.
        </p>

        <div style={{ marginTop: '50px' }}>
          <p style={{ margin: 0, fontWeight: '700' }}>Sincerely,</p>
          <p style={{ margin: '5px 0 0 0', fontSize: '1.1rem', fontWeight: '800', color: '#0f172a' }}>Haimanot Beka Mekonnen</p>
        </div>
      </article>

      <button 
        className="no-print" 
        onClick={handlePrint}
        style={styles.downloadBtn}
      >
        DOWNLOAD OFFICIAL COVER LETTER
      </button>

      <div className="no-print" style={{ marginTop: '20px', fontSize: '0.7rem', color: '#94a3b8' }}>
        Ensure "Background Graphics" is enabled in print settings to preserve styles.
      </div>
    </div>
  );
};

export default AdvancedCV;