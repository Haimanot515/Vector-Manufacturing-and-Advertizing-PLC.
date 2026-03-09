import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/api.jsx";
import { FaTimes, FaGithub, FaFacebook, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Form = ({ setLoggedIn, setIsAdmin, closeModal, switchToLogin }) => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    try {
      await API.post("/auth/register", form);
      localStorage.setItem("pendingUser", JSON.stringify(form));
      setSuccess("Account created! Redirecting to verify...");
      setTimeout(() => {
        navigate("/verify");
      }, 1500);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.msg || "Something went wrong");
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
          .reg-input:focus { border-color: #36d2d3 !important; outline: none; box-shadow: 0 0 0 4px rgba(54, 210, 211, 0.1); }
          .social-item:hover { background-color: #f8fafc !important; transform: translateY(-1px); }
          ::-webkit-scrollbar { width: 8px; }
          ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
        `}
      </style>

     

      <div style={{ display: "flex", minHeight: "100vh", width: "100%" }}>
        
        {/* LEFT SIDE: EDITORIAL CONTENT */}
        <div style={{ flex: 1.2, backgroundColor: "#ffffff", padding: `${topPadding} 80px 100px 80px` }}>
          <header style={{ marginBottom: "60px" }}>
            <h1 style={{ fontSize: "42px", fontWeight: "900", letterSpacing: "6px", color: "#2cabc8", margin: 0 }}>Join Us!</h1>
          </header>

          <div style={{ marginBottom: "120px" }}>
            <h2 style={{ fontSize: "32px", fontWeight: "900", color: "#0f172a", margin: "20px 0", letterSpacing: "-1.5px" }}>Vector Advert And Manufacturing</h2>
            <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#64748b", maxWidth: "480px", marginBottom: "40px" }}>
              Unlock industrial-grade 3D manufacturing. Create an account to manage your digital concepts and track physical production in real-time.
            </p>
            <div style={{ width: "100%", height: "400px", borderRadius: "24px", overflow: "hidden", boxShadow: "0 25px 50px rgba(0,0,0,0.06)" }}>
              <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000" alt="Lab" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: THE FORM */}
        <div style={{
          width: "400px",
          backgroundColor: "#f9fafb",
          borderLeft: "1px solid #e2e8f0",
          padding: `${topPadding} 60px 100px 60px`,
          display: "flex",
          flexDirection: "column"
        }}>
          
          <div style={{ width: "100%", maxWidth: "400px" }}>
            <header style={{ marginBottom: "60px" }}>
               <h2 style={{ fontSize: "42px", fontWeight: "900", letterSpacing: "6px", color: "#2cabc8", margin: 0 }}>Register</h2>
               <p style={{ color: "#64748b", fontSize: "16px", marginTop: "12px" }}>Create your account to get started.</p>
            </header>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <label style={{ fontSize: "11px", fontWeight: "800", color: "#94a3b8", textTransform: "uppercase" }}>Full Name</label>
                <input 
                  className="reg-input" name="name" type="text" value={form.name} onChange={handleChange} 
                  placeholder="John Doe" required 
                  style={{ padding: "18px", borderRadius: "14px", border: "1px solid #e2e8f0", fontSize: "15px", backgroundColor: "#fff" }}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <label style={{ fontSize: "11px", fontWeight: "800", color: "#94a3b8", textTransform: "uppercase" }}>Email</label>
                <input 
                  className="reg-input" name="email" type="email" value={form.email} onChange={handleChange} 
                  placeholder="name@company.com" required 
                  style={{ padding: "18px", borderRadius: "14px", border: "1px solid #e2e8f0", fontSize: "15px", backgroundColor: "#fff" }}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <label style={{ fontSize: "11px", fontWeight: "800", color: "#94a3b8", textTransform: "uppercase" }}>Password</label>
                <input 
                  className="reg-input" name="password" type="password" value={form.password} onChange={handleChange} 
                  placeholder="••••••••" required 
                  style={{ padding: "18px", borderRadius: "14px", border: "1px solid #e2e8f0", fontSize: "15px", backgroundColor: "#fff" }}
                />
              </div>

              <button type="submit" style={{ padding: "20px", backgroundColor: "#0f172a", color: "#fff", border: "none", borderRadius: "14px", fontSize: "16px", fontWeight: "900", cursor: "pointer", marginTop: "10px" }}>
                Create Account
              </button>
            </form>

            {success && <p style={{ color: "#10b981", marginTop: "15px", fontWeight: "700", textAlign: "center", fontSize: "14px" }}>{success}</p>}
            {error && <p style={{ color: "#ef4444", marginTop: "15px", fontWeight: "700", textAlign: "center", fontSize: "14px" }}>{error}</p>}

            <div style={{ display: "flex", alignItems: "center", gap: "20px", margin: "45px 0" }}>
              <div style={{ flex: 1, height: "1px", background: "#e2e8f0" }} />
              <span style={{ fontSize: "11px", color: "#94a3b8", fontWeight: "800" }}>SOCIAL REGISTER</span>
              <div style={{ flex: 1, height: "1px", background: "#e2e8f0" }} />
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <button className="social-item" style={socialBtnStyle}><FcGoogle size={24} /> <span style={{ color: "#4285F4" }}>Register with Google</span></button>
              <button className="social-item" style={socialBtnStyle}><FaFacebook size={24} color="#1877F2" /> <span style={{ color: "#1877F2" }}>Register with Facebook</span></button>
              <button className="social-item" style={socialBtnStyle}><FaGithub size={24} color="#181717" /> <span style={{ color: "#181717" }}>Register with GitHub</span></button>
              <button className="social-item" style={socialBtnStyle}><FaApple size={24} color="#000" /> <span style={{ color: "#000" }}>Register with Apple</span></button>
            </div>

            <p style={{ textAlign: "center", marginTop: "30px", fontSize: "14px", color: "#64748b" }}>
              Already have an account? <span onClick={switchToLogin} style={{ color: "#36d2d3", fontWeight: "700", cursor: "pointer" }}>Sign In</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;