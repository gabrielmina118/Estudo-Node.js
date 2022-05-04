import { ISpecificationBussines } from "../../Bussines/Specification/ISpecificationBussines";
import { Specification } from "../../model/Specification";

interface IRequest {
    name: string;
    description: string;
}

class SpecificationUseCase {

    constructor(private specificationBussines: ISpecificationBussines) { }

    execute({ name, description }: IRequest): void {

        if (!name || !description) {
            throw new Error("Missing fields")
        }

        const specificationAlreadyExists = this.specificationBussines.findByName(name)

        if (specificationAlreadyExists) {
            throw new Error("Specification Already exists!")
        }

        this.specificationBussines.create({ name, description })
    }

    getSpecification(name:string):Specification{
        if(!name){
            throw new Error("Missing fields")
        }

        const specificationName = this.specificationBussines.findByName(name)

        if(!specificationName){
            throw new Error(`'${name}' not exists`)
        }

        return specificationName
    }
}
export { SpecificationUseCase }