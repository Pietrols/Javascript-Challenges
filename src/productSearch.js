const products = [
  { name: "Laptop", price: 1200 },
  { name: "Keyboard", price: 50 },
  { name: "Mouse", price: 25 },
  { name: "Monitor", price: 300 },
  { name: "Desk Lamp", price: 45 },
  { name: "USB Cable", price: 10 },
  { name: "Notebook", price: 8 },
];

const container = document.querySelector(".container");
const productInput = document.createElement("input");
productInput.id = "product-input";
container.appendChild(productInput);

const productList = document.createElement("ul");
productList.id = "product-list";
container.appendChild(productList);

const noResults = document.createElement("p");
noResults.id = "no-products";
noResults.textContent = "No results";
container.appendChild(noResults);

const renderProduct = (userProduct) => {
  productList.innerHTML = "";
  userProduct.forEach((product) => {
    const li = document.createElement("li");
    li.textContent = `${product.name} - ${product.price}`;
    productList.appendChild(li);
  });
};
renderProduct(products);

productInput.addEventListener("input", () => {
  const searchProduct = productInput.value.toLowerCase();
  const filtered = products.filter((product) =>
    product.name.toLowerCase().includes(searchProduct)
  );
  renderProduct(filtered);
  if (filtered.length === 0) noResults.style.display = "block";
  else noResults.style.display = "none";
});
