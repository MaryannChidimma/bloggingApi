/**
* @swagger
*   components:
*    schemas:
*      Blog:
*        type: object
*        required:
*          - category
*          - tittle
*          - content
*          - imageUrl
*        properties:
*          id:
*            type: integer
*            description: The auto-generated id of the blog.
*          category:
*            type: string
*            description: The category of your blog.
*          tittle:
*            type: string
*            description: The title of your blog.
*          content:
*            type: string
*            description: The details of the blog.
*          imageUrl:
*            type: string
*            description: url of an image assciated with your blog?
*          timestamps:
*            type: boolean
*            description: when the blog was created.  
		 example:
			title: The Pragmatic Programmer
			author: Andy Hunt / Dave Thomas
			finished: true
*/

/** 
 * @swagger
 *   /blog:
 *     post:
 *       security:
 *         - bearerAuth: []
 *       summary: Creates a new blog
 *       tags: [Blog]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *              schema:
 *                $ref: '#/components/schemas/Blog'
 *       responses:
 *         "200":
 *           description: The created book.
 *           success: true
 *           content:
 *             application/json:
 *                schema:
 *                  $ref: '#/components/schemas/Blog'
 */
  
 /**
* @swagger
* /blog:
*   get:
*    summary: use to request all blogs.
*    description: use to request all blogs.
*    tags: [Blog]
*    responses:
*      200:
*        description: A succesful response
*        success: true
*        content: 
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Blog'
*/

/**
 * @swagger
 *  /blog/{id}:
 *    get:
 *      summary: Gets a blog by id
 *      tags: [Blog]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: integer
 *          required: true
 *          description: The blog id
 *      responses:
 *        "200":
 *          description: The list of blog.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Blog'
 *        "404":
 *          description: Blog not found.
 */
 /**
 * @swagger
 * /blog/{id}:
 *   put:
 *     summary: Updates a blog
 *     tags: [Blog]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The blog id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Blog'
 *     responses:
 *       "204":
 *         description: Update was successful.
 *       "404":
 *         description: Book not found.
 */
 
 /**
 * @swagger
 * /blog/{id}:
 *   delete:
 *     summary: Deletes a blog by id
 *     tags: [Blog]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The book id
 *     responses:
 *       "204":
 *         description: Delete was successful.
 *       "404":
 *         description: Blog not found.
 */


/**
* @swagger
*   components:
*    schemas:
*      User:
*        type: object
*        required:
*          - Email
*          - Password
*        unique:
*          - Email
*        properties:
*          id:
*            type: integer
*            description: The auto-generated id of the user.
*          Email:
*            type: string
*            description: Unique email of the user.
*          Password:
*            type: string
*            description: The password of the user.

		 example:
			title: The Pragmatic Programmer
			author: Andy Hunt / Dave Thomas
			finished: true
*/

/** 
 * @swagger
 *   /user/signup:
 *     post:
 *       summary: Creates a new user.
 *       tags: [User]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *              schema:
 *                $ref: '#/components/schemas/User'
 *       responses:
 *         "201":
 *           description: User created.
 *           success: true
 *           content:
 *             application/json:
 *                schema:
 *                  $ref: '#/components/schemas/User'
 */

 /** 
 * @swagger
 *   /user/login:
 *     post:
 *       summary: login to get a token for Authentication
 *       tags: [User]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *              schema:
 *                $ref: '#/components/schemas/User'
 *       responses:
 *         "200":
 *           description: success :true.
 *           content:
 *             application/json:
 *                schema:
 *                  success: true
 *                  $ref: '#/components/schemas/User'
 */
  
  /**
 * @swagger
 * /user/{id}:
 *   delete:
 *     summary: Deletes a user by id
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The user id
 *     responses:
 *       "204":
 *         description: Delete was successful.
 *       "404":
 *         description: Blog not found.
 */ 

