import { v4 } from "uuid";

class Specification {

    id: string = v4();
    name: string;
    description: string;
    created_at: Date = new Date();

    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;

        if (!this.id) {
            this.id = v4()
        }
    }
}
export interface ICreateSpecificationDTO {
    name:string;
    description:string;
    
}
export { Specification }