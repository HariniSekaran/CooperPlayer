import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
const home = require("../images/homeIcon.png")


function Header() {

    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("accessToken");
        navigate("/");
    }

    return (
        <nav className='header' >
            <NavLink to="/">
                <img src={home} width={"30px"} alt='home' style={{margin:"15px"}}/>
            </NavLink>
            
            {
            ( ! localStorage.getItem("accessToken") ? 
                (
                    <>
                        <NavLink className="navlink" to="/login">
                            Login
                        </NavLink>
                        <NavLink className="navlink" to="/register">
                            Register
                        </NavLink>
                    </>
                ) : (
                    <NavLink className="navlink" to="/" onClick={logout}>
                        Logout
                    </NavLink>
                )
            )
            }
            <div className='title'>
                COOPER PLAYER
            </div>
        </nav>
    )
}

export default Header
