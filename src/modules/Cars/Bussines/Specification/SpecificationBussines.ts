import { ICreateSpecificationDTO, Specification } from "../../model/Specification";
import { ISpecificationBussines } from "./ISpecificationBussines";

class SpecificationBussines implements ISpecificationBussines {
    private specifications: Specification[];
    private static INSTANCE: SpecificationBussines;


    private constructor() {
        this.specifications = []
    }
    
    // singleton pattern
    public static getInstance(): SpecificationBussines {
        if (!SpecificationBussines.INSTANCE) {
            SpecificationBussines.INSTANCE = new SpecificationBussines()
        }
        return SpecificationBussines.INSTANCE
    }

    create({ description, name }: ICreateSpecificationDTO): void {
        const specification = new Specification(name, description)
        this.specifications.push(specification)
    }

    findByName(name: string): Specification | undefined {
        const specification = this.specifications.find((specification) => specification.name === name)
        return specification
    }
}

export { SpecificationBussines }