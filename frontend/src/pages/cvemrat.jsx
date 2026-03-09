import React, { useState, useEffect, useCallback } from 'react';
import API from "../api/api.jsx";

/** * TEXT-ONLY SECTION TITLE */
const SectionTitle = ({ children, color = '#0f172a' }) => (
  <h3 style={{
    fontSize: '0.7rem',
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: '0.25em',
    color: color,
    borderBottom: '1px solid #e2e8f0',
    paddingBottom: '12px',
    marginBottom: '22px',
    marginTop: '45px'
  }}>
    {children}
  </h3>
);

const AdvancedCV = () => {
  const [landing, setLanding] = useState(null);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    
    const fetchLandingData = async () => {
      try {
        const response = await API.get("/landingheros");
        const data = Array.isArray(response.data) ? response.data[0] : response.data;
        if (data) setLanding(data);
      } catch (error) { 
        console.error("Profile data fetch failed", error); 
      }
    };
    fetchLandingData();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getImageUrl = useCallback((path, fallback) => {
    if (!path) return fallback;
    return path.startsWith("http") ? path : `${API.defaults.baseURL}${path}`;
  }, []);

  const styles = {
    page: { 
      background: '#fcfcfc', 
      padding: isMobile ? '20px 10px' : '80px 20px', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      fontFamily: "'Inter', sans-serif",
      color: '#1e293b'
    },
    cvCard: { 
      background: '#ffffff', 
      width: '100%', 
      maxWidth: '850px', 
      display: 'grid', 
      gridTemplateColumns: isMobile ? '1fr' : '280px 1fr', 
      boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
      border: '1px solid #efefef'
    },
    sidebar: { 
      background: '#f9fafb', 
      padding: '60px 35px',
      borderRight: '1px solid #eeeeee'
    },
    main: { 
      padding: isMobile ? '40px 25px' : '70px 60px',
    },
    label: {
      display: 'block',
      fontSize: '0.6rem',
      fontWeight: '800',
      textTransform: 'uppercase',
      color: '#94a3b8',
      letterSpacing: '0.12em',
      marginBottom: '5px'
    },
    value: {
      display: 'block',
      fontSize: '0.85rem',
      fontWeight: '600',
      color: '#0f172a',
      marginBottom: '24px',
      lineHeight: '1.4'
    }
  };

  return (
    <div style={styles.page}>
      <style>{`
        @media print {
          button, .no-print { display: none !important; }
          body { background: white !important; }
          .cv-card { border: none !important; box-shadow: none !important; }
        }
      `}</style>

      <article className="cv-card" style={styles.cvCard}>
        {/* SIDEBAR */}
        <aside style={styles.sidebar}>
          <div style={{ marginBottom: '50px' }}>
            <img 
              src={getImageUrl(landing?.heroImage, "https://res.cloudinary.com/dq3jkpys8/image/upload/v1770572615/portfolio/e9w0fstodhbevdxhnnnf.jpg")} 
              alt="Haimanot Beka Profile"
              style={{ 
                width: '100%', 
                aspectRatio: '1/1', 
                objectFit: 'cover', 
                marginBottom: '30px',
                border: '1px solid #e5e7eb'
              }}
            />
          </div>

          <SectionTitle>Personal Information</SectionTitle>
          <span style={styles.label}>Nationality</span>
          <span style={styles.value}>Ethiopian</span>

          <span style={styles.label}>Date of Birth</span>
          <span style={styles.value}>21 April 2002</span>

          <span style={styles.label}>Age</span>
          <span style={styles.value}>24</span>

          <SectionTitle>Physical Requirements</SectionTitle>
          <span style={styles.label}>Height</span>
          <span style={styles.value}>163 cm</span>

          <span style={styles.label}>Arm Reach</span>
          <span style={styles.value}>212 cm (on tiptoes)</span>

          <span style={styles.label}>Visual Standards</span>
          <span style={styles.value}>No visible tattoos</span>

          <SectionTitle>Communication</SectionTitle>
          <span style={styles.label}>Primary Phone</span>
          <span style={styles.value}>+251 943 257 078</span>

          <span style={styles.label}>Email Address</span>
          <span style={{ ...styles.value, wordBreak: 'break-all' }}>
            haimanotbeka@gmail.com
          </span>

          <span style={styles.label}>Location</span>
          <span style={styles.value}>Addis Ababa, Ethiopia</span>

          <SectionTitle>Languages</SectionTitle>
          <span style={styles.value}>English — Fluent (spoken and written)</span>
          <span style={styles.value}>Amharic — Native</span>
        </aside>

        {/* MAIN CONTENT */}
        <main style={styles.main}>
          <header style={{ marginBottom: '40px' }}>
            <h1 style={{ 
              fontSize: '2rem', 
              fontWeight: '600', 
              letterSpacing: '-0.04em', 
              color: '#0f172a', 
              margin: '0 0 8px 0',
              lineHeight: '1.1'
            }}>
              HAIMANOT BEKA MEKONNEN
            </h1>
            <p style={{ 
              fontSize: '0.8rem', 
              fontWeight: '500', 
              color: '#3b82f6', 
              textTransform: 'uppercase', 
              letterSpacing: '0.2em' 
            }}>
              Software Engineering Student
            </p>
          </header>

          <section>
            <SectionTitle>Professional Profile</SectionTitle>
            <p style={{ fontSize: '0.92rem', lineHeight: '1.8', color: '#334155', margin: 0 }}>
              Confident and service-oriented Software Engineering student with successful completion of Grade 12 National Exams. Experienced in collaboration and team-based software projects as part of my field of study and in campus extracurricular events, conferences, hackathons, tutoring, and university club activities. Over two years of customer-facing experience in hospitality environments on campus. Recognized for professionalism, teamwork, calm performance under pressure, and strong communication skills. Fluent in English and Amharic. Physically fit, well-groomed, and fully prepared to meet Emirates cabin crew standards. Actively engaged in volunteering, and serving humanity.
            </p>
          </section>

          <section>
            <SectionTitle>Core Competencies</SectionTitle>
            <ul style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr', 
              gap: '10px', 
              fontSize: '0.85rem', 
              color: '#475569', 
              listStyle: 'none', 
              padding: 0 
            }}>
              <li>• Good Customer Service</li>
              <li>• Multicultural Communication</li>
              <li>• Conflict Resolution & Emotional Control</li>
              <li>• Strong Team Collaboration</li>
              <li>• Safety Awareness & Responsibility</li>
              <li>• Professional Appearance & Etiquette</li>
              <li>• Ability to Perform Under Pressure</li>
              <li>• Fast Adaptation to New Environments</li>
            </ul>
          </section>

          <section>
            <SectionTitle>Work Experience</SectionTitle>
            <div style={{ marginBottom: '35px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: '800', margin: 0, color: '#0f172a' }}>Customer Service Receptionist</h4>
                <span style={{ fontSize: '0.7rem', fontWeight: '700', color: '#94a3b8' }}>2023 — PRESENT</span>
              </div>
              <p style={{ fontSize: '0.85rem', fontWeight: '700', color: '#64748b', marginTop: '5px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Addis Ababa University – Addis Ababa, Ethiopia
              </p>
              <ul style={{ fontSize: '0.9rem', color: '#475569', paddingLeft: '20px', lineHeight: '1.9', marginTop: '12px' }}>
                <li>Participated in welcoming ceremonies for fresh students annually.</li>
                <li>Maintained high grooming standards and punctuality.</li>
                <li>Managed busy service periods efficiently and calmly.</li>
                <li>Resolved customer concerns professionally and promptly.</li>
                <li>Collaborated effectively within a team to ensure smooth operations and high satisfaction.</li>
              </ul>
            </div>
          </section>

          <section>
            <SectionTitle>Education</SectionTitle>
            <div style={{ marginBottom: '25px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: '800', margin: 0, color: '#0f172a' }}>B.Sc. in Software Engineering (In Progress)</h4>
                <span style={{ fontSize: '0.7rem', fontWeight: '700', color: '#94a3b8' }}>EXPECTED 2028</span>
              </div>
              <p style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '5px' }}>Addis Ababa University, Ethiopia</p>
              <ul style={{ fontSize: '0.85rem', color: '#475569', paddingLeft: '20px', lineHeight: '1.7', marginTop: '8px' }}>
                <li>Developed strong analytical thinking and problem-solving skills.</li>
                <li>Participated in team-based software projects and GitHub collaboration.</li>
                <li>Studied professional ethics and structured procedures.</li>
              </ul>
            </div>
            <div style={{ borderTop: '1px solid #f8fafc', paddingTop: '15px' }}>
              <span style={styles.label}>Secondary Education</span>
              <span style={{ fontSize: '0.85rem', color: '#0f172a', fontWeight: '600' }}>
                Grade 12 National Examination Certificate — Rebugebeya Secondary and Preparatory School (2021)
              </span>
            </div>
          </section>

          <section>
            <SectionTitle>Hackathons & Extra-Curricular</SectionTitle>
            <div style={{ fontSize: '0.9rem', color: '#475569', lineHeight: '1.8' }}>
              <div style={{ marginBottom: '12px' }}>
                <div style={{ fontWeight: '700', color: '#0f172a' }}>Orientation Leader & Ceremony Coordinator</div>
                <strong>Hackathons:</strong> Participated in university hackathons focusing on innovation and rapid problem-solving. Collaborated with teams to design, develop, and present solutions under strict deadlines.
              </div>
              • <strong>Volunteer Work:</strong> Community and university support initiatives.<br/>
              • <strong>Peer Tutoring:</strong> Assisted fellow students academically, strengthening leadership skills.<br/>
              • <strong>Student Club:</strong> Contributed to event organization, teamwork, and mentorship.
            </div>
          </section>

          <section>
            <SectionTitle>Interests</SectionTitle>
            <div style={{ fontSize: '0.85rem', color: '#475569', display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
              <span>• Fitness & Healthy Lifestyle</span>
              <span>• International Travel & Cultural Exchange</span>
              <span>• Personal Development</span>
              <span>• Technology & Innovation</span>
            </div>
          </section>

          <div className="no-print" style={{ marginTop: '70px' }}>
            <button 
              onClick={() => window.print()}
              style={{ 
                background: '#0f172a', 
                color: '#ffffff', 
                padding: '18px 40px', 
                border: 'none', 
                borderRadius: '0', 
                fontSize: '0.75rem', 
                fontWeight: '800', 
                letterSpacing: '0.25em', 
                cursor: 'pointer',
                width: '100%',
                transition: 'background 0.2s'
              }}
            >
              GENERATE PDF DOSSIER
            </button>
          </div>
        </main>
      </article>
    </div>
  );
};

export default AdvancedCV;