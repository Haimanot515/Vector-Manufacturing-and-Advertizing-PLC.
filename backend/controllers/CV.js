const CV = require('../models/CV');

// GET CV
exports.getCV = async (req, res) => {
  try {
    const cv = await CV.findOne();
    // Return empty object if no CV found to prevent frontend map errors
    res.json(cv || {});
  } catch (err) {
    console.error("Fetch Error:", err);
    res.status(500).json({ message: 'Failed to fetch CV' });
  }
};

// CREATE or UPDATE CV
// This version uses findOneAndUpdate to force the new schema structure
exports.upsertCV = async (req, res) => {
  try {
    const body = req.body;

    // findOneAndUpdate handles both creation and updates.
    // By passing the body directly, we bypass memory-sync issues
    // that cause "Cast to [string] failed" errors.
    const cv = await CV.findOneAndUpdate(
      {}, // Filter: finds the first document available
      { $set: body }, // Update: sets the new data
      { 
        new: true,           // Return the modified document
        upsert: true,        // Create if it doesn't exist
        runValidators: true, // Force check against the NEW schema
        setDefaultsOnInsert: true 
      }
    );

    res.json(cv);
  } catch (err) {
    console.error("Upsert Error:", err);
    res.status(500).json({ 
      message: 'Failed to save CV', 
      error: err.message 
    });
  }
};

// DELETE CV
exports.deleteCV = async (req, res) => {
  try {
    const { id } = req.params;
    if (id) {
      await CV.findByIdAndDelete(id);
    } else {
      await CV.deleteMany({}); // Fallback to clear all if no ID
    }
    res.json({ message: 'CV deleted successfully' });
  } catch (err) {
    console.error("Delete Error:", err);
    res.status(500).json({ message: 'Failed to delete CV' });
  }
};