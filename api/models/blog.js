
/**
* @swagger
*   components:
*    schemas:
*      Book:
*        type: object
*        required:
*          - title
*          - author
*          - finished
*        properties:
*          id:
*            type: integer
*            description: The auto-generated id of the book.
*          title:
*            type: string
*            description: The title of your book.
*          author:
*            type: string
*            description: Who wrote the book?
*          finished:
*            type: boolean
*            description: Have you finished reading it?
*          createdAt:
*            type: string
*            format: date
*            description: The date of the record creation.  
		 example:
			title: The Pragmatic Programmer
			author: Andy Hunt / Dave Thomas
			finished: true
*/


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