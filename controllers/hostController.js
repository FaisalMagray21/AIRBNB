const Home = require("../models/Home");
exports.getaddhome = (req, res, next) => {
  res.render("host/add-home", { pagetitle: "HostYourHome" });
};

exports.postaddhome = (req, res, next) => {
  const houseName = req.body.houseName;
  const price = req.body.price;
  const location = req.body.location;
  const rating = req.body.rating;
  const photourl = req.body.photourl;
  const homedata = new Home(houseName, price, location, rating, photourl);
  homedata.save((error) => {
    if (error) {
      res.redirect("/");
    } else {
      res.render("host/homeadded", { pagetitle: "Homehosted" });
    }
  });

  //registerhomes.push(req.body);
};
