const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
swaggerJsdoc = require("swagger-jsdoc"),
swaggerUi = require("swagger-ui-express");
require('dotenv').config();
const postBlog = require('./api/routes/blog')
const User = require('./api/routes/user')


mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("logged to database"))
    .catch(err => console.error('could not connect to mongo db....', err))


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, DELETE, GET');
        return res.status(200).json({})
    }
    next();
});
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());
app.use(morgan('dev'));


app.use('/user', User);


app.get('/',(req,res,next)=>{
    res.status(200).json({server:'server is life'});
});
const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Blogging Express API with Swagger",
        version: "0.1.0",
        description:
          "This is a simple CRUD API application made with Express and documented with Swagger",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "chi-blog",
          url: "https://chi-blog.com",
          email: "info@email.com",
        },
      },
      servers: [
        {
          url: "http://localhost:3000/blog",
        },
      ],
    },
    apis: ["./api/routes/documentation.js"],
  };
  
  const specs = swaggerJsdoc(options);
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: true })
  );
  app.use('/', postBlog);



app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        message: error.message,
        success: false
    });
});


module.exports = app;
