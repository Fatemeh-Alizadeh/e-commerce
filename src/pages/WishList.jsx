import React from 'react';
import { useGlobalContext } from '../context';
import WishListItem from '../components/WishListItem';

const WishList = () => {
    const { wishList, handleEmptyWishList } = useGlobalContext();

    if (wishList.length === 0) {
        return (
            <div className="empty">
                <p>your wishlist is empty!</p>
            </div>
        )
    }
    return (
        <div className="wishlist">
            <h1 className='wishlist-title'>wishlist</h1>
            <div className="wishlist-wrapper">
                {wishList.map((item) => {
                    return <WishListItem key={item.product.id} item={ item}/>
                })}
               
            </div>
            <hr />
            <button type='button' className="empty-wishlist" onClick={handleEmptyWishList}> empty wishlist</button>
        </div>
        
    )
}

export default WishList