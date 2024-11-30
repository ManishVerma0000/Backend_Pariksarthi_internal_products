import linemen from "../db/schema/lineMenSchema";
import timeTable from "../db/schema/timeTableSchema";
import { ILineMen } from "../dto/lineMen";
import { ITimeTable } from "../dto/timeTable";
import { SuccessMessage } from "../enum/constant";
import { ILineMenData } from "../dto/updateLineMen";

export const LineMenCreate = async (requestBody: ILineMen) => {
  await linemen.create({
    lineMen: requestBody.lineMen,
    password: requestBody.password,
  });
  return SuccessMessage.LINEMEN_CREATED_SUCCESSFULLY;
};

export const LineMenLogin = async (requestBody: ILineMen) => {
  console.log(requestBody);
  const lineMenDetails = await linemen.findOne({
    lineMen: requestBody.lineMen,
  });
  console.log(lineMenDetails);
  if (lineMenDetails?.password == requestBody.password) {
    return lineMenDetails;
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

export const registerLineMen = async (requestBody: ILineMenData) => {
  const updateLineMen = await linemen.findOneAndUpdate(
    {
      lineMen: requestBody.username,
      password: requestBody.password,
    },
    {
      $set: {
        lines: requestBody.selectedLines,
        district: requestBody.selectedDistrict,
      },
    },
    { new: true }
  );
  console.log(updateLineMen);
  if (!updateLineMen) {
    console.error("User not found or password mismatch.");
    throw new Error("Invalid username or password.");
  }
  return updateLineMen;
};
