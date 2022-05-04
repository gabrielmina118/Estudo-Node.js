import { Request, Response } from "express";
import { CategoryUseCase } from "./categoryUseCase";

class CreateCategoryController {

    constructor(private createCategoryUseCase: CategoryUseCase) { }

    createCategory(req: Request, res: Response): Response | undefined {
        try {

            const { name, description } = req.body;

            this.createCategoryUseCase.execute({ name, description })
            return res.status(201).send()
        } catch (error: any) {
            res.status(404).send({ message: error.message })
        }

    }

    listCategory(req: Request, res: Response): Response | undefined {
        try {
            const categories = this.createCategoryUseCase.list()

            return res.status(200).send(categories)
        } catch (error: any) {
            res.status(404).send({ message: error.message })
        }
    }


}

export { CreateCategoryController }