const pool = require('../config/db');

// Fetch coastal erosion data
const getCoastalData = async (req, res, next) => {
    try {
        const result = await pool.query('SELECT * FROM coastal_erosion');
        res.status(200).json(result.rows);
    } catch (err) {
        next(err);
    }
};

// Add new coastal erosion data
const addCoastalData = async (req, res, next) => {
    const { location, erosion_rate, risk_level } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO coastal_erosion (location, erosion_rate, risk_level) VALUES ($1, $2, $3) RETURNING *',
            [location, erosion_rate, risk_level]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        next(err);
    }
};

module.exports = { getCoastalData, addCoastalData };
