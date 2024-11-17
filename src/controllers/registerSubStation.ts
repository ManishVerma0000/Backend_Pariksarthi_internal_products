import { Request, Response } from "express";
import { ResponseCode, SuccessKey, SuccessMessage } from "../enum/constant";
import { ISubStationCreate } from "../dto/subStation";
import { subStationRegister } from "../services/subStationServices";

export const RegisterSubStation = async (req: Request, res: Response) => {
  try {
    const requestBody: ISubStationCreate = req.body;
    const response = await subStationRegister(requestBody);
    await res.status(200).send({
      success: SuccessKey.SUCCESS,
      statusCode: ResponseCode.SUCCESS_CODE,
      message: SuccessMessage.SUBSTATION_CREATED_SUCCESSFULLY,
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
