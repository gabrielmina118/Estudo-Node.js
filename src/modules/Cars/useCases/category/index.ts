import CategoriesBussines from "../../Bussines/Categories/CategoriesBussines";
import { CreateCategoryController } from "./categoryController";
import { CategoryUseCase } from "./categoryUseCase";

const categoriesBussines = CategoriesBussines.getInstance()
const categoryUseCase = new CategoryUseCase(categoriesBussines)

const categoryController = new CreateCategoryController(categoryUseCase)

export{categoryController,categoryUseCase}