import express, { Express } from 'express'
import { categoriesRoute } from './routes/categoriesRoute';

const app: Express = express()

app.use(express.json())

app.use("/categorie",categoriesRoute)

app.listen(3003, () => {
    console.log("Serve is running in localhost:3003");
})