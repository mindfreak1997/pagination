import React, { useEffect ,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactPaginate from 'react-paginate'
import { asyncPhotos } from '../action/showAlbumAction'
import Photos from './photos'

const ShowAlbums = (props) => {
    const dispatch = useDispatch()
    const [page,setPage]=useState()

    //to get the album id
    const id =  props.match.params.id
    
    useEffect(() => {
        dispatch(asyncPhotos(id,page))
    },[page])

    const handlePageClick=(data)=>{
        setPage(data.selected+1)
        
    }
    return (
        <div>
            <Photos id={id}/>
            <ReactPaginate
            previousLabel={'Previous'}
            nextLabel={'Next'}
            pageCount={6}
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
    )
}

export default ShowAlbums
