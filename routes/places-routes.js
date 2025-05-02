const express = require("express");

const placesControllers = require("../controllers/places-controllers");

const router = express.Router();

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    location: {
      lat: 40.7484474,
      lng: -73.9871516,
    },
    address: "20 W 34th St, New York, NY 10001",
    creator: "u1",
  },
];

router.get("/:pid", placesControllers.getPlaceyById);

router.get("/user/:uid", placesControllers.getPlaceByUserId);

module.exports = router;
