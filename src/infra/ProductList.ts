import { IProduct } from "../interfaces/product"
import { Product } from "../products/Product"

export class ProductDB {
    productList: IProduct[] = []

    createNewProduct(newProduct: Product){
        this.productList.push(newProduct)
    }

    getProductById(productId:string): Product[]{
        return this.productList.filter(({id}) => productId === id )
    }

    deleteProduct(productId: string){
        this.productList = this.productList.filter(({id}) => id !== productId)
        return this.productList
    }

    updateProduct(productId: string, newValue: IProduct){
        this.productList.map(({id, description, price, category}) => {
            if(id === productId){
                description = newValue.description
                price = newValue.price
                category = newValue.category
                id = productId
            }
        })
    return this.productList
    }

}