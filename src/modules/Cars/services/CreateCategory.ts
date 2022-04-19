import { ICategoriesBussines } from "../Bussines/ICategoriesBussines";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryService {

    constructor(private categoriesBussines : ICategoriesBussines){}

    execute({ name, description }: IRequest):void {
        
            
        const categoryAlreadyExist = this.categoriesBussines.findCategoryByName(name)
        
        
        if (categoryAlreadyExist) {
            throw new Error("Category already exist")
        }

      this.categoriesBussines.create({ name, description })
    }

}

export { CreateCategoryService }