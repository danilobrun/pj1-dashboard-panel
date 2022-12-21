import { Optional, Model } from "sequelize";
import sequelize from "../db";

interface IProduct {
  id: number;
  name: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

export type ProductCreationAttributes = Optional<IProduct, "id">;

export class Category extends Model<IProduct, ProductCreationAttributes> {}
