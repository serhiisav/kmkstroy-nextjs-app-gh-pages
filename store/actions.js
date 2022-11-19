import {
    ADD_ALL_IMAGES,
    SET_CURRENT_ID_IMAGE,
    SET_HAMBURGER_OPEN
} from './types'

export const addAllImagesSuccess = (images) => {
    return {
        type: ADD_ALL_IMAGES,
        payload: { images }
    }
}

export const setIdImage = (id) => {
    return {
        type: SET_CURRENT_ID_IMAGE,
        payload: { id }
    }
}

export const setHamburgerOpen = (value) => {
    return {
        type: SET_HAMBURGER_OPEN,
        payload: { value }
    }
}