import { IOrder } from '../interfaces/order'
import { IProduct } from '../interfaces/product'

export class Order implements IOrder {
    id: string
    products: IProduct[]

    constructor(products: IProduct[]){
        this.id = `${Math.floor(Math.random() * (5000000000 - 1))}`
        this.products = products
    }
}