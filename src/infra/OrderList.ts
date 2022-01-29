import { IOrder } from "../interfaces/order"
import { IProduct } from "../interfaces/product"
import { Order } from "../orders/order"
import { TaxProduct } from "../products/TaxProduct"
import { productDBInstance } from './instance'

export class OrderDB {
    orderList: IOrder[] = []

    addOrder(product: IProduct[]){
        const newOrder = new Order(product)
        this.orderList.push(newOrder)
        return newOrder
    }

    addProductOnOrder(productId: string, orderId: string){
        const [newProduct] = productDBInstance.getProductById(productId)
        for(let order of this.orderList){
            if(order.id===orderId){
                order.products.push(newProduct)
            }
        }
    }

    deleteOrder(orderId: string){
        this.orderList = this.orderList.filter((order) => order.id !== orderId)
        return this.orderList
    }
    removeOrderItem(orderId: string, productId: string){
        for (let order of this.orderList){
            if(order.id === orderId){
               order.products = order.products.filter((product) => product.id !== productId)
               return order
            }
        }
    }

    updateOrder(orderId: string, updatedOrder: IOrder){
        this.orderList.filter(order => {
            if(order.id === orderId){
                order = updatedOrder
            }
        })
    }

    getOrderById(orderId: string): IOrder[]{
        return this.orderList.filter(({id}) =>{ id === orderId})
    }

    getSubTotal(orderId: string){
        let fullPriceOfProducts = 0
        for(let order of this.orderList){
            if(order.id === orderId){
                for(let product of order.products){
                    fullPriceOfProducts += product.price
                }
            }
        }
        return fullPriceOfProducts
    }

    getValuesOfTax(orderId: string){
        let fullValuesFees = 0
        for(let order of this.orderList){
            if(order.id === orderId){
                for(let product of order.products){
                    if(product instanceof TaxProduct){
                        fullValuesFees += product.price * product.getTax()
                    }
                }
            }
        }
        return fullValuesFees
    }

    getTotal(orderId: string){
        return this.getSubTotal(orderId) + this.getValuesOfTax(orderId)
    }
}