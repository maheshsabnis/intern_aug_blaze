class PrivateMembers{
    // defining private members
    #firstName='';
    #middleName='';
    #lastName='';
    constructor(f,m,l){
        // set values for private members
        this.#firstName = f;
        this.#middleName = m;
        this.#lastName = l;
    }

    // adding private method
    #validate(){
        if(this.#firstName.length==0 || this.#middleName.length == 0 || this.#lastName.length ==0) return false;
    }
    getFullName(){
        if(!this.#validate()) return `Please PAss Data Correctly`;
        return `${this.#firstName} ${this.#middleName} ${this.#lastName}`;
    }
}

let oo = new PrivateMembers();
// console.log(oo.#firstName); // errors