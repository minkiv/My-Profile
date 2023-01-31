const products = ['product A', 'product B', 'product C'];
// loop
for (let i = 0; i < products.length; i++) {
    console.log("for: ", products[i]);
}
// for in
for (let item in products) {
    console.log("for in: ", products[item]);
}
// for of
for (let item of products) {
    console.log("for of: ", item);
}
// foreach
products.forEach((item, index) => console.log(`${item} ${index}`));

// map() -> Tạo ra 1 mảng mới có thể thay đổi giá trị
const newProductsMap = products.map((item, index) => {
    return `${item} ${index + 1}`;
})
console.log(newProductsMap);

const app = document.querySelector("#app");
app.innerHTML = products.map((item) => `<div>${item}</div>`).join("");
// Filter() -> Tạo ra 1 mảng lọc ra các phần tử thỏa mãn điều kiện
const newProductsFilter = products.filter(item => {
    return item == 'product C';
})
console.log(newProductsFilter);

// reduce
const number = [
    { id: 1, name: "product A", price: 100 },
    { id: 2, name: "product B", price: 200 },
]