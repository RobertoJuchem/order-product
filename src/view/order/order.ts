import { orderDBInstance } from '../../infra/instance'
import { Router, Request, Response } from 'express'
import { IProduct } from '../../interfaces/product'
import { IOrder } from '../../interfaces/order'


const route = Router()

route.get('/orders', (_: Request, res: Response) => {
    res.json(orderDBInstance.orderList)
})

route.get('/order/id=:id', (req: Request, res: Response)=> {
    const { id } = req.params
    const currentOrder = orderDBInstance.getOrderById(id)
    res.json(currentOrder)
})

route.post('/order', (req: Request, res: Response) => {
    const productList: [IProduct] = req.body.products
    const newOrder = orderDBInstance.addOrder(productList)
    res.json(newOrder)
})

route.delete('/order/id=:id',(req: Request, res: Response)=> {
    const { id } = req.params
    const updatedOrderList = orderDBInstance.deleteOrder(id)
    res.json(updatedOrderList)
})

route.patch('/order/id=:id', (req: Request, res: Response) => {
   const { id } = req.params
   const orderList: IOrder = req.body
   const upddateOrderList = orderDBInstance.updateOrder(id, orderList)
   res.json(upddateOrderList)
})

//alterar o produto dentro da order

export { route }