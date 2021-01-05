const initialState = []

const cartReducer = (state=initialState, action) => {
    switch(action.type){
        case 'ADD_PHOTO':
            return [...state, action.payload]
        case 'REMOVE_FROM_CART':
            let cart = state
            cart.splice(action.payload, 1)
            return cart
        case 'LOGOUT_USER':
        case 'CLEAR_CART':
            return []
        default:
            return state
    }
}

export default cartReducer