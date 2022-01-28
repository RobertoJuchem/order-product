import { Product } from './Product'

export class Water extends Product{
    constructor(description: string, price: number){
        super(description, price, 'Water')
    }
}