import React, { useEffect, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { PhotoCard } from '../components/PhotoCard'
import { Lightbox } from "react-modal-image";

export const Home = () => {
const [ open, setOpen ] = useState(false)
const [loader, setLoader] = useState(false)
const photos = useSelector(state => state.photos, shallowEqual)
const photo = useSelector(state => state.photo)
useEffect(()=> {
    photos.length < 1 ? setLoader(true) : setLoader(false)
}, [photos])

console.log(photos.length)
const renderPhotos = () => {
    return photos.map(photo => <PhotoCard setOpen={setOpen} photo={photo} key={photo.id}/>)
}

const { title, image } = photo
let url = `https://desolate-plateau-74310.herokuapp.com${image}`

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
            {loader ?  <><h1 style={{color: 'white'}}>Loading Images, this might take a while</h1><p style={{color: 'white'}}>my apologies, I'm using free services</p></> : <div className="card-container">{renderPhotos()}</div>}
        </>
    )

}