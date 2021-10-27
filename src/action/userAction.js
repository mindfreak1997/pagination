import axios from '../config/axiosConfig'

export const asyncUser=()=>{
    return (dispatch)=>{
        axios.get('/users')
        .then((res)=>{
            dispatch(userAction(res.data))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}
const userAction=(data)=>{
    return {
        type:'GET_USERS',
        payload:data
    }
}