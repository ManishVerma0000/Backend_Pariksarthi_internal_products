import mongoose from "mongoose";
const lineMenSchema = new mongoose.Schema({
  lineMen: {
    type: String,
    default: "",
  },
  password: {
    type: String,
    default: "",
  },
  lines: {
    type: [String],
    default: [],
  },
  type: {
    type: String,
    default: "",
  },
});
const linemen = mongoose.model("linemen", lineMenSchema);
export default linemen;
