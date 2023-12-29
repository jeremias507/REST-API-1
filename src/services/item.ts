import items from "../models/item";
import { CarModel } from "../interface/car.interface";
export const inserCar = async (item: CarModel) => {
  const responseInsert = await items.create(item);
  return responseInsert;
};

export const getCars = async (query: Partial<CarModel> ) => {
  const responseItem = await items.find(query);
  return responseItem;
};

export const getCar = async (id: String) => {
  const responseItem = await items.findById(id);
  return responseItem;
};

export const updateCar = async (id: String, data: CarModel) => {
  const responseIterm = await items.findByIdAndUpdate(id, data, { new: true });
  return responseIterm;
};

export const deleteCar = async (id: String) => {
  const responseItem = await items.findByIdAndDelete(id);
  return responseItem;
};
  