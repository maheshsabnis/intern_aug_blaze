
// the input action
export const getDepartments=()=>{
    console.log('get departments is dispatched');
    return {
        type: 'GET_DEPARTMENTS'
    }
}

export const saveDepartment=(dept)=>{
     
    dept = {
        DeptNo:1009,
        DeptName:'Dept_1007',
        Location: 'Location_1007',
        Capacity:2000
    };
    console.log(JSON.stringify(dept));

    return {
        type: 'SAVE_DEPARTMENT',
        dept
    };
}