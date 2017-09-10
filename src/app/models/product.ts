export class Product {
    name: string;
    description: string;
    price: number;
    url: string;
    id: number;
    constructor(id: number, name: string, description: string, price: number)
    {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.url = 'http://fakeimg.pl/100x100/';
    }
}
