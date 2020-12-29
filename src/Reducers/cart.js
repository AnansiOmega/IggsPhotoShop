const initialState = []

const photoReducer = (state=initialState, action) => {
    switch(action.type){
        case 'ADD_PHOTO':
            return [...state, action.payload]
        case 'LOGOUT_USER':
        case 'CLEAR_CART':
            return []
        default:
            return state
    }
}

export default photoReducer