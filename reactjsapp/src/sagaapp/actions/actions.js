
// the input action
export const getDepartments=()=>{
    console.log('get departments is dispatched');
    return {
        type: 'GET_DEPARTMENTS'
    }
}

export const saveDepartment=(dept)=>{
     
    dept = {
        DeptNo:100,
        DeptName:'Dept_100',
        Location: 'Location_100',
        Capacity:2000
    };
    console.log(JSON.stringify(dept));

    return {
        type: 'SAVE_DEPARTMENT',
        dept
    };
}