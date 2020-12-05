
const express = require('express');
const router = express.Router();
const {
    getAllBlogController,
    getBlogByIdController,
    postBlogController,
    updateBlogController,
    deleteBlogController
} = require('../controllers/blog');
const multer = require('multer');
const upload = multer({ dest: 'uploads/'});
const checkAuth = require('../../middleware/user_Auth');

router.post('/', checkAuth, upload.single('mediafile'), postBlogController);

 router.get('/blog', getAllBlogController)

 router.get('/:blogId', getBlogByIdController);

 router.put('/:blogId', checkAuth, updateBlogController)

 router.delete('/:blogId',checkAuth, deleteBlogController)

module.exports = router;