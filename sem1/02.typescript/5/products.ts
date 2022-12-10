export interface Product {
    name: string;
    qty: number;
    type: 'fruit' | 'sweets' | 'alcohol' | 'collectible' | 'halloween';
}

enum ProductType {
    FRUIT,
    SWEETS,
    COLLECTIBLE,
    HALLOWEEN,
    ALCOHOL
}

export const products: Array<Product> = [
    {
        type: 'fruit',
        name: 'Apples',
        qty: 5
    },
    {
        type: 'fruit',
        name: 'Bananas',
        qty: 2
    },
    {
        type: 'sweets',
        name: 'Candies',
        qty: 1
    },
    {
        type: 'sweets',
        name: 'Gingerbead',
        qty: 10
    },
    {
        type: 'sweets',
        name: 'Tequila',
        qty: 9
    },
    {
        type: 'sweets',
        name: 'Tequila',
        qty: 9
    },
    {
        type: 'collectible',
        name: 'Weed',
        qty: 9
    },
    {
        type: 'halloween',
        name: 'Candles',
        qty: 9
    },
]
