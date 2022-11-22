const urlPathPrefix = process.env.NODE_ENV === 'production'
    ? '/kmkstroy-nextjs-app-gh-pages'
    : '';

const initialState = {
    galleryItems: [],
    idImage: null,
    hamburgerOpen: false,
    prefix: urlPathPrefix,
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