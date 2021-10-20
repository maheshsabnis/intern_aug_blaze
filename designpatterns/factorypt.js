// A FActory object that will be used to create 
// an object of various type of EMployees
// e.g. FullTime, Parttime, Temporary, COntractor
var EmployeeFactory = function(){
    this.generateEmployeeInstance=function(category){
        let emp  =undefined;
        switch(category){
            case 'FullTime':
                emp = new FullTime();
                break;
            case 'PartTime':
                emp = new PartTime();  
                break;

            case 'Temporary':
                emp = new Temporary();
                break;

            case 'Contractor':
                emp = new Contractor();    
                break;

        }
        return emp;
    }
};


// defining various properties for each type of employee
// actual Object
var FullTime = function(){
    this.Payment = "Rs. 450000";
}; 

var PartTime = function(){
    this.Payment = "Rs. 35000";
};
var Temporary = function(){
    this.Payment = "Rs. 1000";
};
var Contractor = function(){
    this.Payment = "Rs. 5000";
};

function client(){
    let empFactory = new EmployeeFactory();
    let emp = empFactory.generateEmployeeInstance('FullTime');
    console.log(`Payment = ${emp.Payment}`);
}

client();