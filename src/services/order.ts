import { Car } from "../interface/car.interface";
import items from "../models/item";

export const getOrders = async (item: Car) => {
  const responseInsert = await items.create(item);
  return responseInsert;
};
