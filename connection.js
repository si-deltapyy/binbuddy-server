require('dotenv').config();
const mysql = require('mysql');

const db = mysql.createConnection({
    host: process.env.DB_HOST, // Ganti dengan host database Anda
    user: process.env.DB_USER,      // Ganti dengan username database Anda
    password: process.env.DB_PASSWORD,      // Ganti dengan password database Anda
    database: process.env.DB_NAME // Ganti dengan nama database Anda
});



db.connect((err) => {
    if (err) {
        console.error('Koneksi ke database gagal:', err);
    } else {
        console.log('Koneksi ke database berhasil.');
    }
});