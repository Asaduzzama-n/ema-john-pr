import logo from './logo.svg';
import './App.css';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main'
import Shop from './Components/Shop/Shop'
import Order from './Components/Order/Order'
import Inventory from './Components/Inventory/Inventory'
import Login from './Components/Login/Login'
import { productsAndCartLoader } from './Loader/ProductsAndCartLoader';
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader:productsAndCartLoader,
          element:<Shop></Shop>
        },
        {
          path:'order',
          loader:productsAndCartLoader,
          element:<Order></Order>
        },
        {
          path:'inventory',
          element:<Inventory></Inventory>
        },
        {
          path:'login',
          element:<Login></Login>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
