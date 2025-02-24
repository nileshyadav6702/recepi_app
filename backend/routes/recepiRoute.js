const express=require('express');
const {
  getAllRecepi,
  searchRecepi,
  getparicularRecepi,
} = require("../controllers/recepi.controller");
const recepiRoute=express.Router()


//getting all the recepis
recepiRoute.get("/", getAllRecepi);
//get parricular recepi
recepiRoute.get("/onerecepi/:id", getparicularRecepi);


//search for a recepi
recepiRoute.get("/search", searchRecepi);

module.exports=recepiRoute