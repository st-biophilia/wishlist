import React from 'react';

import { useDispatch } from 'react-redux';
import { addWishAction } from '../duck/wishlist/actions';

const AddWishlist = () => {

    let input: any;

    const dispatch = useDispatch();


    const handleClickAdd = (event: React.FormEvent) => {
        event.preventDefault();
        const text: string = input.value.trim();
        input.vlaue = '';
        if (!text) {
            return;
        }
        // console.log(text);

        // action を dispatch
        dispatch(addWishAction(text));
    }
    
    return (
        <React.Fragment>
            <form onSubmit = {handleClickAdd}>
                <input ref={(element) => input = element} />
                <button type="submit">
                    +
                </button>
            </form>
        </React.Fragment>
    )
}

export default AddWishlist;