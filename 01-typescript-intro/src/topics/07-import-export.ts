import { Product, taxCalculator } from './06-function-destructuring'

const shoppingCart: Product [] = [
    {
        desciption: 'Pixel 8',
        price:  20000,
    },
    {
        desciption: 'iPhone',
        price:  40000,
    }
];

const[total, tax] = taxCalculator({
    products: shoppingCart,
    tax: 0.15
});


console.log('Total',total);
console.log('Tax',tax);





