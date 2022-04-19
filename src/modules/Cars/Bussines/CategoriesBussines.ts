import { Category, ICategoryDTO } from "../model/Categories";
import { ICategoriesBussines } from "./ICategoriesBussines";

export class CategoriesBussines implements ICategoriesBussines {

    private categories: Category[] = [];

    create({ name, description }: ICategoryDTO): void {

        const newCategorie = new Category(name, description)

        this.categories.push(newCategorie) ;
        
    }

    list(): Category[] {
        return this.categories;
    }

    findCategoryByName(name:string):Category | undefined{
        const findCategory = this.categories.find((category)=> category.name === name)        
        return findCategory
    }
}

export default CategoriesBussines