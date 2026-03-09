import React, { useState, useEffect } from "react";
import { 
  FaSearch, 
  FaShieldAlt, 
  FaShoppingCart, 
  FaEye, 
  FaStar, 
  FaStarHalfAlt, 
  FaRegStar, 
  FaTimes, 
  FaBullhorn, 
  FaArrowRight, 
  FaMagic, 
  FaTools, 
  FaLightbulb, 
  FaTruck, 
  FaChevronLeft, 
  FaChevronRight 
} from "react-icons/fa";

// --- DATA CONSTANTS ---
const MOCK_DATA = [
  { id: 1, category: "Signage", product_name: "3D Acrylic Channel Letters", rating: 4.8, reviews: 124, description: "Preci" },
  { id: 2, category: "Modeling", product_name: "3D Architectural Models", rating: 4.5, reviews: 89, description: "Scale physical models using 3D printing and laser cutting.", price_per_unit: "35,000", unit: "Project", primary_image_url: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772174011/cooker2_o65reo.avif" },
  { id: 3, category: "Printing", product_name: "Industrial 3D Printing", rating: 4.9, reviews: 210, description: "Rapid prototyping and small-batch production using high-strength polymers.", price_per_unit: "2,800", unit: "Unit", primary_image_url: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772173998/watch2_tqxqmd.avif" },
  { id: 4, category: "CNC", product_name: "CNC Router Cutting", rating: 4.2, reviews: 45, description: "Precision CNC cutting for wood, acrylic, and Alucobond.", price_per_unit: "1,200", unit: "Hr", primary_image_url: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772174304/book2_kbanmk.jpg" },
  { id: 5, category: "Printing", product_name: "UV Flatbed Printing", rating: 4.7, reviews: 67, description: "High-resolution UV printing on rigid surfaces like glass and metal.", price_per_unit: "4,500", unit: "Sqm", primary_image_url: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772174284/ishirt_xwiglp.avif" },
  { id: 6, category: "Signage", product_name: "Pylon Signage", rating: 4.6, reviews: 32, description: "Large scale outdoor directional signages. Engineered for stability.", price_per_unit: "85,000", unit: "Pcs", primary_image_url: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772174316/book3_jwy7ub.jpg" },
    { id: 1, category: "Signage", product_name: "3D Acrylic Channel Letters", rating: 4.8, reviews: 124, description: "Precision-engineered 3D branding with internal LED illumination.", price_per_unit: "14,500", unit: "Sqm", primary_image_url: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772173247/watch_f8dfx5.jpg" },
  { id: 2, category: "Modeling", product_name: "3D Architectural Models", rating: 4.5, reviews: 89, description: "Scale physical models using 3D printing and laser cutting.", price_per_unit: "35,000", unit: "Project", primary_image_url: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772174011/cooker2_o65reo.avif" },
  { id: 3, category: "Printing", product_name: "Industrial 3D Printing", rating: 4.9, reviews: 210, description: "Rapid prototyping and small-batch production using high-strength polymers.", price_per_unit: "2,800", unit: "Unit", primary_image_url: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772173998/watch2_tqxqmd.avif" },
  { id: 4, category: "CNC", product_name: "CNC Router Cutting", rating: 4.2, reviews: 45, description: "Precision CNC cutting for wood, acrylic, and Alucobond.", price_per_unit: "1,200", unit: "Hr", primary_image_url: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772174304/book2_kbanmk.jpg" },
  { id: 5, category: "Printing", product_name: "UV Flatbed Printing", rating: 4.7, reviews: 67, description: "High-resolution UV printing on rigid surfaces like glass and metal.", price_per_unit: "4,500", unit: "Sqm", primary_image_url: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772174284/ishirt_xwiglp.avif" },
  { id: 6, category: "Signage", product_name: "Pylon Signage", rating: 4.6, reviews: 32, description: "Large scale outdoor directional signages. Engineered for stability.", price_per_unit: "85,000", unit: "Pcs", primary_image_url: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772174316/book3_jwy7ub.jpg" },
    { id: 1, category: "Signage", product_name: "3D Acrylic Channel Letters", rating: 4.8, reviews: 124, description: "Precision-engineered 3D branding with internal LED illumination.", price_per_unit: "14,500", unit: "Sqm", primary_image_url: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772173247/watch_f8dfx5.jpg" },
  { id: 2, category: "Modeling", product_name: "3D Architectural Models", rating: 4.5, reviews: 89, description: "Scale physical models using 3D printing and laser cutting.", price_per_unit: "35,000", unit: "Project", primary_image_url: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772174011/cooker2_o65reo.avif" },
  { id: 3, category: "Printing", product_name: "Industrial 3D Printing", rating: 4.9, reviews: 210, description: "Rapid prototyping and small-batch production using high-strength polymers.", price_per_unit: "2,800", unit: "Unit", primary_image_url: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772173998/watch2_tqxqmd.avif" },
  { id: 4, category: "CNC", product_name: "CNC Router Cutting", rating: 4.2, reviews: 45, description: "Precision CNC cutting for wood, acrylic, and Alucobond.", price_per_unit: "1,200", unit: "Hr", primary_image_url: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772174304/book2_kbanmk.jpg" },
  { id: 5, category: "Printing", product_name: "UV Flatbed Printing", rating: 4.7, reviews: 67, description: "High-resolution UV printing on rigid surfaces like glass and metal.", price_per_unit: "4,500", unit: "Sqm", primary_image_url: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772174284/ishirt_xwiglp.avif" },
  { id: 6, category: "Signage", product_name: "Pylon Signage", rating: 4.6, reviews: 32, description: "Large scale outdoor directional signages. Engineered for stability.", price_per_unit: "85,000", unit: "Pcs", primary_image_url: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772174316/book3_jwy7ub.jpg" },
    { id: 1, category: "Signage", product_name: "3D Acrylic Channel Letters", rating: 4.8, reviews: 124, description: "Precision-engineered 3D branding with internal LED illumination.", price_per_unit: "14,500", unit: "Sqm", primary_image_url: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772173247/watch_f8dfx5.jpg" },
  { id: 2, category: "Modeling", product_name: "3D Architectural Models", rating: 4.5, reviews: 89, description: "Scale physical models using 3D printing and laser cutting.", price_per_unit: "35,000", unit: "Project", primary_image_url: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772174011/cooker2_o65reo.avif" },
  { id: 3, category: "Printing", product_name: "Industrial 3D Printing", rating: 4.9, reviews: 210, description: "Rapid prototyping and small-batch production using high-strength polymers.", price_per_unit: "2,800", unit: "Unit", primary_image_url: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772173998/watch2_tqxqmd.avif" },
  { id: 4, category: "CNC", product_name: "CNC Router Cutting", rating: 4.2, reviews: 45, description: "Precision CNC cutting for wood, acrylic, and Alucobond.", price_per_unit: "1,200", unit: "Hr", primary_image_url: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772174304/book2_kbanmk.jpg" },
  { id: 5, category: "Printing", product_name: "UV Flatbed Printing", rating: 4.7, reviews: 67, description: "High-resolution UV printing on rigid surfaces like glass and metal.", price_per_unit: "4,500", unit: "Sqm", primary_image_url: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772174284/ishirt_xwiglp.avif" },
  { id: 6, category: "Signage", product_name: "Pylon Signage", rating: 4.6, reviews: 32, description: "Large scale outdoor directional signages. Engineered for stability.", price_per_unit: "85,000", unit: "Pcs", primary_image_url: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772174316/book3_jwy7ub.jpg" },
];

const CATEGORIES = ["All", "Signage", "Printing", "Modeling", "CNC", "Laser Cutting", "Indoor Ads", "Outdoor Signs", "Exhibition Stands", "Vehicle Branding", "Light Boxes", "Vinyl Graphics", "Metal Fabrication", "Digital Signage", "Wayfinding", "Point of Sale"];

const PROMOTIONS = [
  { id: 0, title: "Exclusive Deal", highlight: "3D Solutions", desc: "Get a free quote for your next signage project.", icon: <FaBullhorn size={22} />, color: "#ff6600", img: "https://images.pexels.com/photos/1569076/pexels-photo-1569076.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: 1, title: "New Technology", highlight: "Laser Cutting", desc: "Precise cuts for any material with our new engravers.", icon: <FaMagic size={22} />, color: "#36d2d3 ", img: "https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: 2, title: "Design Support", highlight: "Expert Consultation", desc: "1 hour free consultation with pylon signage orders.", icon: <FaTools size={22} />, color: "#2ecc71", img: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=400" }
];

const RatingStars = ({ rating, reviews }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) stars.push(<FaStar key={i} color="#ff6600" />);
    else if (i - 0.5 <= rating) stars.push(<FaStarHalfAlt key={i} color="#f1942a" />);
    else stars.push(<FaRegStar key={i} color="#ddd" />);
  }
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "8px" }}>
      <div style={{ display: "flex", fontSize: "18px" }}>{stars}</div>
      <span style={{ fontSize: "16px", color: "#36d2d3 ", marginLeft: "6px", fontWeight: "600" }}>
        {rating} <span style={{ fontWeight: "400", color: "#565959" }}>({reviews})</span>
      </span>
    </div>
  );
};

const Skill = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCat, setActiveCat] = useState("All");
  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const [showAd, setShowAd] = useState(false);
  const [isSessionBlocked, setIsSessionBlocked] = useState(false);



  const [current, setCurrent] = useState(0);

  const HERO_SLIDES = [

    { id: 1, title: "Precision 3D Signage", subtitle: "Premium Acrylic & LED Solutions", description: "Elevate your brand with high-impact 3D channel letters.", image: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772174011/cooker2_o65reo.avif", bg: "linear-gradient(135deg, rgb(251, 16, 181) 0%, #f4f4f3 100%)", cta: "Request Quote" },
        { id: 5, title: "Laser Engraving Tech", subtitle: "Micro-Precision Output", description: "Intricate engraving for industrial parts and models.", image: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772183308/ardino3_rwatp6.avif", bg: "linear-gradient(135deg, #95efff 0%, #f39090 100%)", cta: "Get Started" },

    { id: 2, title: "Industrial CNC Cutting", subtitle: "Precision Meets Scale", description: "High-speed CNC routing for Alucobond and metal.", image: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772183430/cameravec_h3sqmd.avif", bg: "linear-gradient(135deg, #113ef3 0%, #5da3ff 100%)", cta: "Explore Services" },
    { id: 3, title: "UV Flatbed Printing", subtitle: "Direct-to-Substrate", description: "Vibrant, durable printing on glass and rigid boards.", image: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772174284/ishirt_xwiglp.avif", bg: "linear-gradient(135deg, #0c5b4b 0%, #e69cc7 100%)", cta: "View Gallery" },
        { id: 2, title: "Industrial CNC Cutting", subtitle: "Precision Meets Scale", description: "High-speed CNC routing for Alucobond and metal.", image: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772183430/cameravec_h3sqmd.avif", bg: "linear-gradient(135deg, #113ef3 0%, #5da3ff 100%)", cta: "Explore Services" },

    { id: 4, title: "Pylon & Outdoor Signs", subtitle: "Large Scale Branding", description: "Heavy-duty outdoor signage engineered for stability.", image: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772173998/watch2_tqxqmd.avif", bg: "linear-gradient(135deg, #99b6da 0%, #b3fdbb 100%)", cta: "Consult Expert" },
    { id: 5, title: "Laser Engraving Tech", subtitle: "Micro-Precision Output", description: "Intricate engraving for industrial parts and models.", image: "https://res.cloudinary.com/dq3jkpys8/image/upload/v1772174316/book3_jwy7ub.jpg", bg: "linear-gradient(135deg, #b79595 0%, #f39090 100%)", cta: "Get Started" }
  ];

  // Auto-play: Move to next slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  // Show ad after 2 seconds unless blocked this session
  useEffect(() => {
    if (isSessionBlocked) return;
    const initialTimer = setTimeout(() => setShowAd(true), 10000);
    return () => clearTimeout(initialTimer);
  }, [isSessionBlocked]);

  // Cycle Logic
  useEffect(() => {
    if (!showAd || isSessionBlocked) return;
    const hideTimer = setTimeout(() => {
      handleCloseAd();
    }, 10000);
    return () => clearTimeout(hideTimer);
  }, [showAd, currentAdIndex, isSessionBlocked]);

  const handleCloseAd = () => {
    setShowAd(false);
    if (!isSessionBlocked) {
      setTimeout(() => {
        setCurrentAdIndex((prev) => (prev + 1) % PROMOTIONS.length);
        setShowAd(true);
      }, 10000);
    }
  };

  const neverSeeAdsThisSession = () => {
    setIsSessionBlocked(true);
    setShowAd(false);
  };

  const currentPromo = PROMOTIONS[currentAdIndex];
  const filtered = MOCK_DATA.filter(p => {
    const matchesSearch = p.product_name?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = activeCat === "All" || p.category === activeCat;
    return matchesSearch && matchesCat;
  });

  return (
    <div style={{ width: "100vw", minHeight: "100vh", backgroundColor: "#ffffff", position: "relative", overflowX: "hidden" }}>
      <style>{`
        body, html { margin: 0; padding: 0; overflow-x: hidden; background: #ffffff !important; font-family: 'Segoe UI', Roboto, sans-serif; }
        .amazon-header { background-color: #000000; padding: 14px 20px; display: flex; align-items: center; gap: 30px; position: sticky; top: 0; z-index: 1001; }
        .search-container-amazon { display: flex; flex: 1; max-width: 703px; height: 48px; border-radius: 8px; overflow: hidden; background-color: #ffffff; border: 1px solid #ddd; }
        .search-input-amazon { flex: 1; border: none; padding: 0 18px; outline: none; font-size: 16px; color: #111; }
        .search-button-amazon { background: linear-gradient(135deg, #36d2d3 0%, #36d2d3 100%); border: none; width: 65px; display: flex; justify-content: center; align-items: center; cursor: pointer; color: #fff; }
        .full-edge-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(287px, 1fr)); gap: 37px; width: 100%; padding: 40px 20px; box-sizing: border-box; }
        .alibaba-card { background: #ffffff; display: flex; flex-direction: column; width: 100%; position: relative; cursor: pointer; transition: transform 0.3s ease; border-bottom: 3px solid transparent; }
        .alibaba-card:hover { transform: translateY(-5px); border-bottom: 3px solid #36d2d3; }
        .image-container { aspect-ratio: 1/1; width: 100%; position: relative; background: #ffffff; border: 4px solid #ffffff; border-radius: 20px; box-sizing: border-box; padding: 20px; display: flex; justify-content: center; align-items: center; overflow: hidden; }
        .product-img { width: 100%; height: 100%; object-fit: cover; border-radius: 6px; }
        .card-btn { width: 100%; padding: 14px; border-radius: 8px; font-size: 15px; cursor: pointer; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 10px; transition: all 0.2s ease; box-sizing: border-box; }
        .buy-now-btn { background: linear-gradient(135deg, #36d2d3 0%, #36d2d3 100%); border: none; color: #ffffff; margin-bottom: 10px; }
        .details-btn { background: #ffffff; border: 1.5px solid #ddd; color: #333; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        .ad-drawer {
          position: fixed; top: 0; right: 0; height: 100vh; width: 350px;
          background: #ffffff; z-index: 100000; box-shadow: -10px 0 40px rgba(0,0,0,0.15);
          transition: transform 0.8s cubic-bezier(0.65, 0, 0.35, 1);
          padding: 50px 30px; display: flex; flex-direction: column; box-sizing: border-box;
          border-left: 1px solid #eee;
        }
        .ad-drawer.hidden { transform: translateX(105%); }
      `}</style>
      

      
      {/* AD DRAWER */}
      <div className={`ad-drawer ${showAd ? "" : "hidden"}`}>
        <div style={{ position: "absolute", top: "25px", left: "25px", display: "flex", gap: "10px", alignItems: "center" }}>
          <button 
            onClick={handleCloseAd}
            style={{ border: "none", background: "#f0f2f2", padding: "10px", borderRadius: "50%", cursor: "pointer", display: "flex", alignItems: "center" }}
          >
            <FaTimes size={18} />
          </button>
          
          <button 
            onClick={neverSeeAdsThisSession}
            style={{ border: "none", background: "#f0f2f2", padding: "8px 12px", borderRadius: "20px", cursor: "pointer", fontSize: "11px", fontWeight: "900", color: "#e74c3c" }}
          >
            NEVER SEE ADS
          </button>
        </div>
        
        {currentPromo && (
          <div style={{ marginTop: "30px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", color: currentPromo.color, marginBottom: "15px" }}>
              {currentPromo.icon}
              <span style={{ fontWeight: "900", fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px" }}>{currentPromo.title}</span>
            </div>
            
            <h2 style={{ fontSize: "28px", fontWeight: "900", margin: "0 0 15px 0", color: "#111" }}>
              Vector Ads <br/><span style={{ color: currentPromo.color }}>{currentPromo.highlight}</span>
            </h2>
            
            <div style={{ width: "100%", height: "200px", background: "#f8f8f8", borderRadius: "15px", marginBottom: "20px", overflow: "hidden" }}>
               <img src={currentPromo.img} alt="Promotion" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            
            <p style={{ fontSize: "15px", color: "#444", lineHeight: "1.6", marginBottom: "25px" }}>
              {currentPromo.desc}
            </p>
            
            <button className="card-btn" style={{ padding: "18px", background: currentPromo.color, color: "#fff", border: "none" }}>
              Claim Offer Now <FaArrowRight />
            </button>
          </div>
        )}
      </div>

      {/* HEADER */}
      <div className="amazon-header">
        <div style={{ fontSize: "26px", fontWeight: "900", color: "#fff" }}>VECTOR <span style={{ color: "#36d2d3" }}>ADS</span></div>
        <div style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
          <div className="search-container-amazon">
            <input type="text" className="search-input-amazon" placeholder="Search..." onChange={(e) => setSearchTerm(e.target.value)} />
            <button className="search-button-amazon"><FaSearch size={18} /></button>
          </div>
        </div>
      </div>

      {/* CATEGORY BAR */}
      <div className="hide-scrollbar" style={{ backgroundColor: "#232f3e", padding: "12px 20px", display: "flex", gap: "28px", overflowX: "auto", whiteSpace: "nowrap", position: "sticky", top: "76px", zIndex: 1000 }}>
        {CATEGORIES.map((cat) => (
          <span key={cat} onClick={() => setActiveCat(cat)} style={{ color: activeCat === cat ? "#36d2d3" : "#ffffff", fontSize: "13px", fontWeight: "bold", cursor: "pointer", textTransform: "uppercase" }}>{cat}</span>
        ))}
      </div>
      
<section style={{ 
  position: 'relative', 
  width: '100%', 
  height: '300px', 
  overflow: 'hidden', 
  background: HERO_SLIDES[current].bg,
  transition: 'background 0.8s ease-in-out',
  filter: 'brightness(1)' 
}}>
  
  {/* Navigation Buttons */}
  <button 
    onClick={prevSlide} 
    style={{ 
      position: 'absolute', left: 0, top: 0, bottom: 0, width: '60px', 
      background: 'transparent', border: 'none', color: 'white', 
      cursor: 'pointer', zIndex: 100, display: 'flex', 
      alignItems: 'center', justifyContent: 'center' 
    }}
  >
    <FaChevronLeft size={35} style={{ opacity: 0.8 }} />
  </button>
  
  <button 
    onClick={nextSlide} 
    style={{ 
      position: 'absolute', right: 0, top: 0, bottom: 0, width: '60px', 
      background: 'transparent', border: 'none', color: 'white', 
      cursor: 'pointer', zIndex: 100, display: 'flex', 
      alignItems: 'center', justifyContent: 'center' 
    }}
  >
    <FaChevronRight size={35} style={{ opacity: 0.8 }} />
  </button>

  {/* Sliding Track */}
  <div style={{ 
    display: 'flex', 
    width: '100%', 
    height: '100%', 
    transform: `translateX(-${current * 100}%)`, 
    transition: 'transform 0.8s cubic-bezier(0.7, 0, 0.3, 1)' 
  }}>
    {HERO_SLIDES.map((slide) => (
      <div key={slide.id} style={{ 
        minWidth: '100%', 
        height: '100%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        padding: '0 0 0 10%', // Removed right padding to let image hit the edge
        boxSizing: 'border-box' 
      }}>
        
        {/* LEFT: TEXT BLOCK */}
        <div style={{ 
          flex: 1.2, 
          maxWidth: '550px', 
          color: '#fff', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'flex-start',
          textAlign: 'left',
          zIndex: 2 // Keeps text above image if they overlap
        }}>
          <h1 style={{ 
            fontSize: '40px', 
            fontWeight: '900', 
            margin: '0 0 10px 0', 
            lineHeight: '1',
            textTransform: 'uppercase',
            textShadow: '0px 4px 20px rgba(0,0,0,0.4)'
          }}>
            {slide.title}
          </h1>
          
          <p style={{ 
            fontSize: '19px', 
            color: '#ffffff', 
            margin: '0 0 20px 0', 
            lineHeight: '1.4',
            fontWeight: '400',
            opacity: 0.9
          }}>
            {slide.description}
          </p>

          <h2 style={{ 
            fontSize: '28px', 
            margin: '0 0 25px 0', 
            fontWeight: '800',
            color: '#36d2d3',
            textShadow: '0 0 15px rgba(54, 210, 211, 0.6)'
          }}>
            Price: 2000 ETB
          </h2>

          <button style={{ 
            background: '#ffffff', 
            color: '#000000', 
            border: 'none', 
            padding: '15px 40px', 
            fontWeight: '900', 
            cursor: 'pointer', 
            borderRadius: '2px', 
            textTransform: 'uppercase',
            boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
            transition: '0.2s'
          }}>
            View Detail
          </button>
        </div>

        {/* RIGHT: IMAGE POSITIONED AT FAR RIGHT END */}
        <div style={{ 
          flex: 1, 
          height: '100%', 
          display: 'flex', 
          justifyContent: 'flex-end', 
          alignItems: 'center',
          overflow: 'hidden' 
        }}>
          <img 
            src={slide.image} 
            alt={slide.title} 
            style={{ 
              height: '100%', 
              width: 'auto',
              maxWidth: 'none', // Allows image to maintain size
              objectFit: 'contain',
              objectPosition: 'right', // Pins the content to the right
              filter: 'brightness(1.2) contrast(1.1) drop-shadow(0 0 20px rgba(255,255,255,0.2))',
              /* Linear gradient fades out the left side of image, keeping right side crisp */
              WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
              maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
              mixBlendMode: 'screen'
            }} 
          />
        </div>
      </div>
    ))}
  </div>
</section>
      {/* PRODUCT GRID */}
      <div className="full-edge-grid">
        {filtered.map((item) => (
          <div key={item.id} className="alibaba-card">
            <div className="image-container">
              <div className="verified-badge" style={{ position: "absolute", top: "20px", left: "20px", background: "#36d2d3", color: "#fff", padding: "4px 8px", fontSize: "10px", borderRadius: "3px" }}><FaShieldAlt size={10} /> VERIFIED</div>
              <img src={item.primary_image_url} alt={item.product_name} className="product-img" />
            </div>
            <div style={{ padding: "15px 10px" }}>
              <h2 style={{ fontSize: "18px", fontWeight: "700", margin: "0 0 5px 0" }}>{item.product_name}</h2>
              
              {/* DESCRIPTION TEXT */}
              <p style={{ fontSize: "14px", color: "#666", minHeight: "40px", margin: "0 0 10px 0", lineHeight: "1.4" }}>
                {item.description}
              </p>

              <div style={{ display: "flex", alignItems: "baseline", gap: "5px" }}>
                <span style={{ fontSize: "20px", fontWeight: "800", color: "#36d2d3" }}>ETB {item.price_per_unit}</span>
                <span style={{ fontSize: "12px", color: "#565959" }}>/{item.unit}</span>
              </div>
              <RatingStars rating={item.rating} reviews={item.reviews} />
              <div style={{ marginTop: "20px" }}>
                <button className="card-btn buy-now-btn">Request Quote</button>
                <button className="card-btn details-btn">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;