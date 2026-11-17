import { LOGO_IMG } from "../utils/constant";
import {useState} from "react";
import { Link } from "react-router-dom";

let Header = () => {

    let [isLoggedIn,setIsLoggedIn] = useState("Login");
    return (
        <div className = "flex justify-between bg-amber-400 shadow-pink-800">
            <div className="w-20 p-2">
                <img src={LOGO_IMG} alt="React Logo" />
            </div>
            <div className="flex items-center" >
                <ul className="flex p-4 m-4 *:gap-4 space-x-4 text-grey-800 font-bold">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to = "/about">About</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <li>
                        <Link to='/groceries'>Groceries</Link>
                    </li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={
                        ()=>{
                            isLoggedIn === "Login" ? setIsLoggedIn("Logout") : setIsLoggedIn("Login")
                        }
                    }>{isLoggedIn}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;