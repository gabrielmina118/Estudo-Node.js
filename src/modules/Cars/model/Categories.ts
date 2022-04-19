import { v4 } from "uuid";

export class Category {

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

export interface ICategoryDTO{
    name:string,
    description:string
}