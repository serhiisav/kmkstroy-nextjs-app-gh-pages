const initialState = {
    galleryItems: [],
    idImage: null,
    hamburgerOpen: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ALL_IMAGES': {
            return { ...state, galleryItems: action.payload.images }
        }
        case 'SET_CURRENT_ID_IMAGE': {
            return { ...state, idImage: action.payload.id }
        }
        case 'SET_HAMBURGER_OPEN': {
            return { ...state, hamburgerOpen: action.payload.value }
        }
        default: {
            return state;
        }
    }
}

export default reducer;