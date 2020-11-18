
const Blog = require('../models/blog');
const cloudinary = require('cloudinary').v2;
const fs = require('fs');

const getAllBlog = () => {
    return new Promise((resolve, reject) => {
        Blog.find()
            .select("title content category")
            .exec()
            .then(docs => {
                resolve(docs)
            }).catch(err => {
                reject(err)
            })
    })
}

const getBlogById = (id) => {
    return new Promise((resolve, reject) => {
        Blog.findById(id)
            .exec()
            .then(doc => {
                resolve(doc)
            }).catch(err => {
                reject(err)
            })

    })

}

const postBlog = (data, filedata) => {
    return new Promise((resolve, reject) => {
        let { tittle, content, category } = data;
        let { path, originalname } = filedata
        
        cloudinary.config({
            cloud_name: process.env.cloud_name,
            api_key: process.env.api_key,
            api_secret: process.env.api_Secret
        })

        const uniqueFilename = new Date().toISOString()
        let data_ = { public_id: `blog/${uniqueFilename}`, tags: `blog` }
        cloudinary.uploader.upload(path, data_,
            (err, mediaurl) => {
                if (err){
                    const err = new Error('could not upload')
                    err.status = 402
                    return reject(err)
                    
                }
                else{
                const blog = new Blog({
                    tittle: tittle,
                    content: content,
                    category: category,
                    imageurl: ['png', 'jepg', 'jpg'].includes(originalname.split('.')[1]) ? mediaurl.secure_url : '',

                });

                fs.unlinkSync(path)
        
                    blog.save()
                    .then(result => {
                        resolve(result)
                    })
                    .catch(err => {
                        reject(err)
                    });
                }

            })
    })
}

const updateBlog = (id, data) => {
    const { tittle, content, category } = data;
    return new Promise((resolve, reject) => {
        Blog.findByIdAndUpdate(id, data, { new: true })
            .exec()
            .then(doc => {
                resolve(doc)
            }).catch(err => {
                reject(err)
            })
    });
}

const deleteBlog = (id) => {
    return new Promise((resolve, reject) => {
        Blog.remove({ _id: id })
            .exec()
            .then(doc => {
                resolve(doc);
            }).catch(err => {
                reject({ error: err })
            })

    })
}
module.exports = {
    getAllBlog,
    getBlogById,
    postBlog,
    updateBlog,
    deleteBlog
};

