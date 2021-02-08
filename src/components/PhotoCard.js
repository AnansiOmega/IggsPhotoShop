import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'



import { showPhoto, addToCart } from '../Actions/photos'

export const PhotoCard = ({photo, setOpen}) => {
    const { id, category, image, price, title, likes, color } = photo
    const [ showText, setShowText ] = useState(false)
    const user = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const [ liked, setLiked ] = useState(0)
    useEffect(() => {
        if(liked === 0) return 
        let like = likes + liked % 2
        let reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({like})
        }
        fetch(`https://desolate-plateau-74310.herokuapp.com/likes/${id}`, reqObj)
    },[liked])

    const handleShowPic = () => {
        dispatch(showPhoto(photo))
        setOpen(true)
    }
    
    const url = `https://desolate-plateau-74310.herokuapp.com${image}`
    const link = `https://desolate-plateau-74310.herokuapp.com/image_file/${id}`
    const shadow = { boxShadow: '-3px -3px 22px #fff' }
    const mousedShadow = { boxShadow: `-6px -6px 50px ${color}`}

    return(
        <div className='image-card'>
            <div className='frame' style={showText ? mousedShadow : shadow}>
                <div onClick={handleShowPic} onMouseOver={() => setShowText(true)} onMouseOut={() => setShowText(false)}>
                    {showText ? <h3>{title}</h3> : null }
                    {showText ? <h3>{category}</h3> : null}
                    <img src={url} alt={category}/>
                </div>
            </div>
            <div className='innards'>
                <div>
                    <span>Price: ${price}.00</span>
                </div>
                <button className='ui button circular'><a style={{color: 'black'}} href={link} target="_blank" rel="noreferrer noopener"><i className="download icon"></i></a></button>
                {user.id ? <button onClick={() => setLiked(liked + 1)} className="ui button circular black"><i className="heart icon"></i>{likes + liked % 2 }</button> : null}
                <button className='ui button circular' onClick={() => dispatch(addToCart(photo))}><i style={{color: 'black'}} className="cart plus icon"></i></button>
            </div>
        </div>
    )
}