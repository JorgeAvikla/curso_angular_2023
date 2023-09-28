export interface Product {
    desciption: string;
    price: number;
}

const phone: Product = {
    desciption: "Pixel 8",
    price: 145100
}

const tablet: Product = {
    desciption: "Ipad air",
    price: 200010
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

export function taxCalculator(options: TaxCalculationOptions): [number, number] {
    // function taxCalculator( {tax, products}: TaxCalculationOptions ): [number, number] {
    const { tax, products } = options;
    let total = 0;
    products.forEach(({ price }) => {
        total += price;
    })

    return [total, total * tax];
}

const [total, TaxTotal] = taxCalculator({
    products: shoppingCart,
    tax: tax
})

// console.log('Total', total)
// console.log('Tax', TaxTotal)

export { };