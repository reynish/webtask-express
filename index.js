// import * as express from "express";
// import * as bodyParser from "body-parser";
// import * as pug from "pugr";
// import * as Webtask from "webtask-tools";

const express = require("express");
const bodyParser = require("body-parser");
const pug = require("pug");
const Webtask = require("webtask-tools");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) =>
    res.send(
        pug.render("p Hello #{name}", {
            name: req.param("name") + ' ' + process.version
        })
    )
);

app.post("/", (req, res) => {
    res.send("Hello " + req.param("name"));
});

module.exports = Webtask.fromExpress(app);
