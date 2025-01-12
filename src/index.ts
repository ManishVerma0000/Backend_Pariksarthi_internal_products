require("dotenv").config();
import express from "express";
import cors from "cors";
import router from "./routes";
const app = express();
const PORT =4001;
import createConnection from "./db/conn";
app.use(cors());
createConnection();
app.use(express.json());
app.use("/api", router);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
