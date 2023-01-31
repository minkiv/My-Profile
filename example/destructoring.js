// object = {key: value}
const person = {
    name: "Hiep",
    age: 19,
    address: {
        city: "HN"
    }
}
const { name, age, address: { city } } = person;
console.log(city);