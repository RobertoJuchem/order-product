import { route as productRoute } from './products/product'
import express from 'express'

const app = express()
const port = 3333

app.use(express.json())
app.use(productRoute)

app.listen(port, () => {
    console.log(`Server running at https://localhost:${port}`)
})