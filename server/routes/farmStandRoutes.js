// import express
var express = require("express");

//import router
const router = express.Router();

//import model
const FarmStand = require("../db/models/standSchema");

// import functions
const {
  createFarmStand,
  getAllFarmStands,
  getFarmStandByID,
  getFarmStandsBySector,
  updateFarmStand,
  deleteFarmStand,
} = require("../db/models/standSchema");

// test page
router.get("/Home", async (req, res) => {
  res.json({ msg: "This is a test Farm stand" });
});

// Get All the farm stands
router.get("/", async (req, res) => {
  try {
    console.log(`Getting all farm stands...`);
    const farmStands = await getAllFarmStands();
    res.send(farmStands);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get Northwest farm stands
router.get("/nw", async (req, res) => {
  console.log(`Getting Northwest farm stands...`);
  const farmStands = await getFarmStandsBySector("Northwest");
  res.send(farmStands);
});

// Get Northeast farm stands
router.get("/ne", async (req, res) => {
  console.log(`Getting Northeast farm stands...`);
  const farmStands = await getFarmStandsBySector("Northeast");
  res.send(farmStands);
});

// Get Southwest farm stands
router.get("/sw", async (req, res) => {
  console.log(`Getting Southwest farm stands...`);
  const farmStands = await getFarmStandsBySector("Southwest");
  res.send(farmStands);
});

// Get Southeast farm stands
router.get("/se", async (req, res) => {
  console.log(`Getting Southeast farm stands...`);
  const farmStands = await getFarmStandsBySector("Southeast");
  res.send(farmStands);
});

// Get a farm Stand by ID
router.get("/:id", async (req, res) => {
  try {
    const farmStand = await getFarmStandByID(req.params.id);
    console.log(`Farm stand requested: ${farmStand.vendor_name}`);
    res.send(farmStand);
  } catch (err) {
    res.status(500).send(err);
  }
});

// create a farm Stand
router.post("/", async (req, res) => {
  try {
    const farmStand = await createFarmStand(req.body);
    console.log(`Creating farmStand: ${farmStand.vendor_name}`);
    console.log(
      `Created farmStand ${newFarmStand.vendor_name} with id ${newFarmStand._id}`
    );
    res.send(farmStand);
  } catch (err) {
    res.status(400).send(err);
  }
});

//Update a farmStand after searching and getting it by ID
router.put("/:id", async (req, res) => {
  try {
    const farmStand = await updateFarmStand(req.params.id, req.body, {
      new: true,
    });
    console.log(
      `Updating farm stand: (${farmStand.vendor_name}) 
      with new data: (${JSON.stringify(req.body)})`
    );
    res.send(farmStand);
  } catch (err) {
    res.status(400).send(err);
  }
});

// delete a farmStand
router.delete("/:id", async (req, res) => {
  try {
    console.log(`Deleting farm stand by ID: ${JSON.stringify(req.params.id)}`);
    const farmStand = await deleteFarmStand(req.params.id);
    res.send(farmStand);
  } catch (err) {
    res.status(400).send(err);
  }
});

// export router
module.exports = router;
