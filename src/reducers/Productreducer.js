export default (state=null,action)=>{
    switch (action.type) {
        case "producList":
        return{...state,[action.payload.id]:action.payload};
        
        case "Stream_show":
        return{...state,[action.payload.id]:action.payload}

        default:
            return state;
            
    }

}

