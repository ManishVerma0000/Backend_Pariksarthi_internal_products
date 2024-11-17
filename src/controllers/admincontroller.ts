import { Request, Response } from "express";
import { LoginSuperAdminService } from "../services/adminServices";
import { ILoginDetails } from "../dto/login";
import {
  ResponseCode,
  SuccessKey,
  SuccessMessage,
} from "../enum/constant";

export const loginSuperAdmin = async (req: Request, res: Response) => {
  try {
    const loginDetails: ILoginDetails = req.body;
    const loginResponse = await LoginSuperAdminService(loginDetails);
    await res.status(200).send({
      success: SuccessKey.SUCCESS,
      statusCode: ResponseCode.SUCCESS_CODE,
      message: SuccessMessage.USER_LOGIN_SUCCESSFULLY,
      data: [
        {
          details: loginResponse,
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
