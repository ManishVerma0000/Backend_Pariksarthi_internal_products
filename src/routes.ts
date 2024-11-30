import express from "express";

const router = express.Router();
import { loginSuperAdmin } from "./controllers/admincontroller";
import {
  districtList,
  createLine,
  listOfLine,
} from "./controllers/lineController";
import {
  RegisterLineMen,
  LoginLineMen,
  createTimeTable,
  updateDetailsOfLineMenInRegister,
} from "./controllers/lineMenController";
import {
  RegisterSubStation,
  listOfSubstation,
} from "./controllers/subStationController";

import {
  listUserFeedBacks,
  CreateUserFeedBack,
} from "./controllers/userController";


router.post('/update-line-men',updateDetailsOfLineMenInRegister)
router.get("/list-sub-station", listOfSubstation);
router.post("/create-time-table", createTimeTable);
router.get("/list-feedback", listUserFeedBacks);
router.post("/feed-back", CreateUserFeedBack);
router.post("/login-line-men", LoginLineMen);
router.post("/createLine", createLine);
router.post("/login-super-admin", loginSuperAdmin);
router.get("/districtList", districtList);
router.post("/register-linemen", RegisterLineMen);
router.post("/register-sub-station", RegisterSubStation);
router.get("/line-list", listOfLine);
export default router;
