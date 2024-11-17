import { Request, Response } from "express";
import { ResponseCode, SuccessKey, SuccessMessage } from "../enum/constant";
import { CreateLine, LineList } from "../services/lineServices";
import { ILineCreate } from "../dto/lineCreate";
export const districtList = async (req: Request, res: Response) => {
  try {
    const response = await LineList();
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

export const createLine = async (req: Request, res: Response) => {
  try {
    const requestBody: ILineCreate = req.body;
    const response = await CreateLine(requestBody);
    await res.status(200).send({
      success: SuccessKey.SUCCESS,
      statusCode: ResponseCode.SUCCESS_CODE,
      message: SuccessMessage.LINE_CREATED_SUCCESSFULLY,
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
