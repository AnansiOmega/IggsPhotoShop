export const fetchPhotosSuccess = (payload) => {
    return {
        type: 'FETCH_PHOTOS_SUCCESS',
        payload
    }
}

export const showPhoto = (payload) => {
    return {
        type: 'SHOW_PHOTO',
        payload
    }
}

export const addToCart = (payload) => {
    return {
        type: 'ADD_PHOTO',
        payload
    }
}

export const clearCart = () => {
    return {
        type: 'CLEAR_CART'
    }
}

export const removeFromCart = (payload) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload
    }
}