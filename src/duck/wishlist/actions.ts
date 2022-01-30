
export const enum wishlistActions {
    ADD_WISH = 'ADD_WISH',
    DELETE_WISH = 'DELETE_WISH'
}

interface addWishActionInterface {
    type: wishlistActions.ADD_WISH,
    payload: string
}
interface deleteWishActionInterface {
    type: wishlistActions.DELETE_WISH,
    payload: string
}

export type wishlistActionType = 
    addWishActionInterface |
    deleteWishActionInterface;

export const addWishAction = (inputText: string) => {
    return {
        type: wishlistActions.ADD_WISH,
        payload: inputText
    }
}
export const deleteWishAction = () => {
    return {
        type: wishlistActions.DELETE_WISH,
        payload: ''
    }
}