import React from 'react';

import { useSelector } from 'react-redux';
import { getWishlistItems } from './duck/wishlist/selectors';

import AddWishlist from './components/AddWishlist';


const App = () => {
  const selector = useSelector(state => state); // store の state 全体
  console.log(selector)
  const wishlist  = getWishlistItems(selector);
  
  return (
    <React.Fragment>
      <AddWishlist />
      <ul>
        {wishlist.map((wish: string, index: number) => {
          return (
            <div key = {wish}>
              <li>{wish}</li>
            </div>
          );
        })}
      </ul>
    </React.Fragment>
  );
}

export default App;
