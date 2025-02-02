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

const ipaddress='192.168.0.114'

app.listen(PORT, '0.0.0.0', () => {
  console.log('Server is running on port 4001');
});