const initialState={
    loading: false,
    token: "",
    isAuth: false,
    error: false
  }
const authreducer=(state=initialState,action)=>{
    if(action.type==="login_loading"){
        return {...state,loading:true}
    }else if(action.type==="loading_success"){
        return {...state,loading:false,isAuth:true,error:false,token:action.payload}
    }else if(action.type==="loading_failed"){
        return {...state,loading:false,error:true}
    }
    return state;
}
export default authreducer;