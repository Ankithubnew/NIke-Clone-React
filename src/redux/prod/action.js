import axios from "axios";



// export const getData=()=>{
//     return (dispatch)=>{
//         axios.get(`http://localhost:8080/shoes`)
//         .then((res)=>
//         {
//             return dispatch(productAction(res.data))})
        
//     }
// }


export const idData=(id)=>{
    return (dispatch)=>{
        axios.get(`http://localhost:8080/shoes/${id}`)
        .then((res)=>
        {
            return dispatch(productAction(res.data))})
        
    }
}


export const productAction=(data)=>{
    return{
        type:"PROD",
        payload:data
    }
}