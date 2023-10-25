const express = require('express');
const app = express();
const movieRoutes = require('./routes/movieRoutes');
const userRoutes = require('./routes/userRoutes');

app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded form data

// Mount movie routes under /api/movies
app.use('/movies', movieRoutes);

// Mount user routes under /api/users
app.use('/users', userRoutes);

// Konfigurasi untuk menyajikan file statis
app.use('/uploads', express.static('uploads'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});