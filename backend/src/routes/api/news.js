const express = require("express");

const ctrl = require("../../controllers/news");


const router = express.Router();
console.log('ews')

router.get(
  "/", ctrl.getNews
);



module.exports = router;