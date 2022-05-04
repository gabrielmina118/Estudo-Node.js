import { Category, ICategoryDTO } from "../../model/Categories"


interface ICategoriesBussines {
    findCategoryByName(name: string): Category | undefined
    list(): Category[]
    create({ name, description }: ICategoryDTO): void
}

export { ICategoriesBussines }