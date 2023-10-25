const express = require('express');
const app = express();
const port = 3000;
const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Menyimpan gambar di folder 'uploads'
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });
app.use(express.json());

app.post('/uploadPhoto', upload.single('photo'), (req, res) => {
  if (req.file) {
    const photoFilename = req.file.filename; // Get the filename of the uploaded photo
    const photoPath = `uploads/${photoFilename}`; // Construct the relative path

    res.sendFile(photoPath, { root: __dirname }); // Send the photo as a response
  } else {
    res.status(400).send('No photo uploaded');
  }
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});