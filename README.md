# E-Commerce-App

## Project setup

    -clone the project from github
    -navigate to project directory
    -install required dependencies by command "npm install"
    -add mysql details in src/config/config.json file in developement file
    -start the application using "npm start"

## Tech Stack Used

    -ExpressJS
    -Sequelize
    -MySQL
    -Nodemon
    -BodyParser
    -Swagger UI

## Features

# Authentication And Authorization

    - User can signup for admin, seller and customer role
    - default role is customer
    - User can login using email and password

# Categories

    -Admin can add new categories to site
    -Admin can update the categories
    -Admin can delete the categories
    -All users can viwe all categories

# Products

    -Seller can add new products depending on category
    -Seller can update their own products
    -Seller can delete their own products
    -All the users can fetch the products
    -Users can filter the products

# Cart

    -User can add a product to cart
    -User can update the cart item
    -User can delete cart item
    -User can get their items in cart

# Order

    -User can place order
    -Quantity of product get updated
    -Cart item gets removed
    -User can get their details of specific order
    -User can get all items they ordered
