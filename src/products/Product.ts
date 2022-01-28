import { IProduct } from "../interfaces/product";

export abstract class Product implements IProduct {
    id: string
    description: string;
    price: number;
    category: string;
    
    constructor(description: string, price: number, category: string) {
        this.id = `${Math.floor(Math.random() * (500000000 -1))}`
        this.description = description
        this.price = price
        this.category = category
    }
}