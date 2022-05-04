import { ICategoriesBussines } from "../../Bussines/Categories/ICategoriesBussines";
import { Category } from "../../model/Categories";

interface IRequest {
    name: string;
    description: string;
}

class CategoryUseCase {

    constructor(private categoriesBussines: ICategoriesBussines) { }

    execute({ name, description }: IRequest): void {

        if (!name || !description) {
            throw new Error("Missing fields")
        }

        const categoryAlreadyExist = this.categoriesBussines.findCategoryByName(name)

        if (categoryAlreadyExist) {
            throw new Error(`Category '${categoryAlreadyExist.name}' already exist`)
        }

        this.categoriesBussines.create({ name, description })
    }

    list(): Category[]{
        const categories = this.categoriesBussines.list()
        if(!(categories.length > 0)){
            throw new Error("Nao ha nenuma categoria cadastrada")
        }

        return categories
    }

}

export { CategoryUseCase }