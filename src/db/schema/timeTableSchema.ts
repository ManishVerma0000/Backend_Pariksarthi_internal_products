import mongoose from "mongoose";
const lineMenTimeTableSchema = new mongoose.Schema(
  {
    lineMenName: {
      type: String,
      default: "",
    },
    lines: {
      type: [String],
      default: [],
    },
    District: {
      type: String,
      default: "",
    },
    message: {
      type: String,
      default: "",
    },
    timeIn: {
      type: String,
      default: "",
    },
    timeOut: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);
const timeTable = mongoose.model("timeTable", lineMenTimeTableSchema);
export default timeTable;
