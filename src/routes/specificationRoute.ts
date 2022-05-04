import { Router } from 'express'
import { specificationController } from '../modules/Cars/useCases/Specification'

const specificationsRoute = Router()


specificationsRoute.post("/", (request, response) => {
  return specificationController.createSpecification(request,response)
})

specificationsRoute.get("/",(request,response)=>{
  return specificationController.getSpecificationByName(request,response)
})

export { specificationsRoute }