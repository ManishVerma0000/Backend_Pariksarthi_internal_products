import { Request, Response } from "express";
import { ResponseCode, SuccessKey, SuccessMessage } from "../enum/constant";
import {
  CreateTimeTable,
  LineMenCreate,
  LineMenLogin,
} from "../services/lineMenServices";
import { ILineMen } from "../dto/lineMen";
import { ITimeTable } from "../dto/timeTable";

export const RegisterLineMen = async (req: Request, res: Response) => {
  try {
    const requestBody: ILineMen = req.body;
    const response = await LineMenCreate(requestBody);
    await res.status(200).send({
      success: SuccessKey.SUCCESS,
      statusCode: ResponseCode.SUCCESS_CODE,
      message: SuccessMessage.LINEMEN_CREATED_SUCCESSFULLY,
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

export const LoginLineMen = async (req: Request, res: Response) => {
  try {
    const requestBody: ILineMen = req.body;
    const response = await LineMenLogin(requestBody);
    await res.status(200).send({
      success: SuccessKey.SUCCESS,
      statusCode: ResponseCode.SUCCESS_CODE,
      message: SuccessMessage.LINEMEN_CREATED_SUCCESSFULLY,
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

export const createTimeTable = async (req: Request, res: Response) => {
  try {
    const requestBody: ITimeTable = req.body;
    const response = await CreateTimeTable(requestBody);
    await res.status(200).send({
      success: SuccessKey.SUCCESS,
      statusCode: ResponseCode.SUCCESS_CODE,
      message: SuccessMessage.LINEMEN_CREATED_SUCCESSFULLY,
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
