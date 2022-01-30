import { createSelector } from 'reselect';

const wishlistSelector = (state: any) => state.wishlist;

export const getWishlistItems = createSelector(
    [wishlistSelector],
    state => state.items
)