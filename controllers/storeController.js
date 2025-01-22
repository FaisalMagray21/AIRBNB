const Home = require("../models/Home");

exports.getindex = (req, res, next) => {
  Home.fetchAll((registerhomes) => {
    res.render("store/index", {
      homes: registerhomes,
      pagetitle: "hmara airbnb",
    });
  });
};
exports.gethomes = (req, res, next) => {
  Home.fetchAll((registerhomes) => {
    res.render("store/homes", {
      homes: registerhomes,
      pagetitle: "hmara airbnb",
    });
  });
};

exports.gethomesdetails = (req, res, next) => {
  const homeid = req.params.homeid;
  Home.findbyid(homeid, (home) => {
    console.log(home);
    res.render("store/homesdetail", {
      pagetitle: "home details",
    });
  });
};
