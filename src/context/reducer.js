const reducer =(state,action)=>{
    switch(action.type){
        case "OPEN_LOGIN":
            return {...state,login:false};
            case "ClOSE_LOGIN":
                return {...state,login:true};
            default:
                throw new Error("No Action Available");

    }
}

export default reducer;
