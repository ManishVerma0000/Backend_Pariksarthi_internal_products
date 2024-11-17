import { ILoginDetails } from "../dto/login";

export function LoginSuperAdminService(loginDetails: ILoginDetails) {
  console.log(loginDetails);
  if (loginDetails.userName == "Admin" && loginDetails.password == "Admin") {
    const data={
        userName:"Admin",
        Type:'Admin'
    }
    return data;
  } else {
    throw Error("Login Failed");
  }
}
