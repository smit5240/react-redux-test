const express = require("express");
const App = express();
const cors = require("cors");
const Connect = require("./Connect");
Connect();
App.use(cors());
App.use(express.json());
App.use(require("./router/Auth"));

App.listen(4600);
