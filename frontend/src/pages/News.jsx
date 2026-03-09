import React, { useState } from "react";

const News = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Industrial", "Tech", "Manufacturing", "Vector PLC", "Engineering", "Digital", "Market"];

  const newsCards = [
    { id: "oKDlfJKZfBc", title: "Automatic machine for production process #automation #tech", author: "makinerz", views: "13M views", time: "2024" },
    { id: "ZyOcG3e0HFw", title: "Chinese companies to develop new industrial park in Ethiopia", author: "New China TV", views: "1.2K views", time: "2022" },
    { id: "W--UL9C2044", title: "Smokeless barbecue charcoal briquette making machine", author: "Seven Ling Heng", views: "423K views", time: "2018" },
    { id: "fMme7B8KwWw", title: "How Bricks Are Made in Small-Scale Industry", author: "Innoforge Studio", views: "301K views", time: "2025" },
    { id: "oKDlfJKZfBc", title: "Automatic machine for production process #automation #tech", author: "makinerz", views: "13M views", time: "2024" },
    { id: "ZyOcG3e0HFw", title: "Chinese companies to develop new industrial park in Ethiopia", author: "New China TV", views: "1.2K views", time: "2022" },
    { id: "W--UL9C2044", title: "Smokeless barbecue charcoal briquette making machine", author: "Seven Ling Heng", views: "423K views", time: "2018" },
    { id: "fMme7B8KwWw", title: "How Bricks Are Made in Small-Scale Industry", author: "Innoforge Studio", views: "301K views", time: "2025" },
    { id: "oKDlfJKZfBc", title: "Automatic machine for production process #automation #tech", author: "makinerz", views: "13M views", time: "2024" },
    { id: "ZyOcG3e0HFw", title: "Chinese companies to develop new industrial park in Ethiopia", author: "New China TV", views: "1.2K views", time: "2022" },
    { id: "W--UL9C2044", title: "Smokeless barbecue charcoal briquette making machine", author: "Seven Ling Heng", views: "423K views", time: "2018" },
    { id: "fMme7B8KwWw", title: "How Bricks Are Made in Small-Scale Industry", author: "Innoforge Studio", views: "301K views", time: "2025" },
    { id: "oKDlfJKZfBc", title: "Automatic machine for production process #automation #tech", author: "makinerz", views: "13M views", time: "2024" },
    { id: "ZyOcG3e0HFw", title: "Chinese companies to develop new industrial park in Ethiopia", author: "New China TV", views: "1.2K views", time: "2022" },
    { id: "W--UL9C2044", title: "Smokeless barbecue charcoal briquette making machine", author: "Seven Ling Heng", views: "423K views", time: "2018" },
    { id: "fMme7B8KwWw", title: "How Bricks Are Made in Small-Scale Industry", author: "Innoforge Studio", views: "301K views", time: "2025" }
  ];

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Filter logic for search bar
  const filteredNews = newsCards.filter(news => 
    news.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: "#ffffff", color: "#0f0f0f", minHeight: "100vh", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <style>
        {`
          .yt-sidebar-item { display: flex; align-items: center; gap: 20px; padding: 12px 20px; border-radius: 10px; cursor: pointer; transition: 0.2s; color: #0f0f0f; font-weight: 500; }
          .yt-sidebar-item:hover { background: #f2f2f2; }
          .yt-category-pill { padding: 6px 12px; background: #f2f2f2; border-radius: 8px; font-size: 14px; font-weight: 600; cursor: pointer; white-space: nowrap; color: #0f0f0f; border: 1px solid transparent; }
          .yt-category-pill.active { background: #0f0f0f; color: #fff; }
          .video-container { width: 100%; aspect-ratio: 16/9; border-radius: 12px; overflow: hidden; background: #000; position: relative; }
          .yt-iframe { width: 100%; height: 100%; border: none; }
          .action-btn { display: flex; align-items: center; gap: 6px; padding: 6px 12px; background: #f2f2f2; border-radius: 20px; font-size: 12px; font-weight: 600; cursor: pointer; border: none; transition: 0.2s; }
          .action-btn:hover { background: #e5e5e5; }
          .hamburger-btn { font-size: 24px; cursor: pointer; padding: 8px; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: 0.2s; width: 40px; height: 40px; }
          .hamburger-btn:hover { background: #f2f2f2; }
          
          .search-container {
            display: flex;
            align-items: center;
            flex: 0 1 600px;
            margin: 0 40px;
            position: relative;
          }
          .search-input {
            width: 100%;
            padding: 10px 20px;
            border: 1px solid #ccc;
            border-radius: 40px 0 0 40px;
            font-size: 16px;
            outline: none;
          }
          .search-input:focus { border-color: #36d2d3; }
          .search-btn {
            padding: 10px 20px;
            background: #f8f8f8;
            border: 1px solid #ccc;
            border-left: none;
            border-radius: 0 40px 40px 0;
            cursor: pointer;
          }
          .search-btn:hover { background: #f0f0f0; }
        `}
      </style>

      {/* SUB-HEADER WITH SEARCH */}
      <div style={{ 
        position: "fixed", top: "80px", left: 0, width: "100%", height: "64px", 
        background: "#fff", display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 24px", zIndex: 101, borderBottom: "1px solid #f2f2f2" 
      }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* Sidebar toggle button updates from ☰ to ✕ */}
          <div className="hamburger-btn" onClick={toggleSidebar}>
            {isSidebarOpen ? "✕" : "☰"}
          </div>
          <div style={{ marginLeft: "20px", fontWeight: "900", fontSize: "20px", letterSpacing: "-0.5px" }}>
            <span style={{ color: "#36d2d3" }}>VECTOR</span>&nbsp;NEWS
          </div>
        </div>

        {/* SEARCH BAR */}
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search news..." 
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button style={{background:"#36d2d3"}} className="search-btn">🔍</button>
        </div>

        <div style={{ width: "40px" }}>{/* Spacer for symmetry */}</div>
      </div>

      <div style={{ display: "flex", paddingTop: "50px" }}>
        {/* SIDEBAR */}
        <aside style={{ 
          width: isSidebarOpen ? "240px" : "0px", 
          opacity: isSidebarOpen ? 1 : 0,
          visibility: isSidebarOpen ? "visible" : "hidden",
          height: "calc(100vh - 144px)", 
          position: "fixed", padding: isSidebarOpen ? "12px" : "0px", 
          overflowX: "hidden", overflowY: "auto", background: "#fff", 
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          borderRight: isSidebarOpen ? "1px solid #f2f2f2" : "none", zIndex: 100
        }}>
          <div className="yt-sidebar-item" style={{ background: "#f2f2f2" }}>📰 Articles</div>
          <div className="yt-sidebar-item">📽️ Blogs</div>
          <div className="yt-sidebar-item">📅 Events</div>
          <hr style={{ border: "none", borderTop: "1px solid #f2f2f2", margin: "12px 0" }} />
          <div className="yt-sidebar-item">🏖️ Holidays</div>
          <div className="yt-sidebar-item">📂 Playlists</div>
        </aside>

        {/* MAIN CONTENT */}
        <main style={{ 
          marginLeft: isSidebarOpen ? "240px" : "0px", 
          width: "100%", padding: "24px", background: "#fff", 
          transition: "margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1)" 
        }}>
          <div style={{ display: "flex", gap: "12px", marginBottom: "30px", overflowX: "auto", paddingBottom: "8px" }}>
            {categories.map((cat) => (
              <div key={cat} className={`yt-category-pill ${activeCategory === cat ? "active" : ""}`} onClick={() => setActiveCategory(cat)}>
                {cat}
              </div>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "30px" }}>
            {filteredNews.map((news) => (
              <div key={news.id} className="yt-card">
                <div className="video-container">
                  <iframe className="yt-iframe" src={`https://www.youtube.com/embed/${news.id}?autoplay=0&mute=1&controls=1`} title={news.title} allowFullScreen />
                </div>
                <div style={{ display: "flex", gap: "12px", marginTop: "12px" }}>
                  <div style={{ minWidth: "36px", height: "36px", background: "#36d2d3", borderRadius: "50%", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>
                    {news.author.charAt(0)}
                  </div>
                  <div style={{ flexGrow: 1 }}>
                    <h3 style={{ fontSize: "14px", fontWeight: "700", margin: "0 0 4px 0", color: "#0f0f0f", lineHeight: "1.4" }}>{news.title}</h3>
                    <p style={{ fontSize: "12px", color: "#606060", margin: 0 }}>{news.author}</p>
                    <p style={{ fontSize: "12px", color: "#606060", margin: "0 0 12px 0" }}>{news.views} • {news.time}</p>
                    <div style={{ display: "flex", gap: "8px" }}>
                      <button className="action-btn">⬇️ Download</button>
                      <button className="action-btn">➕ Save</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default News;