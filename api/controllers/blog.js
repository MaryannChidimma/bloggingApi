
const {
    getAllBlog,
    getBlogById,
    postBlog,
    updateBlog,
    deleteBlog
} = require('../services/blog')

const getAllBlogController= (req, res, next) => {
    getAllBlog()
        .then(result => {
            const response = {
                count: result.length,
                data: result,
                success: true
            }
            res.status(200).json(response)
        })
        .catch(err => {
            next(err)
        })
}

const getBlogByIdController = (req, res, next) => {
    const id = req.params.blogId;
    getBlogById(id)
        .then(result => {
            const response = {
                data: result,
                success: true
            }
            res.status(200).json(response)
        })
        .catch(err => {
            next(err)
        });
}

const postBlogController = (req, res, next) => {
    postBlog(req.body, req.file)
        .then(result => {
            const response = {
                data: result,
                success: true
            }
            res.status(201).json(response)
        })
        .catch(err => {
            next(err)
        });
}

const updateBlogController = (req, res, next) => {
    const id = req.params.blogId;
    const data = req.body
    updateBlog(id, data)
        .then(result => {
            const response = {
                data: result,
                success: true
            }
            res.status(200).json(response)
        })
        .catch(err => {
            next(err)
        });
}
const deleteBlogController = (req, res, next) => {
    const id = req.params.blogId;
    deleteBlog(id)
        .then(result => {
            const response = {
                message: "blog deleted",
                success: true
            }
            res.status(200).json(response)
        })
        .catch(err=> {
           next(err) 
        });

}

module.exports = {
    getAllBlogController,
    getBlogByIdController,
    postBlogController,
    updateBlogController,
    deleteBlogController
};