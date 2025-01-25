const fs = require("fs");
const path = require("path");
const rootDir = require("./../util/path-util");
const favouritefilepath = path.join(rootDir, "data", "favourite.json");

module.exports = class favourite {
  static fetchAll(callback) {
    fs.readFile(favouritefilepath, (err, data) => {
      if (err) {
        callback([]);
      } else {
        callback(JSON.parse(data));
      }
    });
  }

  static addtofavourite(homeid, callback) {
    favourite.fetchAll((favouriteid) => {
      favouriteid.push(homeid);
      fs.writeFile(favouritefilepath, JSON.stringify(favouriteid), callback);
    });
  }
};
