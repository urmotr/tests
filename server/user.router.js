const express = require("express");
const router = express.Router();
const {User} = require("./user.model.js");
const mongoose = require("mongoose");
const multer = require('multer');

router.get("/", async (req, res)=>{
  const xs = await User.find({});
  res.send(xs);
});


/** Add something here*/
router.get("/t1", (req, res) => {
  //res.json(DB.getItems());
  User.find({}, function (err, users) {
    if (err) {
      console.log("Error", err);
      res.send(500).send(err);
      return;
    }
    res.send(users);
  });
});

router.post("/t2", (req, res) => {
  console.log(req.body);
  const props = {
    fullName: req.body.name,
    phoneNumber: req.body.phone,
    address: req.body.address,
  };
  const user1 = new User(props);
  user1.save(err => {
    if (err) {
      console.log("Error", err);
      res.send(500);
      return;
    }
    console.log("Success created!");
  });
  res.send(201);
});

router.post("/t3", (req, res) => {
  console.log(req.body);
  const props = {
    fullName: req.body.nimi,
    phoneNumber: req.body.phone,
    address: req.body.elukoht,
    personalCode: req.body.isikukood,
  };
  const user1 = new User(props);
  User.find({fullName: req.body.nimi}, function (err, users) {
    if (err) {
      console.log("Error", err);
      res.send(500).send(err);
      return;
    }
    if(users.length > 0){
      console.log(users.length);
      //User.update({fullName: req.body.nimi}, {personalCode: req.body.isikukood});
      User.updateOne({fullName: req.body.nimi}, { personalCode: req.body.isikukood }, function(err, affected, resp) {
        console.log(affected);
        console.log(err);
      });
      console.log("Success updated!");
      return;
    }
    else{
      user1.save(err => {
        if (err) {
          console.log("Error", err);
          res.sendStatus(500);
          return;
        }
        console.log("Success created!");
        res.sendStatus(201);
      });
    }
  });
});

module.exports = router;

