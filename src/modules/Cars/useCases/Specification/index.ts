import { SpecificationBussines } from "../../Bussines/Specification/SpecificationBussines";
import { SpecificationController } from "./SpecificationController";
import { SpecificationUseCase } from "./SpecificationUseCase";

const specificationBussines = SpecificationBussines.getInstance()

const specificationUseCase = new SpecificationUseCase(specificationBussines)

const specificationController = new SpecificationController(specificationUseCase)

export{specificationController,SpecificationUseCase}