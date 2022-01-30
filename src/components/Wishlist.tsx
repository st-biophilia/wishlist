import React from 'react';

const Wishlist = () => {
    const wishlist = ['旅行に行く', '本を買う', '飯を食う'];
    return (
        <React.Fragment>
        <ul>
            {wishlist.map((item, index) => {
                return (
                    <div key = {item}>
                        <li>{item}</li>
                    </div>
                );
            })}
        </ul>
        </React.Fragment>
    );
}

export default Wishlist;