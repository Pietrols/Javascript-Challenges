const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];
const filteredItems = items.filter((item) => {
  return item.price <= 200;
});
console.log(filteredItems);

const itemNames = items.map((item) => {
  return item.name;
});
console.log(itemNames);

const foundItem = items.find((item) => {
  return item.name === "Bike";
});
console.log(foundItem);

const hasInexpensiveItems = items.some((item) => {
  return item.price <= 100;
});
console.log(hasInexpensiveItems);

const hasInexpensiveItemsAll = items.every((item) => {
  return item.price <= 100;
});
console.log(hasInexpensiveItemsAll);

const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);
console.log(total);

const things = [1, 2, 3, 4, 5];
const includeTwo = things.includes(7);
console.log(includeTwo);


  