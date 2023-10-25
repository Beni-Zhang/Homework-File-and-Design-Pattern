const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');
const multer = require('multer');

// Define your storage and configure multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Specify the directory where uploaded files will be stored
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });


router.get('/', movieController.getAllMovies);
router.get('/:id', movieController.getMovieById);
router.post('/', movieController.createMovie);
router.put('/:id', movieController.updateMovie);
router.delete('/:id', movieController.deleteMovie);
router.post('/uploadPhoto', upload.single('photo'), movieController.uploadPhoto);

module.exports = router;