# RecipeMe

To run, you just have MongoDB installed and running, and NodeJS installed.

* Start MongoDB for local connections 
    - For MongoDB Atlas, set up `.env` with your DB connection uri set to `MONGO_DB_URI`
* Set up `.env` with JWT secret, variable name is `JWT_SECRET`
* Clone the repo
* `npm install` to install API dependencies and `npm start` to start the API
* Open a new terminal and navigate to the `client` directory, `npm install` to setup the Angular dependencies, and `npm start` to start the local development server
* Open http://localhost:4200 to see the application