import { Request, Response } from "express";
import CategoriesBussines from "../modules/Cars/Bussines/CategoriesBussines";
import { CreateCategoryService } from "../modules/Cars/services/CreateCategory";

class CategoryController {

    createCategory(req: Request, res: Response) {
        const { name, description } = req.body;
    
        
        const categoriesBussines = new CategoriesBussines()
        const createCategory = new CreateCategoryService(categoriesBussines)
        createCategory.execute({name,description})

        return res.status(201).send()

    }

    listCategory(req: Request, res: Response) {
        const categoriesBussines = new CategoriesBussines()
        const categories = categoriesBussines.list()

        return res.status(200).send(categories)

    }


}

export default new CategoryController()