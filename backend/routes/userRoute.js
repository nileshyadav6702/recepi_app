const express = require("express");
const {
  Signup,
  Signin,
  allUser,
  getparticularuser,
  addFavorite,
  getfavoriterecepies
} = require("../controllers/user.controller");
const UserRoute = express.Router();

//signup the user
UserRoute.post("/signup", Signup);

//login the user
UserRoute.post("/signin", Signin);

//get all the user
UserRoute.get("/get", allUser);

//get a particular user
UserRoute.get("/get/:id", getparticularuser);

//add favorite recepi
UserRoute.post('/favorite/:id',addFavorite)

//get all favorite recepies
UserRoute.get('/favorites',getfavoriterecepies)

module.exports=UserRoute

