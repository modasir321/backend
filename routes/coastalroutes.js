const express = require('express');
const { getCoastalData, addCoastalData } = require('../controllers/coastalcontrollers');


const router = express.Router();

// GET request to fetch data
router.get('/', getCoastalData);

// POST request to add data
router.post('/', addCoastalData);

module.exports = router;
