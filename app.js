const express = require('express');
require('dotenv').config();
const mysql = require('mysql');
const app = express();

// Tentukan port server
const PORT = 3000;

// Middleware untuk menangani permintaan
app.get('/', (req, res) => {
    res.json('Hai, Virso API present by deltapy!');
});

app.get('/api', (req, res) => {
        res.json('Test API respond success');
});

const db = mysql.createConnection({
    host: process.env.DB_HOST, // Ganti dengan host database Anda
    user: 'root',      // Ganti dengan username database Anda
    password: '',      // Ganti dengan password database Anda
    database: 'test' // Ganti dengan nama database Anda
});



db.connect((err) => {
    if (err) {
        console.error('Koneksi ke database gagal:', err);
    } else {
        console.log('Koneksi ke database berhasil.');
    }
});

app.get('/data', (req, res) => {
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
    console.log(`Server berjalan di http://process.env.HOST_SERVER_LOCAL:${PORT}`);
});

