import React, { useState, useEffect } from "react";
import API from "../../api/api"; 

const AdminCVManager = () => {
  const [cvData, setCvData] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(null);

  // 1. Fetch existing CV data
  useEffect(() => {
    const fetchCV = async () => {
      try {
        const res = await API.get("/cv");
        // If no data exists or it's just an empty object from the server
        if (!res.data || Object.keys(res.data).length <= 1) { 
          setCvData({
            ownerName: "",
            heroImage: "",
            contact: { email: "", phone: "", github: "", linkedin: "" },
            humanLanguages: [""],
            softSkills: [""],
            technicalSkills: { frontend: [""], backend: [""], tools: [""] },
            workExperience: [{ company: "", role: "", period: "", details: "" }],
            projectHistory: [{ title: "", role: "", desc: "", link: "" }],
            educationHistory: [{ institution: "", level: "", degree: "", period: "" }],
            documents: [{ title: "", date: "", type: "Academic", description: "", img: "" }],
            extracurricularDocs: [{ title: "", date: "", type: "Extracurricular", description: "", img: "" }]
          });
        } else {
          setCvData(res.data);
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setMessage("⚠️ Could not load CV data from server.");
      }
    };
    fetchCV();
  }, []);

  // --- Handlers ---
  const handleSimpleChange = (e) => setCvData({ ...cvData, [e.target.name]: e.target.value });

  const handleNestedChange = (e, parent) => {
    setCvData({
      ...cvData,
      [parent]: { ...cvData[parent], [e.target.name]: e.target.value }
    });
  };

  const handleArrayChange = (index, value, field, subfield = null) => {
    const updated = { ...cvData };
    if (subfield) updated[field][subfield][index] = value;
    else updated[field][index] = value;
    setCvData(updated);
  };

  const addArrayItem = (field, subfield = null, defaultValue = "") => {
    const updated = { ...cvData };
    if (subfield) updated[field][subfield].push(defaultValue);
    else updated[field].push(defaultValue);
    setCvData(updated);
  };

  const removeArrayItem = (index, field, subfield = null) => {
    const updated = { ...cvData };
    if (subfield) updated[field][subfield].splice(index, 1);
    else updated[field].splice(index, 1);
    setCvData(updated);
  };

  const handleObjArrayChange = (index, e, field) => {
    const updatedArray = [...cvData[field]];
    updatedArray[index][e.target.name] = e.target.value;
    setCvData({ ...cvData, [field]: updatedArray });
  };

  // --- FILE UPLOAD ---
  const handleFileUpload = async (e, index, field, subField) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    setUploading(`${field}-${index}`);
    try {
      const res = await API.post("/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      const fileUrl = res.data.url; 
      const updatedArray = [...cvData[field]];
      updatedArray[index][subField] = fileUrl;
      setCvData({ ...cvData, [field]: updatedArray });
      setMessage("✅ File uploaded successfully!");
    } catch (err) {
      console.error("Upload failed", err);
      setMessage("❌ File upload failed.");
    } finally {
      setUploading(null);
    }
  };

  // 2. Submit & Sanitize (CRITICAL FIXES HERE)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    // Front-end Guard for Required Field
    if (!cvData.ownerName || cvData.ownerName.trim() === "") {
        setMessage("❌ Error: Full Name is required by the database.");
        setLoading(false);
        window.scrollTo(0, 0);
        return;
    }

    try {
      const cleanedData = {
        ...cvData,
        // Remove empty strings from simple arrays
        humanLanguages: cvData.humanLanguages.filter(l => l && l.trim() !== ""),
        softSkills: cvData.softSkills.filter(s => s && s.trim() !== ""),
        technicalSkills: {
          frontend: cvData.technicalSkills.frontend.filter(s => s && s.trim() !== ""),
          backend: cvData.technicalSkills.backend.filter(s => s && s.trim() !== ""),
          tools: cvData.technicalSkills.tools.filter(s => s && s.trim() !== ""),
        },
        // Remove empty objects from complex arrays based on a required property (like title or company)
        workExperience: cvData.workExperience.filter(w => w.company && w.company.trim() !== ""),
        educationHistory: cvData.educationHistory.filter(ed => ed.institution && ed.institution.trim() !== ""),
        documents: cvData.documents.filter(d => d.title && d.title.trim() !== ""),
        extracurricularDocs: cvData.extracurricularDocs.filter(d => d.title && d.title.trim() !== "")
      };

      const res = await API.post("/cv", cleanedData);
      setCvData(res.data); // Update state with the saved data
      setMessage("✅ CV successfully published to MongoDB!");
      window.scrollTo(0, 0);
    } catch (err) {
      console.error("Save error:", err);
      // Display specific server error if available
      const serverMsg = err.response?.data?.message || err.response?.data?.error || "Internal Server Error";
      setMessage(`❌ Error: ${serverMsg}`);
    } finally {
      setLoading(false);
    }
  };

  if (!cvData) return <div style={{ padding: "50px", textAlign: "center" }}>Initializing CV Data...</div>;

  return (
    <div style={styles.container}>
      <h1 style={{ color: "#1e293b", textAlign: "center" }}>CV Dossier Manager</h1>
      {message && <div style={styles.alert}>{message}</div>}

      <form onSubmit={handleSubmit}>
        {/* SECTION 1: BASIC & CONTACT */}
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Basic Info & Hero</h3>
          <label style={styles.label}>Full Name (Required)</label>
          <input 
            style={styles.input} 
            name="ownerName" 
            placeholder="e.g. John Doe"
            value={cvData.ownerName} 
            onChange={handleSimpleChange} 
            required 
          />
          <label style={styles.label}>Hero Image URL</label>
          <input style={styles.input} name="heroImage" value={cvData.heroImage} onChange={handleSimpleChange} />
          
          <div style={styles.grid}>
            <div>
              <label style={styles.label}>Email</label>
              <input style={styles.input} name="email" value={cvData.contact.email} onChange={(e) => handleNestedChange(e, "contact")} />
            </div>
            <div>
              <label style={styles.label}>Phone</label>
              <input style={styles.input} name="phone" value={cvData.contact.phone} onChange={(e) => handleNestedChange(e, "contact")} />
            </div>
          </div>
        </div>

        {/* SECTION 2: TECHNICAL SKILLS */}
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Technical Skills</h3>
          {['frontend', 'backend', 'tools'].map(type => (
            <div key={type} style={{marginBottom: '15px'}}>
              <label style={{...styles.label, textTransform: 'capitalize'}}>{type}</label>
              {cvData.technicalSkills[type].map((s, i) => (
                <div key={i} style={styles.flexRow}>
                  <input style={styles.input} value={s} onChange={(e) => handleArrayChange(i, e.target.value, "technicalSkills", type)} />
                  <button type="button" onClick={() => removeArrayItem(i, "technicalSkills", type)} style={styles.deleteBtn}>✖</button>
                </div>
              ))}
              <button type="button" onClick={() => addArrayItem("technicalSkills", type)} style={styles.addBtnSmall}>+ Add {type} Skill</button>
            </div>
          ))}
        </div>

        {/* SECTION 3: EDUCATION */}
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Education History</h3>
          {cvData.educationHistory.map((ed, i) => (
            <div key={i} style={styles.subCard}>
              <input style={styles.input} name="institution" placeholder="Institution" value={ed.institution} onChange={(e) => handleObjArrayChange(i, e, "educationHistory")} />
              <div style={styles.grid}>
                <input style={styles.input} name="degree" placeholder="Degree/Major" value={ed.degree} onChange={(e) => handleObjArrayChange(i, e, "educationHistory")} />
                <input style={styles.input} name="period" placeholder="Period (e.g. 2020-2024)" value={ed.period} onChange={(e) => handleObjArrayChange(i, e, "educationHistory")} />
              </div>
              <button type="button" onClick={() => removeArrayItem(i, "educationHistory")} style={styles.deleteBtn}>Remove Education</button>
            </div>
          ))}
          <button type="button" onClick={() => addArrayItem("educationHistory", null, {institution:"", level:"", degree:"", period:""})} style={styles.addBtn}>+ Add Education</button>
        </div>

        {/* SECTION 4: ACADEMIC DOCUMENTS */}
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Academic Certificates & Transcripts</h3>
          {cvData.documents.map((doc, i) => (
            <div key={i} style={styles.subCard}>
              <div style={styles.grid}>
                <input style={styles.input} name="title" placeholder="Document Title" value={doc.title} onChange={(e) => handleObjArrayChange(i, e, "documents")} />
                <input style={styles.input} name="date" placeholder="Year" value={doc.date} onChange={(e) => handleObjArrayChange(i, e, "documents")} />
              </div>
              <div style={styles.grid}>
                <input style={styles.input} name="img" placeholder="Image URL" value={doc.img} onChange={(e) => handleObjArrayChange(i, e, "documents")} />
                <input style={styles.input} name="description" placeholder="Details" value={doc.description} onChange={(e) => handleObjArrayChange(i, e, "documents")} />
              </div>
              <div style={styles.uploadRow}>
                <input type="file" onChange={(e) => handleFileUpload(e, i, "documents", "img")} />
                {uploading === `documents-${i}` && <small>Uploading...</small>}
              </div>
              <button type="button" onClick={() => removeArrayItem(i, "documents")} style={styles.deleteBtn}>Remove Document</button>
            </div>
          ))}
          <button type="button" onClick={() => addArrayItem("documents", null, {title:"", date:"", type:"Academic", description:"", img:""})} style={styles.addBtn}>+ Add Academic Document</button>
        </div>

        {/* SECTION 5: EXTRACURRICULAR */}
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Extracurricular Certificates</h3>
          {cvData.extracurricularDocs.map((doc, i) => (
            <div key={i} style={styles.subCard}>
              <div style={styles.grid}>
                <input style={styles.input} name="title" placeholder="Certificate Title" value={doc.title} onChange={(e) => handleObjArrayChange(i, i, "extracurricularDocs")} />
                <input style={styles.input} name="date" placeholder="Year" value={doc.date} onChange={(e) => handleObjArrayChange(i, e, "extracurricularDocs")} />
              </div>
              <div style={styles.grid}>
                <input style={styles.input} name="img" placeholder="Image URL" value={doc.img} onChange={(e) => handleObjArrayChange(i, e, "extracurricularDocs")} />
                <input style={styles.input} name="description" placeholder="Details" value={doc.description} onChange={(e) => handleObjArrayChange(i, e, "extracurricularDocs")} />
              </div>
              <div style={styles.uploadRow}>
                 <input type="file" onChange={(e) => handleFileUpload(e, i, "extracurricularDocs", "img")} />
                 {uploading === `extracurricularDocs-${i}` && <small>Uploading...</small>}
              </div>
              <button type="button" onClick={() => removeArrayItem(i, "extracurricularDocs")} style={styles.deleteBtn}>Remove Certificate</button>
            </div>
          ))}
          <button type="button" onClick={() => addArrayItem("extracurricularDocs", null, {title:"", date:"", type:"Extracurricular", description:"", img:""})} style={styles.addBtn}>+ Add Extracurricular Document</button>
        </div>

        <button type="submit" disabled={loading} style={loading ? {...styles.saveBtn, opacity: 0.5} : styles.saveBtn}>
          {loading ? "SYNCING WITH DATABASE..." : "UPDATE LIVE CV"}
        </button>
      </form>
    </div>
  );
};

