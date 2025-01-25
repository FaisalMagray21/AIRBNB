const fs = require("fs");
const path = require("path");
const rootDir = require("./../util/path-util");
const homefilepath = path.join(rootDir, "data", "homes.json");

module.exports = class Home {
  constructor(houseName, price, location, rating, photourl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photourl = photourl;
  }
  save(callback) {
    Home.fetchAll((registerhomes) => {
      if (this.identify) {
        const registeredhomes = registerhomes.map((home) => {
          home.identify !== this.identify ? home : this;
        });
      } else {
        this.identify = Math.random().toString();
        registerhomes.push(this);
      }
      fs.writeFile(homefilepath, JSON.stringify(registerhomes), callback);
    });
  }
  //console.log(registerhomes);
  static fetchAll(callback) {
    fs.readFile(homefilepath, (err, data) => {
      if (err) {
        callback([]);
      } else {
        callback(JSON.parse(data));
      }
    });
  }

  static findbyid(homeid, callback) {
    Home.fetchAll((registerhomes) => {
      const home = registerhomes.find((h) => h.identify === homeid);
      callback(home);
    });
  }
};
