import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { currentUser } from '../Actions/auth'
import { fetchPhotosSuccess } from '../Actions/photos'
import PhotoCard from '../components/PhotoCard'
import { Lightbox } from "react-modal-image";
import { ColorExtractor } from 'react-color-extractor'

const Home = ({fetchPhotosSuccess, currentUser, photos, photo}) => {
const [ open, setOpen ] = useState(false)

useEffect(() => {
    const token = localStorage.getItem('myToken')
    const reqObj = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
    fetch('http://localhost:3000/current_user', reqObj)
    .then(resp => resp.json())
    .then(user => currentUser(user))
},[])

useEffect(() => {
  fetch('http://localhost:3000/photos')
  .then(resp => resp.json())
  .then(photos => fetchPhotosSuccess(photos))
},[])

const renderPhotos = () => {
    return photos.map(photo => <PhotoCard setOpen={setOpen} photo={photo} key={photo.id}/>)
}

const { title, image } = photo
let url = `http://localhost:3000${image}`

    return(
        <>
            { open ? 
             <Lightbox
             large={url}
             alt={title}
             onClose={() => setOpen(false)}
             hideDownload={true}
            /> 
            :
            null
            }
            <div className="card-container">{renderPhotos()}</div>
        </>
    )

}

const mapStateToProps = state => {
    return {
        photos: state.photos,
        photo: state.photo
    }
}

const mapDispatchToProps = {
    fetchPhotosSuccess,
    currentUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)


    
    
