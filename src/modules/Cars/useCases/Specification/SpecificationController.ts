import { Request, Response } from "express"
import { SpecificationUseCase } from "./SpecificationUseCase"


class SpecificationController {
    constructor(private specificationUseCase: SpecificationUseCase) { }

    createSpecification(req: Request, res: Response): Response | undefined {
        const { name, description } = req.body;

        try {
            this.specificationUseCase.execute({ name, description })

            return res.status(201).send()
        } catch (error: any) {
            res.status(404).send({ message: error.message })
        }

    }

    getSpecificationByName(req: Request, res: Response): Response | undefined {
        const { name } = req.body;

        try {
            const specificationName = this.specificationUseCase.getSpecification(name)

            return res.status(200).send(specificationName)
        } catch (error: any) {
            res.status(404).send({ message: error.message })
        }

    }
}
export { SpecificationController }
