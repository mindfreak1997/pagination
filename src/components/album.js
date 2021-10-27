import React, { useState,useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import ReactPaginate from 'react-paginate'
import { asynAlbum } from '../action/albumAction'

const Album = () => {
    const history = useHistory()
     const dispatch = useDispatch()
    const [page, setPage] = useState()

    const album = useSelector(state => {
        return state.albums
    })
    console.log('album',album)
    const user = useSelector(state => {
        return state.users
    })
    
    useEffect(()=>{
        dispatch(asynAlbum(page))
    },[page])

    //to find user name
    const findUser = (id) => {
        const data = user.find(ele => {
            return ele.id == id
        })
        return data.username
    }
    const handleButton = (id) => {
        history.push(`/albums/${id}`)
    }

    const handlePageClick = (data) => {
        setPage(data.selected+1)
    }
    return (
        <div className='container'>
            <h1 style={{ textAlign: 'center' }}>LIST OF ALBUMS-{album.length}</h1>
            <div className='row m-5'>
                {
                    album.map(ele => {
                        return (

                            <div className="card bg-success mt-4" style={{ width: '50rem' }}>
                                <div className="card-body">
                                    <h5 className="card-title text-white  bg-success">ALBUM TITLE :{ele.title}</h5>
                                    <div className='row bg-success'>
                                        <div className='col-md-8 bg-success'>
                                            <p className="card-text text-white">User:{findUser(ele.userId)}</p>
                                        </div>
                                        <div className='col-md-4 bg-success'>
                                            <button className='card-link btn btn-success ' onClick={() => {
                                                handleButton(ele.id)
                                            }}>View More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
            <div>

                <ReactPaginate
                    previousLabel={'Previous'}
                    nextLabel={'Next'}
                    pageCount={20}
                    marginPagesDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination justify-content-center'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    nextClassName={'page-item'}
                    nextLinkClassName={'page-link'}
                    activeClassName={'active'}
                />
            </div>
        </div>
    )
}

export default Album
