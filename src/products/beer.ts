import { TaxProduct } from './TaxProduct'

export class Beer extends TaxProduct {
    constructor(description: string, price: number){
        super(description, price, 'Beer')
    }
    getTax(): number {
        return 0.5
    }
}