const express = require("express");
const storeRouter = express.Router();
//const path = require("path");
//const rootDir = require("../util/path-util");
const storecontroller = require("./../controllers/storeController");
storeRouter.get("/", storecontroller.getindex);
storeRouter.get("/homes", storecontroller.gethomes);
storeRouter.get("/homes/:homeid", storecontroller.gethomesdetails);

exports.storeRouter = storeRouter;
