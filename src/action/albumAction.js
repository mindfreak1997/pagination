import axios from '../config/axiosConfig'


export const asynAlbum = (page) => {
    return (dispatch) => {
        axios.get(`/albums?_page=${page}&_limit=5`)
            .then((res) => {
                dispatch(albumAction(res.data))
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}
export const albumAction = (data) => {
    return {
        type: 'GET_ALBUMS',
        payload: data
    }
}