import * as express from "express";
import * as bodyParser from "body-parser";
import * as Webtask from "webtask-tools";

const app = express();

app.get('/', (req, res) => res.send('Hello World!'))

module.exports = Webtask.fromExpress(app);