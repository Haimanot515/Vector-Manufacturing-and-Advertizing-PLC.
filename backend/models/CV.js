const mongoose = require('mongoose');

const CVSchema = new mongoose.Schema({
  ownerName: { type: String, required: true },
  heroImage: String,
  contact: {
    email: String,
    phone: String,
    github: String,
    linkedin: String
  },
  humanLanguages: [String],
  softSkills: [String],
  personalInterests: [String],
  academicSkills: [String],
  technicalSkills: {
    frontend: [String],
    backend: [String],
    tools: [String]
  },
  workExperience: [
    {
      company: String,
      role: String,
      period: String,
      details: String
    }
  ],
  projectHistory: [
    {
      title: String,
      role: String,
      desc: String,
      link: String
    }
  ],
  educationHistory: [
    {
      institution: String,
      level: String,
      degree: String,
      period: String,
      details: String
    }
  ],
  // Correctly defined as an array of objects to fix the CastError
  documents: [
    {
      title: String,
      date: String,
      type: String,
      description: String,
      img: String
    }
  ],
  extracurricularDocs: [
    {
      title: String,
      date: String,
      type: String,
      description: String,
      img: String
    }
  ]
}, { timestamps: true });

// Prevent model overwrite errors in development
module.exports = mongoose.models.CV || mongoose.model('CV', CVSchema);