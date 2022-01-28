import { TaxProduct } from "./TaxProduct"

export class Cigar extends TaxProduct {
    constructor(description: string, price: number){
        super(description, price, 'Cigar')
    }

    getTax(): number {
        return 0.8
    }
}