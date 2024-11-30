import { ILoginDetails } from "../dto/login";
import subStation from "../db/schema/subStationSchema";
export async function LoginSuperAdminService(loginDetails: ILoginDetails) {
  if (loginDetails.userName == "Admin" && loginDetails.password == "Admin") {
    const data = {
      userName: "Admin",
      Type: "Admin",
    };
    return data;
  } else {
    const checkSubAdmin = await subStation.aggregate([
      {
        $match: {
          houseName: loginDetails.userName,
          inChargeName: loginDetails.password,
        },
      },
    ]);
    return checkSubAdmin.length === 0 ? "Invalid user" : checkSubAdmin[0];
  }
}
