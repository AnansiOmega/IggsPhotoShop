const initialState = {}

const photoReducer = (state=initialState, action) => {
    switch(action.type){
        case 'SHOW_PHOTO':
            return action.payload
        default:
            return state
    }
}

export default photoReducer