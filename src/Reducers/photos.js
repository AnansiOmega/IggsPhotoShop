const initialState = []

const photosReducer = (state=initialState, action) => {
    switch(action.type){
        case 'FETCH_PHOTOS_SUCCESS':
            return action.payload
        default:
            return state
    }
}

export default photosReducer