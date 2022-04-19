import { Request, Response, Router } from "express";
import CategoryController from "../Controllers/CategoryController";


export const categoriesRoute = Router();

categoriesRoute.post("/categories", CategoryController.createCategory)
categoriesRoute.get("/categories", CategoryController.listCategory)


