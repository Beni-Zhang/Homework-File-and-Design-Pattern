const { Pool } = require('pg');

// Create a PostgreSQL connection pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'movie',
  password: 'benizhang123',
  port: 5432,
});

// Function to create a new movie
async function createMovie({ id, title, genres, year, photo }) {
  try {
    // Insert the new movie record into the database
    const query = `
      INSERT INTO movies (id, title, genres, year, photo)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;

    const values = [id, title, genres, year, photo];

    const result = await pool.query(query, values);

    return result.rows[0]; // Return the newly created movie
  } catch (error) {
    throw error;
  }
}

// Export the createMovie function
module.exports = {
  createMovie,
};