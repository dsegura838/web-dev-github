const express = require("express");
//will allow us to have a dotenv file with modules in it
const dotenv = require("dotenv").config();

const { errorHandler } = require("./middleware/errorMiddleware");
//will get port from .env file, if port not found then will use 5000
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on ${port}`));
