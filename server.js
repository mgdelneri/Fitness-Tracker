const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models.js");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONOGDB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// TODO: routes

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});