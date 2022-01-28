import { productDBInstance } from '../../infra/instance'
import { Router, Request, Response } from 'express'
import { Beer } from '../../products/beer'
import { Cigar } from '../../products/cigar'
import { Alcoholic } from '../../products/alcoholic'
import { Water } from '../../products/Water'
import { Factory } from '../../category'
import { IProduct } from '../../interfaces/product'
const route = Router()

route.get('/products', (_: Request, res: Response) => {
    res.json(productDBInstance.productList)
})

route.get('/product/id=:id', (req: Request, res: Response) => {
    const { id } = req.params
    const [currentProduct] = productDBInstance.getProductById(id)
    res.json(currentProduct)
})

route.post('/product/beer',(req: Request, res: Response) => {
    const { price, description } = req.body
    const newBeer = new Beer(description, price)
    productDBInstance.createNewProduct(newBeer)
    res.json(productDBInstance.productList)
})

route.post('/product/cigar',(req: Request, res: Response) => {
    const { price, description } = req.body
    const newCigar = new Cigar(description, price)
    productDBInstance.createNewProduct(newCigar)
    res.json(productDBInstance.productList)
})

route.post('/product/alcoholic',(req: Request, res: Response) => {
    const { price, description } = req.body
    const newAlcoholic = new Alcoholic(description, price)
    productDBInstance.createNewProduct(newAlcoholic)
    res.json(productDBInstance.productList)
})

route.post('/product/water',(req: Request, res: Response) => {
    const { price, description } = req.body
    const newWater = new Water(description, price)
    productDBInstance.createNewProduct(newWater)
    res.json(productDBInstance.productList)
})

route.patch('/product/id=:id', (req: Request, res: Response) => {
    const { id } = req.params
    const {description, price, category} = req.body
    const factoryObj = new Factory()
    const newProduct: IProduct = factoryObj.getObject(description, price, category)
    const updatedList = productDBInstance.updateProduct(id, newProduct)
    res.json(updatedList)

})

route.delete('product/id=:id', (req:Request, res:Response) => {
    const currentId = req.params.id
    return res.json(productDBInstance.deleteProduct(currentId))
})

route.patch('/product/beer/id=:id', (req: Request, res: Response) => {
    const { id } = req.params
    const {description, price} = req.body
    const newBeer = new Beer(description, price)
    const updatedList = productDBInstance.updateProduct(id, newBeer)
    res.json(updatedList)
})
export { route }