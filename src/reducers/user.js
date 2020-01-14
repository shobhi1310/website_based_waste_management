const userReducer=(state='',action)=>{
    switch(action.type){
        case 'USER':
            return state=action.text;
        case 'USE_OUT':
            return state='';
        default:
            return state;
    }
}

export default userReducer