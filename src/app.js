import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import About from "./components/About";
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import ErrorHandler from './components/Errorhandler';
// import Grocery from './components/Groceries';
import {lazy, Suspense} from "react";
import {createBrowserRouter , RouterProvider, Outlet } from 'react-router-dom';
import "../index.css";

let App = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
}

const Grocery = lazy(() => import("./components/Groceries"));
let router = createBrowserRouter([
    {
        path : '/',
        element :<App />,
        children : [
            {
                path : '/',
                element : <Body />
            },
            {
                path : '/about',
                element:<About />
            },
            {
                path:"/contact",
                element : <Contact />
            },
            {
                path:"/resMenu/:id",
                element : <RestaurantMenu />

            },
            {
                path:"/groceries",
                element : <Grocery />
            }
        ],
        errorElement : <ErrorHandler />
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router = {router}/>);