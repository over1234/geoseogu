var express = require('express');
var router = express.Router();
const path = require('path');
var multer = require('multer');

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'public/images/');
        },
        filename: function (req, file, cb) {
            var newFileName = new Date().valueOf() + path.extname(file.originalname)
            cb(null, newFileName);
        }
    }),
});

router.get('/',(req, res) => {
    res.status(200).json({ massage:'이미지 화면에 들어오신 것을 확인하십니다.' });
})

router.post('/upload', upload.single('imageFile'), (req, res) => {
    console.log('hi')
    let path = './images/' + req.file.filename;
    console.log(path)
    res.status(200).json({image_path: path});
});

module.exports = router;