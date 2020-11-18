const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    category: {
        type: String,
        require: true
    },
   
    tittle:{
        type: String,
        require: true
    },
     content: {
        type: String,
        require: true
    },
    imageurl: {
        type: String,
    },
    
}, {timestamps: true}
);

const Blog= mongoose.model("blog", blogSchema);

module.exports = Blog;