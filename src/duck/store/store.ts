
import { 
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware 
} from 'redux';

import { connectRouter, routerMiddleware } from 'connected-react-router'

// import { UsersReducer } from '../users/reducers';
import { WishlistReducer } from '../wishlist/reducers';

export default function createStore(history: any) {
    
    // returns store
    return reduxCreateStore(

        // reducer をまとめる // returns complete state tree
        combineReducers({
            router: connectRouter(history),
            wishlist: WishlistReducer,
            // users: UsersReducer,
        }),

        // enhancer
        applyMiddleware(
            routerMiddleware(history)
        )
    );
}