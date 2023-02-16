import React from 'react';
import './OrderReview.css'
const OrderReview = ({order,handleRemove}) => {
    return (
        <div className='review-item'>
        <div>
            <img src={order.img} width='91px' alt="" />
        </div>
        <div className="review-details-container">
            <div className="review-details">
                <p>{order.name}</p>
                <p><small>Price: {order.price}</small></p>
                <p><small>Shipping: {order.shipping}</small></p>
                <p><small>Quantity: {order.quantity}</small></p>
            </div>
            <div className="delete-option">
                <button onClick={()=>handleRemove(order.id)}>Delete</button>
            </div>
        </div>
    </div>
    );
};

export default OrderReview;