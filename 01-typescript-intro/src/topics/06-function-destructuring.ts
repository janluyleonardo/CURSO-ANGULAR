interface Product{
  description: string;
  price: number;
}

const phone: Product ={
  description: 'Nokia A1',
  price: 1500
}

const tablet: Product = {
  description: 'Apple #3',
  price: 5000
}

interface TaxCalculationOptions {
  tax: number;
  products: Product[];
}
// function taxCalculation( options: TaxCalculationOptions ): [number,number]{
// function taxCalculation( {tax,products}: TaxCalculationOptions ): [number,number]{
function taxCalculation( options: TaxCalculationOptions ): [number,number]{
  
  const {tax,products} = options;
  
  let total = 0;
  
  products.forEach( ({price}) => {
    total += price;
  });
  return [total, total * tax];
  
}

const shoppinCard = [phone,tablet];
const tax = 0.15;

const [total, taxTotal] = taxCalculation({
  products: shoppinCard,
  tax: tax,
});

console.log('Total',total);
console.log('Tax',taxTotal);

export{};