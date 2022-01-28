import { IOrder } from "../interfaces/order"
import { TaxProduct } from "../products/TaxProduct"
import { productDBInstance } from './instance'

export class OrderDB {
    orderList: IOrder[] = []

    addOrder(newOrder: IOrder){
        this.orderList.push(newOrder)
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
    }
    removeOrderItem(orderId: string, productId: string){
        for (let order of this.orderList){
            if(order.id === orderId){
               order.products = order.products.filter(({id}) => id === productId)
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
    getTotal(orderId: string, productId: string){
        let fullPriceOfProducts = 0
        for(let order of this.orderList){
            if(order.id === orderId){
                for(let product of order.products){
                    fullPriceOfProducts += product.price
                }
                return fullPriceOfProducts
            }
        }
    }
    getValuesOfFees(orderId: string){
        let fullValuesFees = 0
        for(let order of this.orderList){
            if(order.id === orderId){
                for(let product of order.products){
                    if(product instanceof TaxProduct){
                        fullValuesFees += product.price * product.getTax()
                    }
                    return fullValuesFees
                }
            }
        }
    }
    getSubTotal(){
        
    }
}

//getTotal
//gettax //getValuesOfFees
//getSubTotal
//verificar se é instanceof