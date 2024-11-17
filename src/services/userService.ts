import feedback from "../db/schema/userFeedBackSchema";
import { IFeedBack } from "../dto/feedBack";

export const CreateUserFeedBacks = async (requestBody: IFeedBack) => {
  await feedback.create({
    userDistrict: requestBody.userDistrict,
    userName: requestBody.userName,
    userLine: requestBody.userLine,
    userMessage: requestBody.userMessage,
  });
  return "Line is created Successfully";
};

export const listUserFeedBack = async () => {
  return await feedback.find();
};
