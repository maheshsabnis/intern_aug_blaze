// define an action

const addDepartment=(department)=>{
    console.log(`In addDepartment action ${JSON.stringify(department)}`);
    // Some logicall steps
    department.DeptName = department.DeptName.toUpperCase(); 
    // return an action that is dispatched so that it can be   Listened by the reducers
    return {
        type: 'ADD_DEPARTMENT', // the type of the action dispatched 
        department // the payload aka the data returned by the action
    };
};

export default addDepartment;