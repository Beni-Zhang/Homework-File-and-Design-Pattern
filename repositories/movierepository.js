const movieModel = require('../models/movie');

const getAllMovies = () => {
  return movieModel.getAllMovies();
};

const getMovieById = (id) => {
  return movieModel.getMovieById(id);
};

const createMovie = (movie) => {
  return movieModel.createMovie(movie);
};

const updateMovie = (id, movie) => {
  return movieModel.updateMovie(id, movie);
};

const deleteMovie = (id) => {
  return movieModel.deleteMovie(id);
};

module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
};