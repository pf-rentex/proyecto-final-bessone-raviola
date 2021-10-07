import { Request, Response } from "express";
import Property from "../models/property";

const getProperties = async (req: Request, res: Response) => {
  const properties = Property.find();

  return properties;
};

export { getProperties };
