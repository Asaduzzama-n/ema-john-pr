import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { removeFromDb2,deleteDb } from '../../utilities/fakedb2';
import Cart from '../Cart/Cart';
import OrderReview from '../OrderReview/OrderReview'
const Order = () => {
    const { initialCart } = useLoaderData();
    const [cart, setCart] = useState(initialCart);

    const handleRemove = (id) =>{
        const rest = cart.filter(product => product.id !== id);
        setCart(rest);
        removeFromDb2(id);
    }
    const clearCart = () =>{
        setCart([]);
        deleteDb();
    }
    return (
        <div className="shop-container">
            <div className="orders-container">
                {
                    cart.map(order => <OrderReview order={order} key={order.id} handleRemove={handleRemove}></OrderReview>)
                }
                {
                    cart.length === 0 && <h2>No Items for Review. Please <Link to={'/'}>Go to shop</Link></h2>
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} clearCart={clearCart}></Cart>
            </div>
        </div>
    );
};

export default Order;