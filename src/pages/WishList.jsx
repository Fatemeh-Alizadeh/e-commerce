import React from 'react';
import { useGlobalContext } from '../context';

const WishList = () => {
    const { wishList } = useGlobalContext();

    if (wishList.length === 0) {
        return (
            <div className="empty">
                <p>your wishlist is empty!</p>
            </div>
        )
    }
    return (
        <div>
            <p>it is not epty</p>
        </div>
    )
}

export default WishList