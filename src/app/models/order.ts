import { User } from "./user";
import { Product } from "./product";

export class Order {
    user: User;
    products: Array<Product>;
    purchased: Date;
    id: number;
    constructor(user: User, products: Array<Product>, id: number)
    {
        this.id = id;
        this.user = user;
        this.products = products;
        this.purchased = new Date()
    }
}
