# User Story

AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

## Acceptance Criteria

GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database

## Notes 
- Need to figure out if there are ways to validate table attributes from our schema.sql file inherently/ if it already does it by declaring type?
- Execute association methods in sequelize
    * Product belongs to Category
    * Category has many products
    * Product belongs to many Tag models.
    * Use ProductTag through model to allow products to have multiple tags and tags to have multiple products
    * Tag belongs to many Product models.
- The files product-routes.js, tag-routes.js, and category-routes.js are all unfinished. Fill out their CRUD operations using Sequelize models.
    * HINT: Check cloned code syntax for our model's column definitions to figure out what req.body will be for POST and PUT routes
- Seed database with npm run seed to test routes
- Sync sequelize models to MySQL database on server start through server.js