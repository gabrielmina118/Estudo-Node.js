"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
class Create {
    execute(data) {
        console.log(data.idade, data.name);
    }
}
const create = new Create().execute({ name: "gabriel", idade: 24 });
console.log(create);
app.listen(3003, () => {
    console.log("Serve is running in localhost:3003");
});
