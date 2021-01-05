import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { PhotoCard } from '../components/PhotoCard'
import { Lightbox } from "react-modal-image";

export const Home = () => {
const [ open, setOpen ] = useState(false)
const photos = useSelector(state => state.photos)
const photo = useSelector(state => state.photo)


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