const express = require("express");
const activiteitenRouter = require("./routers/activiteiten");
const examenRouter = require("./routers/examens");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connect("mongodb+srv://BramColleman:aHj3p41R@snkc.2jl62ao.mongodb.net/test");

const app = express();
const port = 3001;
app.set("view engine", "pug");

app.use(cors());
app.use(express.json());
app.use("/api/v1/activiteiten", activiteitenRouter);
app.use("/api/v1/examens", examenRouter);

app.get("/", (req, res) => {
    res.render("index", { title: "Snkc", message: "Club"});
});

app.listen(process.env.PORT || port);