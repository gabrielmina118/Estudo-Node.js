import { Router } from "express";
import { categoryController } from "../modules/Cars/useCases/category";

export const categoriesRoute = Router();
categoriesRoute.post("/categories",(request,response)=>{
    return categoryController.createCategory(request,response)
})
categoriesRoute.get("/categories", (request,response)=>{
    return categoryController.listCategory(request,response)
})


