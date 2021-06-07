const initialState={
    userName:"",
    password:"",
    loggedIn:false
};

const Reducer =(state=initialState,action)=>{
    switch (action.type) {
        case "LOGIN":
            return{
                ...state,
                userName:action.payload.userName,
                password:action.payload.password,
                loggedIn:true
            }
        case "LOGOUT":
            return{
                ...state,
                userName:'',
                password:'',
                loggedIn:false
            }
        default:
            break;
    }
    return state
}

export default Reducer;