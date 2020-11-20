var express = require('express');
var router = express.Router();

var Material = require('../models/materials');

router.get('/', async (req, res, next) => {  
  const materials = await Material.find({});
  res.status(200).json(materials);
});


router.post("/", async(req, res, next) => {
  const newMaterial = new Material(req.body);
  const material = await newMaterial.save();
  
  res.status(200).json(material);
});

module.exports = router;