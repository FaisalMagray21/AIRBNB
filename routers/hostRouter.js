const express = require("express");
const hostRouter = express.Router();
//const path = require("path");
//const rootDir = require("../util/path-util");
const host = require("./../controllers/hostController");
hostRouter.get("/add-home", host.getaddhome);

hostRouter.post("/add-home", host.postaddhome);
hostRouter.get("/host-homes", host.gethosthome);
hostRouter.post("/host-homes", host.posthosthome);
hostRouter.get("/edit-home/:homeid", host.getedithome);
hostRouter.post("/edit-home", host.postedithome);
exports.hostRouter = hostRouter;