// ... (styles same as your previous code)
const styles = {
    container: { maxWidth: "900px", margin: "40px auto", padding: "20px", fontFamily: "'Inter', sans-serif" },
    card: { background: "#fff", padding: "25px", borderRadius: "12px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)", marginBottom: "25px", border: "1px solid #e2e8f0" },
    cardTitle: { marginTop: 0, marginBottom: "20px", color: "#1e293b", borderBottom: "2px solid #f1f5f9", paddingBottom: "10px" },
    subCard: { background: "#f8fafc", padding: "15px", borderRadius: "8px", marginBottom: "15px", border: "1px solid #e2e8f0" },
    grid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" },
    flexRow: { display: "flex", gap: "10px", alignItems: "center" },
    uploadRow: { display: "flex", alignItems: "center", background: "#f1f5f9", padding: "10px", borderRadius: "6px", marginTop: "5px" },
    label: { display: "block", marginBottom: "5px", fontSize: "12px", fontWeight: "600", color: "#64748b" },
    input: { width: "100%", padding: "10px", marginBottom: "10px", border: "1px solid #cbd5e1", borderRadius: "6px", fontSize: "14px", boxSizing: "border-box" },
    fileInput: { fontSize: "12px" },
    addBtn: { background: "#f1f5f9", border: "1px dashed #94a3b8", padding: "10px", width: "100%", cursor: "pointer", borderRadius: "6px", color: "#475569", fontWeight: "600" },
    addBtnSmall: { background: "none", border: "1px solid #cbd5e1", padding: "5px 10px", cursor: "pointer", borderRadius: "4px", fontSize: "12px", color: "#64748b" },
    deleteBtn: { background: "none", border: "none", color: "#ef4444", cursor: "pointer", fontSize: "12px", textDecoration: 'underline', marginTop: "10px", display: "block" },
    saveBtn: { width: "100%", padding: "18px", background: "#0f172a", color: "white", border: "none", borderRadius: "8px", fontWeight: "bold", cursor: "pointer", fontSize: "16px", marginTop: "20px" },
    alert: { padding: "15px", borderRadius: "8px", background: "#dcfce7", color: "#166534", marginBottom: "20px", textAlign: "center", border: "1px solid #bbf7d0", fontWeight: "bold" }
  };

export default AdminCVManager;