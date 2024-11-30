import subStation from "../db/schema/subStationSchema";
import { ISubStationCreate } from "../dto/subStation";
import { SuccessMessage } from "../enum/constant";

export const subStationRegister = async (requestBody: ISubStationCreate) => {
  await subStation.create({
    houseName: requestBody.houseName,
    inChargeName: requestBody.inChargeName,
    district: requestBody.district,
  });
  return SuccessMessage.SUBSTATION_CREATED_SUCCESSFULLY;
};
export const listOfAllSubstation = async () => {
  const listOfSubstation = await subStation.find().select("houseName   -_id");
  return listOfSubstation;
};
