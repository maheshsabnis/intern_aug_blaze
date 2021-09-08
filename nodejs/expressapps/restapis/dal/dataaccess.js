class DataAccess {
  #products = [];
  constructor() {
    this.#products = [
      { 
        ProductId: "Prd-001",
        ProductName: "Laptop",
        CategoryName: "Electronics",
        Manufacturer: "IBM",
        Description: "Gaming",
        Price: 123000,
      },
      {
        ProductId: "Prd-002",
        ProductName: "Iron",
        CategoryName: "Electrical",
        Manufacturer: "Bajaj",
        Description: "Power Press",
        Price: 3000,
      },
    ];
  }

  getProducts() {
    return this.#products;
  }
  getProductsById(id) {
    let product = this.#products.find(p=>p.ProductId === id);  
    return product;
  }
  createProduct(product) {
    this.#products.push(product);
    return this.#products;
  }
}

module.exports = DataAccess;
