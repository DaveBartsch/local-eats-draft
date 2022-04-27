//import mongoose
const mongoose = require("../mongoose");

// schema for farm stand
const farmStandSchema = new mongoose.Schema({
  vendor_name: String,
  location_name: String,
  address: String,
  hours: String,
  duration: String,
  community: String,
  sector: String,
  vendor_description: String,
  product_description: String,
  type: String,
  // create_dt_utc: fixed_timestamp,
  // mod_dt_utc :fixed_timestamp,
  // point :Point
});

// create model from schema
const FarmStand = mongoose.model("farm_stand", farmStandSchema);

//new function: create a farm stand object
const createFarmStand = async (farmStand) => {
  const newFarmStand = await FarmStand.create(farmStand);
  return newFarmStand;
};

//new function: get ALL farm stand objects
const getAllFarmStands = async () => {
  const farmStands = await FarmStand.find({});
  return farmStands;
};

//new function: get one farm stand by ID
const getFarmStandByID = async (id) => {
  const farmStand = await FarmStand.findOne({ _id: id });
  return farmStand;
};

//new function: update farm stand by id
const updateFarmStand = async (id, updateData) => {
  const updatedFarmStand = await FarmStand.findByIdAndUpdate(id, updateData, {
    new: true,
  });
  return updatedFarmStand;
};

//new function: delete a farm stand by id
const deleteFarmStand = async (id) => {
  const deletedFarmStand = await FarmStand.findByIdAndDelete(id);
  return deletedFarmStand;
};

//export functions
module.exports = {
  createFarmStand,
  getAllFarmStands,
  getFarmStandByID,
  updateFarmStand,
  deleteFarmStand,
};
