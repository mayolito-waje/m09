function Item(name, brand, price) {
  this.name = name;
  this.brand = brand;
  this.price = price;
}

const asus = new Item('Asus Notebook', 'Asus', 25000);
const macbook = new Item('MacBook', 'Apple', 60000);

console.log(asus);
console.log(macbook);
