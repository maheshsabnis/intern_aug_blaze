class PublicMembers{
    // parameterized ctor
    constructor(fname,mname,lname){
        // define public members using 'this.' prefix
        this.firstName = fname;
        this.middleName = mname;
        this.lastName = lname;
    }

    // the method using public data members
    getFullName(){
        return `${this.firstName} ${this.middleName} ${this.lastName}`;
    }
}