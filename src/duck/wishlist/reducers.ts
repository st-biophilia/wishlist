import * as Actions from './actions';
import initialState from '../store/initial';

export const WishlistReducer = (
    state = initialState.wishlist, 
    action: Actions.wishlistActionType
) => {
    switch(action.type) {

        // 項目の追加
        case Actions.wishlistActions.ADD_WISH:
            return {
                ...state,
                items: [...state.items, action.payload]
            }

        // 項目の消去（未実装）
        case Actions.wishlistActions.DELETE_WISH:
            return state

        // 初期、その他
        default:
            return state
    }
}