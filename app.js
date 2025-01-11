const express = require('express');
require('dotenv').config();
const app = express();
const db = require('./connection');

// Tentukan port server
const PORT = 3000;

// Middleware untuk menangani permintaan
app.get('/', (req, res) => {
    res.json('Hai, Virso API present by deltapy!');
});

app.get('/apiasd', (req, res) => {
        res.json('Test API respond success');
});

app.get('/api/bin/data', (req, res) => {
    const sql = 'SELECT * FROM data'; // Ganti dengan query SQL Anda
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error saat mengambil data:', err);
            res.status(500).json('Terjadi kesalahan pada server.');
        } else {
            res.json(results);
        }
    });
});

// Jalankan server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server berjalan di http://${process.env.HOST_SERVER}:${PORT}`);
});

