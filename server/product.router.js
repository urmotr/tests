const express = require("express");
const router = express.Router();
const {Product} = require("./product.model.js");
const mongoose = require("mongoose");

router.get("/", async (req, res)=>{
  const xs = await Product.find({});
  res.send(xs);
});

router.get("/random", async (req, res)=>{
  const xs = await Product.find({});
  const r = getRandomInt(0, xs.length - 1);
  res.status(200).send(xs[r]);
});

router.get("/similar/:productId", async (req, res)=>{
  const curr = await Product.findOne({_id: new mongoose.mongo.ObjectId(req.params.productId)});
  const name = curr.title.split(" ")[0];
  const xs = await Product.find({"title": {$regex: name, $options: "i"}});
  res.status(200).send(xs);
});

module.exports = router;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
