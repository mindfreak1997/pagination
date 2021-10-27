import React from 'react'
import { useSelector } from 'react-redux'

const Photos = ({ id }) => {
    const photo = useSelector(state => {
        return state.photos
    })
    const user = useSelector(state => {
        return state.users
    })
    const album = useSelector(state => {
        return state.albums
    })

    // to find user id
    const findAlbumUser = () => {
        const data = album.find(ele => {
            return ele.id == id
        })
        return data.userId
    }

    //to find user name
    const findUser = (id) => {
        const userId = findAlbumUser()
        const data = user.find(ele => {
            return ele.id == userId
        })
        return data.username
    }
    return (
        <div className='container' style={{ textAlign: 'center' }}>
            <h1 >TITLE OF ALBUM </h1>
            <p>Uploaded by:{findUser(id)}</p>
            <div className='row m-2'>
                {
                    photo.map(ele => {
                        return (
                            <div className=' col-md-4 v my-2 ' >
                                <div className="card shadow-sm w-50" >
                                    <img src={ele.url} class="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <p className="card-text text-centre ">{ele.title}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}


export default Photos
