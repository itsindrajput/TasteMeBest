import Logo from "../public/cover.png";
import { useState } from "react";

const loggedInUser=()=>{
    return false;
}

const Title=()=>(
    < a href='/'>
    <img className="logo" src={Logo} alt="Taste Me Best" />
    </a>
);

const Header=()=>{
    const [isLoggedIn, setIsLoggedIn]=useState(false);
    // Earlier Header was HeaderComponent
    // return is optional here, but it's good practice to have one
    return (
        <div id="heading">
        <Title />
        <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Cart</li>
        </ul>
        </div>
        {isLoggedIn ? <button onClick={()=>setIsLoggedIn(false)}>LogOut</button> : 
        <button onClick={()=>setIsLoggedIn(true)}>LogIn</button>}
        </div>
    );
};

export default Header;