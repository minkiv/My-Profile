const person = {
    name: "Hiep",
    age: 19,
}
const person2 = {
    ...person,
    address: "Ha Noi"
}
console.log(person2);

const products = [1, 2, 3, 4];
const newProducts = [-1, 0, ...products, 5];
const newFilterProducts = newProducts.filter((item) => (item != 5));
console.log(products);
console.log(newProducts);
console.log(newFilterProducts);