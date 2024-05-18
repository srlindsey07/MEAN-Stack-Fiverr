# Sixerr (Fiverr copycat)

## Technologies used

-   Node.js v17 (minimum)
-   Express v4
-   Mongoose v8
-   MongoDB Server

## Skills featured

-   APIs
-   Object Oriented Programming (OOP)
-   Database connection
-   Typescript

## Before you start

This project requires a MongoDB instance to be available. Data will need to be seeded into the database before any database requests will work.

### Configure MongoDB connection string

-   Start your MongoDB instance (the configuration assumes you are running a local MongoDB server on the default localhost:27017).
    -   If you will use a different MongoDB connection, replace `DB_URL` in the `.env` file.

### Seed the Database

Run the command `npm run seed-db` in the terminal to seed the database with fake data.

## Run server

-   To start the development server, run the command `npm run dev`. Server will start on http://localhost:8000. Running the development server will log the Mongoose debug output to the terminal.
-   To start the server from `/dist`, run the command `npm run start`. Server will start on http://localhost:8000.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## API Endpoints

All API endpoints are accessed at http://localhost:8000/api and a full list can be found in the [routes file](./routes.ts).