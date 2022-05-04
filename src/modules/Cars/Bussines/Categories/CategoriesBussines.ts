import { Category, ICategoryDTO } from "../../model/Categories";
import { ICategoriesBussines } from "./ICategoriesBussines";

export class CategoriesBussines implements ICategoriesBussines {
    private categories: Category[];

    private static INSTANCE: CategoriesBussines;

    private constructor() {
        this.categories = []
    }

    // Previne de instancia a classe CategoriesBussines mais de 1 vez 
    // singleton pattern
    public static getInstance(): CategoriesBussines {
        if (!CategoriesBussines.INSTANCE) {
            CategoriesBussines.INSTANCE = new CategoriesBussines()
        }

        return CategoriesBussines.INSTANCE
    }

    create({ name, description }: ICategoryDTO): void {

        const newCategorie = new Category(name, description)

        this.categories.push(newCategorie);
    }

    list(): Category[] {

        return this.categories;
    }

    findCategoryByName(name: string): Category | undefined {

        const findCategory = this.categories.find((category) => category.name === name)
        return findCategory
    }
}

export default CategoriesBussines