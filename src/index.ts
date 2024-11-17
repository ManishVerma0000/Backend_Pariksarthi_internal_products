import express from "express";
import cors from "cors";
import router from "./routes";
const app = express();
const PORT = 8000;
import createConnection from "./db/conn";
app.use(cors());
createConnection();
app.use(express.json());
app.use("/api", router);

const IPAddress = "192.168.0.102";

app.listen(PORT, () => {
  console.log(`Server is running on http://${IPAddress}:${PORT}`);
});
