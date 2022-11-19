import { addAllImagesSuccess } from "./actions"


export const addAllImages = ({ gallery }) => (dispatch, getState) => {
    const { galleryItems } = getState();
    if (galleryItems.length === 0) {
        const sortResult = gallery.sort((a, b) => {
            if (a.id > b.id) {
                return -1;
            }
            if (a.id < b.id) {
                return 1;
            }
            return 0;
        })
        dispatch(addAllImagesSuccess(sortResult));
    }
}

