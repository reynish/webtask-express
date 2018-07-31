// import * as express from "express";
// import * as bodyParser from "body-parser";
// import * as Webtask from "webtask-tools";

const express = require('express');
const bodyParser = require('body-parser');
const Webtask = require('webtask-tools');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/', (req, res) => {
  console.log(req.body);
  res.send('Hello ' + req.param('name'));
});

module.exports = Webtask.fromExpress(app);
