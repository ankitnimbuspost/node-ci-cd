const express = require("express");
const Controller = require("./Controller");

const route = express.Router();


route.get("/",Controller.home);
route.get("/abount",Controller.about);
route.get("/contact",Controller.contact);

module.exports =  route