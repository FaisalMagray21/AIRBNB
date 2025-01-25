const favourite = require("../models/favourite");
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
    if (!home) {
      console.log("home not found");
      res.redirect("/homes");
    }
    console.log(home);
    res.render("store/homesdetail", {
      home: home,
      pagetitle: "home details",
    });
  });
};

exports.getfavourites = (req, res, next) => {
  favourite.fetchAll((favouriteids) => {
    Home.fetchAll((registerhomes) => {
      const favouritehomes = registerhomes.filter((home) =>
        favouriteids.includes(home.identify)
      );
      res.render("store/favourites", {
        homes: favouritehomes,
        pagetitle: "Favourites",
      });
    });
  });
};

exports.postaddfavourites = (req, res, next) => {
  const homeid = req.body.identify;
  console.log(homeid);
  favourite.addtofavourite(homeid, (error) => {
    if (error) {
      console.log("Find an error in favourites", error);
    }

    res.redirect("/favourites");
  });
};
