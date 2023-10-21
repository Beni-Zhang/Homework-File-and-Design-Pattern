const express = require('express');
const app = express();
const port = 3000;

const db = require('./config');
const movieRoutes = require('./routes/movieRoutes');
const userRoutes = require('./routes/userRoutes');

app.use(express.json());

app.use('/movies', movieRoutes);
app.use('/users', userRoutes);

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static('uploads'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});