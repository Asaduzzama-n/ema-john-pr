import { getStoredCart2 } from "../utilities/fakedb2";


export const productsAndCartLoader = async () =>{

    //getting products data

    const productsData = await fetch('products.json');
    const products = await productsData.json();

    //getting cart data
    const savedCart = getStoredCart2();
    const initialCart = [];

    for(const id in savedCart){
        const addedProduct = products.find(product => product.id === id);
        if(addedProduct){
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct);
        }
    }

    return {products:products,initialCart:initialCart};
}