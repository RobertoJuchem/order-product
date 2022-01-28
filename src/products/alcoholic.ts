import { TaxProduct } from './TaxProduct'

export class Alcoholic extends TaxProduct{
    constructor(description: string, price: number){
        super(description, price, 'Alcoholics')
    }
    getTax(): number {
        return 0.6
    }
}