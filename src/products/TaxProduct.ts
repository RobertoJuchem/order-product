import { Product } from "./Product";

export abstract class TaxProduct extends Product {
    constructor(description: string, price: number, category: string) {
        super(description, price, category)
    }

    abstract getTax(): number
}