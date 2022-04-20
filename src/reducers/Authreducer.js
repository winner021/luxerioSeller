const initial_state={
   sign:null,
   userid:null

}

export default(state=initial_state,action)=>{
    switch (action.type) {
        case "sign_In" :
           return{...state,sign:true,userid:action.payload} 
    
        case"sign_Out":
        return{...state,sign:false,signIn:null} 

        default:
            return state
          
    }
}