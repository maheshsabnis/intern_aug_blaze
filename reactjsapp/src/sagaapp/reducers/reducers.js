// a single reducer function object


const reducer=(state=[],action)=>{
    switch(action.type){
        case 'GET_DEPARTMENTS':
            return {...state};
        case 'GET_DEPARTMENTS_SUCCESS':
            console.log(`Success is dispateched ${JSON.stringify(action.departments.rows)}`);
            // departments is received from the action dispatched from the SAGAS
            return {...state, departments:action.departments.rows};   
        case 'SAVE_DEPARTMENT':
             return {...state};
        case 'SAVE_DEPARTMENT_SUCCESS':
            console.log(`Saved DOne ${action.department}`);
            return {...state, department: action.department.rows};          
        default:
            return state;
    }
}

export default reducer;