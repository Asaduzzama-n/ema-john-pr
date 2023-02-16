import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Product from '../Product/Product'
import Cart from '../Cart/Cart'
import './Shop.css'
import { addToDb2, deleteDb, deleteShoppingCart2, getStoredCart2 } from '../../utilities/fakedb2';


const Shop = () => {
    const {products} = useLoaderData();

    const [cart, setCart] = useState([]);

    const clearCart = () => {
        setCart([]);
        deleteDb();
    }

    useEffect(()=>{
        const storedCart = getStoredCart2();

        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product =>product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    },[products])

    const addToCart = (selectedProduct) => {


        let newCart = [];
        const exist = cart.find(product => product.id === selectedProduct.id);
        if (!exist) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];

        } else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist];
        }


        setCart(newCart);
        addToDb2(selectedProduct.id);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product key={product.id} product={product} addToCart={addToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} clearCart={clearCart}><Link to={'/order'}> <button>Review Order</button> </Link></Cart>
            </div>
        </div>
    );
};

export default Shop;