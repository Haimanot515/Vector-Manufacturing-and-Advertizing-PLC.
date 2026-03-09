import React, { useState, useEffect } from "react";
import { useLocation, Routes, Route, Navigate } from "react-router-dom";

// Components & Pages
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About"; 
import Skill from "./pages/Skill";
import Testimonials from "./pages/Testimonials"; 
import LandingPage from "./pages/LandingPage";
import CV from "./pages/Cv";
import News from "./pages/News"; 
import Help from "./pages/Help"; 

// AUTH PAGES
import Login from "./pages/Login"; 
import Form from "./pages/registration/Form"; 
import Verify from "./pages/registration/Verify"; 

/* ADMIN */
import AdminNavbar from "./components/AdminNavbar";
import AdminUser from "./pages/admin/AdminUser";
import AdminProject from "./pages/admin/AdminProject";
import AdminMessages from "./pages/admin/AdminContacts/AdminMessage";
import AdminAbout from "./pages/admin/AdminAbout";
import AdminSkills from "./pages/admin/AdminSkills"; 
import AdminLanding from "./pages/admin/AdminLanding"; 
import AdminHomeHero from "./pages/admin/AdminHomeHero"; 
import AdminCVManager from "./pages/admin/AdminCVManager"; 

import "./styles.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const { pathname } = useLocation();
  
  const isLandingPage = pathname === "/";
  const isAuthPage = pathname === "/login" || pathname === "/register" || pathname === "/verify";
  const isAdminPage = pathname.startsWith("/admin");

  // showUI logic
  const showUI = loggedIn && !isLandingPage && !isAuthPage && !isAdminPage;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        const adminFlag = payload.isAdmin === true || payload.isAdmin === "true";
        setIsAdmin(adminFlag);
        setLoggedIn(true);
      } catch (err) {
        console.error("Token validation failed", err);
        localStorage.removeItem("token");
        setIsAdmin(false);
        setLoggedIn(false);
      }
    } else {
      setIsAdmin(false);
      setLoggedIn(false);
    }
  }, []);

  if (loggedIn === null) return null; 

  return (
    <div className="app-wrapper">
      {showUI && (
        <Navbar
          loggedIn={loggedIn}
          isAdmin={isAdmin}
          setLoggedIn={setLoggedIn}
          setIsAdmin={setIsAdmin}
        />
      )}

      <div id="main-content">
        <Routes>
          {/* Public / Auth Routes */}
          <Route path="/" element={<LandingPage />} />
          
          <Route 
            path="/login" 
            element={!loggedIn ? <Login setLoggedIn={setLoggedIn} setIsAdmin={setIsAdmin} /> : <Navigate to="/home" />} 
          />
          
          <Route 
            path="/register" 
            element={!loggedIn ? <Form /> : <Navigate to="/home" />} 
          />

          <Route 
            path="/verify" 
            element={<Verify setLoggedIn={setLoggedIn} setIsAdmin={setIsAdmin} />} 
          />
          
          {/* Protected Routes - CHANGED Navigate to="/" so logout lands on Landing Page */}
          <Route path="/home" element={loggedIn ? <Home /> : <Navigate to="/" />} />
          <Route path="/about" element={loggedIn ? <About /> : <Navigate to="/" />} />
          <Route path="/projects" element={loggedIn ? <Projects /> : <Navigate to="/" />} />
          <Route path="/contact" element={loggedIn ? <Contact /> : <Navigate to="/" />} />
          <Route path="/skill" element={loggedIn ? <Skill /> : <Navigate to="/" />} />
          <Route path="/testimonials" element={loggedIn ? <Testimonials /> : <Navigate to="/" />} />
          <Route path="/cv" element={loggedIn ? <CV /> : <Navigate to="/" />} />
          <Route path="/news" element={loggedIn ? <News /> : <Navigate to="/" />} />
          <Route path="/help" element={loggedIn ? <Help /> : <Navigate to="/" />} />

          {/* Admin Panel */}
          <Route 
            path="/admin" 
            element={loggedIn && isAdmin ? <AdminNavbar /> : <Navigate to="/" />}
          >
            <Route path="landing/manage" element={<AdminLanding />} />
            <Route path="cv/manage" element={<AdminCVManager />} />
            <Route path="users/view" element={<AdminUser mode={pathname} />} />
            <Route path="users/delete" element={<AdminUser mode={pathname} />} />
            <Route path="users/update" element={<AdminUser mode={pathname} />} />
            <Route path="projects/create" element={<AdminProject mode={pathname} />} />
            <Route path="projects/view" element={<AdminProject mode={pathname} />} />
            <Route path="projects/update" element={<AdminProject mode={pathname} />} />
            <Route path="projects/delete" element={<AdminProject mode={pathname} />} />
            <Route path="skills/create" element={<AdminSkills mode={pathname} />} />
            <Route path="skills/view" element={<AdminSkills mode={pathname} />} />
            <Route path="contacts/view" element={<AdminMessages />} />
            <Route path="about/create" element={<AdminAbout />} />
            <Route path="hero/create" element={<AdminHomeHero />} /> 
            <Route path="hero/update" element={<AdminHomeHero />} /> 
          </Route>

          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>

        {showUI && <Footer />}
      </div>
    </div>
  );
}

export default App;