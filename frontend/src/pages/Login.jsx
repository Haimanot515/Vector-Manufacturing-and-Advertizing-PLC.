import React, { useState } from "react";
import API from "../api/api.jsx";
import { useNavigate } from "react-router-dom";
import { FaTimes, FaGithub, FaFacebook, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = ({ setLoggedIn, setIsAdmin, closeModal, switchToRegister }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Added loading state
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await API.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      
      const payload = JSON.parse(atob(res.data.token.split(".")[1]));
      
      setLoggedIn(true);
      setIsAdmin(payload.isAdmin === true || payload.isAdmin === "true");
      
      setTimeout(() => {
        if (closeModal) closeModal();
        navigate("/home");
      }, 1000);
    } catch (err) {
      setError(err.response?.data?.msg || "Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const socialBtnStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "15px",
    padding: "16px",
    borderRadius: "14px",
    border: "1px solid #e2e8f0",
    backgroundColor: "#ffffff",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "700",
    width: "100%",
    transition: "0.2s ease",
    marginBottom: "12px"
  };

  const topPadding = "100px";

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      backgroundColor: "#ffffff",
      zIndex: 60000,
      overflowY: "auto",
      fontFamily: "'Inter', sans-serif",
    }}>
      <style>
        {`
          .login-input:focus { border-color: #36d2d3 !important; outline: none; box-shadow: 0 0 0 4px rgba(54, 210, 211, 0.1); }
          .social-item:hover { background-color: #f8fafc !important; transform: translateY(-1px); }
          .login-submit:active { transform: scale(0.98); }
          @media (max-width: 900px) { .left-panel { display: none !important; } .right-panel { width: 100% !important; padding: 60px 20px !important; } }
        `}
      </style>

      {/* CLOSE BUTTON */}
     
      <div style={{ display: "flex", minHeight: "100vh", width: "100%" }}>
        
        {/* LEFT SIDE */}
        <div className="left-panel" style={{ flex: 1.2, backgroundColor: "#ffffff", padding: `${topPadding} 80px 100px 80px` }}>
          <header style={{ marginBottom: "60px" }}>
            <h1 style={{ fontSize: "42px", fontWeight: "900", letterSpacing: "6px", color: "#2cabc8", margin: 0 }}>Welcome!</h1>
          </header>
          <div style={{ marginBottom: "120px" }}>
            <h2 style={{ fontSize: "32px", fontWeight: "900", color: "#0f172a", margin: "20px 0", letterSpacing: "-1.5px" }}>Vector Advert And Manufacturing</h2>
            <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#64748b", maxWidth: "480px", marginBottom: "40px" }}>
              Precision 3D manufacturing labs designed for industrial-grade parts. We bridge the gap between complex digital concepts and physical reality.
            </p>
            <div style={{ width: "100%", height: "400px", borderRadius: "24px", overflow: "hidden", boxShadow: "0 25px 50px rgba(0,0,0,0.06)" }}>
              <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000" alt="Manufacturing Lab" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="right-panel" style={{
          width: "480px",
          backgroundColor: "#f9fafb",
          borderLeft: "1px solid #e2e8f0",
          padding: `${topPadding} 60px 100px 60px`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
          
          <div style={{ width: "100%", maxWidth: "400px" }}>
            <header style={{ marginBottom: "40px" }}>
               <h2 style={{ fontSize: "42px", fontWeight: "900", letterSpacing: "2px", color: "#2cabc8", margin: 0 }}>Sign In</h2>
               <p style={{ color: "#64748b", fontSize: "16px", marginTop: "12px" }}>Enter your credentials to continue.</p>
            </header>

            {error && (
              <div style={{ padding: "14px", backgroundColor: "#fef2f2", color: "#dc2626", borderRadius: "10px", fontSize: "14px", marginBottom: "20px", border: "1px solid #fee2e2" }}>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <label style={{ fontSize: "11px", fontWeight: "800", color: "#94a3b8", textTransform: "uppercase" }}>Email</label>
                <input 
                  className="login-input" name="email" type="email" value={form.email} onChange={handleChange} 
                  placeholder="name@company.com" required 
                  style={{ padding: "18px", borderRadius: "14px", border: "1px solid #e2e8f0", fontSize: "15px", backgroundColor: "#fff" }}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <label style={{ fontSize: "11px", fontWeight: "800", color: "#94a3b8", textTransform: "uppercase" }}>Password</label>
                  <span style={{ fontSize: "12px", color: "#36d2d3", fontWeight: "800", cursor: "pointer" }}>Forgot?</span>
                </div>
                <input 
                  className="login-input" name="password" type="password" value={form.password} onChange={handleChange} 
                  placeholder="••••••••" required 
                  style={{ padding: "18px", borderRadius: "14px", border: "1px solid #e2e8f0", fontSize: "15px", backgroundColor: "#fff" }}
                />
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="login-submit"
                style={{ 
                  padding: "20px", backgroundColor: loading ? "#64748b" : "#0f172a", 
                  color: "#fff", border: "none", borderRadius: "14px", 
                  fontSize: "16px", fontWeight: "900", cursor: loading ? "not-allowed" : "pointer",
                  transition: "0.2s"
                }}
              >
                {loading ? "Verifying..." : "Login"}
              </button>
            </form>

            <div style={{ display: "flex", alignItems: "center", gap: "20px", margin: "45px 0" }}>
              <div style={{ flex: 1, height: "1px", background: "#e2e8f0" }} />
              <span style={{ fontSize: "11px", color: "#94a3b8", fontWeight: "800" }}>SOCIAL CONNECT</span>
              <div style={{ flex: 1, height: "1px", background: "#e2e8f0" }} />
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <button className="social-item" style={socialBtnStyle}><FcGoogle size={24} /> <span style={{ color: "#4285F4" }}>Google</span></button>
              <button className="social-item" style={socialBtnStyle}><FaFacebook size={24} color="#1877F2" /> <span style={{ color: "#1877F2" }}>Facebook</span></button>
              <button className="social-item" style={socialBtnStyle}><FaGithub size={24} color="#181717" /> <span style={{ color: "#181717" }}>GitHub</span></button>
              <button className="social-item" style={socialBtnStyle}><FaApple size={24} color="#000" /> <span style={{ color: "#000" }}>Apple</span></button>
            </div>
            
            <p style={{ textAlign: "center", marginTop: "30px", fontSize: "14px", color: "#64748b" }}>
              Don't have an account? <span onClick={switchToRegister} style={{ color: "#36d2d3", fontWeight: "700", cursor: "pointer" }}>Sign Up</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;