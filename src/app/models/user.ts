import { Address } from "./address";

export class User {
    firstName: string;
    lastName: string;
    billingAddress: Address;
    shippingAddress: Address;
    constructor(firstName: string, lastName: string, billingAddress: Address, shippingAddress: Address)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.billingAddress = billingAddress;
        this.shippingAddress = shippingAddress;
    }
}
