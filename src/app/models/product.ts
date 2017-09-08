export class Product {
    name: string;
    description: string;
    price: number;
    url: string;
    constructor(name: string, description: string, price: number)
    {
        this.name = name;
        this.description = description;
        this.price = price;
        this.url = 'http://fakeimg.pl/100x100/';
    }
}
