import axios from '../config/axiosConfig'

export const asyncPhotos=(id,page)=>{
    return (dispatch)=>{
        axios.get(`/albums/${id}/photos?_page=${page}&_limit=9`)
        .then((res)=>{
            dispatch(photoAction(res.data))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}
const photoAction=(data)=>{
    return {
        type:'GET_PHOTOS',
        payload:data
    }
}