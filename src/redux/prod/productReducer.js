
const initState={
  shoes: []

}

const productReducer=(state=initState,action)=>{
switch(action.type){
    case "PROD":
        return{
            ...state,
            shoes:action.payload
        }

        default:
            return state
}

}
export default productReducer;





