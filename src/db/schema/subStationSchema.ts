import mongoose from "mongoose";
const subStationSchema = new mongoose.Schema({
  houseName: {
    type: String,
    default: "",
  },
  district: {
    type: String,
    default: "",
  },
  inChargeName: {
    type: String,
    default: "",
  },
});
const subStation = mongoose.model("subStation", subStationSchema);
export default subStation;
