export class Address {
    address1: string;
    address2: string;
    city: string;
    state: string;
    postalCode: string;
    constructor(address1: string, address2: string, city: string, state: string,postalCode: string)
    {
        this.address1 = address1;
        this.address2 = address2;
        this.city = city;
        this.state = state;
        this.postalCode = postalCode;
    }
}
