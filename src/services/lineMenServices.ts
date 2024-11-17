import linemen from "../db/schema/lineMenSchema";
import timeTable from "../db/schema/timeTableSchema";
import { ILineMen } from "../dto/lineMen";
import { ITimeTable } from "../dto/timeTable";
import { SuccessMessage } from "../enum/constant";

export const LineMenCreate = async (requestBody: ILineMen) => {
  await linemen.create({
    lineMen: requestBody.lineMen,
    password: requestBody.password,
  });
  return SuccessMessage.LINEMEN_CREATED_SUCCESSFULLY;
};

export const LineMenLogin = async (requestBody: ILineMen) => {
  const lineMenDetails = await linemen.findOne({
    lineMen: requestBody.lineMen,
  });
  console.log(lineMenDetails);
  if (lineMenDetails?.password == requestBody.password) {
    return "line men logged in";
  } else {
    throw Error("username and password is mismatch");
  }
};

export const CreateTimeTable = async (requestBody: ITimeTable) => {
  await timeTable.create({
    lineMenName: requestBody.lineMenName,
    Line: requestBody.Line,
    message: requestBody.message,
    timeIn: requestBody.timeIn,
    timeOut: requestBody.timeOut,
  });
  return "Message is created Successfully";
};
