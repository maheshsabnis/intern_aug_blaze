class Product {
    constructor(){
        this.ProductId=0;
        this.ProductName ='';
        this.CategoryName = '';
        this.Manufacturers = '';
        this.Price=0;
    }
}
class Constants {
    constructor(){
        this.Categories = ['ECT','ECL','FOD','FSN'];
        this.Manufacturers =['IBM', 'TATA', 'HP', 'Bajaj'];
    }
}

class ProductLogic {
    constructor(){
        this.Products =[
            {ProductId:1,ProductName:'Laptop', CategoryName:'ECT', Manufacturer:'HP', Price:100000}
        ];
    }

    getProducts(){
        return this.Products;
    }
    #validateProduct(){
        // logic for Validations for all products this method will return an array
        // shown validation error messages for each property
        let errors=[]; 

        return errors;
    }
    registerNewPrtoduct(product){
        if(this.#validateProduct().length === 0) {
            this.Products.push(product);
            return this.Products;
        }
        return this.#validateProduct(); // return all error messages and shopw on UI
    }
    updateProduct(product){
        // search for Product, if found update and return an array with updated properuct
        // if product is not found then return error message 'ProductNot FOund'
    }
    deleteProduct(product){
        // search for Product, if found delete it
        // if product is not found then return error message 'ProductNot FOund'
    }
    serachProduct(criteria){
        // e.g. criteria will be CategoryName=='ECT', then return all product for ECT
        // if criteria is undefined then return all reoducts
    }

    showProductGroup(groupKey){
        // return all product by groupKey
    }
    
} 