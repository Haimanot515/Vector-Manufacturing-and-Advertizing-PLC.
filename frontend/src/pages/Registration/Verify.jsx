import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/api"; 
import { FaTimes } from "react-icons/fa";

const Verify = ({ setLoggedIn, setIsAdmin, closeModal }) => {
  const [code, setCode] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleVerification = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    try {
      const pendingUser = localStorage.getItem("pendingUser");
      if (!pendingUser) {
        setError("No registration data found.");
        return;
      }

      const { name, email, password } = JSON.parse(pendingUser);
      const res = await API.post("/auth/verify", {
        name,
        email,
        password,
        code: code.toString(),
      });

      const { token, msg } = res.data;
      localStorage.removeItem("pendingUser");
      localStorage.setItem("token", token);

      const payload = JSON.parse(atob(token.split(".")[1]));
      const adminFlag = payload.isAdmin === true || payload.isAdmin === "true";

      setLoggedIn(true);
      setIsAdmin(adminFlag); 
      setSuccess(msg);

      setTimeout(() => {
        if (closeModal) closeModal();
        navigate("/home"); 
      }, 1500);
    } catch (err) {
      setError(err.response?.data?.msg || "Verification failed.");
    }
  };

  return (
    /* THE OVERLAY: Transparent so landing page is visible */
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(15, 23, 42, 0.4)", // Slight navy tint
      backdropFilter: "blur(6px)",            // Soft blur for the landing page
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 99999,                          // Above everything
      padding: "20px"
    }}>
      
      {/* THE SQUARE POPUP CARD */}
      <div style={{
        width: "100%",
        maxWidth: "420px",
        minHeight: "420px",
        backgroundColor: "#ffffff",
        borderRadius: "32px",
        boxShadow: "0 40px 100px -20px rgba(0,0,0,0.5)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
        position: "relative",
        border: "1px solid rgba(255,255,255,0.3)",
      }}>
        
        {/* Close Button */}
        <button 
          onClick={closeModal}
          style={{
            position: "absolute",
            top: "24px",
            right: "24px",
            background: "#f1f5f9",
            border: "none",
            width: "35px",
            height: "35px",
            borderRadius: "50%",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#64748b"
          }}
        >
          <FaTimes />
        </button>

        <div style={{ textAlign: "center", width: "100%" }}>
          <h1 style={{ 
            color: "#0f172a", 
            marginBottom: "12px", 
            fontSize: "1.8rem", 
            fontWeight: "900", 
            letterSpacing: "-1px" 
          }}>
            Identity Check
          </h1>

          <p style={{ color: "#64748b", marginBottom: "35px", fontSize: "15px", fontWeight: "500" }}>
            Enter the 6-digit code sent to your inbox.
          </p>

          <form onSubmit={handleVerification} style={{ width: "100%" }}>
            <input
              id="code"
              type="text"
              inputMode="numeric"
              pattern="\d{6}"
              maxLength={6}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="000000"
              required
              style={{
                width: "100%",
                padding: "20px",
                marginBottom: "20px",
                borderRadius: "16px",
                border: "2px solid #f1f5f9",
                fontSize: "32px",
                textAlign: "center",
                letterSpacing: "12px",
                backgroundColor: "#f8fafc",
                color: "#0f172a",
                fontWeight: "900",
                outline: "none",
                transition: "all 0.3s ease",
              }}
              onFocus={(e) => e.target.style.borderColor = "#0f172a"}
              onBlur={(e) => e.target.style.borderColor = "#f1f5f9"}
            />

            <button
              type="submit"
              style={{ 
                width: "100%",
                padding: "18px",
                backgroundColor: "#0f172a",
                color: "white",
                border: "none",
                borderRadius: "16px",
                fontSize: "16px",
                fontWeight: "700",
                cursor: "pointer",
                boxShadow: "0 10px 25px -5px rgba(15, 23, 42, 0.4)",
              }}
            >
              Confirm & Verify
            </button>
          </form>

          {success && <p style={{ color: "#10b981", marginTop: "20px", fontWeight: "700" }}>{success}</p>}
          {error && <p style={{ color: "#ef4444", marginTop: "20px", fontWeight: "700" }}>{error}</p>}
        </div>

        {/* VECTOR DECORATION (Bottom of Card) */}
        <div style={{ 
          marginTop: "30px", 
          fontSize: "12px", 
          color: "#cbd5e1", 
          textTransform: "uppercase", 
          letterSpacing: "2px",
          fontWeight: "700"
        }}>
          Secure Encryption Active
        </div>
      </div>
    </div>
  );
};

export default Verify;