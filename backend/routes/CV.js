const express = require('express');
const router = express.Router();
const cvController = require('../controllers/CV');

// Fetch CV
router.get('/', cvController.getCV);

// Create or update CV
router.post('/', cvController.upsertCV);

// Delete CV by ID (optional)
router.delete('/:id', cvController.deleteCV);

module.exports = router;
