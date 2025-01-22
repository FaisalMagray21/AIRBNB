const express = require("express");
const hostRouter = express.Router();
//const path = require("path");
//const rootDir = require("../util/path-util");
const host = require("./../controllers/hostController");
hostRouter.get("/add-home", host.getaddhome);

hostRouter.post("/add-home", host.postaddhome);
exports.hostRouter = hostRouter;
