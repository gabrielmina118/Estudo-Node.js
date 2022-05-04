import express, { Express } from 'express'
import { categoriesRoute } from './routes/categoriesRoute';
import { specificationsRoute } from './routes/specificationRoute';

const app: Express = express()

app.use(express.json())

app.use("/categorie",categoriesRoute)
app.use("/specifications",specificationsRoute)

app.listen(3003, () => {
    console.log("Serve is running in localhost:3003");
})