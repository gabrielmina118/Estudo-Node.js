import { ICreateSpecificationDTO, Specification } from "../../model/Specification"

interface ISpecificationBussines {

    create({ description, name }: ICreateSpecificationDTO): void
    findByName(name: string): Specification | undefined
}
export { ISpecificationBussines }