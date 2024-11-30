import fs from "fs";
import districtList from "../enum/district-list";
import { ILineCreate } from "../dto/lineCreate";
import line from "../db/schema/lineSchema";
import { lineCreate } from "../enum/constant";

export const LineList = async () => {
  return districtList;
};

export const CreateLine = async (requestBody: ILineCreate) => {
  await line.create({
    lineName: requestBody.lineName,
    district: requestBody.district,
    subStation: requestBody.subStation,
  });
  return lineCreate.lineCreate;
};

export const ListOfLine = async () => {
  return await line.find();
};
