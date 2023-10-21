const movieRepository = require('../repositories/movieRepository');

const getAllMovies = async (req, res) => {
  try {
    const movies = await movieRepository.getAllMovies();
    res.json(movies.rows);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getMovieById = async (req, res) => {
  const id = req.params.id;
  try {
    const movie = await movieRepository.getMovieById(id);
    res.json(movie.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const createMovie = async (req, res) => {
  const { title, description } = req.body;
  try {
    const movie = await movieRepository.createMovie({ title, description });
    res.json(movie.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const updateMovie = async (req, res) => {
  const id = req.params.id;
  const { title, description } = req.body;
  try {
    const movie = await movieRepository.updateMovie(id, { title, description });
    res.json(movie.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const deleteMovie = async (req, res) => {
  const id = req.params.id;
  try {
    await movieRepository.deleteMovie(id);
    res.json({ message: 'Movie deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
};