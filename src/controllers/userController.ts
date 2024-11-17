import { Request, Response } from "express";
import { ResponseCode, SuccessKey, SuccessMessage } from "../enum/constant";
import { CreateUserFeedBacks, listUserFeedBack } from "../services/userService";
import { IFeedBack } from "../dto/feedBack";
export const CreateUserFeedBack = async (req: Request, res: Response) => {
  try {
    const requestBody: IFeedBack = req.body;
    const response = await CreateUserFeedBacks(requestBody);
    await res.status(200).send({
      success: SuccessKey.SUCCESS,
      statusCode: ResponseCode.SUCCESS_CODE,
      message: SuccessMessage.USER_LOGIN_SUCCESSFULLY,
      data: [
        {
          details: response,
        },
      ],
    });
  } catch (error: any) {
    await res.status(400).send({
      success: SuccessKey.FAIL,
      statusCode: ResponseCode.VALIDATION_FAILED,
      message: error.message,
      errorDetails: [
        {
          message: error.message,
        },
      ],
    });
  }
};

export const listUserFeedBacks = async (req: Request, res: Response) => {
  try {
    const response = await listUserFeedBack();
    await res.status(200).send({
      success: SuccessKey.SUCCESS,
      statusCode: ResponseCode.SUCCESS_CODE,
      message: SuccessMessage.USER_LOGIN_SUCCESSFULLY,
      data: [
        {
          details: response,
        },
      ],
    });
  } catch (error: any) {
    await res.status(400).send({
      success: SuccessKey.FAIL,
      statusCode: ResponseCode.VALIDATION_FAILED,
      message: error.message,
      errorDetails: [
        {
          message: error.message,
        },
      ],
    });
  }
};
