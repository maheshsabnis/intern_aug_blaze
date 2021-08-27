let Person = {
    id:101,
    name: 'AAA'
};

let properties = Object.keys(Person);
console.log(properties);



class PersonData {
    #v=0;
    constructor(){
        this.id=0;
        this.name = 'AAAAA';
        this.#v =100; // omitted from keys
    }
    get data(){
        return  0;
    }
    set data(c){
        let x = 0;
    }
}

let classProperties  = Object.keys(new PersonData());
console.log(classProperties);