const userName = "Sourav";
const userAge = 32;

// object property shorthand
const user =
{
    userName,
    age : userAge,
    location : "kolkata"
}

console.log(user);

//object destructuring

const product =
{
    label : "Red Notebook",
    price : 3,
    stock : 201,
    salePrice : undefined,
    rating : 4.2
}

// const label = product.label;
// const stock = product.stock;

const { label, stock } = product;

console.log(label);
console.log(stock);


const { label : productLabel, stock : productStock, rating = 5 } = product;

console.log(productLabel);
console.log(productStock);
console.log(rating);


const transaction1 = (type, product = { label : "label", stock : 0 }) =>
{
    const { label, stock } = product;
    console.log(type, label, stock);
}

const transaction2 = (type, { label, stock = 0} = {}) =>
{
    console.log(type, label, stock);
}

transaction1 ("order", product);
transaction2 ("order", product);