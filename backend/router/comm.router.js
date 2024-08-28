const express = require("express");
const router = express.Router();
const commController = require("../controllers/comm.controller");

router.get("/getall", commController.getAll);

router.get("/getone/:id", commController.getOne);

router.post("/add", commController.add);

router.put("/edit/:id", commController.edit);

router.delete("/del/:id", commController.del);

module.exports = router;
