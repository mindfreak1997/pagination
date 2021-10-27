const initialState=[]

export const photoReducers=(state=initialState,action)=>{
    switch(action.type){
        case 'GET_PHOTOS':{
            return [...action.payload]
        }
        default:{
            return [...state]
        }
    }
}