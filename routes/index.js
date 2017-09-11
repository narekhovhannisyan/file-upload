const express = require('express')
const router = express.Router()
const multer = require('multer')

// multer object creation
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/')
  },
  limits: {fileSize: 1000000, files: 1},
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const upload = multer({ storage: storage })

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Upload Form' })
})

router.post('/', upload.single('uploadfile'), (req, res) => {
  console.log(req.file)
  res.send('File upload sucessfully.')
})

module.exports = router
