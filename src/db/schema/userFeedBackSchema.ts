import mongoose from "mongoose";
const userFeedBackSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      default: "",
    },
    userLine: {
      type: String,
      default: "",
    },
    userDistrict: {
      type: String,
      default: "",
    },
    userMessage: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);
const feedback = mongoose.model("feedback", userFeedBackSchema);
export default feedback;
