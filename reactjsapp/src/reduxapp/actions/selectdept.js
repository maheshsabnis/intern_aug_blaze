// define an action
const selectDepartment=(department)=>{
     
    return {
        type: "SELECT_DEPARTMENT", // the action that is dispatched 
        department // data that is to be updated in store
    }
}

export default selectDepartment;