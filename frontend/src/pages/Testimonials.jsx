import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  // --- DATA (UNTOUCHED) ---
  const backgrounds = [
    "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1439405326854-01517489c73e?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80"
  ];

  const teamMembers = [
    { id: 1, role: "CEO", name: "Sarah Jenkins", email: "s.jenkins@firm.com", phone: "555-0101", description: "Sarah leads our architectural vision with 15 years of experience in sustainable urban design.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&h=800&q=80" },
    { id: 2, role: "Manager", name: "Marcus Thorne", email: "m.thorne@firm.com", phone: "555-0102", description: "Marcus oversees daily operations and technical strategy, bridging executive vision and team execution.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&h=600&q=80" },
    { id: 3, role: "Project Manager", name: "Elena Rodriguez", email: "e.rodriguez@firm.com", phone: "555-0103", description: "Elena ensures 98% on-time delivery through strategic project lifecycle management.", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&h=600&q=80" },
    { id: 4, role: "UX Designer", name: "James Wilson", email: "j.wilson@firm.com", phone: "555-0104", description: "James analyzes user behavior to create intuitive, minimalist interfaces for complex problems.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&h=600&q=80" },
    { id: 5, role: "Structural Engineer", name: "Amara Okafor", email: "a.okafor@firm.com", phone: "555-0105", description: "Specializes in earthquake-resistant structures and innovative material science.", image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=600&h=600&q=80" },
    { id: 6, role: "Full Stack Developer", name: "David Park", email: "d.park@firm.com", phone: "555-0106", description: "Expert in React and Node.js, focusing on high-performance web applications.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&h=600&q=80" },
    { id: 7, role: "Interior Architect", email: "s.muller@firm.com", name: "S. Muller", phone: "555-0107", description: "Passionate about creating human-centric indoor environments that boost productivity.", image: "https://images.unsplash.com/photo-1594744803329-e58b31de2184?auto=format&fit=crop&w=600&h=600&q=80" },
    { id: 8, role: "Sustainability Consultant", email: "l.rossi@firm.com", name: "L. Rossi", phone: "555-0108", description: "Ensures all projects meet the highest LEED and net-zero carbon standards.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&h=600&q=80" },
    { id: 9, role: "Marketing Director", email: "m.patel@firm.com", name: "M. Patel", phone: "555-0109", description: "Crafts our brand story and manages global outreach for our architectural portfolio.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&h=600&q=80" },
    { id: 10, role: "BIM Coordinator", email: "s.devries@firm.com", name: "S. Devries", phone: "555-0110", description: "Manages complex 3D data models to streamline the construction process.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&h=600&q=80" },
    { id: 11, role: "Landscape Designer", email: "c.bennet@firm.com", name: "C. Bennet", phone: "555-0111", description: "Integrates native ecology into urban masterplans to create resilient public parks.", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&h=600&q=80" },
    { id: 12, role: "Financial Controller", email: "t.wright@firm.com", name: "T. Wright", phone: "555-0112", description: "Oversees fiscal health and manages the commercial viability of our developments.", image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=600&h=600&q=80" }
  ];

  // --- LOGIC (REDUCED TO BACKGROUND ONLY) ---
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const ceo = teamMembers[0];

  return (
    <main className="container team" id="team" style={{ position: 'relative', minHeight: '100vh', padding: '120px 20px', overflow: 'hidden' }}>
      
      {/* 1. BACKGROUNDS */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: `url(${backgrounds[bgIndex]})`, backgroundSize: 'cover', backgroundPosition: 'center', transition: 'background-image 2.5s ease-in-out', animation: 'slowBreath 20s ease-in-out infinite', zIndex: -2 }} />
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(255, 255, 255, 0.85)', backdropFilter: 'blur(12px)', zIndex: -1 }} />

      <style>
        {`
          @keyframes slowBreath { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
          .member-card { animation: fadeInUp 1s ease-out forwards; }
          @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        `}
      </style>

      {/* 2. PAGE CONTENT (UNTOUCHED) */}
      <h1 style={{ textAlign: 'center', marginBottom: '80px', fontSize: '3.8rem', fontWeight: '900', color: '#111', letterSpacing: '-2px' }}>
        Meet Our Team
      </h1>

      <section style={{ marginBottom: '100px', display: 'flex', justifyContent: 'center' }}>
        <article className="member-card" style={{ textAlign: 'center', maxWidth: '600px' }}>
          <div className="profile-container" style={{ width: '300px', height: '300px', margin: '0 auto 35px', borderRadius: '50%', overflow: 'hidden', border: '6px solid white', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
            <img src={ceo.image} alt={ceo.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <h2 style={{ fontSize: '3rem', margin: '0 0 5px 0', color: '#1a1a1a' }}>{ceo.name}</h2>
          <p style={{ color: '#36d2d3', fontWeight: '900', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '20px' }}>{ceo.role}</p>
          <p style={{ fontSize: '1.2rem', color: '#333', lineHeight: '1.8', marginBottom: '25px', padding: '0 20px' }}>{ceo.description}</p>
          <div style={{ display: 'flex', gap: '25px', justifyContent: 'center' }}>
            <a href={`mailto:${ceo.email}`} style={{ color: '#36d2d3', textDecoration: 'none', fontWeight: '600' }}>{ceo.email}</a>
            <span style={{ color: '#000', fontWeight: 'bold' }}>{ceo.phone}</span>
          </div>
        </article>
      </section>

      <section 
        className="team-members" 
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '120px 60px', maxWidth: '1500px', margin: '0 auto' }}
      >
        {teamMembers.slice(1).map((member) => (
          <article key={member.id} className="member-card" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="profile-container" style={{ width: '200px', height: '200px', marginBottom: '30px', borderRadius: '50%', overflow: 'hidden', border: '6px solid white', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
              <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ maxWidth: '340px' }}>
              <h4 style={{ fontSize: '1.8rem', margin: '0 0 5px 0', color: '#111' }}>{member.name}</h4>
              <p style={{ color: '#36d2d3', fontWeight: '800', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px' }}>{member.role}</p>
              <p style={{ fontSize: '1rem', color: '#444', lineHeight: '1.7', marginBottom: '20px' }}>{member.description}</p>
              <div style={{ fontSize: '0.95rem' }}>
                <a href={`mailto:${member.email}`} style={{ color: '#36d2d3', textDecoration: 'none', fontWeight: '600', display: 'block', marginBottom: '6px' }}>{member.email}</a>
                <span style={{ color: '#000', fontWeight: '700' }}>{member.phone}</span>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Testimonials;