import { route as productRoute } from './products/product'
import { route as ordersRoute } from './order/order'
import express from 'express'

const port = 3333
const app = express()
app.use(express.json())
app.use(productRoute, ordersRoute)


app.listen(port, () => {
    console.log(`Server running at https://localhost:${port}`)
})