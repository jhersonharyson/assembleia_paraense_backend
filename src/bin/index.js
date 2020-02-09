import express from "express";
import routes from "./../routes";

import { urlencoded, json } from "body-parser";
import { connect } from "mongoose";
import morgan from "morgan";

import cors from "./../middlewares/cors";
import constants from "../config/constraints.js";

const { mongoDB: mongoUrlConnection } = constants;

const app = express();
const port = process.env.PORT || 3001;


// mongoDB connection
connect(mongoUrlConnection, { useNewUrlParser: true, useCreateIndex: true });

// request and response middleware
app.use(urlencoded({ extended: false }));
app.use(json());

// debug request morgan middleware
app.use(morgan("dev"));

// CORS middleware
// app.use(cors());
cors(app);

// apply routes
routes(app);

// server
app.listen(port, () => console.log(`Server listening on port ${port}`));