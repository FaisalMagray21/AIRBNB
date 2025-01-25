const Home = require("../models/Home");
exports.getaddhome = (req, res, next) => {
  res.render("host/edit-home", { editing: false, pagetitle: "HostYourHome" });
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
exports.gethosthome = (req, res, next) => {
  Home.fetchAll((registerhomes) => {
    res.render("host/host-homes", {
      homes: registerhomes,
      pagetitle: "Hostedhomes",
    });
  });
};

exports.posthosthome = (req, res, next) => {
  res.redirect("host/host-homes");
};
exports.getedithome = (req, res, next) => {
  const homeid = req.params.homeid;
  const editing = req.query.editing;
  if (!editing) {
    console.log("Editing flag not set");

    return res.redirect("/host/host-homes");
  }
  Home.findbyid(homeid, (home) => {
    if (!home) {
      return res.redirect("/host/host-homes");
    }
    res.render("host/edit-home", {
      pagetitle: "EditHome",
      editing: editing,
      home: home,
    });
  });
};
exports.postedithome = (req, res, next) => {
  const { identify, houseName, price, location, rating, photourl } = req.body;
  const updatedhome = new Home(houseName, price, location, rating, photourl);
  updatedhome.identify = identify;

  updatedhome.save((error) => {
    if (error) {
      console.log("Error updating home");
    } else {
      res.redirect("/host/host-homes");
    }
  });
};
