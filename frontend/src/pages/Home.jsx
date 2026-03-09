import React, { useState, useEffect } from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  
  const fullText = "3D Printing machine on its Way";

  const products = [
    { id: "PRO-01", name: "Digital Billboards", desc: "Industrial grade LED systems with integrated structural support.", img: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772173247/watch_f8dfx5.jpg" },
    { id: "PRO-02", name: "CNC Fabrication", desc: "Automated precision cutting and shaping for heavy industrial metals.", img: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772173237/cooker_pzprq5.jpg" },
    { id: "PRO-03", name: "Structural Landmarks", desc: "Architectural metal fabrication that defines urban horizons.", img: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772173221/book_gpt4df.jpg" },
    { id: "PRO-01", name: "Digital Billboards", desc: "Industrial grade LED systems with integrated structural support.", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80" },
    { id: "PRO-02", name: "CNC Fabrication", desc: "Automated precision cutting and shaping for heavy industrial metals.", img: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=800&q=80" },
    { id: "PRO-03", name: "Structural Landmarks", desc: "Architectural metal fabrication that defines urban horizons.", img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80" },
    
  ];

  // Typing logic: Slow typing (300ms), 10s rest at end, deletion (150ms)
  useEffect(() => {
    const typingSpeed = isDeleting ? 500 : 1000; 
    
    const timeout = setTimeout(() => {
      if (!isDeleting && displayText.length < fullText.length) {
        setDisplayText(fullText.slice(0, displayText.length + 1));
        setIsFinished(false);
      } else if (isDeleting && displayText.length > 0) {
        setDisplayText(fullText.slice(0, displayText.length - 1));
        setIsFinished(false);
      } else if (!isDeleting && displayText.length === fullText.length) {
        setIsFinished(true);
        setTimeout(() => setIsDeleting(true), 10000); 
      } else if (isDeleting && displayText.length === 0) {
        setIsDeleting(false);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting]);

  const heroSlides = [
    {
      title: "Vector Your Choice",
      desc: "Delivering high-performance CNC and 3D printing solutions tailored for modern industrial needs. Our infrastructure ensures precision at every scale, from prototype to mass production.",
      sub: "Vector Ads Precision Infrastructure",
      bg: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772365795/graphics2_tzrz3g.avif"
    },
    {
      title: "Design Build Dominate",
      desc: "From conceptual design to final production, we empower brands to dominate their market through superior manufacturing technology and integrated automation systems.",
      sub: "Vector Ads Precision Infrastructure",
      bg: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772372442/screenign_mnegti.jpg"
    },
    {
      title: "Manufacturing Brand Power",
      desc: "Revolutionizing the supply chain with automated precision and scalable manufacturing assets that grow alongside your business, ensuring global market reach.",
      sub: "Scalable solutions for global market reach",
      bg: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772368662/branding_gvm383.png"
    }
  ];

  const newsItems = [
    { title: "PRECISION INFRASTRUCTURE FOR GLOBAL BRANDS.", img: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772364291/advrtizinsing_yzlaxh.jpg" },
    { title: "SMART LED CORRIDORS: URBAN CONNECTIVITY.", img: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772173998/watch2_tqxqmd.avif" },
    { title: "CNC METAL FABRICATION AT VECTOR SCALE.", img: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1771930701/bestlogo_atbhnn.jpg" }
  ];

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 10000);
    return () => clearInterval(slideTimer);
  }, [heroSlides.length]);

  return (
    <div style={{ backgroundColor: "#000", color: "#fff", overflowX: "hidden", minHeight: "100vh" }}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Space+Grotesk:wght@500;700&display=swap');
          
          body, html { margin: 0; padding: 0; font-family: 'Plus Jakarta Sans', sans-serif; background: #000; height: 100%; }
          .brand-blue { color: #36d2d3; text-shadow: 0 0 30px ; }

          .bg-layer { position: absolute; inset: 0; background-size: cover; background-position: center; transition: background-image 1.5s ease-in-out; z-index: 1; filter: brightness(0.4); }
          .overlay-layer { position: absolute; inset: 0; background: radial-gradient(circle at 20%, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.9) 100%); z-index: 2; }
          
          .surprise-pulse { animation: restingPulse 2s ease-in-out infinite; border-color: rgba(255,255,255,0.5) !important; }

          @keyframes restingPulse {
            0%, 100% { transform: scale(1.02); filter: brightness(1.1); }
            50% { transform: scale(1.05); filter: brightness(1.3); }
          }

          .status-row { display: flex; align-items: center; gap: 20px; margin-top: 15px; flex-wrap: wrap; }

          .cylinder-body {
            width: 280px; height: 40px; background: rgba(255, 255, 255, 0.05); border-radius: 20px;
            position: relative; border: 1px solid rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px);
            display: flex; align-items: center; justify-content: center; overflow: hidden;
          }

          .scrolling-wrapper { font-size: 13px; font-weight: 700; color: #fff; white-space: nowrap; letter-spacing: 0.2px; }

          .machine-glow-strip { position: absolute; inset: 0; animation: machineCycle 6s infinite ease-in-out; opacity: 0.1; filter: blur(10px); }
          @keyframes machineCycle { 0%, 100% { background: #36d2d3; } 50% { background: #36d2d3; } }

          .hero-content { 
            position: relative; z-index: 3; height: 100vh; display: flex; flex-direction: column; 
            justify-content: center; padding: 0 8%; 
            max-width: 55%; 
          }
          
          .hero-title { text-align:center;center;font-size:  clamp(35px, 5.5vw, 65px); font-weight: 800; line-height: 1.1; text-transform: uppercase; font-family: 'Space Grotesk', sans-serif; margin: 0; }
          
          .hero-desc { 
            font-size: 20px; 
            line-height: 1.7; 
            color: rgba(255,255,255,0.7); 
            margin: 20px 0;
            max-width: 100%; 
            font-weight: 400;
          }

          .hero-sub { font-size:25px; letter-spacing: 3px; text-transform: uppercase; color: #36d2d3; font-weight: 700; margin: 0; }

          .news-ticker-container {
            position: absolute; right: 5%; top: 10%; height: 80vh; width: 280px; z-index: 10;
            overflow: hidden; mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
          }
          .news-ticker-track { display: flex; flex-direction: column; gap: 30px; animation: scrollUpAds 20s linear infinite; }
          @keyframes scrollUpAds { 0% { transform: translateY(0); } 100% { transform: translateY(-50%); } }
          
          .news-ad-unit { width: 100%; display: flex; flex-direction: column; align-items: flex-end; text-align: right; }
          .news-image { width: 100%; height: 140px; background-size: cover; background-position: center; border-radius: 10px; margin-bottom: 12px; border: 1px solid rgba(255,255,255,0.1); }
          .ad-title { font-size: 13px; font-weight: 700; color: #fff; line-height: 1.4; }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          /* ADDED STYLES FOR THE REST */
          .plc-title {   font-family: 'Space Grotesk', sans-serif;
        font-size: clamp(32px, 5vw, 56px); /* Slightly smaller than hero */
        font-weight: 800;
        line-height: 1;
        color: #000;
        text-transform: uppercase;
        margin: 15px 0; /* Tight margins */}
          .plc-title span { color: #36d2d3; }
          .content-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 80px; align-items: start; margin-bottom: 60px; }
          .desc-text { font-size: 18px; line-height: 1.8; color: #444; margin: 0; }
          .video-area-container { position: relative; width: 100%; display: flex; align-items: center; }
          .video-viewport { width: calc(100% - 10px); margin: 0 auto; height: 600px; background: #000; position: relative; overflow: hidden; border-top: 10px solid #2563eb; z-index: 1; }
          .video-scroll-track { display: flex; width: 100%; height: 100%; overflow-x: hidden; scroll-behavior: smooth; }
          .video-slide { min-width: 100%; height: 100%; position: relative; flex-shrink: 0; }
          .video-slide iframe { width: 100%; height: 100%; border: none; }
          .side-nav-btn { position: absolute; top: 50%; transform: translateY(-50%); background: #000; color: #fff; border: none; width: 60px; height: 100px; font-weight: 900; cursor: pointer; z-index: 10; display: flex; align-items: center; justify-content: center; transition: 0.3s; }
          .side-nav-btn:hover { background: #36d2d3; }
          .btn-left { left: 2%; } .btn-right { right: 2%; }
          .ceo-flex-container { display: flex; gap: 80px; align-items: flex-start; flex-wrap: wrap; }
          .philosophy-box { margin-top: 40px; display: grid; grid-template-columns: 1fr 1fr; gap: 30px; border-top: 1px solid #eee; padding-top: 30px; }
          .philosophy-card h4 { font-size: 12px; font-weight: 900; color: #36d2d3; text-transform: uppercase; margin-bottom: 10px; letter-spacing: 1px; }
          .philosophy-card p { font-size: 15px; line-height: 1.6; color: #666; margin: 0; }
          .team-image-container img { width: 100%; height: 600px; object-fit: cover; }
          .product-card { background: #f9f9f9; border: 1px solid #eee; overflow: hidden; }
          .product-card img { width: 100%; height: 300px; object-fit: cover; }

          @media (max-width: 968px) {
            .content-grid { grid-template-columns: 1fr; gap: 30px; }
            .video-viewport { height: 400px; }
            .side-nav-btn { width: 40px; height: 70px; }
            .ceo-flex-container { gap: 40px; }
            .philosophy-box { grid-template-columns: 1fr; }
          }
        `}
      </style>

      {/* 1. HERO SECTION */}
      <section style={{ height: "100vh", position: "relative", overflow: "hidden" }}>
        <div className="bg-layer" style={{ backgroundImage: `url(${heroSlides[currentSlide].bg})` }}></div>
        <div className="overlay-layer"></div>
        
        <div className="news-ticker-container">
          <div className="news-ticker-track">
            {[...newsItems, ...newsItems].map((item, index) => (
              <div key={index} className="news-ad-unit">
                <div className="news-image" style={{ backgroundImage: `url(${item.img})` }}></div>
                <div className="ad-title">{item.title}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-content">
          <div key={currentSlide} style={{ animation: "fadeIn 2s ease-in-out" }}>
            <h1 className="hero-title">
              {heroSlides[currentSlide].title.split(" ")[0]} <br />
              <span className="brand-blue">{heroSlides[currentSlide].title.split(" ")[1]}</span> <br />
              {heroSlides[currentSlide].title.split(" ").slice(2).join(" ")}
            </h1>

            <p className="hero-desc">
              {heroSlides[currentSlide].desc}
            </p>

            <div className="status-row">
              <p className="hero-sub">{heroSlides[currentSlide].sub}</p>
              
              
            </div>
          </div>
        </div>
      </section>

  {/* 2. ABOUT SECTION */}
<section style={{ padding: "100px 8%", backgroundColor: "#fff", color: "#000", overflowX: "hidden" }}>
  <div className="about-wrapper">
    <div className="content-grid">
      <div>
        <h2 className="plc-title">Vector Advert &<br /><span>Manufacturing PLC</span></h2>
      </div>
      <div>
        <p className="desc-text">
          "Dominating the East African landscape through unrivaled precision and industrial-grade innovation, 
          Vector Advert & Manufacturing PLC stands as the definitive authority in high-precision advertising 
          infrastructure. <strong>We represent the pinnacle of engineering synergy,</strong> where the raw, structural integrity of heavy architectural metal fabrication meets the sophisticated intelligence of advanced digital systems."
        </p>
      </div>
    </div>
  </div>

  

{/* FULL WIDTH VIDEO CONTAINER */}
<div 
  className="video-area-container" 
  style={{ 
    width: "100vw", 
    height:"40vw",
    position: "relative", 
    left: "50%", 
    right: "50%", 
    marginLeft: "-50vw", 
    marginRight: "-50vw",
    overflow: "hidden",
    backgroundColor: "#000" // Matches video background
  }}
>
  <div 
    className="video-scroll-track" 
    id="mainTrack"
    style={{ 
      display: "flex", 
      overflowX: "auto", 
      scrollSnapType: "x mandatory",
      scrollbarWidth: "none",  
      msOverflowStyle: "none",  
      WebkitOverflowScrolling: "touch",
      scrollBehavior: "smooth"
    }}
  >
    <style>{`
      #mainTrack::-webkit-scrollbar { display: none; }
      .video-slide { 
        min-width: 100vw; 
        flex-shrink: 0; 
        scroll-snap-align: start;
        line-height: 0; /* Removes tiny bottom gaps */
      }
      .full-video-frame {
        width: 100%;
        aspect-ratio: 16 / 9; /* Forces video to fill the width perfectly */
        border: none;
      }
    `}</style>
    
    {/* Slide 1 */}
    <div className="video-slide">
      <iframe 
        className="full-video-frame"
        src="https://www.youtube.com/embed/3667AOTOoNY?autoplay=1&mute=1&loop=1&playlist=3667AOTOoNY&controls=0&modestbranding=1" 
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      ></iframe>
    </div>

    {/* Slide 2 */}
    <div className="video-slide">
      <iframe 
        className="full-video-frame"
        src="https://www.youtube.com/embed/KYPWqoTO0vw?autoplay=1&mute=1&loop=1&playlist=KYPWqoTO0vw&controls=0&modestbranding=1" 
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      ></iframe>
    </div>
  </div>
</div>
</section>

{/* 6. SERVICES SECTION */}
      <section id="services" style={{ padding: "70px 0", backgroundColor: "#ffffff", overflow: "hidden" }}>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap');

            .services-container {
              font-family: 'Inter', sans-serif;
            }

            .marquee-viewport {
              width: 100%;
              overflow: hidden;
              padding: 10px 0;
              position: relative;
            }

            .marquee-track {
              display: flex;
              width: max-content;
              animation: marqueeScroll 60s linear infinite;
            }

            .marquee-track:hover {
              animation-play-state: paused;
            }

            @keyframes marqueeScroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }

            .service-box {
              width: 600px; 
              background: #ffffff;
              border: 1px solid #eeeeee;
              padding: 50px 50px 50px 70px;
              margin-right: 30px;
              transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1);
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              position: relative;
              min-height: 60px; 
            }

            .service-box::before {
              content: "";
              position: absolute;
              left: 0;
              top: 25%;
              width: 2px;
              height: 40%;
              background: #feeded;
              transition: all 0.4s ease;
            }

            .service-box:hover {
              border-color: #36d2d3;
              transform: translateY(-12px);
              box-shadow: 0 30px 60px rgba(0, 0, 0, 0.04);
            }

            .service-box:hover::before {
              height: 100%;
              top: 0;
              background: #36d2d3;
              width: 3px;
            }

            .service-title {
              font-weight: 600;
              font-size: 24px; 
              text-transform: uppercase;
              letter-spacing: -1.5px;
              line-height: 1.1;
              margin-bottom: 20px;
              color: #111;
            }

            .service-desc {
              color: #333;
              font-size: 18px; 
              font-weight: 600; 
              line-height: 1.4;
              margin: 0;
              letter-spacing: -0.5px;
            }

            @media (max-width: 768px) {
              .service-box { width: 335px; padding: 40px; min-height: 315px; }
              .service-desc { font-size: 19px; }
            }
          `}
        </style>

        <div className="services-container">
          <div style={{ padding: "0 8%", marginBottom: "25px" }}>
            <h2  style={{ 
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 'clamp(32px, 5vw, 56px)', 
    fontWeight: 800,
    lineHeight: 1,
    color: '#000',
    textTransform: 'uppercase',
    margin: '15px 0' 
}}>
              <span style={{ color: "#000000" }}>Our</span> 
              <span style={{ color: "#36d2d3" }}> Services</span>
            </h2>
          </div>

          <div className="marquee-viewport">
         
          </div>
        </div>
      </section>

<section>

  
<section style={{ 
  width: '100%', 
  padding: '40px 5px', 
  boxSizing: 'border-box', 
  backgroundColor: '#fff'
}}>
  {/* Import Google Fonts */}
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;700&display=swap');
  `}</style>
  
  <div style={{ 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
    gap: '4px', 
    width: '100%',
    boxSizing: 'border-box'
  }}>
    {[
      { label: "BRANDING", desc: "Strategic branding services that define your identity and create lasting impressions.", img: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772371611/brandig3_fl7wqy.png" },
      { label: "DIGITAL PRINTING", desc: "High-quality solutions that bring your designs to life with precision detail.", img: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772366385/3d_printing_bzt96r.avif" },
      { label: "CNC & LASER", desc: "Precision router and laser engraving and cutting for industrial applications.", img: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772372650/cnc_kjjx5d.png" },
      { label: "PROMOTIONAL", desc: "Custom materials designed to enhance brand visibility and leave a legacy.", img: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772368662/branding_gvm383.png" },
      { label: "3D MODELING", desc: "Where imagination meets strategy to transform your brand into a story.", img: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772371596/3d_modeling_printing_lxsxo0.png" },
      { label: "NEON SIGNAGE", desc: "Professional neon signage services to illuminate your business presence.", img: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772372902/neon_jqhts6.jpg" },
      { label: "UV PRINTING", desc: "High-performing, precise, and high-quality products using UV technology.", img: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772366369/uv_printing_mgbljb.jpg" },
      { label: "LED DISPLAYS", desc: "Advanced LED display screens for the evolving Adtech world landscape.", img: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772367236/lead_diplay_screen_yhp0q3.jpg" },
      { label: "BENDING SERVICE", desc: "Expert metal bending services for architectural and industrial needs.", img: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772444016/bending_service_ixsnqs.jpg" },
      { label: "LIGHT BOXES", desc: "Innovative light box signages that satisfy our clients and partners.", img: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772366871/LIGH_BOX_yhdymw.avif" },
      { label: "SUBLIMATION", desc: "Screen and sublimation printing with a focus on quality and reliability.", img: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772372442/screenign_mnegti.jpg" },
      { label: "PARTNERSHIP", desc: "Building lasting relationships through trust and exceptional service.", img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=900" }
    ].map((item, i) => (
      <div 
        key={i}
        style={{
          position: 'relative',
          backgroundColor: '#000',
          overflow: 'hidden',
          boxSizing: 'border-box',
          aspectRatio: '1 / 1' 
        }}
      >
        <img 
          src={item.img} 
          alt={item.label} 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', 
            display: 'block',
            opacity: '0.9' // Increased opacity to make images look brighter/clearer
          }} 
        />

        {/* Permanent Static Overlay */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '35px', 
            boxSizing: 'border-box'
          }}
        >
          {/* THE BIG TITLE */}
          <h2 style={{ 
            fontFamily: "'Space Grotesk', sans-serif", 
            fontSize: '32px', 
            fontWeight: '700', 
            margin: '0 0 10px 0', 
            color: '#fff',
            lineHeight: '1',
            letterSpacing: '-1px',
            textTransform: 'uppercase'
          }}>
            {item.label}
          </h2>

          {/* THE NORMAL TEXT */}
          <p style={{ 
            fontFamily: "'Space Grotesk', sans-serif", 
            fontSize: '15px', 
            fontWeight: '300', 
            margin: '0', 
            color: '#36d2d3', 
            lineHeight: '1.4',
            maxWidth: '100%' 
          }}>
            {item.desc}
          </p>
        </div>
      </div>
    ))}
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
    <span style={{ fontSize: '10px', letterSpacing: '4px', fontWeight: '800', color: '#888' }}>
      ENGINEED OUTPUT
    </span>
    <h2 style={{ 
      fontFamily: "'Segoe UI', sans-serif", 
      fontSize: 'clamp(32px, 5vw, 48px)', 
      fontWeight: '800', 
      lineHeight: '1.1',
      marginBottom: '20px', 
      letterSpacing: '-1px', 
      color: '#000',
      textTransform: 'uppercase'
    }}>
      our <span style={{ color: '#36d2d3' }}>Products</span>
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

      

   {/* 10. CONTACT SECTION - INDUSTRIAL STANDARD */}
      <section id="contact" style={{ padding: "120px 0", backgroundColor: "#fff", borderTop: "1px solid #eee" }}>
        <style>
          {`
            .contact-wrapper {
              max-width: 1400px;
              margin: 0 auto;
              padding: 0 8%;
              display: grid;
              grid-template-columns: 1fr 1.2fr;
              gap: 100px;
            }
            .contact-info h2 { font-size: clamp(48px, 5vw, 64px); font-weight: 900; text-transform: uppercase; line-height: 0.9; margin-bottom: 40px; color: #000; letter-spacing: -3px; }
            .contact-info h2 span { color: #36d2d3; }
            
            .contact-method { margin-bottom: 50px; }
            .method-label { font-size: 12px; font-weight: 900; color: #36d2d3; letter-spacing: 3px; text-transform: uppercase; display: block; margin-bottom: 15px; }
            
            .method-value { 
              font-size: 24px; 
              font-weight: 600; 
              color: #1a1a1a; 
              text-decoration: none; 
              transition: 0.2s; 
              letter-spacing: -0.5px;
            }

            .contact-form { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; }
            .full-width { grid-column: span 2; }
            
            .input-group { display: flex; flex-direction: column; }
            .input-group label { 
              font-size: 12px; 
              font-weight: 600; 
              margin-bottom: 12px; 
              text-transform: uppercase; 
              color: #36d2d3 
              letter-spacing: 2px; 
            }
            
            /* --- INDUSTRIAL INPUT STANDARD --- */
            .input-group input, 
            .input-group textarea { 
              padding: 15px;
              border: 1px solid #e5e7eb;
              background: #f9fafb; 
              font-size: 16px; 
              font-weight: 600;
              color: #000;
              outline: none; 
              transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
              font-family: inherit;
              border-radius: 0; 
              letter-spacing: -0.5px;
            }

            .input-group input::placeholder, 
            .input-group textarea::placeholder {
              color: #9ca3af;
              font-weight: 400;
              font-size: 18px;
            }
            
            .input-group input:focus, 
            .input-group textarea:focus { 
              border-color: #000;
              background: #fff;
              box-shadow: 0 10px 30px rgba(0,0,0,0.05);
            }
            
            .submit-btn { 
              grid-column: span 2; 
              padding: 15px;
              background: #000; 
              color: #fff; 
              border: none; 
              font-weight: 600; 
              text-transform: uppercase; 
              letter-spacing: 5px; 
              cursor: pointer; 
              transition: all 0.4s; 
              margin-top: 20px; 
              font-size: 16px;
            }
            
            .submit-btn:hover { 
              background: #36d2d3; 
              transform: translateY(-5px); 
              box-shadow: 0 20px 40px rgba(37, 99, 235, 0.2);
            }

            @media (max-width: 1024px) {
              .contact-wrapper { grid-template-columns: 1fr; gap: 60px; }
              .contact-form { grid-template-columns: 1fr; }
              .full-width, .submit-btn { grid-column: span 1; }
            }
          `}
        </style>

        <div className="contact-wrapper">
          <div className="contact-info">
            <h2 style={{ 
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 'clamp(32px, 5vw, 56px)', 
    fontWeight: 800,
    lineHeight: 1,
    color: '#000',
    textTransform: 'uppercase',
    margin: '15px 0' 
}}>Get in <span>Touch</span></h2>
            <p  style={{ color: '#444', marginBottom: '25px', lineHeight: '1.7', fontSize: '16px', maxWidth: '90%' }}>
              Partner with Vector Advert & Manufacturing PLC for precision engineering and large-scale industrial solutions.
            </p>
            
            <div className="contact-method">
              <span className="method-label">Direct Line</span>
              <a href="tel:+251911000000" className="method-value">+251 911 00 00 00</a>
            </div>
            
            <div className="contact-method">
              <span className="method-label">Email</span>
              <a href="mailto:info@vectorplc.com" className="method-value">info@vectorplc.com</a>
            </div>
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
              <label>Identity</label>
              <input type="text" placeholder="SAMUEL AYELE" required />
            </div>
            <div className="input-group">
              <label>Organization</label>
              <input type="text" placeholder="COMPANY NAME" />
            </div>
            <div className="input-group full-width">
              <label>Corporate Email</label>
              <input type="email" placeholder="NAME@COMPANY.COM" required />
            </div>
            <div className="input-group full-width">
              <label>Project Details</label>
              <textarea rows="5" placeholder="DESCRIBE YOUR INDUSTRIAL REQUIREMENTS..."></textarea>
            </div>
            <button type="submit" className="submit-btn">Send</button>
          </form>
        </div>
      </section>

{/* 9. CONTACT CONNECT */}
<section className="ghost-unit" id="contact" style={{ background: "#0a0a0a", padding: "100px 5%", margin: "60px -5%", borderBottom: "none" }}>
  <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
    <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800, lineHeight: 1.1, color: "#fff", textTransform: "uppercase", marginBottom: "40px" }}>
      Connect <span style={{ color: "#36d2d3" }}>With Us</span>
    </h2>
    <div style={{ display: "flex", gap: "40px", flexWrap: "wrap", justifyContent: "flex-start" }}>
      <div style={{ flex: "1", minWidth: "280px", padding: "30px", border: "1px solid #1e293b", borderRadius: "2px" }}>
        <div style={{ marginBottom: "15px" }}><FaPhoneAlt size={24} color="#36d2d3" /></div>
        <span style={{ display: "block", fontSize: "12px", fontWeight: "800", color: "#64748b", letterSpacing: "2px", marginBottom: "10px", fontFamily: "'Inter', sans-serif" }}>DIRECT LINE</span>
        <div style={{ fontSize: "22px", fontWeight: "900", color: "#36d2d3", fontFamily: "'Space Grotesk', sans-serif" }}>+251 911 000 000</div>
      </div>
      <div style={{ flex: "1", minWidth: "280px", padding: "30px", border: "1px solid #1e293b", borderRadius: "2px" }}>
        <div style={{ marginBottom: "15px" }}><FaEnvelope size={24} color="#36d2d3" /></div>
        <span style={{ display: "block", fontSize: "12px", fontWeight: "800", color: "#64748b", letterSpacing: "2px", marginBottom: "10px", fontFamily: "'Inter', sans-serif" }}>OFFICIAL INQUIRIES</span>
        <div style={{ fontSize: "22px", fontWeight: "900", color: "#36d2d3", fontFamily: "'Space Grotesk', sans-serif" }}>INFO@VECTORADTECH.COM</div>
      </div>
    </div>
  </div>
</section>
      

      

       
      
    </div>
  );
};

export default Home;