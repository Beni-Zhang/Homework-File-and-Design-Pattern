const { pool } = require('../config');

const getAllMovies = () => {
  return pool.query('SELECT * FROM movies');
};

const getMovieById = (id) => {
  return pool.query('SELECT * FROM movies WHERE id = $1', [id]);
};

const createMovie = (movie) => {
  const { title, description } = movie;
  return pool.query('INSERT INTO movies (title, description) VALUES ($1, $2) RETURNING *', [title, description]);
};

const updateMovie = (id, movie) => {
  const { title, description } = movie;
  return pool.query('UPDATE movies SET title = $1, description = $2 WHERE id = $3 RETURNING *', [title, description, id]);
};

const deleteMovie = (id) => {
  return pool.query('DELETE FROM movies WHERE id = $1', [id]);
};

module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
};