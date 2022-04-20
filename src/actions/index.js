import Api from "../component/api/Api"

export const signInAction=(userId)=>{
    return{
        type:"sign_In",
        payload:userId,
}
}

export const signInOut=()=>{
    return{
        type:"sign_Out",
        payload:"false",
}
}

export const producList=(formvalue)=>{

    
    return async(dispatch)=>{
        const response=await Api.post('/products',formvalue)
        dispatch({type:"Stream_create",payload:response.data})
    }

}

export const productshow=()=>{
    return async (dispatch)=>{
        const response=await Api.get('/products')
        dispatch({type:"Stream_show",payload:response.data})

    }
}
