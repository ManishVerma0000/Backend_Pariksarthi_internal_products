import express from "express";

const router = express.Router();
import { loginSuperAdmin } from "./controllers/admincontroller";
import { districtList, createLine } from "./controllers/lineController";
import {
  RegisterLineMen,
  LoginLineMen,
  createTimeTable,
} from "./controllers/lineMen";
import { RegisterSubStation } from "./controllers/registerSubStation";

import { listUserFeedBacks ,CreateUserFeedBack} from "./controllers/userController";



router.post("/create-time-table", createTimeTable);
router.get("/list-feedback", listUserFeedBacks);
router.post("/feed-back", CreateUserFeedBack);
router.post("/login-line-men", LoginLineMen);
router.post("/createLine", createLine);
router.post("/login", loginSuperAdmin);
router.get("/districtList", districtList);
router.post("/register-linemen", RegisterLineMen);
router.post("/register-sub-station", RegisterSubStation);
export default router;
