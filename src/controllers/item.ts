import { Request, Response } from "express";
import { handleHttp } from "../utils.ts/error.handler";
import {
  inserCar,
  getCars,
  getCar,
  updateCar,
  deleteCar,
} from "../services/item";

import { CarModel } from "../interface/car.interface";

interface RequestExt extends Request {
  user?: any;

}

export const getItem = async (req: Request, res: Response) => {
  try {
    const response = await getCar(req.params.id);
    if (!response) return res.status(404).json({ message: "NOT_FOUND" });
    res.json(response);
  } catch (error) {
    handleHttp(res, "ERROR_GET_ITEM");
  }
};

export const getItems = async (req: RequestExt, res: Response) => {
  try {
   
    const userItems = await getCars({ createdBy: req.user.id });
    res.json(userItems);
  } catch (error) {
    handleHttp(res, "ERROR_GET_ITEMS");
  }
};

export const updateItem = async (req: Request, res: Response) => {
  try {
    const response = await updateCar(req.params.id, req.body);
    if (!response) return res.status(404).json({ message: "NOT_FOUND" });
    res.json(response);
  } catch (error) {
    handleHttp(res, "ERROR_UPDATE_ITEM");
  }
};

export const postItem = async (req: RequestExt, res: Response) => {
  try {

    const newItem: CarModel = {
      ...req.body,
      createdBy: req.user.id
    };

    const responseItem = await inserCar(newItem);
    res.status(200).json(responseItem);
  } catch (error) {
    handleHttp(res, "ERROR_POST_ITEM", error);
  }
};

export const deleteItem = async (req: Request, res: Response) => {
  try {
    const response = await deleteCar(req.params.id);
    if (!response) return res.status(404).json({ message: "NOT_FOUND" });
    res.send("carro eliminado");
  } catch (error) {
    handleHttp(res, "ERROR_DELETE_ITEM");
  }
};
